function depositCalculator(input){
    let depositedSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let yearlyIntrestPercent = Number(input[2]);

    let sum = depositedSum + depositPeriod * ((depositedSum * yearlyIntrestPercent / 100) / 12);

    console.log(sum);
}