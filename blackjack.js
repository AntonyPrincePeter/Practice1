
let sum = 0;
let cards = [];

let hasBlackJack=false;
let isAlive = false;
let message =""

let sumEl = document.getElementById("sum-el");
let message1 = document.getElementById("message1");
let cardsEl = document.getElementById("cards-el")

let player ={
    name: "ANTONY",
    chips: 200
}

let playerEl = document.getElementById("player-El")



function startGame(){
isAlive = true;
let firstCard = getRandomCard();
let secondCard = getRandomCard();
cards = [firstCard, secondCard];
sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";

    for (let i in cards){
        cardsEl.textContent += cards[i] + " ";
    }

        //sum =0;
        //let cards = "Cards: " + arr[0] + arr[1]+ " " + arr.push(6);
    if (sum <= 20){
        message = "Do you want to draw a new Card";
        isAlive =true;
        hasBlackJack == false;
    }
    else if(sum ==21){
        message = "You've got Blackjack";
        hasBlackJack =true;
        playerEl.textContent = player.name + " " +", you are awarded: " + "$" + player.chips;
        }
    else{
        message = "You're out of the Game";
        isAlive =false;
        hasBlackJack == false;
           }

    message1.textContent = message;
}

function newcard(){
    if (isAlive == true && hasBlackJack == false){
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    // console.log(cards);
   
    renderGame();
    }
}  

function getRandomCard(){
   let randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum > 10){
        console.log(randomNum);
        return randomNum = 10;
    }else if (randomNum === 1){
        return randomNum =11;
    }
    return randomNum

}

