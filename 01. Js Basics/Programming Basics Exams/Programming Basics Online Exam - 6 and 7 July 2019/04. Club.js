function club(input){
    let goal = Number(input[0]);
    let index = 1;
    let cocktailName = input[index];
    let cocktailsCount = Number(input[index + 1]);
    
    let income = 0;
    let finish = false;
    
    while(income < goal) {
        if (input[index] === "Party!") {
            finish = true;
            break;
        }
        
        let priceForCurrentOrder = cocktailName.length * cocktailsCount;
        
        income += (priceForCurrentOrder % 2 !== 0) ? priceForCurrentOrder * 0.75 : priceForCurrentOrder;
        
        index += 2;
        cocktailName = input[index];
        cocktailsCount = Number(input[index + 1]);
    }

    if (finish) {
        console.log(`We need ${(goal - income).toFixed(2)} leva more.`);
    }
    else {
        console.log("Target acquired.");
    }
    
    console.log(`Club income - ${income.toFixed(2)} leva.`);
}
