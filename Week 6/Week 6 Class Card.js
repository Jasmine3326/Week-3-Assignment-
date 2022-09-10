export default class Card {
   this.suit = suit 
   this.rank = rank 
   this.value = value 
}

getValue() {
  switch (this.rank.toLowerCase()) {
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
  getCard() {
    return '$(this.rank) of $(this.suit)'
  }
}

const q = New Card('club','0')
console.log(q.getvalue())
console.log(q.getCard())

class player {

}


class player {

}