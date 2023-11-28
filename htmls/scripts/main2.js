function handleDragStart(e) {
    e.target.style.opacity = '0.4';  // this / e.target is the source node.
  }
  
  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault(); // Necessary. Allows us to drop.
    }
  
    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
  
    return false;
  }
  
  function handleDragEnter(e) {
    // this / e.target is the current hover target.
    e.target.classList.add('over');
  }
  
  function handleDragLeave(e) {
    e.target.classList.remove('over');  // this / e.target is previous target element.
  }
  
  var dragers = document.querySelectorAll('.code,.rv');
  [].forEach.call(dragers, function(col) {
    dragers.addEventListener('dragstart', handleDragStart, false);
    dragers.addEventListener('dragenter', handleDragEnter, false);
    dragers.addEventListener('dragover', handleDragOver, false);
    dragers.addEventListener('dragleave', handleDragLeave, false);
  });