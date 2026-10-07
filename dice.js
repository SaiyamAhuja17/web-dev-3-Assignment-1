const crypto = require("crypto");

function rollDice() {
    const randomNumber = crypto.randomInt(1, 7);
    return randomNumber;
}

console.log("Rolling the dice...");

for (let i = 1; i <= 5; i++) {
    const result = rollDice();
    console.log(`Dice Roll ${i}: ${result}`);
}