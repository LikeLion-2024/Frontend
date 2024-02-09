function LoadHTML(){
  var allElements = document.getElementsByTagName('*');
  for(var i=0; i<allElements.length; i++){
      var el=allElements[i];
    var path = el.getAttribute("nav-include-path");
    if(path){
      var xhttp= new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
          el.innerHTML = this.responseText;
          el.removeAttribute("nav-include-path");
          LoadHTML();
        }
      }
      xhttp.open("GET",path,true);
      xhttp.send();
      return;
    }
  }
}
