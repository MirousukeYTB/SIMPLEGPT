let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let guessCount = 0;
const maxGuesses = 10;

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guessesDisplay = document.getElementById('guesses');
const lastResult = document.getElementById('lastResult');
const lowOrHi = document.getElementById('lowOrHi');
const resetButton = document.getElementById('resetButton');

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
    const userGuess = Number(guessField.value);
    guessCount++;
    guesses.push(userGuess);

    if (guessCount === 1) {
        guessesDisplay.textContent = 'Tentatives précédentes : ';
    }
    guessesDisplay.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Félicitations ! Vous avez trouvé le bon nombre !';
        lastResult.classList.add('success');
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === maxGuesses) {
        lastResult.textContent = '!!! Fin du jeu !!!';
        lastResult.classList.add('failure');
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Faux !';
        lastResult.classList.add('failure');
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Le nombre est plus grand !';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Le nombre est plus petit !';
        }
    }

    guessField.value = '';
    guessField.focus();
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'inline';
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 0;
    guesses = [];
    guessesDisplay.textContent = '';
    lastResult.textContent = '';
    lowOrHi.textContent = '';
    lastResult.classList.remove('success', 'failure');

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    resetButton.style.display = 'none';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
