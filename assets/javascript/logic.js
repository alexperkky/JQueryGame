// Global Variables
// --------------------------

// Crystal Variables
var crystal = {
    blue: {
        name: "Blue",
        value: 0
    },
    green: {
        name: "Green",
        value: 0
    },
    red: {
        name: "Red",
        value: 0
    },
    yellow: {
        name: "Yellow",
        value: 0
    }
}


// Scores
var currentScore = 0;
var targetScore = 0;


// Wins and Losses
var winCount = 0;
var lossCount = 0;



// Functions
// --------------------------

// Get Random number function
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function(){
   
    // Reset Current Score
    currentScore = 0;
    // Set a New Target Score
    targetScore = getRandom(19, 120);
    // Set different Values for each crystal
    crystal.blue.value  = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.red.value   = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

    // Change HTML
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    // Test Consolelogs
    console.log("=================")
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value)
    console.log("Green: " + crystal.green.value)
    console.log("Red: " + crystal.red.value)
    console.log("Yellow: " + crystal.yellow.value)
    console.log("=================")
}

// Respond to clicks on the crystals
var addValues = function(crystal) {

    // Change currentScore
    currentScore = currentScore + crystal.value;

    // Change the HTML for currentScore
    $("#yourScore").html(currentScore);

    // Call on checkWin function
    checkWin();

    // Testing Center
    console.log("Your Score: " + currentScore);
}

// Check if user WOn or Lost and reset game
var checkWin = function() {
    // Check if currentScore is larger than targetScore
    if(currentScore > targetScore) {
        alert("YOU LOSE!");
        console.log("YOU LOSE!")

        // Add to loss count
        lossCount++;

        // Change HTML for Losses
        $("#lossCount").html(lossCount);

        // Restart Game
        startGame();
    }
    else if(currentScore == targetScore) {
        alert("YOU WIN!");
        console.log("YOU WIN");

        // Add to win count
        winCount++;

        // Change HTML for Wins
        $("#winCount").html(winCount)

        // Restart Game
        startGame();

    }

}


// Main Process
// --------------------------
// Starts Game first time
startGame();

$("#blue").click(function(){
    addValues(crystal.blue);
})
$("#green").click(function(){
    addValues(crystal.green);
})
$("#red").click(function(){
    addValues(crystal.red);
})
$("#yellow").click(function(){
    addValues(crystal.yellow);
})