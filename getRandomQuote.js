const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "Success is a lousy teacher. It seduces smart people into thinking they can't lose. - Bill Gates"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

const randomQuote = getRandomQuote();
console.log(randomQuote);