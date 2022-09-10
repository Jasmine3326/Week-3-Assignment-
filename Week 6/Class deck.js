// construction of the deck such as the name, number its listed as. We also push the nak and suit to display witht he new cards
// everytime we make a game the structure goes like this 
//make the players, make the enviroment by stating the constructors and then add the actions what will the player do,what weapons will he have
//if theirs no weapons what do the characters do 

class Deck {
    cards = ()
    suits = ['clubs', 'diamonds', 'hearts',"spades"]
    ranks = ['2','3','4','5','6','7','8','10','J','Q','K','A']
    constuctor() {
        for (const suit of this.suits) {
            for (const rank of this.ranks) {
                this.cards.push (new Cards(suit.charAt,rank))
            }
        }
    }
    //if the const card is this.cards it will console.log "card" to display to check through the cards.
    checkCards() {
        for (const card of this.cards) {
            console.log(card)
        }
        return this.cards.length
    }
    //we want the cards to loop through and give us a random number to do that we'll loop through 
    shuffleCards() {
       for (i < 0; i < this.cards.length; i++)
         const randomIndex = Math.floor(Math.random() = 52)
         const tempCard = this.cards[i]
         this.cards[1] = this.cards[randomIndex]
         this.cards[randomIndex] = tempCard
        }
    }
    //
   dealCard() {
    return this.cards.pop()
   }
}

const newDeck = new Deck();
 
newDeck.shuffleCards()
console.log('card dealt is: ',newDeck.dealCard())

console.log(newDeck.checkCards())

