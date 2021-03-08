document.getElementById('return').addEventListener('click', playAgain);

function playAgain (){
    comeBack();
    home.classList.remove('token--winner');
    picked.classList.remove('token--winner');
    document.getElementById('step-2').classList.add('hide');            
    document.getElementById('step-1').classList.remove('hide');     
}

function comeBack (){
    home.removeChild(nuevoToken);    
    let nodo = picked.firstElementChild;
    document.getElementById(tokenPicked).appendChild(nodo);        
    outcome.parentElement.classList.add('hide');
}