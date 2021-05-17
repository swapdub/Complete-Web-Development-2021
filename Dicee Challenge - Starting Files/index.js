var randomNumber1 = Math.floor(Math.random() * 6)
var randomNumber2 = Math.floor(Math.random() * 6)

let src =  ['./images/dice1.png', 
            './images/dice2.png',
            './images/dice3.png',
            './images/dice4.png',
            './images/dice5.png',
            './images/dice6.png', ]

document.querySelector(".img1").src = src[randomNumber1]
document.querySelector(".img2").src = src[randomNumber2]

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "🚩 Player 1 Wins"
} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerText = "Player 2 Wins 🚩"
}
else {
    document.querySelector("h1").innerText = "Draw"
}