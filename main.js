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

//Control de flujo
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

