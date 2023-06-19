function specialNumbers(num) {
    let sum = 0;
    
    for (let i = 1; i <= num; i++) {
        sum = i
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);
        
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        }
        else {
            console.log(`${i} -> False`);
        }
    }
}
