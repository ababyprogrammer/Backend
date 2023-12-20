var count = 0;

function cc(card) {
    // Only change this code below this line.
    var regex = /[J,Q,K,A]/;
    if (card > 1 && card < 7) {
        count++;
    } else if (card == 10 || String(card).match(regex)) {
        count--;
    }

    if (count > 0) return count + "Bet";
    return count + "Hold";
}
// Only change this code below this line.

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(card);