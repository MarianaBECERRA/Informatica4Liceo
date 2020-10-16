//event listeners
boton = document.querySelector
("#boton1");
function cambiacolor()
{
    parraf.style.backgroundColor
    ="red";
}
//al hacer click sobre el boton queremos que se ejecute la función cmabiar color 
//pongo un eventlistener 
boton.onclick = cambiarcolor;
alert("color cambiado");