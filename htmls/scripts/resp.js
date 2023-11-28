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
var Consejos1 = Array("recuerda que debes de colocar un valor por fila","en listas puedes acceder al item con los [i],con i el indice","los indices parten de 0","el valor que recibe el [] siempre debe ser entero","en un for o un while tienes que volver a la linea de inicio donde se declara","en la salida el print() manda los string sin comillas","Coloca los valores como vienen escrito en el texto");
function porcentaje(b,l){
    return (b/l)*100
}
var i = 0;
function move() {    
  if (i == 0) {
    i = 1;
    var pors = porcentaje(b,l);
    var elem = document.getElementById("por");
    var cal = document.getElementById('cal');
    if (pors == 0){
        elem.innerHTML = "0%";
        elem.style.color = 'red';
        cal.style.color = 'red';
        cal.innerHTML = 'Desaprobado';
    }
    var width = 1;
    var id = setInterval(frame, 25);
    function frame() {
      if (width >= pors) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.innerHTML = width + "%";
      }
      if(width >= 50){
          elem.style.color = 'green';
          cal.style.color = 'green';
          if(width == 100){
              cal.innerHTML = 'Aprobado'
          }
          else{
              cal.innerHTML = 'Parcialmente aprobado'
          }
      }
      else{
          elem.style.color = 'red';
          cal.style.color = 'red';
          cal.innerHTML = 'Desaprobado';
      }
    }
  }
}
function volver(){
    window.location = p + '.html'
}
function pasarVariables(pagina,nombres) {
  pagina += "?";
  nomVec = nombres.split(",");
  for(var i=0; i<nomVec.length;i++){
      pagina += nomVec[i] + "=" + escape(eval(nomVec[i]))+"&";
  }
  pagina = pagina.substring(0,pagina.length-1);
  x = window.location.href = pagina;
}