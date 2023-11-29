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