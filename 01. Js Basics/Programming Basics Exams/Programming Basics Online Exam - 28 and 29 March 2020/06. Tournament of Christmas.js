function tournamentOfChristmas(input) {
    let days = Number(input[0]);
    
    let money = 0;
    let index = 1;
    
    let sport = input[index];
    let outcome = input[index + 1];
    
    let wins = 0, losses = 0;
    
    for (let i = 1; i <= days; i++) {
        let currentWins = 0, currentLosses = 0, moneyForTheDay = 0;
        
        while (sport !== "Finish") {
            if (outcome === "win") {
                wins++;
                currentWins++;
                moneyForTheDay += 20;
            }
            else if (outcome === "lose") {
                losses++;
                currentLosses++;
            }
            
             index += 2;
             sport = input[index];
             outcome = input[index + 1];
        }
        if (currentWins > currentLosses) {
            moneyForTheDay *= 1.1; 
        }
        index++;
        money += moneyForTheDay;
        sport = input[index];
        outcome = input[index + 1];
    }
    
    if (wins > losses) {
        money *= 1.2;
        console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`);
    }
    else {
        console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`);
    }
}

