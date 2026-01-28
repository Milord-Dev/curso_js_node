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

> **Dato Extra:** Tambien se puedes hacer comparaciones con stings y cualquier string tanto numero u objeto regresa true menos el 0
> Esto solo es valido con el operador or o ||.

---

### Control de Flujo
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