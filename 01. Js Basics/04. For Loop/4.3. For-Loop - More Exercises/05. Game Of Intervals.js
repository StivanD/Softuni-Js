function gameOfIntervals(input){
    let movesCount = Number(input[0]);
    
    let finalScore = 0;
    
    let zeroTo9Percentage = 0;
    let tenTo19Percentage = 0;
    let twentyTo29Percentage = 0;
    let thirtyTo39Percentage = 0;
    let fourtyTo50Percentage = 0;
    let invalidNumbersPercentage = 0;

    for(let i = 1; i <= movesCount; i++) {
        let currentPoints = Number(input[i]);
        
        if (currentPoints >= 0 && currentPoints <= 9) {
            finalScore += currentPoints * 0.2;
            zeroTo9Percentage++;
        }
        else if (currentPoints >= 10 && currentPoints <= 19) {
            finalScore += currentPoints * 0.3;
            tenTo19Percentage++;
        }
        else if (currentPoints >= 20 && currentPoints <= 29) {
            finalScore += currentPoints * 0.4;
            twentyTo29Percentage++;
        }
        else if (currentPoints >= 30 && currentPoints <= 39) {
            finalScore += 50;
            thirtyTo39Percentage++;
        }
        else if (currentPoints >= 40 && currentPoints <= 50) {
            finalScore += 100;
            fourtyTo50Percentage++;
        }
        else {
            finalScore /= 2;
            invalidNumbersPercentage++;
        }
    }
    
    zeroTo9Percentage = zeroTo9Percentage * 100 / movesCount;
    tenTo19Percentage = tenTo19Percentage * 100 / movesCount;
    twentyTo29Percentage = twentyTo29Percentage * 100 / movesCount;
    thirtyTo39Percentage = thirtyTo39Percentage * 100 / movesCount;
    fourtyTo50Percentage = fourtyTo50Percentage * 100 / movesCount;
    invalidNumbersPercentage = invalidNumbersPercentage * 100 / movesCount;
    
    
    console.log(finalScore.toFixed(2));
    console.log(`From 0 to 9: ${zeroTo9Percentage.toFixed(2)}%`);
    console.log(`From 10 to 19: ${tenTo19Percentage.toFixed(2)}%`);
    console.log(`From 20 to 29: ${twentyTo29Percentage.toFixed(2)}%`);
    console.log(`From 30 to 39: ${thirtyTo39Percentage.toFixed(2)}%`);
    console.log(`From 40 to 50: ${fourtyTo50Percentage.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidNumbersPercentage.toFixed(2)}%`);
}
