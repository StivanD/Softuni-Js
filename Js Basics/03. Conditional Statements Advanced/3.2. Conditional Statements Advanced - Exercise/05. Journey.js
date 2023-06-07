function journey(input){
    let budget = Number(input[0]);
    let season = input[1];

    let destination;
    let place;

    if (budget <= 100){
        destination = "Bulgaria";
        if (season === "summer") {
            budget *= 0.3;
            place = "Camp"
        }
        else if (season === "winter") {
            budget *= 0.7;
            place = "Hotel"
        }
    }
    else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";
        
        if (season === "summer") {
            budget *= 0.4;
            place = "Camp"
        }
        else if (season === "winter") {
            budget *= 0.8;
            place = "Hotel"
        }
    }
    else {
        destination = "Europe";
        place = "Hotel";
        budget *= 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${budget.toFixed(2)}`);
}
