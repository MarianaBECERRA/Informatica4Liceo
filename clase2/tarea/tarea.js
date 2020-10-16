
let x;
do{
    x = parseFloat(prompt("Ingrese su edad"));
} while(Number.isNaN(x)||x <=0)
do{
    var nombre = prompt("Ingrese su nombre:");
}while(nombre.length < 3)  //nombre lenght cuenta los caracteres,en este caso màs de dos 

if(x<12){
    console.log(`Hola ${nombre}`);
}else{
    if(x < 50){
        console.log(`Buenos días ${nombre}`);
    }else console.log(`Buenos días respetado ${nombre}`);

}
