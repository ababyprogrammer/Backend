function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * calculateFactorial(number - 1);
    }
}

const numberToCalculate = 5; // You can change this number to calculate the factorial of a different number
const result = calculateFactorial(numberToCalculate);
console.log(`The factorial of ${numberToCalculate} is ${result}`);