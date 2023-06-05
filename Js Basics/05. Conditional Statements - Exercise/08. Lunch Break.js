function lunchBreak(input){
    let seriesName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchBreak = breakDuration / 8;
    let rest = breakDuration / 4;

    let timeLeft = breakDuration - lunchBreak - rest;

    if (timeLeft >= episodeDuration){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft - episodeDuration)} minutes free time.`);
    }
    else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.abs(Math.ceil(episodeDuration - timeLeft))} more minutes.`)
    }
}
