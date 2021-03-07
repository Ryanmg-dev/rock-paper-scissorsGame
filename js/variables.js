const tokens = [
    {name: "paper", element: document.getElementById('paper')},
    {name: "scissor", element: document.getElementById('scissor')},
    {name: "rock", element: document.getElementById('rock')}
];

const tokenHome = [
    '<div class="board__token-background board__token--paper"><img src="images/icon-paper.svg" alt=""></div>',
    '<div class="board__token-background board__token--scissors"><img src="images/icon-scissors.svg" alt=""></div>',
    '<div class="board__token-background board__token--rock"><img src="images/icon-rock.svg" alt=""></div>'
];

let focus;