function easterParty(input) {
    let [guestsCount, pricePerGuest, budget] = [...input.map((x) => Number(x))];
    
    let price = 0;
    
    if (guestsCount >= 10 && guestsCount <= 15) {
        price = guestsCount * (pricePerGuest * 0.85);
    }
    else if (guestsCount > 15 && guestsCount <= 20) {
        price = guestsCount * (pricePerGuest * 0.80);
    }
    else if (guestsCount > 20) {
        price = guestsCount * (pricePerGuest * 0.75);
    }
    else {
        price = guestsCount * pricePerGuest;
    }
    
    price += budget * 0.1;
    
    if (price <= budget) {
        console.log(`It is party time! ${(budget - price).toFixed(2)} leva left.`)
    }
    else {
        console.log(`No party! ${(price - budget).toFixed(2)} leva needed.`);
    }
}

