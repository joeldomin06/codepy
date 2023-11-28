var crono;
function detener(){
    clearInterval(crono)
}
function iniciar(){
    pre = document.getElementById('b')
    res = document.getElementById('s')
    cont = document.getElementById('cron')
    pre.setAttribute('style','display:none;')
    res.removeAttribute('style')
    t=0
    crono = setInterval(
        function () {
            cont.innerHTML = Math.trunc(t/60) +'m '+ t%60 +'s';
            t++
        }, 1000);
}
function verificar(){
    var resp = []
    for(var i = 0; i < respuestas.length; i++){
        var n = document.getElementsByName('p'+String(i));
        var div = document.getElementById('p'+String(i));
        var pos = respuestas[i]
        if(n[pos].checked){
            div.setAttribute('style','background-color: green');
            resp.splice(0,0,1);
        } else{
            div.setAttribute('style','background-color: red');
            resp.splice(0,0,0);
        }
    }
    return resp
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