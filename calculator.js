// Get command-line arguments
const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

// Check if numbers are valid
if (isNaN(num1) || isNaN(num2)) {
    console.log("Please provide valid numbers.");
    process.exit();
}

// Perform calculation
switch (operation) {
    case "add":
        console.log("Result:", num1 + num2);
        break;

    case "subtract":
        console.log("Result:", num1 - num2);
        break;

    case "multiply":
        console.log("Result:", num1 * num2);
        break;

    case "divide":
        if (num2 === 0) {
            console.log("Cannot divide by zero.");
        } else {
            console.log("Result:", num1 / num2);
        }
        break;

    default:
        console.log("Invalid operation.");
        console.log("Use: add, subtract, multiply, or divide");
}