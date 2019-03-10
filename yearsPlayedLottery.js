var lotteryGuess = [1, 2, 3, 4, 5, 6];
var lotteryActual = [];
var count = 0;
var weeksPlayed = 0;

function randomLottery() {
    for (i = 0; i < lotteryGuess.length; i++) {
        lotteryActual[i] = Math.floor(Math.random() * 9);
    }
}

function checkNumbers() {
    for (i = 0; i < lotteryActual.length; i++) {
        if (lotteryActual[i] === lotteryGuess[i]) {
            count++;
        }
    }
    if (count > 5) { //counting if you have all six digits correct
        console.log("count is: " + count + "... significant winnnings after: " + (weeksPlayed / 52));
        running = false;
    }
    count = 0;
}

let running = true;
while (running) {
    randomLottery();
    checkNumbers();
    weeksPlayed++;
}
