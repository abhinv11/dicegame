
// Generate a random number between 1 and 6
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1; // Generate number between 1 and 6

// Log the image path for debugging
console.log("./images/dice" + randomNumber1 + ".png");

// Set the appropriate dice image based on the random number
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");


var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1; 


// Log the image path for debugging
console.log("./images/dice" + randomNumber2 + ".png");

// Set the appropriate dice image based on the random number
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");


if (randomNumber1 > randomNumber2){
    document.getElementsByTagName("h1")[0].textContent = "Player 1 Wins"
}else if ( randomNumber2 > randomNumber1){
     document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins"
}else{
    document.getElementsByTagName("h1")[0].textContent = "Tie Please refresh again"
}

 
