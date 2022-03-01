// GUESS THAT NUMBER 
// Message to be used throughout the project file
const enterNumText = `Please enter a number greater than zero`;
// For restarting the game
let restartGame = true;
// For storing the range of the number to be guessed
let rangeNum;
// For storing the number that the user will try to guess
let randomNum;
// For storing the number of attempts the user has left
let attempts;
// For storing the user's guess
let guess;
// For storing the user's response to play again or not play again
let playAgain;

// Starting alert message
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game`);

// Game restarts as long as the restartGame variable has a value of true
while (restartGame) {
    // Asks user to enter a number to set as the upper bound for the number that they are trying to guess.
    rangeNum = prompt(`Please enter a maximum number for the range`);

    // Using parseInt to attempt to convert the user's response into a number value
    rangeNum = parseInt(rangeNum);

    // Verifies the user's entry for a range number is a number that is greater than zero. All numbers have a default boolean value of true, except for 0.
    while (!rangeNum || rangeNum < 1) {
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }

    // Creates the random number using the range number entered by the user
    randomNum = Math.floor(Math.random() * rangeNum) + 1;

    // Prompts user to enter a number of attempts allowed (number of guesses)
    attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

    // Verifies that the user is entering a valid response for number of attempts allowed
    while (!attempts || attempts < 1 || attempts >= rangeNum) {
        attempts = parseInt(prompt(`Please enter a number from 1 to ${rangeNum - 1}`))
    }

    // Asks user to guess in the range they set
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left.`);

    // Continues looping until user guesses the correct number or runs out of attempts. 
    while (true) {
        // Tries to convert the user's guess into a number
        guess = parseInt(guess);

        // Verifies the user's guess is a number greater than zero and less than or equal to the range they set
        while (!guess || guess < 1 || guess > rangeNum) {

        }

        // Removes an attempt
        attempts--;

        // Checks if user guessed correctly. If so, then the game ends. 
        if (guess === randomNum) {
            alert(`CONGRATULATIONS YOU SAVED ALL OF UKRAINE: ${randomNum}`);
            break;

            // Checks if user has any attempts left. If not, the game ends and the number is displayed to the user. 
        } else if (attempts === 0) {
            alert(`Sorry, Putin just captured the entirety of Ukraine because your guess was wrong! You doomed humanity! The number was ${randomNum} you idiot!`);
            break;

            // Checks if user's guess was too low and prompts user to guess gain
        } else if (guess < randomNum) {
            guess = prompt(`Too low! You have ${attempts} attempt(s) before Putin takes over!`);

            // The only other possibility is that the user's guess was too high. So, the user is prompted again and is made aware that their guess was too high
        } else {
            guess = prompt(`Too high! Get it right before it's too late! You have ${attempts} left.`)
        }

        // break;
    }


    break;
}

