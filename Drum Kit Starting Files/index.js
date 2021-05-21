var drumButtons = document.querySelectorAll("button.drum")

for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click",function(){
        playDrum(this.innerHTML)
        btnAnimate(this)
})}


document.addEventListener("keydown", function(e){
    playDrum(e.key)
    btnAnimate(this.querySelector("." + e.key))
});

function btnAnimate(btn){
    btn.classList.add("pressed")

    setTimeout(() => {
        btn.classList.remove("pressed")
    }, 500);
}


function playDrum(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;
            
        case "a":
            var crash = new Audio("sounds/kick-bass.mp3")
            crash.play()
            break;
    
        case "s":
            var crash = new Audio("sounds/snare.mp3")
            crash.play()
            break;
    
        case "d":
            var crash = new Audio("sounds/tom-1.mp3")
            crash.play()
            break;
    
        case "j":
            var crash = new Audio("sounds/tom-2.mp3")
            crash.play()
            break;
    
        case "k":
            var crash = new Audio("sounds/tom-3.mp3")
            crash.play()
            break;
    
        case "l":
            var crash = new Audio("sounds/tom-4.mp3")
            crash.play()
            break;
    
        default:
            console.log(key)
            break;
    }
};