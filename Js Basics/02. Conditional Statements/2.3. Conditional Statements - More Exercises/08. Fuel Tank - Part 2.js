function fuelTankPart2(input){
    let fuelType = input[0];
    let litres = Number(input[1]);
    let hasDiscountCard = input[2];

    let fuelPrice = 0

    switch (fuelType) {
        case "Gasoline":
            fuelPrice = hasDiscountCard === "Yes" ? 2.22 - 0.18 : 2.22;
            break;
        case "Diesel":
            fuelPrice = hasDiscountCard === "Yes" ? 2.33 - 0.12 : 2.33;
            break;
        case "Gas":
            fuelPrice = hasDiscountCard === "Yes" ? 0.93 - 0.08 : 0.93;
            break;
    }

    if (litres > 25) {
        fuelPrice *= 0.90;
    }
    else if (litres >= 20) {
        fuelPrice *= 0.92;
    }

    console.log(`${(fuelPrice * litres).toFixed(2)} lv.`);
}
