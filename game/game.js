// All the elements 
let resultMessage = document.querySelector('#resultMessage');
let moveDescription = document.querySelector('#moveDescription');

const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

document.querySelectorAll('#options img').forEach(option => {
    option.addEventListener('click', event => {
        onHumanMoveChosen(event);
    })
})

//run when user clicks an option
function onHumanMoveChosen(event) {
    const human = event.target.getAttribute('alt');
    const computer = calculateComputerMove();
    moveDescription.innerHTML = `You chose ${human}. Computer chooses ${computer}.`;
    resultMessage.innerHTML = calculateOutcome(human, computer);
}

//return a random computer move
function calculateComputerMove() {
    return choices[Math.floor(choices.length * Math.random())];
}

//return the result given 2 options
function calculateOutcome(human, computer) {
    if (human === computer) {
        return 'Tie. Play Again';
    }
    console.log('human', human);
    console.log('computer', computer);
    for (let i=0;i<winOutcomes.length;i++) {
        const outcome = winOutcomes[i];
        console.log('outcome', outcome);
        if (human === outcome[0] && computer === outcome[2]) {
            return `You Win! ${outcome.join(' ')}.`;
        } else if (computer === outcome[0] && human === outcome[2]) {
            return `You Lose! ${outcome.join(' ')}.`;
        }
    }
}

const winOutcomes = [
    ['Scissors', 'cuts', 'Paper'],
    ['Paper', 'covers', 'Rock'],
    ['Rock', 'crushes', 'Lizard'],
    ['Lizard', 'poisons', 'Spock'],
    ['Spock' ,'smashes', 'Scissors'],
    ['Scissors', 'decapitates',  'Lizard'],
    ['Lizard', 'eats', 'Paper'],
    ['Paper', 'disproves', 'Spock'],
    ['Spock', 'vaporizes','Rock'],
    ['Rock' ,'crushes', 'Scissors']
];