var consejos_completar = Array("Recuerda que hay abreviaciones en los input del programa","Recuerda lo que pide el enunciado para cada horario","Recuerda que al multiplicar una variable por un valor esta tiene que estar definida antes")
var respuestas_completar = Array("diurno","b","vespertino","nocturno","a")
function revisar(){
    var res = []
    var respondido = document.getElementsByName("pre");
    for (i=0; i < respondido.length ;i++){
        if(respondido[i].value.toLowerCase() != respuestas_completar[i]){
            respondido[i].style.color = "#FF3333";
            res.splice(0,0,0)
        }
        else {
            respondido[i].style.color = "#008000";
            res.splice(0,0,1)
        }
    }
    return res
}
function consejos(min,max,variable) {
    return variable[Math.floor(Math.random()*(max-min))]
}
function pasarVariables(pagina,nombres) {
    pagina += "?";
    nomVec = nombres.split(",");
    for(var i=0; i<nomVec.length;i++){
        pagina += nomVec[i] + "=" + escape(eval(nomVec[i]))+"&";
    }
    pagina = pagina.substring(0,pagina.length-1);
    x = redireccion(pagina,1000)
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
function volver(){
    window.location = p + '.html'
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
cadVariables = location.search.substring(1, location.search.length);
arrVariables = cadVariables.split("&");
for (i = 0; i < arrVariables.length; i++) {
    arrVariableActual = arrVariables[i].split("=")
    if(typeof arrVariableActual[1] == 'string'){
        eval('var ' + String(arrVariableActual[0]) + " = " + 'arrVariableActual[1]')
    }
    else {
        eval('var ' + String(arrVariableActual[0]) + " = " + String(arrVariableActual[1]))
    }
}