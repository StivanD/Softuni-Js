function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermenCount = Number(input[2]);

    let tourismPrice = 0;

    if (season === "Spring") {
        tourismPrice = 3000;
    }
    else if (season === "Summer" || season === "Autumn") {
        tourismPrice = 4200;
    }
    else if (season === "Winter") {
        tourismPrice = 2600;
    }

    if (fishermenCount <= 6) {
        tourismPrice -= tourismPrice * 0.1;
    }
    else if (fishermenCount > 6 && fishermenCount <= 11) {
        tourismPrice -= tourismPrice * 0.15;
    }
    else {
        tourismPrice -= tourismPrice * 0.25;
    }

    if (fishermenCount % 2 == 0 && season !== "Autumn") {
        tourismPrice -= tourismPrice * 0.05
    }

    if (budget >= tourismPrice) {
        console.log(`Yes! You have ${(budget - tourismPrice).toFixed(2)} leva left.`);
    }
    else {
        console.log (`Not enough money! You need ${Math.abs(tourismPrice - budget).toFixed(2)} leva.`);
    }
}
