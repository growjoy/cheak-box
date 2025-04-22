document.onload = function(){
 let cb = document.getElementById("cb");
 cb.checked = true;
}

let onCbClicked = function (checked){
  console.log('on click checked = ', checked);
  
}


let onCbCheckChanged = function(checked) {
   console.log('check change = ', checked);
 }
