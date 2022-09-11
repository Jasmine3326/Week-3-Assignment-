
//here we construct how the player gets the hand, what they're score will be and the name.
class Player {
  hand =[]
  score = 0
  constructor(name) {
    this.name = name 
  }
  // we return the name of the player on the screen 
  getPlayerName() {
    return '$(this.name)'
  }
  // so the player can check they're cards we add a return for that too 
  checkHand() {
    for (const card of this.hand) {
        console.log(card)
    }
    return this.hand.length
   //we use the push method to get an available card form the deck 
  }
  getCard(card) {
     this.hand.push(card)
   }
   //we use the pop method to element an item everytime the player uses a card
  playCard() {
     return this.hand.pop()
  }
  //everytime the player gets it right they get a score increase 
  increaseScore() {
    this.score = 1
  }
  // and at the end of it they're able to recieve what they're score will be by the end of the game 
  getScore() {
    return this.score
  }
}
// all of these are used display whether the player can pick up,recieve,play, and check their hand.
console.log('$(player1.getPlayerName') received $(deck.deal())'