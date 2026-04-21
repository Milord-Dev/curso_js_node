window.onload = () => {
    //como podemos conseguir elementos o objetos del dom 
    const texto = document.getElementById('texto')
    texto.innerText = "To-do List" // con innerText cambia o agrega el texto
    // texto.innerHTML = '<li>Hola</li> <li>Mundo</li>' // con innerHTML agrega html al elemento
}