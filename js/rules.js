const lightbox = document.createElement('div');

rules.addEventListener('click', rulesLightbox);

function rulesLightbox (){    
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = '<div class="lightbox__rules">' +
    '<h2 class="text--dark text--bold">Rules</h2>' +
    '<img class="lightbox__rules-bg" src="images/image-rules.svg" alt="Aqui se encuentran las reglas del juego">' +
    '<img src="images/icon-close.svg" alt="cerrar" id="close"></div>';

    document.body.appendChild(lightbox);
    document.getElementById('close').addEventListener('click', function (){
        document.body.removeChild(lightbox);
    });
}
