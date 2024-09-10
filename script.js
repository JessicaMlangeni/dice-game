// Function to generate a random dice roll
function rollTheDice() {
    // Generate random numbers for each dice roll
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    // Update the images based on the dice roll
    document.querySelector('.img1').src = `dice${dice1}.png`;
    document.querySelector('.img2').src = `dice${dice2}.png`;

    // Determine the winner
    let winnerMessage;
    if (dice1 > dice2) {
        winnerMessage = 'Jessica wins!';
    } else if (dice2 > dice1) {
        winnerMessage = 'Keoikantse wins!';
    } else {
        winnerMessage = "It's a tie!";
    }

    // Display the winner message
    document.querySelector('.winner').textContent = winnerMessage;
}

// Function to edit player names
function editNames() {
    // Prompt for new names
    const player1Name = prompt("Jessica:", document.querySelector('.Player1').textContent);
    const player2Name = prompt("Keoikantse:", document.querySelector('.Player2').textContent);

    // I Updated the player names
    if (player1Name) document.querySelector('.Player1').textContent = player1Name;
    if (player2Name) document.querySelector('.Player2').textContent = player2Name;
}

