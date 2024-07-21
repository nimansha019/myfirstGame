document.addEventListener('DOMContentLoaded', function() {
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const message = document.getElementById('message');
    const attempts = document.getElementById('attempts');

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attemptsLeft = 10;

    guessButton.addEventListener('click', function() {
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = 'Please enter a number between 1 and 100.';
            return;
        }

        attemptsLeft--;
        attempts.textContent = `Attempts left: ${attemptsLeft}`;

        if (userGuess === randomNumber) {
            message.textContent = 'Congratulations! You guessed the correct number!';
            guessButton.disabled = true;
        } else if (attemptsLeft === 0) {
            message.textContent = `Game over! The correct number was ${randomNumber}.`;
            guessButton.disabled = true;
        } else if (userGuess < randomNumber) {
            message.textContent = 'Too low! Try again.';
        } else {
            message.textContent = 'Too high! Try again.';
        }
    });
});
