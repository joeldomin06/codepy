function comprobario(){
    var res = []
    var codes = $(".code")
    for(var i=0;i<codes.length;i++){
        var id = codes[i].attr('id')
        alert(id)
    }
}