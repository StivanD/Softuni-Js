function familyTrip(input){
    let [budget, nightsCount, pricePerNight, additionalCostsPercentage] = [...input.map((x) => Number(x))];
    
    if (nightsCount > 7) {
        pricePerNight *= 0.95;
    }
    
    let allNightsPrice = nightsCount * pricePerNight;
    let additionalCosts = (budget * additionalCostsPercentage) / 100;
    
    let totalPrice = allNightsPrice + additionalCosts;
    
    if (totalPrice <= budget) {
        console.log(`Ivanovi will be left with ${(budget - totalPrice).toFixed(2)} leva after vacation.`);
    }
    else {
        console.log(`${(totalPrice - budget).toFixed(2)} leva needed.`)
    }
}
