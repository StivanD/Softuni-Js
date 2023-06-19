function series(input){
    let budget = Number(input[0]);
    let seriesCount = Number(input[1]);
    
    let index = 2;
    
    for (let i = 1; i <= seriesCount; i++) {
        let currentSeries = input[index];
        let currentPrice = Number(input[index + 1]);
        
        switch (currentSeries) {
            case "Thrones":
                budget -= currentPrice / 2;
                break;
            case "Lucifer":
                budget -= currentPrice - currentPrice * 0.4;
                break;
            case "Protector":
                budget -= currentPrice - currentPrice * 0.3;
                break;
            case "TotalDrama":
                budget -= currentPrice - currentPrice * 0.2;
                break;
            case "Area":
                budget -= currentPrice - currentPrice * 0.1;
                break;
            default:
                budget -= currentPrice;
                break;
        }
        
        index += 2;
    }
    
    if (budget >= 0) {
        console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`);
    }
    else {
        console.log(`You need ${Math.abs(budget).toFixed(2)} lv. more to buy the series!`);
    }
}
