from django.shortcuts import render,redirect
from navi.models import Lenguajes,Problemas,Respuesta
from logyreg.models import Usuarios, Problemas_Usuario
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from .file_manage import f_insert_update
# Create your views here.
class Contexto:
    tipo = ['Ordenar','Ruteo','Completar','Quiz']

def verf_quiz(request,respuesta_list):
    respuesta_envio = request.POST
    buenas = 0
    lista_clases = []
    for i in range(len(respuesta_list)):
        pregunta = 'p'+str(i)
        if respuesta_envio[pregunta][0] == respuesta_list[i]:
            buenas += 1
            lista_clases.append('bg-success')
        else:
            lista_clases.append('bg-danger')
    return (buenas,lista_clases)

def verf_completar(request,tip,respuesta_list):
    respuesta_envio = request.POST.getlist(tip)
    lista_clases = []
    buenas = 0
    for i in range(len(respuesta_list)):
        if respuesta_envio[i] == respuesta_list[i]:
            buenas += 1
            lista_clases.append('bg-success')
        else:
            lista_clases.append('bg-danger')
    return (buenas,lista_clases,respuesta_envio)

def verf_ruteo(request,respuesta_list,respuesta_sal):
    buenas = 0
    lista_clases = []
    respuesta_envio = request.POST
    if 'txt' in respuesta_envio:
        if respuesta_envio['txt'] == respuesta_sal:
            buenas += 1
            clase_txt = 'bg-success'
        else:
            clase_txt = 'bg-danger'
    else:
        clase_txt = 'bg-danger'
    for casilla in respuesta_list:
        if casilla in respuesta_envio:
            try:
                if eval(respuesta_envio[casilla])  == respuesta_list[casilla]:
                    buenas += 1
                    lista_clases.append('bg-success')
                else:
                    lista_clases.append('bg-danger')
            except:
                lista_clases.append('bg-danger')
        else:
            lista_clases.append('bg-danger')
    return (buenas,lista_clases,clase_txt)

def verf_ordenar(request,respuesta_list):
    respuesta_envio = request.POST
    buenas = 0
    lista_clases = []
    for drag in respuesta_list:
        if drag in respuesta_envio:
            if respuesta_envio[drag] in respuesta_list[drag]:
                buenas += 1
                lista_clases.append('text-success')
            else:
                lista_clases.append('text-danger')
        else:
            lista_clases.append('text-danger')
    return (buenas,lista_clases)

def carga_simple(request,template_name):
    user = request.user
    return render(request, 'navi/'+template_name+'.html',{'user':user})

@login_required(login_url='/login/')
def perfil(request):
    user = request.user
    extend = user.usuarios
    niv = extend.niveles
    return render(request, 'navi/perfil.html',{'user':user,'extend':extend,'niv':niv})

@login_required(login_url='/login/')
def lenguaje(request):
    user = request.user
    lenguajes_raw = Lenguajes.objects.values_list('lenguaje',flat=True)
    lenguajes_list = list(lenguajes_raw)
    imagenes = ['css/imagenes/'+img+'.png' for img in lenguajes_list]
    tuple_list_leng = [
        (lenguajes_list[i],imagenes[i]) for i in range(len(lenguajes_list))
    ]
    return render(request, 'navi/lenguajes.html',{'user':user,'tuple_list_leng':tuple_list_leng})

@login_required(login_url='/login/')
def problemas(request, leng):
    user = request.user
    tipo = Contexto.tipo
    cont = {'user':user,'tipo':tipo,'lenguaje':leng}
    return render(request, 'navi/problemas.html', cont)

@login_required(login_url='/login/')
def respuesta_problemas(request, leng ,tip):
    user = request.user
    id_leng = Lenguajes.objects.values().get(lenguaje=leng)['id']
    problemas = Problemas.objects.values_list('nombre',flat=True).filter(lenguaje_id=id_leng,tipo=tip)
    problemas_list = list(problemas)
    return render(request, 'navi/respuesta_problemas.html',{'user':user,'lista':problemas_list,'tipo':tip,'lenguaje':leng})

@login_required(login_url='/login/')
def cargar(request, leng, tip, nombre):
    user = request.user
    extend = user.usuarios
    problema = Problemas.objects.values().get(nombre=nombre)
    respuesta = Respuesta.objects.values().get(problema_id=problema['id'])
    respuesta_list = eval(respuesta['respuestas'])
    respuesta_sal = respuesta['salidas']
    problema_usuario = Problemas_Usuario.objects.get(id_rol=extend.id_rol).problema
    context = {'user':user,'tip':tip,'lista_clases':[]}
    if tip == 'Ruteo':
        context['rango_row'] = range(problema['filas'])
        context['rango_col'] = range(problema['columnas'])
    if request.method == 'POST':
        if tip == 'Completar':
            tup = verf_completar(request,tip,respuesta_list)
        elif tip == 'Quiz':
            tup = verf_quiz(request,respuesta_list)
        elif tip == 'Ruteo':
            tup = verf_ruteo(request,respuesta_list,respuesta_sal)
            context['clase_txt'] = tup[2]
        elif tip == 'Ordenar':
            tup = verf_ordenar(request,respuesta_list)
        buenas = tup[0]
        lista_clases = tup[1]
        total = len(lista_clases)
        if 'clase_txt' in context:
            total += 1
        load = 'navi/'+nombre+'.html'
        f_insert_update(problema_usuario,leng,nombre,buenas)
        porcentaje = int((buenas/total)*100)
        hex_porc = hex(porcentaje)
        context['porc'] = hex_porc
        context['leng'] = leng
        context['nombre'] = nombre
        context['lista_clases'] = lista_clases
        context['extend'] = load
        return render(request, 'navi/resp_load.html',context)
    return render(request, 'navi/'+nombre+'.html',context)

def respuestas(request, leng, tip, nombre, porc):
    user = request.user
    context = {'user':user,'leng':leng,'tip':tip,'nombre':nombre,'porc':porc}
    return render(request,'navi/respuestas.html',context)
