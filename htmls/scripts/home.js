var txt = "¡Bienvenido a CodepyMaker!";
var i = 0;
var speed = 100;
function typeWriter() {
    if (i < txt.length) {
      document.getElementById("tit").innerHTML += txt.charAt(i);
      if((i%2) == 0){
        document.getElementById('tit2').innerHTML = ""
      }
      else {
        document.getElementById('tit2').innerHTML = "|"
      }
      i++;
      setTimeout(typeWriter, speed);
    } else{
        document.getElementById('tit2').innerHTML = ""
    }
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