function skeleton(input) {
    let [minutes, seconds, length, secondsPer100metres] = [...input.map((x) => Number(x))];
    
    let minsToSeconds = minutes * 60 + seconds;
    let timesDecreasing = length / 120;
    let totalDecreasedTime = timesDecreasing * 2.5;
    let marinTime = (length / 100) * secondsPer100metres - totalDecreasedTime;
    
    if (marinTime <= minsToSeconds) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${marinTime.toFixed(3)}.`);
    }
    else {
        console.log(`No, Marin failed! He was ${Math.abs(minsToSeconds - marinTime).toFixed(3)} second slower.`)
    }
}