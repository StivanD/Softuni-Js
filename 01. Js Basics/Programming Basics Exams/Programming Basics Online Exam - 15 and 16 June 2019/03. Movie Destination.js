function movieDestination(input){
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let daysCount = input[3];
    
    let sum = 0;
    
    switch (season) {
        case "Winter":
            switch (destination) {
                case "Dubai":
                    sum = (45000 * daysCount) * 0.70;
                    break;
                case "Sofia":
                    sum = 17000 * daysCount + ((17000 * daysCount) * 0.25);
                    break;
                case "London":
                    sum = 24000 * daysCount;
                    break;
            }
            break;
        case "Summer":
            switch (destination) {
                case "Dubai":
                    sum = (40000 * daysCount) * 0.70;
                    break;
                case "Sofia":
                    sum = 12500 * daysCount + ((12500 * daysCount) * 0.25);
                    break;
                case "London":
                    sum = 20250 * daysCount;
                    break;
            }
            break;
    }
    
    if (sum <= budget) {
        console.log(`The budget for the movie is enough! We have ${(budget - sum).toFixed(2)} leva left!`);
    }
    else {
        console.log(`The director needs ${(sum - budget).toFixed(2)} leva more!`);
    }
}