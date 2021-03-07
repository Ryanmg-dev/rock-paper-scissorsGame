document.getElementById('return').addEventListener('click', playAgain);

function playAgain (){
    comeBack();
    document.getElementById('step-2').classList.add('hide');            
    document.getElementById('step-1').classList.remove('hide');     
}

function comeBack (){
    home.removeChild(nuevoToken);    
    let nodo = picked.firstElementChild;
    document.getElementById(tokenPicked).appendChild(nodo);        
    outcome.parentElement.classList.add('hide');
}