function divisions(num) {

    let biggestDivisor = 0;
    
    if (num % 10 === 0) {
        biggestDivisor = 10;
    } else if (num % 7 === 0) {
        biggestDivisor = 7;
    } else if (num % 6 === 0) {
        biggestDivisor = 6;
    } else if (num % 3 === 0) {
        biggestDivisor = 3;
    } else if (num % 2 === 0) {
        biggestDivisor = 2;
    } 

    if (biggestDivisor > 0) {
        console.log(`The number is divisible by ${biggestDivisor}`);
    } else {
        console.log(`Not divisible`);
    }
}