let cards = [] // array - ordered list of items
let result = 0
let message = ""
let hasBlackjack = false
let isAlive = false
let player = {
    playerName : "per",
    Chips : 145
    }

let messageEl = document.getElementById("message-el")
console.log(messageEl)
// let sumEl = document.querySelector("#sum-el")
let sumEl = document.getElementById("sum-el")
//query selector is css selector of body
let cardsEl = document.getElementById("cards-el")



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.playerName + ": $" + player.Chips

function getRandomCard(){
    if(Math.floor(Math.random()*13) + 1 === 1){
        return 11
    }
    else if(Math.floor(Math.random()*13) + 1 >= 11){
        return 10
    }
    return Math.floor(Math.random()*13) + 1
}


function startgame(){
    isAlive = true
let first = getRandomCard()
let second = getRandomCard()
cards = [first,second]
    rendergame()
}

// create a function get randomcard




function rendergame(){
    cardsEl.textContent = "Cards "
    for(let count = 0 ; count < cards.length ; count+=1){
        cardsEl.textContent +=cards[count] + " " 
        result += cards[count]
    }
    sumEl.textContent ="Sum: "+ result
    if (result <= 20){
        message = "Do you want to draw a new card?"
    }
    else if(result === 21){
    message = "Yohoo!You have won the blackJack!"
        hasBlackjack = true
    }
    else{
        message = "You're out of the game!"
        isAlive = false
}
messageEl.textContent = message
}


function newCard(){
    if(isAlive === true && hasBlackjack == false){
    console.log("Drawing a new card from the deck of cards")
    let card = getRandomCard()
   cards.push(card)
    rendergame()
}
else{
    restartGame()
    window.alert("The game is over!")
}
}
// else{
//     window.alert('The game is over! Please leave!')
// }

function restartGame(){
    cards = []
    hasBlackjack = false
    isAlive = false
    result = 0
    startgame()
}