alert("Welcome to the number guessing game!");

//alert("Hola mundo");
let secretNumber = 10;
let userNumber = prompt("Give me a number, plz:");
//console.log(userNumber);

while (userNumber != secretNumber) {
    if (userNumber > secretNumber) {
        userNumber = prompt("Too high, try again:");
    } else {
        userNumber = prompt("Too low, try again:");
    }
}

alert("Congratulations! You guessed the number!");
