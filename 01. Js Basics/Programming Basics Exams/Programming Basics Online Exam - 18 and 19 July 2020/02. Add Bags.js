function addBags(input) {
    let priceForOver20KgLuggage = Number(input[0]);
    let luggageKg = Number(input[1]);
    let daysUntilTakeOff = Number(input[2]);
    let luggagesCount = Number(input[3]);
    
    let luggagePrice = 0;
    
    if (luggageKg < 10) {
        luggagePrice = priceForOver20KgLuggage * 0.2;
    }
    else if (luggageKg <= 20) {
        luggagePrice = priceForOver20KgLuggage * 0.5;
    }
    else {
        luggagePrice = priceForOver20KgLuggage;
    }
    
    if (daysUntilTakeOff > 30) {
        luggagePrice += luggagePrice * 0.1;
    }
    else if (daysUntilTakeOff >= 7) {
        luggagePrice += luggagePrice * 0.15;
    }
    else {
        luggagePrice += luggagePrice * 0.4;
    }
    
    console.log(`The total price of bags is: ${(luggagePrice * luggagesCount).toFixed(2)} lv.`);
}
