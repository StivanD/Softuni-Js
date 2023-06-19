function easterGuests(input) {
    let guestsCount = Number(input[0]);
    let budget = Number(input[1]);
    
    let easterBreadsCount = Math.ceil(guestsCount / 3);
    let eggsCount = guestsCount * 2;
    
    let easterBreadsPrice = easterBreadsCount * 4;
    let eggsPrice = eggsCount * 0.45;
    
    let finalPrice = easterBreadsPrice + eggsPrice;
    
    if (finalPrice <= budget) {
        console.log(`Lyubo bought ${easterBreadsCount} Easter bread and ${eggsCount} eggs.`);
        console.log(`He has ${(budget - finalPrice).toFixed(2)} lv. left.`);
    }
    else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(finalPrice - budget).toFixed(2)} lv. more.`)
    }
}
