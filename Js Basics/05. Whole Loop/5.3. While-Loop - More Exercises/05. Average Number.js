function averageNumber(input){
    let n = Number(input[0]);

    let counter = 1;
    let nextNum = Number(input[counter]);

    let averageSum = 0;

    while (counter <= n) {
        averageSum += nextNum;
        
        counter++;
        nextNum = Number(input[counter]);
    }

    averageSum /= n;

    console.log(averageSum.toFixed(2));
}
