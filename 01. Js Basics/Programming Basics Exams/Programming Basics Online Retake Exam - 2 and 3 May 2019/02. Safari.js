function safari(input){
    let budget = Number(input[0]);
    let litresNeededFuel = Number(input[1]);
    let dayOfWeek = input[2];
    
    let fuelPrice = 2.10 * litresNeededFuel;
    let finalPrice = 0;
    
    switch (dayOfWeek) {
        case "Saturday":
            finalPrice = (fuelPrice + 100) * 0.9;
            break;
        case "Sunday":
            finalPrice = (fuelPrice + 100) * 0.8;
            break;
    }
    
    if (finalPrice <= budget) {
        console.log(`Safari time! Money left: ${(budget - finalPrice).toFixed(2)} lv.`);
    }
    else {
        console.log(`Not enough money! Money needed: ${(finalPrice - budget).toFixed(2)} lv.`)
    }
}
