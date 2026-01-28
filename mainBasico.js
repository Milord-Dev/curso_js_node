//Varible
let variable = "Mi primera variable";
console.log(variable)
//Mutabilidad
variable = "Seguimos sin plata, sin chamba";
//console.log(variable)

//objeto
let nombre = "Pedro"
const objetoUsuario = {
    edad: 18,
    nombreUsuario: nombre,
    estado: true,
}

//console.log(objetoUsuario)

//Arreglo
arrVacio = [];
arr = [variable, objetoUsuario];

//Integracion de arreglo vacio
arrVacio.push(10,20);
//console.log(arr,arrVacio)

//Eliminacion de elemento del arreglo
arrVacio.pop(20);
//console.log(arrVacio)

//Integracion del residuo
let numResiduo = 9 % 3;
//console.log(numResiduo)

//Integracion de operadores logicos
let pruebaOr = false || false || false || true;
let pruebaAnd = true || true || true || true;
let pruebaNot = !true;

//console.log(pruebaOr,pruebaAnd,pruebaNot)

//Control de flujo if
if(true){
    //console.log("Esta en true, asique pasa a mostrar el mensaje por pantalla")
}

let nombre2 = "Juan";
let edad = 10;

if(edad > 7 && edad < 18){
    //console.log(nombre2,'Puede montarse a la montaña rusa')
}else{
    //console.log(nombre2,'No puede montarse a la montaña rusa')
}

//Control de flujo while
let cont = 0;
while(cont <= 10){
    //console.log("El numero es: ", cont);
    cont++
}
//console.log("se termino el loop");

let x = false; //era true pero lo puse en false para que no se ejecute
while(x){
    console.log(x);
    x = false;
}

//Control de flujo switch
// let valor = 2;

//     switch(valor){
//         case 1:{
//             console.log("Hola");
//             break;
//         }
//         case 2:{
//             console.log("Como estas?");
//             break;
//         }
//         case 3:{
//             console.log("Valor correcto")
//             break;
//         }
//         default:
//             console.log("No se selecciono ninguno de los valores")
//             break;
//     }

//Control de flujo For
for(i = 0; i <= 10; i++){
    //console.log(i);
}
//Ejemplo 2
const arreglo = [1,2,3,4,5];
for (let i = 0; i <= arreglo.length; i++){
    console.log(arreglo[i]);
}