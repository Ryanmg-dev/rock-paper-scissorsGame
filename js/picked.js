const tokens = [
    {name: "paper", element: document.getElementById('paper')},
    {name: "scissor", element: document.getElementById('scissor')},
    {name: "rock", element: document.getElementById('rock')}
];

//Añadirles un evento click a los tokens 
tokens.forEach(function (elemento, index, arreglo) {
    elemento.element.addEventListener('click', 
    //funcion animar Token    
    function (){
        if(elemento.name == 'scissor'){
            elemento.element.classList.toggle('picked-scissor');            
            arreglo[0].element.classList.toggle('picked-scissor--paper');
            arreglo[2].element.classList.toggle('picked-scissor--rock');
        }         
        else if(elemento.name == 'rock'){
            elemento.element.classList.toggle('picked-rock');            
            arreglo[0].element.classList.toggle('picked-rock--paper');
            arreglo[1].element.classList.toggle('picked-rock--scissor');
        }
    });    
});
