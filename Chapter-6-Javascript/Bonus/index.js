// Get elements
const rgbValueDisplay = document.getElementById('rgbValue');
const colorOptionsContainer = document.getElementById('colorOptions');
const resultDisplay = document.getElementById('result');
const retryButton = document.getElementById('retry');

// Initialize variables
let correctColorIndex;
let score = 0;
let lives = 3;

// Function to generate random RGB color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to generate color options
function generateColorOptions() {
    colorOptionsContainer.innerHTML = '';
    const colorOptions = [];
    correctColorIndex = Math.floor(Math.random() * 3);
    for (let i = 0; i < 3; i++) {
        const color = i === correctColorIndex ? generateRandomColor() : generateRandomColor();
        colorOptions.push(color);
    }
    rgbValueDisplay.textContent = colorOptions[correctColorIndex];
    colorOptions.forEach((color, index) => {
        const option = document.createElement('div');
        option.classList.add('colorOption');
        option.style.backgroundColor = color;
        option.addEventListener('click', () => checkAnswer(index));
        colorOptionsContainer.appendChild(option);
    });
}

// Function to check user's answer
function checkAnswer(index) {
    if (index === correctColorIndex) {
        resultDisplay.textContent = 'Correct!';
        score++;
    } else {
        resultDisplay.textContent = 'Incorrect! Try again.';
        lives--;
    }
    if (lives === 0) {
        endGame();
    } else {
        generateColorOptions();
    }
}

// Function to end the game
function endGame() {
    colorOptionsContainer.innerHTML = '';
    resultDisplay.textContent = `Game Over! Final Score: ${score}`;
    retryButton.style.display = 'block';
}

// Event listener for retry button click
retryButton.addEventListener('click', () => {
    score = 0;
    lives = 3;
    resultDisplay.textContent = '';
    retryButton.style.display = 'none';
    generateColorOptions();
});

// Initial game setup
generateColorOptions();
