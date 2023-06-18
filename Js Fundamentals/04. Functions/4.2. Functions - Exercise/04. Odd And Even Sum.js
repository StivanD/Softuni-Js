function oddAndEvenSum(num) {
    let stringNum = num.toString();
    let sumEven = evenSum(stringNum);
    let sumOdd = oddSum(stringNum)

    function oddSum(stringNum) {
        let sum = 0;
        for (let i = 0; i < stringNum.length; i++) {
            let number = Number(stringNum[i]);
            if (number % 2 !== 0) {
                sum += number;
            }
        }
        return sum;
    }

    function evenSum(stringNum) {
        let sum = 0;
        for (let i = 0; i < stringNum.length; i++) {
            let number = Number(stringNum[i]);
            if (number % 2 === 0) {
                sum += number;
            }
        }
        return sum;
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}