

var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "yellow", "green"];
var gameBegun = false;
var currentLevel = 0;


function nextSequence() {
    var userClickedPattern = [];
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    currentLevel++;

    var chosenButton = ($("#" + randomChosenColor));
    playSound(randomChosenColor);


    $("h1").text ("Level " + currentLevel);
}

$(".btn").click(function(){
        userChosenColor = this.id;
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        checkAnswer(userClickedPattern.length-1);
})


    function checkAnswer(currentLevel) {
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
          console.log("success");
          if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
          }
        } else {
          console.log("wrong");
        }
    }





$(document).keypress(function(){
    if (gameBegun==false) {
        nextSequence();
        $("h1").text("Level " + currentLevel);
        begun=true;
    } else {
        return null;
    }
})





function animatePress(currentColor) {
    var pressedButton = $("#" + currentColor);
    pressedButton.addClass("pressed");
    setTimeout(function() {
        pressedButton.removeClass("pressed");
    }, 100);
}


function playSound(name) {
    var sound = new Audio("./sounds/" + name + ".mp3");
    sound.play();
    $("#" + name).fadeOut(100).fadeIn(100);
}

