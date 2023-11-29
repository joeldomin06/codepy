var crono;
function detener(){
    clearInterval(crono)
}
var crono;
function iniciar(){
    t = 180
    pre = document.getElementById('b')
    res = document.getElementById('s')
    cont = document.getElementById('cron')
    bar = document.getElementById('bar')
    pre.setAttribute('style','display:none;')
    res.removeAttribute('style')
    crono = setInterval(function(){
        if(t == 0){
            cont.style.color = 'red';
            detener();
            ver = verificar();
            p = url();
            b = Buenas(ver);
            l = respuestas.length;
            pasarVariables('respuesta.html','b,l,p'); 
        }
        prom = ((180-t)/180)*100
        cont_m = Math.trunc(t/60)
        cont_s = t%60
        bar.setAttribute('style','width:'+String(prom)+'%')
        cont.innerHTML = String(cont_m)+'m '+String(cont_s)+'s';
        t--
    },1000)
}