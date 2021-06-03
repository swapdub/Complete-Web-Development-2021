// alert("testing")

var level = 0
var started = false
var gamePattern = []
var userClickedPattern = []
var buttonColours = ["red", "blue", "green", "yellow"]


$(document).keydown(function (e) { 

    if (started === false) {
        started = true
        nextSequence()
    }
    
})


$(".btn").click(function(){
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)
    checkAnswer(userClickedPattern.length - 1)
    
    playSound(userChosenColour)
    animatePress(userChosenColour)
    console.log(level)


})


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("Success")
        
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(() => {
                nextSequence()
            }, 1000);
        }
        
    }
    else{
        console.log("Failure")

        $("body").addClass("game-over")
        setTimeout(() => {
            $("body").removeClass("game-over")
        }, 200);
        
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver()
        playSound("wrong")
    }
    
    
}


function nextSequence() {
    level = level + 1
    userClickedPattern = []

    var randomNumber = Math.floor(Math.random()*4)
    let randomChosenColour = buttonColours[randomNumber]

    gamePattern.push(randomChosenColour)
    playSound(randomChosenColour)

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100)
    $("h1").text("LEVEL " + level)
    
}


function playSound(name){
    var audio = new Audio("./sounds/" + name +'.mp3');
    audio.play();
}


function animatePress(currentColour) {
    $("#"+ currentColour).addClass("pressed")
    setTimeout(() => {
        $("#"+ currentColour).removeClass("pressed");
    }, 100);
}


function startOver() {
    level = 0
    gamePattern = []
    started = false
}