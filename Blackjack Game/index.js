let firstCard = 1
let secondCard = 2
// let hasBlackJack = false
// let isAlive = true
let message =""
let sum = firstCard + secondCard
console.log(sum)
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
//query selector sistem milih2nya kaya di css
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame(){

if (sum <= 20) {
    message ="Do you want to draw a new card? 😏"
}
else if (sum === 21){
    message="Woohoo! You've got a Blackjack! 🥳"
    // hasBlackJack = true
}
else {
    message="You're out of the game! 😭"
    // isAlive = false
    
}

cardsEl.textContent= "Cards: "+ firstCard + " " + secondCard 
sumEl.textContent= "Sum: " + sum
messageEl.textContent=message
 
}

function newCard(){

    console.log("Drawing a new card from the deck");
    let newcard = 3 
    sum += newcard
    
    renderGame()
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