Vue.component('weapon', {
    data() {
        return {
        }
    },
    props: {
        'weapon': {
            type: Object,
        }
    },
    template: `<figure><img v-on:click="$emit('select-weapon', weapon)" :alt="weapon.name" :src="'images/' + weapon.name + '.png'"/><figcaption>{{weapon.name}} ({{weapon.winCount}} wins)</figcaption></figure>`,
});


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

// Initialize the root Vue instance
let app = new Vue({
    el: '#app',
    data: {
        weapons: [{
            name: 'Rock',
            winCount: 0
        }, {
            name: 'Paper',
            winCount: 0
        }, {
            name: 'Scissors',
            winCount: 0
        }, { 
            name: 'Lizard',
            winCount: 0
        }, {
            name: 'Spock',
            winCount: 0
        }],
        humanChoice: '',
        computerChoice: '',
        winner: '',
        rounds: [],
        round: 1,
        moveDescription: '',
        resultMessage: '',
        humanWins: 0,
        computerWins: 0,
    },
    methods: {
        selectWeapon(human) {
            console.log('human', human);
            const computer = this.calculateComputerMove();
            this.moveDescription = `You chose ${human.name}. Computer chooses ${computer.name}.`;
            this.resultMessage = this.calculateOutcome(human, computer);        
        }, 
        clearRounds() {
            console.log('clearing rounds');
            this.humanChoice = '';
            this.computerChoice = '';
            this.winner = '';
            this.round = 1;
            this.moveDescription = '';
            this.resultMessage = '';
            this.rounds = [];
        },
        calculateComputerMove() {
            return this.weapons[Math.floor(this.weapons.length * Math.random())];
        },
        calculateOutcome(human, computer) {

            console.log('human', human);
            console.log('computer', computer);

            if (human.name === computer.name) {
                this.winner = '';
                this.rounds.push({
                    number: this.round++,
                    winner: 'No-One',
                    weapon: human.name,
                })

                return 'Tie. Play Again';
            }
            console.log('human', human);
            console.log('computer', computer);
            for (let i=0;i<winOutcomes.length;i++) {
                const outcome = winOutcomes[i];
                console.log('outcome', outcome);
                if (human.name === outcome[0] && computer.name === outcome[2]) {
                    human.winCount++;
                    this.humanWins++;
                    this.winner = 'human';
                    this.rounds.push({
                        number: this.round++,
                        winner: 'human',
                        weapon: human.name,
                        outcome: outcome.join(' '),
                    })

                    return `You Win! ${outcome.join(' ')}.`;                    
                } else if (computer.name === outcome[0] && human.name === outcome[2]) {
                    this.computerWins++;
                    this.winner = 'computer';
                    this.rounds.push({
                        number: this.round++,
                        winner: 'computer',
                        weapon: computer.name,
                        outcome: outcome.join(' '),
                    })


                    computer.winCount++;
                    return `You Lose! ${outcome.join(' ')}.`;
                }
            }
        }
    }
});