function specialNumbers(input) {
    let n = Number(input[0]);
    let counter = 0;
    let empty = "";

    for (let i = 1111; i <= 9999; i++) {
        let currentNum = "" + i;
        for (let j = 0; j < 4; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (n % currentDigit === 0) {
                counter++;
            }
        }
        if (counter === 4) {
            empty += currentNum + " ";
        }
        counter=0;
    }
    console.log(empty);
}