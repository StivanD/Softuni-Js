function flowers(input){
    let chrysanthemumsCount = Number(input[0]);
    let rosesCount = Number(input[1]);
    let tulipsCount = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];

    let sum = 0;

    if (season === "Spring" || season === "Summer") {
        sum += chrysanthemumsCount * 2 + rosesCount * 4.10 + tulipsCount * 2.50;
    }
    else if (season === "Autumn" || season === "Winter") {
        sum += chrysanthemumsCount * 3.75 + rosesCount * 4.50 + tulipsCount * 4.15;
    }

    if (isHoliday === "Y") {
        sum += sum * 0.15;
    }
    
    if (season === "Spring" && tulipsCount > 7) {
        sum -= sum * 0.05;
    }
    
    if (season === "Winter" && rosesCount >= 10) {
        sum -= sum * 0.1;
    }

    if ((chrysanthemumsCount + rosesCount + tulipsCount) > 20) {
        sum -= sum * 0.2;
    }

    sum += 2;

    console.log(sum.toFixed(2));
}
