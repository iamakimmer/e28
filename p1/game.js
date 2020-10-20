Vue.component('game-character', {
    data() {
        return {
        }
    },
    props: {
        'character': {
            type: Object,
        }
    },
    template: `<figure><img v-on:click="$emit('select-character', character)" :alt="character.name" :src="'images/' + character.name + '.png'"/><figcaption>{{character.name}} - {{character.description}}</figcaption></figure>`,
});


Vue.component('game-weapon', {
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
        character: null,
        computerCharacter: null,
        characters: [{
            name: 'Leonard',
            description: 'Leonard Leakey Hofstadter (Johnny Galecki) is an experimental physicist with an IQ of 173.'
        },{
            name: 'Sheldon',
            description: 'Sheldon Lee Cooper (Jim Parsons) is a theoretical physicist, possessing a BS, MS, PhD, Sc.D., and an IQ of 187. '
        },{
            name: 'Penny',
            description: 'Penny (Kaley Cuoco), is Leonard and Sheldon\'s neighbor across the hallway'
        },{
            name: 'Howard',
            description: 'Howard Joel Wolowitz, M.Eng. (Simon Helberg) is an aerospace engineer at Caltech\'s Department of Applied Physics, who often hangs out at Leonard and Sheldon\'s apartment. '
        },{
            name: 'Raj',
            description: 'Rajesh Ramayan Koothrappali, PhD (Kunal Nayyar) is Howard Wolowitz\'s best friend and another genius of the group.'
        },{
            name: 'Amy',
            description: 'Dr. Amy Farrah Fowler, Ph.D. is a neurobiologist from Glendale, California, who is married to Dr. Sheldon Cooper.'
        }],

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
            const computer = this.calculateComputerMove();
            this.moveDescription = `You chose ${human.name}. Computer chooses ${computer.name}.`;
            this.resultMessage = this.calculateOutcome(human, computer);        
        }, 
        getComputerCharacter(player) {
            const filteredCharacters = this.characters.filter(c => c.name !== player);
            return filteredCharacters[Math.floor(Math.random() * Math.floor(filteredCharacters.length))];
        },
        selectCharacter(character) {
            this.character = character;
            this.computerCharacter = this.getComputerCharacter(character.name);
        },         
        clearRounds() {
            this.humanChoice = '';
            this.computerChoice = '';
            this.winner = '';
            this.round = 1;
            this.moveDescription = '';
            this.resultMessage = '';
            this.rounds = [];
            this.humanWins = 0;
            this.computerWins = 0;
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
            for (let i=0;i<winOutcomes.length;i++) {
                const outcome = winOutcomes[i];
                if (human.name === outcome[0] && computer.name === outcome[2]) {
                    human.winCount++;
                    this.humanWins++;
                    this.winner = this.character.name;
                    this.rounds.push({
                        number: this.round++,
                        winner: this.character.name,
                        weapon: human.name,
                        outcome: outcome.join(' '),
                    })

                    return `You Win! ${outcome.join(' ')}.`;                    
                } else if (computer.name === outcome[0] && human.name === outcome[2]) {
                    this.computerWins++;
                    this.winner = this.computerCharacter.name;
                    this.rounds.push({
                        number: this.round++,
                        winner: this.computerCharacter.name,
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