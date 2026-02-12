# Notas del Curso de JavaScript

## Mutabilidad
La **mutabilidad** ocurre cuando se le reasigna un nuevo valor a una variable o se modifica el estado interno de un objeto.

---

## Objetos en JS
Un objeto es una agrupación de datos que tienen coherencia entre sí.

* **Estructura:**
    ```javascript
    const objeto = {
        propiedad: "valor de la propiedad",
    }
    ```
* **Capacidades:** Los objetos también pueden almacenar funciones.
* **Dato Útil:** Se puede acceder a cualquier propiedad de un objeto utilizando la **notación de punto** (`objeto.propiedad`).

---

## Arreglos (Arrays)
Un arreglo es una colección ordenada de elementos. Los arreglos almacenan datos y los retornan cuando los necesitas.

* **Ejemplo:**
    ```javascript
    const arreglo = [unaVariable, "string", numero, objeto];
    ```
* **Métodos:** Para agregar un elemento a un arreglo (incluso si está vacío), se llama al arreglo seguido del método `.push()`.
    * *Ejemplo:* `arreglo.push(10);`

---

## Operadores Matemáticos
Es fundamental recordar el operador de **Módulo (`%`)**, el cual es muy utilizado para obtener el **residuo** de una división.

---

## Constantes en JS (`const`)
En JavaScript, las constantes no pueden cambiar su valor de asignación original; sin embargo, **sí se pueden modificar sus propiedades** internas, como sucede con los objetos.

* **Ejemplo:**
    ```javascript
    let nombre = "Pedro";

    const objetoUsuario = {
        edad: 18, // Esta es una propiedad y puede ser cambiada.
        nombreUsuario: nombre,
        estado: true,
    }
    ```

---

## Operadores de Comparación
El operador de igualdad en JS se utiliza principalmente de dos maneras:

1.  **Estricto (`===`):** `5 === 5;` (Compara valor y tipo de dato).
2.  **No estricto (`==`):** `5 == "5";` (Compara solo el valor, permitiendo que un número sea igual a un string).

Ambos ejemplos devolverán `true`, pero la diferencia radica en que el doble igual (`==`) es menos riguroso con el tipo de dato.

> **Dato Extra:** Lo mismo sucede con la desigualdad: existen `!==` (estricto) y `!=` (no estricto).

---

## Operadores Lógicos
Existen tres tipos de operadores lógicos esenciales:

### 1. OR (`||`)
Busca el **primer valor verdadero** para regresar `true`.
* **Ejemplo:** `true || false;` // Regresa `true` porque uno de los valores lo es.
* **Ejemplo 2:** `true || false || false || false;` // Regresa `true`.

### 2. AND (`&&`)
Busca el **primer valor falso**. Si queremos que regrese `true`, todos los valores deben ser verdaderos.
* **Ejemplo:** `true && false;` // Regresa `false` porque existe un valor falso.
* **Ejemplo 2:** `true && true && true && true && false;` // Regresa `false`.

### 3. NOT (`!`)
Este operador se encarga de **negar** o invertir el valor booleano.
* **Ejemplo:** `!true;` // Regresa `false`.

> **Dato Extra:** Tambien se puedes hacer comparaciones con stings y cualquier string tanto numero u objeto regresa true menos el 0 Esto solo es valido con el operador or o ||.

---

## Control de Flujo - IF
El `if` es un controlador que evalúa si la condición es `true` o `false`.

* **Ejemplo:**
    ```javascript
    if (true) {
        // console.log("Está en true, así que pasa a mostrar el mensaje por pantalla")
    }
    ```

* **Ejemplo práctico:**
    ```javascript
    let nombre2 = "Juan";
    let edad = 10;

    if (edad > 7 && edad < 18) {
        // console.log(nombre2, 'Puede montarse a la montaña rusa')
    }
    ```

---

## Contro de Flujo - WHILE
El `while` es un ciclo que permite repetir un bloque de código mientras una condición se mantenga como verdadera (`true`).

* **Ejemplo:**
    ```javascript
    let contador = 0;

    while (contador < 5) {
        // console.log("El contador es:", contador);
        contador++; // Es importante aumentar el valor para que el ciclo no sea infinito
    }
    ```
> **Dato Extra:** Tambien puede evaluar una condicion en true y despues dentro del bloque cambiarla a false para que no se vuelva a repetir.

---

## Contro de Flujo - SWITCH
El `Switch` nos permite hacer una instruccion u otra, cuando recibe alguno de los parametros o casos.

* **Ejemplo:**
    ```javascript
    let valor = 2;

    switch(valor){
        case 1:{
            console.log("Hola");
            break;
        }
        case 2:{
            console.log("Como estas?");
            break;
        }
        case 3:{
            console.log("Valor correcto")
            break;
        }
        default:
            console.log("No se selecciono ninguno de los valores")
            break;
    }
    ```

---

### Control de Flujo - FOR
El ciclo `for` se utiliza para repetir un bloque de código un número específico de veces. A diferencia del `while`, suele tener la inicialización, la condición y el incremento en una sola línea.

* **Ejemplo:**
    ```javascript
    for (let i = 0; i < 5; i++) {
        // console.log("El valor de i es:", i);
    }
    ```
* **Nota:** Es muy útil cuando ya sabes de antemano cuántas veces necesitas que se ejecute el ciclo o para recorrer los elementos de un arreglo.

* **Ejemplo para recorrer un arreglo:**
    ```javascript
    const arreglo = [1, 2, 3, 4, 5];

    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
    ```
* **Nota:** Usamos `arreglo.length` para que el ciclo sepa exactamente cuántas veces debe ejecutarse según el tamaño del arreglo.

### Funciones - Function()
Las `funciones` es una forma o mejor dicho un bloque de codigo el cual reutiliza una tarea especifica. Las funciones se deben escribir de la siguiente manera:

* **Ejemplo:**
    ```javascript
    function iterr(){
        const arreglo = [1, 2, 3, 4, 5];

        for (let i = 0; i < arreglo.length; i++) {
            console.log(arreglo[i]);
        }
    }
    ```

* **Nota:** Una funcion recibe argumentos lo que permite cambiar el contenido de manera dinamica el agumento recibira lo que uno ponde dentro de la instancia que creo.

* **Ejemplo:**
    ```javascript
    //Aqui es donde se recibe el argumento de la instancia
    function iterr(arg1){
        for (let i = 0; i < arg1.length; i++) {
            console.log(arg1[i]);
        }
    }

    const numeros = [1,2,3,4,5]; 
    const nombres = ['Ricardo', 'Pedro', 'Alberto', 'Juan'];

    iterr(numeros); // lo que ira aqui a dentro se le conoce como parametro.
    iterr(nombres);
    ```

* **Nota:** Esto se hace para que podamos usar esta funcion con cualquier arreglo y no solo encasillarlo a uno.