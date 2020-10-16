
btn1 = document.querySelector("#boton1");
btn2 = document.querySelector("#boton2");
btn3 = document.querySelector("#boton3");

parraf = document.querySelector("#parrafo");
function cambiarcolor(){
    parraf.style.backgroundColor= "red";
}
btn1.onclick = cambiarcolor;

function ocultapa(){
    parraf.style.display = "none";
}
btn2.onclick = ocultapa;

function mostrarpa(){
    parraf.style.display = "block";
}
btn3.onclick = mostrarpa;

document.getElementById("miImagen").onmouseover = function() {mouseOver()};
document.getElementById("miImagen").onmouseout = function() {mouseOut()};
function mouseOver(){
    document.getElementById("miImagen").style.padding ="20px";
}

function mouseOut() {
    document.getElementById("imagen").style.padding = "0px";
    }