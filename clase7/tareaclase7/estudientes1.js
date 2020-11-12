let valores= JSON.parse(window.localStorage.getItem("valores"));
if(valores ==null) valores = [];
let tabla= document.querySelector("#tablaEstudiantes");

let btn= document.querySelector("#buttonAdd")
let inputAdd= document.querySelector("#inputAdd1")
let inputAdd2= document.querySelector("#inputAdd2")
let inputAdd3= document.querySelector("#inputAdd3")
let inputAdd4= document.querySelector("#inputAdd4")
function addHeaders()
    {
        let fila= document.createElement("tr");
        let enc1= document.createElement("th");
        enc1.innerHTML="Nombre";
        let enc2= document.createElement("th");
        enc2.innerHTML="Materia";
        let enc3= document.createElement("th");
        enc3.innerHTML="Descripción";
        let enc4= document.createElement("th");
        enc4.innerHTML="Fecha";
        fila.appendChild(enc1);
        fila.appendChild(enc2);
        fila.appendChild(enc3);
        fila.appendChild(enc4);
        tabla.appendChild(fila);
    }

function hacerTablas(){
tabla.innerHTML="";
addHeaders();
for(info of valores)
{
    let fila= document.createElement("tr");
    for(valor of Object.values(info))
    {
        let celdaNueva = document.createElement("td");
        celdaNueva.innerHTML= valor;
        fila.appendChild(celdaNueva)
    }
    tabla.appendChild(fila);
}

}
function addItem()
{
    let tarea = { nombre: inputAdd.value, materia: inputAdd2.value, descripcion: inputAdd3.value, Fecha:inputAdd4.value,}
    valores.push(tarea);
    hacerTablas();
    window.localStorage.setItem("valores", JSON.stringify(valores));
    input.value="";
    input2.value="";
    input3.value="";
    input4.value="";
}
btn.onclick = addItem;
hacerTablas();