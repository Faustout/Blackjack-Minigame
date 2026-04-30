let cards = []
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message =""
let player = {
    name: "Faust",
    chips: 67 
}


console.log(sum)
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
//query selector sistem milih2nya kaya di css
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent= player.name + ": $" + player.chips

console.log(playerEl)

function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13 ) +1
    // if (randomCard === 1){
    //     return 11
    // }  
        if (randomCard > 10){
        return 10
    } else return randomCard
       
}

function startGame(){
    isAlive = true
    let firstcard= getRandomCard()
    let secondcard= getRandomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard


    renderGame()
}

function renderGame(){
cardsEl.textContent= "Cards: "

    for (let i=0; i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
      
if (sum <= 20) {
    message ="Do you want to draw a new card? 😏"
}
else if (sum === 21){
    message="Woohoo! You've got a Blackjack! 🥳"
    hasBlackJack = true

}
else {
    message="You're out of the game! 😭" 
    isAlive =false
    
}


sumEl.textContent= "Sum: " + sum
messageEl.textContent=message
 
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
    console.log("Drawing a new card from the deck");
    let newcard = getRandomCard()
    sum += newcard
    cards.push(newcard)
    console.log(cards);
    renderGame()
    }
}



// console.log(hasBlackJack)
// console.log(isAlive)

// let ageKing = 22

// if (age < 21){
//     console.log("You can't enter the club.")
// }
// else {
//     console.log ("Welcome! You are old enough to enter the club!")
// }

// let age = 100

// if (age < 100) {
//     console.log("Not eligible")
// }
// else if (age === 100) {
//     console.log("Congratulations! Here's a birthday card from the king.")
// }
// else {
//     console.log("Not eligible, you've already gotten one.")
// }

// console.log(4 === 3)  // false
// console.log(5 > 2)    //  true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) // true
// console.log(3 <= 2)   // false