//Añadirles un evento click a los tokens 
tokens.forEach(function (elemento) {    
    elemento.element.addEventListener('click', function (){
        focus = elemento.element;
        printPicked(focus);                    
    });         
});

/*Esta funcion tiene como parametro el elemento que ha sido seleccionado,
oculta el tablero del step 1 y visibiliza el tablero del step 2 con 
la ficha seleccionada*/
function printPicked (focus){ 
    focus = focus.firstElementChild;
    document.getElementById('step-1').classList.add('hide');    
    document.getElementById('step-2').classList.remove('hide');    
            
    document.getElementById('picked').appendChild(focus);
    let opcion = HousePickedRandom();
    console.log(opcion);
}

function HousePickedRandom (){
    let random = Math.floor(Math.random()*3)++;
    return random;
}

