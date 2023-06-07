function uniquePinCodes(input) {
    let firstNumMax = Number(input[0]);
    let secondNumMax = Number(input[1]);
    let thirdNumMax = Number(input[2]);

    for (let i = 2; i <= firstNumMax; i += 2) {
        for (let j = 2; j <= secondNumMax; j++) {
            if (j === 2 || j === 3 || j === 5 || j === 7) {
                for (let k = 2; k <= thirdNumMax; k += 2) {
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
}
