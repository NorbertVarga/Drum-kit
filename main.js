
/*  Listen to the click on the Buttons  */
let numberOfButtons = document.querySelectorAll(".drum-button").length;
console.log(numberOfButtons);

for (i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum-button")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;
        playSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

/*  Listen to the keyboard press  */
document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
})

function playSound(key) {
    switch (key) {
        case "w":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
        break;
        case "e":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "r":
            var clap = new Audio("sounds/clap.mp3");
            clap.play();
        break;
        case "t":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "j":
            var tomHigh = new Audio("sounds/tom-high.mp3");
            tomHigh.play();
        break;
        case "i":
            var tomLow = new Audio("sounds/tom-low.mp3");
            tomLow.play();
        break;
        case "k":
            var hhClosed = new Audio("sounds/hh-closed.mp3");
            hhClosed.play();
        break;
        case "l":
            var hhOpen = new Audio("sounds/hh-open.mp3");
            hhOpen.play();
        break;
    
        default: console.log(buttonInnerHtml);
    }
}   
function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("active");
    setTimeout(function() {
        activeButton.classList.remove("active");
    }, 100);
}