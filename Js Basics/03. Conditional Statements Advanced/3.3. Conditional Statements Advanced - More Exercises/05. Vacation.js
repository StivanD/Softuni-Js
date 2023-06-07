function vacation(input){
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let location = "";
    let placeOfAccomodation = "";

    if (budget <= 1000) {
        placeOfAccomodation = "Camp";

        if (season === "Summer") {
            location = "Alaska";
            price = budget * 0.65;
        }
        else if (season === "Winter") {
            location = "Morocco";
            price = budget * 0.45;
        }
    }
    else if (budget > 1000 && budget <= 3000) {
        placeOfAccomodation = "Hut";

        if (season === "Summer") {
            location = "Alaska";
            price = budget * 0.8;
        }
        else if (season === "Winter") {
            location = "Morocco";
            price = budget * 0.6;
        }
    }
    else {
        placeOfAccomodation = "Hotel";
        if (season === "Summer") {
            location = "Alaska";
        }
        else if (season === "Winter") {
            location = "Morocco";
        }
        price = budget * 0.9;
    }

    console.log(`${location} - ${placeOfAccomodation} - ${price.toFixed(2)}`);
}
