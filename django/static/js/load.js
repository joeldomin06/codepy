var crono;
function detener(){
    clearInterval(crono)
}
var crono;
url = window.location.pathname
function iniciar(){
    t = 5
    cont = document.getElementById('cron')
    crono = setInterval(function(){
        if(t == 0){
            cont.style.color = 'red';
            detener();
            window.location.href = $('#btnr').attr('href')
        }
        cont.innerHTML = t;
        t--
    },1000)
}
$('document').ready(function(){
    iniciar()
})