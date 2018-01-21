var demo = document.getElementById('height');
var clicking = document.getElementById('click');


 clicking.onclick = function () {
	
     if (demo.style.height == "auto"){
          demo.style.height = "450px";
     }else{
          demo.style.height = "auto";
     }

   
 
}