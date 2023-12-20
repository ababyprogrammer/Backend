var counter = 0;

function increment() {
    counter++;
}

function decrement() {
    counter--;
}

function displayCounter() {
    console.log("The counter is now " + counter);
}

increment();
displayCounter(); // Print "The counter is now 1".
decrement();
displayCounter(); // Print "The counter is now 0".