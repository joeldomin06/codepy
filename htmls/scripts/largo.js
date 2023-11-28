var Consejos1 = Array("recuerda que debes de colocar un valor por fila","en listas puedes acceder al item con los [i],con i el indice","los indices parten de 0","el valor que recibe el [] siempre debe ser entero","en un for o un while tienes que volver a la linea de inicio donde se declara","en la salida el print() manda los string sin comillas","Coloca los valores como vienen escrito en el texto");
var respuestas_r = Array('[100,"SAO",23,"sus",35]','["hola","adios"]','[100,"SAO",23,"sus",35]','0','100','1','"SAO"','2','23','3','"sus"','4','35','5','["hola","adios"]','0','"hola"','1','"adios"','2')
var textarea_r = 7
var x = list
function consejos(max) {
    return 'Consejo: ' + String(Consejos1[Math.floor(Math.random()*max)])
}
function evaluar(respuestas_r, textarea_r) {
    var resultado = [];
    var txtar = document.getElementById('sal');
    txtar.classList.add('text-white');
    txtar.disabled = true;
    if (txtar.value == textarea_r) {
        txtar.setAttribute('style', 'background-color: green;');
        resultado.splice(0, 0, 1);
    }
    else {
        txtar.setAttribute('style', 'background-color: red;');
        resultado.splice(0, 0, 0);
    }
    for (i = 0; i < respuestas_r.length; i++) {
        var res = document.getElementById('r' + String(i));
        res.classList.add('text-white');
        res.disabled = true;
        if (respuestas_r[i] == res.value) {
            document.getElementsByName('f')[i].setAttribute('style', 'background-color: green;');
            resultado.splice(0, 0, 1);
        }
        else {
            document.getElementsByName('f')[i].setAttribute('style', 'background-color: red;');
            resultado.splice(0, 0, 0);
        }
    }
    return resultado
}
function Buenas(r){
    var contar = 0;
    for(i=0; i<r.length;i++){
        if(r[i] == 1){
            contar+=1;
        }
    }
    return contar;
}
function totales(r){
    return r.length;
}
function pasarVariables(pagina,nombres) {
    pagina += "?";
    nomVec = nombres.split(",");
    for(var i=0; i<nomVec.length;i++){
        pagina += nomVec[i] + "=" + escape(eval(nomVec[i]))+"&";
    }
    pagina = pagina.substring(0,pagina.length-1);
    x = redireccion(pagina,5000)
}
function redireccion(paginas,Tiempo) {
	setTimeout(function(){
        window.location.href = paginas;
    },Tiempo);
}
function url(){
    var r = window.location.pathname.split('/')
    var s = r[r.length-1].split('.')
    return s[0]
}