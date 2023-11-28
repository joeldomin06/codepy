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
var posibilidad = {'ord':[['calcula_el_precio','proximamente'],['proximamente'],['proximamente']],'rut':[['tablas_de_multiplicar','proximamente'],['proximamente'],['proximamente']],'com':[['boletos_del_circo','proximamente'],['proximamente'],['proximamente']],'quiz':[['quiz_condicionales','proximamente']]}
function rec(){
    var lis = posibilidad[ty][d];
    var color = ""
    var contenido = document.getElementById('cont');
    for(var i=0;i<lis.length;i++){
        var conta = document.createElement('a');
        var sal = document.createElement('br');
        var link = document.createElement('h1');
        var peg = lis[i].replace(/_/g,' ');
        conta.setAttribute('id',String(i))
        if(lis[i] != 'proximamente'){
            conta.setAttribute('href',lis[i]+'.html');
        }else{
            conta.setAttribute('href',' ');
        }
        var txt = document.createTextNode(peg);
        link.appendChild(txt);
        if((i%2) !=0){
            color = 'dark'
        }else{
            color = 'light'
        }
        conta.setAttribute('class','btn btn-block btn-'+color);
        conta.setAttribute('style','border: 1px solid black;')
        link.setAttribute('class','display-3')
        link.setAttribute('style','text-decoration:none;');
        conta.appendChild(link);
        contenido.appendChild(sal)
        contenido.appendChild(conta);
    }
}