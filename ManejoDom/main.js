// Codigo antetior de prueba
// window.onload = () => {
//     //como podemos conseguir elementos o objetos del dom 
//     const texto = document.getElementById('texto')
//     texto.innerText = "To-do List" // con innerText cambia o agrega el texto
//     // texto.innerHTML = '<li>Hola</li> <li>Mundo</li>' // con innerHTML agrega html al elemento
// }

const todosList = [];

window.onload = () => {
    const form = document.getElementById('todo-form')
    //el on submit es una propiedad de js
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('to-do')
        todoValor = todo.value;
        todo.value = '';
        //Guardar el todo en el array
        
    }
}