//Varible
let variable = "Mi primera variable";
console.log(variable)
//Mutabilidad
variable = "Seguimos sin plata, sin chamba";
console.log(variable)

//objeto
let nombre = "Pedro"
const objetoUsuario = {
    edad: 18,
    nombreUsuario: nombre,
    estado: true,
}

console.log(objetoUsuario)

//Arreglo
arrVacio = [];
arr = [variable, objetoUsuario];

//Integracion de arreglo vacio
arrVacio.push(10,20);
console.log(arr,arrVacio)

//Eliminacion de elemento del arreglo
arrVacio.pop(20);
console.log(arrVacio)