const tokens = [
    {name: "paper", element: document.getElementById('paper')},
    {name: "scissor", element: document.getElementById('scissor')},
    {name: "rock", element: document.getElementById('rock')}
];

const tokenHome = [
    {   name: 'paper',
        class: 'board__token-background board__token--paper',
        child: '<img src="images/icon-paper.svg" alt=""></img>'
    },
    {name: 'scissor',
        class: 'board__token-background board__token--scissors',
        child: '<img src="images/icon-scissors.svg" alt=""></img>'
    },
    {   name: 'rock',
        class: 'board__token-background board__token--rock',
        child: '<img src="images/icon-rock.svg" alt=""></img>'
    },    
];

//constantes
const home = document.getElementById('home');

//variables no constantes
let focus;
let tokenPicked; 