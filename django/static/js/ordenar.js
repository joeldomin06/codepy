function allowDrop(ev) {
    ev.preventDefault();
}
function Drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function Drop(ev) {
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
    e.target.style.opacity = '0.4';
}
function DragEnd(e) {
    e.target.style.opacity = '100';
}
function DragEnter(e) {
    if (e.getAttribute('class')!= 'col drop'){
        e.setAttribute('style','border: 2px dashed #000;');
    }
}
function DragLeave(e) {
    if (e.getAttribute('class')!= 'col drop'){
        e.setAttribute('style','border: 1px solid #aaaaaa;'); 
    }
}
function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault(); // Necessary. Allows us to drop.
    }
  
    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
  
    return false;
};
function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }
    return false;
  }
var codes = document.querySelectorAll( '.code' );
[].forEach.call(codes,function(code){
    code.setAttribute( 'draggable', true );
    code.addEventListener('dragstart',function(){
        Drag(event);
        DragStart(event)
    }, false);
    code.addEventListener('dragend',function(){
        DragEnd(event)
    },false)
});
var drops = document.querySelectorAll( '.drop' );
[].forEach.call(drops,function(drp){
    drp.addEventListener('dragover',function(){
        testdiv(event,drp.innerHTML)
    },false);
    drp.addEventListener('dragenter',function(){
        DragEnter(drp)
    },false);
    drp.addEventListener('dragleave',function(){
        DragLeave(drp)
    },false);
    drp.addEventListener('drop',function(){
        Drop(event);
        DragLeave(drp)
    },false);
});
document.getElementById('myform').addEventListener('submit',function(evt){
    evt.preventDefault();
    [].forEach.call(codes,function(code){
        id = code.getAttribute('id');
        inp = document.getElementsByName(id)[0];
        inp.value = code.parentNode.getAttribute('id');
    },false)
    this.submit();
})