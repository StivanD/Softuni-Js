function maxNumber(input){
    let num = input.shift();

    let maxNum = Number.MIN_VALUE;

    while (num !== "Stop") {
        if (Number(num) > maxNum) {
            maxNum = Number(num);
        }
    
        num = input.shift()
    }

    console.log(maxNum);
}