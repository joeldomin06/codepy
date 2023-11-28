var usuario1 = ['pablo666','ricardio']
var rol1 = ['2019734689','2019745789']
var contraseña = ['qwerty17','asdfgh19']
var corr = ['pablocrack@gmail.com','ricardio.frances@usm.cl']
function login(){
    var oki = 1;
    if($.inArray($('#inus').val(),usuario1) == -1){
        activar('usuario no registrado','#inus');
        oki = 0;
    } else{
        desactivar('#inus')
    }
    if($('#incon').val() != contraseña[$.inArray($('#inus').val(),usuario1)]){
        activar('contraseña incorrecta','#incon');
        oki = 0;
    } else{
        desactivar('#incon');
    };
    return oki;
}
function activar(titulo,id){
    $(id).attr('style','border: 1px solid red;');
    $(id).attr('title',titulo);
    $(id).attr('data-toggle','tooltip');
    $(id).tooltip();
}
function desactivar(id){
    $(id).removeAttr('style');
    $(id).removeAttr('title');
    $(id).removeAttr('data-toggle');
    $(id).tooltip('dispose');
}
function regs(){
    var ok = 1;
    var usr = $('#rus')
    var con = $('#rcon')
    var correo = $('#rcor')
    var rol = $('#rrol')
    //usuario
    if($.inArray(usr.val(),usuario1) != -1){
        desactivar('#rus');
        activar('usuario ya registrado','#rus');
        ok = 0;
    } else{
        desactivar('#rus');
    };
    if(usr.val() == 'usuario'){
        desactivar('#rus');
        activar('no puedes nombrarte usuario','#rus');
        ok = 0;
    } else{
        desactivar('#rus');
    };
    if(!usr.val()){
        desactivar('#rus');
        activar('campo en blanco','#rus');
        ok = 0;
    }
    //rol
    if($.inArray(rol.val(),rol1) != -1){
        desactivar('#rrol')
        activar('rol ya registrado','#rrol');
        ok = 0;
    } else{
        desactivar('#rrol')
    };
    if(!rol.val()){
        desactivar('#rrol')
        activar('campo en blanco','#rrol');
        ok = 0;  
    }
    //contraseña
    if(con.val() == usr.val()){
        desactivar('#rcon')
        activar('la contraseña no puede ser igual al usuario','#rcon');
        ok = 0;
    } else{
        desactivar('#rcon')
    };
    if(con.val() == 'contraseña'){
        desactivar('#rcon')
        activar('no puedes poner contraseña como contraseña','#rcon');
        ok = 0;
    } else{
        desactivar('#rcon')
    }
    if((con.val()).length < 6){
        desactivar('#rcon')
        activar('contraseña demasiado corta','#rcon');
        ok = 0;
    } else{
        desactivar('#rcon')
    }
    if($.isNumeric(con.val())){
        desactivar('#rcon')
        activar('no puedes tener una contraseña formada por puros numeros','#rcon');
        ok = 0;
    } else{
        desactivar('#rcon')
    }
    if(!con.val()){
        desactivar('#rcon')
        activar('campo en blanco','#rcon');
        ok = 0;
    }
    //correo
    if(!correo.val()){
        desactivar('#rcor')
        activar('campo en blanco','#rcor');
        ok = 0;
    }
    return ok;
}
function verificar(t){
    if(t == 1){
        redireccionar('home.html')
    }
}
function redireccionar(pagina){
    window.location.href = pagina
}