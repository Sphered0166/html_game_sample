let score = 0;
const scoreDisplay = document.getElementById('score');
const gameButton = document.getElementById('game-button');

gameButton.addEventListener('click', () => {
    score += 1;
    scoreDisplay.textContent = score;
});
