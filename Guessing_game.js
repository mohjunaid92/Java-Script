const num = prompt("Enter the max no.");
const num1 = Math.floor(Math.random()*num +1);

let guess = prompt("Guess the no.");

while( true ){
    if( guess == "quit"){
        console.log("Thanks for playing");
        break;
    }
    if( guess == num1 ){
        console.log("You guess right", guess);
        break;
    } else if(guess < num1 ) {
        console.log("your guess if too small");
        guess = prompt("Guess the no.");

    } else {
        console.log("your guess is too large");
        guess = prompt("Guess the no.");
    }
}