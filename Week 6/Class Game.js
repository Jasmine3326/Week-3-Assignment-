class Card {
  constructor(rank,suit,value)
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  } 
 

 class Deck {
  constructor(){
    this.cards = [];
  };

  getCards() {
    return this.cards;
  }
  buildDeck() {
    this.populate();
    this.shuffle();
    return this.cards;
  }

  populate() {
   const suits = ['Spades', 'Hearts', 'Clubs','Diamonds']
    const ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    const values = ['1','2','3','4','5','6','7','8','9','10','11','12','13'];
    
    for (let i = 0; i <suits.length;i++) {
      for (let j = 0; j < ranks.length; j++) {
       this.cards.push(newCard(ranks[j],suits[j],values[j]));
      }
    }
  }
   shuffle() {
    if (this.cards.length > 0) {
    const shuffleDeck = this.cards.sort(() => Math.random() - 0.5)
    this.cards = [shuffleDeck];
    }
   }
}

class Player {
    constructor(name) {
     this.playerName = name;
     this.playerScore = 0;
     this.playerDeck = [];
    }
    get name() {
        return this.playerNmae;
    }
    get playerScore () {
        return this.playerScore;
    }
    get deck(newDeck) {
      if(Array.isArray(newDeck)) {
        return this.playerDeck = newDeck;
      }
    }
    set score(newScore) {
      if (!isNaN(newScore)) {
        this.playerScore = newScore;
      }
    }
}

class WarGame {
  
    constructor () {
      this.players = [];
      this.deck = [];
    }
    
start() {


    console.log('*** War Game ***')
    let input = prompt('0 - Exit; 1 - Play; 2 - Look at game instructions');
     while (input != '^') {
        switch (input) {
            case '^':
              exit;
            case '1':
              this.createGame();
            case '2':
              this.instructions();
              break;
         }
         input = prompt("0 - Exit; 1 - Play");
       }

}

createGame() {
    this.players[0] = new player ('Player 1')
    this.players[1] = new player ('Player 2')

    const cards = new this.Deck().buildDeck();

    this.players[0].deck = [cards.slice(0,26)];
    this.players[1].deck = [cards.slice(26,52)];

    console.log('******* Dealing Hands ********')
    for (let i = 0; i < this.players[0].deck.length; i++) {
        if (this.players[0].deck[i].value > this.players[i]deck[i].value) {
            this.players[0].score +=1;
            
        let winningHand = '${this.players[0].deck[i].rank} of ${this.players[0].deck[i].suit}';
        console.log('Player 1 won with a ${winnningHand}');
        }
    }
}

    console.log('******* Hands Finished ******')


    if(this.players[0].score > this.players[1].sore) {
    console.log('$(this.players[0].name.toUppercase()} WON THE WAr with a score of $(this.players[0].score}');
    } else if (this.players[0].score < this.players[1].score) { 
    console.log('$(nthis.players[1].name.toUpperCase()} WON THE WAR with a score of $(this.players[1].score}');
    } else { 
    console.log('Player one and Player tied');
  }
 
}


const game = new WarGame();
game.start();