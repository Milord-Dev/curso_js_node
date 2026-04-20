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

// //Control de flujo For
// for(i = 0; i <= 10; i++){
//     //console.log(i);
// }
// //Ejemplo 2
// const arreglo = [1,2,3,4,5];
// for (let i = 0; i <= arreglo.length; i++){
//     //console.log(arreglo[i]);
// }

// //Funciones
// function iterr(arg1){
//     for (let i = 0; i < arg1.length; i++){
//         console.log(arg1[i]);
//     }
// }

// const numeros = [1,2,3,4,5];
// const nombres = ['Ricardo', 'Pedro', 'Alberto', 'Juan'];

// iterr(numeros);
// iterr(nombres);

//Otras Funciones
// function suma(a,b){
//     return a+b;
// }

// const argSuma = suma(1,2);
// const argSuma2 = suma(5,8);
// const sumatotal = suma(argSuma,argSuma2);

// console.log('El resultado es: ', sumatotal);

// Callbacks
function sum(a,b){
    return a+b;
}                       // En este caso estas funciones serian los callbacks
function multi(a,b){
    return a*b;
}

//funcion para recibir los callbacks 
function calculadoraBasica(a,b, operacion){
    console.log(operacion(a,b));
}

// Aqui llamamos a los callbacks
// calculadoraBasica(1,2,sum);

//Fat Arrow function
const fatArrowFunction = (a,b) => a+b; //El return es implicito al se de una sola linea
const r = fatArrowFunction(1,3);
// console.log(r);

//Otro modode hacer las fat arrow function
const fatDos = (a,b) => {
    return a+b;
};
const r2 = fatDos(5,6);
// console.log("El resultado es = ",r2);


//Ejemplo de usando fat arrow function combinado con callbacks
const suma = (a,b) => a+b;
const multiplicar = (a,b) => a*b;

function calculo(a,b,operacion2){
    console.log(operacion2(a,b))
}

// calculo(3,5,suma);

//Ejemplo 2 de Arrow Function con callbacks
function hacerOp(a,b,op){
    console.log(op(a,b))
};

// hacerOp(20,20, (a,b) => a+b);

//Ejemplo 3
function ejecutar(callback){
    console.log("Hola");
    callback();
    console.log("eres un humano");
}
ejecutar(()=>{
    console.log("Ricardo");
});