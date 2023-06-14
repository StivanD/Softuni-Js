function minNumber(input){
    let num = input.shift();

    let minNum = Number.MAX_VALUE;

    while (num !== "Stop") {
        if (Number(num) < minNum) {
            minNum = Number(num);
        }
    
        num = input.shift()
    }

    console.log(minNum);
}
