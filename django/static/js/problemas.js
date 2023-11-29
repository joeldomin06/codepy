function pasarVariables(pagina,nombres) {
    pagina += "?";
    nomVec = nombres.split(",");
    for(var i=0; i<nomVec.length;i++){
        pagina += nomVec[i] + "=" + escape(eval(nomVec[i]))+"&";
    }
    pagina = pagina.substring(0,pagina.length-1);
    x = window.location.href = pagina
}
function url(){
    var r = window.location.pathname.split('/')
    var s = r[r.length-1].split('.')
    return s[0]
}
function volver(){
    window.location = p + '.html'
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