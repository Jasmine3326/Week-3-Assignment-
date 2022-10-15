const PLAYER_X_CLASS = 'X'
const PLAYER_O_CLASS = 'O'
const WINNING_COMBINATIONS = [
    [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
]

const titleElements = document.querySelectorAll('title')
const containerElement = document.getElementsByClassName('board')
const winningMessageElement = document.getElementsByClassName('inningMeessage')
const reset = document.getElementsByClassName('reset')
const winningMessageTextElement = docuemnt.getElementsByID('winningMessageText')
let isPlayer_O_Turn = false 

startGame() 

reset.addEventListner('click',startGame)

function startGame() {
    isPlayer_O_Turn = false
    containerElements.forEach(cell => {
        container.classList.remove(PLAYER_X_CLASS)
        container.classList.remove(PLAYER_O_CLASS)
        container.removeEventListner('click',handleContainerClick)
        container.addEventListner('click',handleContainerClick, { once:true })


    })

  SetBoardHoverClass()
  winningMessageElement.classlist.remove('show')

}

 function handleContainerClick (e) {
    const cell = e.target 
    const currentClass = isPlayer_O_Turn ? PLAYER_O_CLASS : PLAYER_X_CLASS
    placeMark(container,currentClass)
    if (checkedWin(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        swapTurns()
        setBoardHoverClass()
    }
    
  }

  function endGame (draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Its a draw'
    } else {
        winningMessageTextElement.innerText = 'Player with $(isPlayer_O_Turn ? "O`s" : "X`s" } wins!'
    }
    winningMessageElement.classList.add('show')
  }

 function isDraw() {
    return [...containerElements].every(container => {
         return container.classList.contains(PLAYER_X_CLASS) || container.classList.contains(PLAYER_O_CLASS)
    })
 }











//let playerX = document.getElementsByClassName('PlayerText')
//let playerO = document.getElementsByClassName('PlayerText 2')
//let restartBtn = document.getElementsByClassName('restartBtn')
//let boxes = Array.from(document.getElementsByClassName('box'))

