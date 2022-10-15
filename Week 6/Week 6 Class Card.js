 export default class Card {
  constructor(suit,rank) {
   this.suit = suit 
   this.rank = rank 
   
  }

  getValue() {
  switch(this.rank.toLowerCase()) {
   case 'a':
     return 14
   case 'b':
     return 13 
   case 'c':
     return 12
   case 'd':
     return 11 
   default: 
     return Number(this.rank) 
  }
 }
  getCard() {
    return `${this.rank} of ${this.suit}`
  }
 }

const q = NewCard('club','0')
console.log(q.getvalue())
console.log(q.getCard())

