let compras =  JSON.parse( window.localStorage.getItem("compras"))
 if (compras  == null) compras = []
let lista =document.querySelector("#listamercado")
//for(let i =0;i< compras.length ; i++)
//{
//let elemento = document.createElement("li")
//elemento.innerHTML= compras[i]

//lista.appendChild(elemento);
//}
function hacerlista(){
    lista.innerHTML=""
for(item of compras){
    let elemento =document.createElement("li")
    elemento.innerHTML=item
    lista.appendChild(elemento)
}
    }
let input = document.querySelector("#inputAdd")
let btn = document.querySelector("#btnAdd")
function addItem(){
  let item = input.value
  compras.push(item)
  hacerlista()
  window.localStorage.setItem("compras",JSON.stringify(compras))
  input.value=""
}
    btn.onclick = addItem
    hacerlista()
   // let notas = [6,7,7,5,8]
  // console.log( JSON.stringify(notas))
//window.localStorage.setItem("curso", "cuarta")
//window.localStorage.setItem( "notas",JSON.stringify(notas))
