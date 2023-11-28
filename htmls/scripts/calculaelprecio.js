var Consejos1 = Array("Puedes usar una regla de 3 para calcular el precio final, usar el peso en kg y dividirlo en el precio por kg", "Para devolver datos que se muestren al usuarios debes usar la funcion print()", "Para resolver este problema necesitas usar la función input que sirve para pedir datos al usuario.");
var Respuestas = Array("Tu respuesta es correcta", "Tu respuesta es incorrecta")
function consejos(min, max) {
    return Consejos1[Math.floor(Math.random() * (max - min))]
}
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
function testdiv(ev, x) {
    if (x.length < 1) {
        allowDrop(ev);
        return true;
    }
    else {
        return false;
    }
}
function DragStart(e) {
    e.target.style.opacity = '0.4';  // this / e.target is the source node.
}
function DragEnd(e) {
    e.target.style.opacity = '100';
}
function DragEnter(e) {
    e.setAttribute('style','border: 2px dashed #000;');
}
function DragLeave(e) {
    e.setAttribute('style','border: 1px solid #aaaaaa;');
}
var x = comprobacion()
function comprobacion() {
    var res = [];
    var codes = document.getElementsByClassName("code")
    for(var i=0;i<codes.length;i++) {
        codes[i].setAttribute('draggable','false')
        if (codes[i].getAttribute("name") != codes[i].parentNode.getAttribute("id")) {
            codes[i].style.color = "#FF3333";
            res.splice(0, 0, 0)
        }
        else {
            codes[i].style.color = "#008000";
            res.splice(0, 0, 1)
        }
    }
    return res
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
function url(){
    var r = window.location.pathname.split('/')
    var s = r[r.length-1].split('.')
    return s[0]
}