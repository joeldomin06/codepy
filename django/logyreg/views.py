from django.shortcuts import render, redirect
from logyreg.models import Niveles,Usuarios,Problemas_Usuario
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage
from django.contrib.auth.models import User
from django.core.files import File
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from logyreg.forms import UsuariosForm,UsuariosExtendForm,LogForm,NivelForm

# Create your views here.

def page(request):
    return render(request,'logyreg/logyreg.html')

def logoutt(request):
    logout(request)
    return redirect('reg')

def register(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        if request.method == 'POST':
            form = UsuariosForm(request.POST)
            extendform = UsuariosExtendForm(request.POST)
            if form.is_valid() and extendform.is_valid():
                user = form.save()
                extend = extendform.save(commit=False)
                extend.user = user
                extend.save()
                usr = Usuarios.objects.get(id_rol=extend.id_rol)
                niv = Niveles.objects.create(id_rol=usr,nivel=1)
                niv.save()
                pro = Problemas_Usuario.objects.create(id_rol=usr)
                pro.problema.save(extend.id_rol+'.txt',ContentFile(''),save=False)
                pro.save()
                username = form.cleaned_data.get('username')
                password = form.cleaned_data.get('password1')
                user = authenticate(username=username, password=password)
                login(request,user)
                return redirect('home')
        else:
            form = UsuariosForm()
            extendform = UsuariosExtendForm()
    context = {'form':form,'extendform':extendform}
    return render(request,'logyreg/reg.html',context)
def log(request):
    if request.method == 'POST':
        forrm = LogForm(request.POST)
        if forrm.is_valid:
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
    else:
        forrm = LogForm()
    context = {'forrm':forrm}
    return render(request,'logyreg/login.html',context)

def codepy(request):
    return render(request, 'logyreg/codepymaker.html')