function transportPrice(input){
    let kilometres = Number(input[0]);
    let timeOfTheDay = input[1];

    let price = 0;

    if (kilometres < 20) {
        if (timeOfTheDay === "day") {
            price += 0.70 + kilometres * 0.79;
        }
        else if (timeOfTheDay === "night") {
            price += 0.70 + kilometres * 0.90;
        }
    }
    else if (kilometres >= 20 && kilometres < 100) {
        price += kilometres * 0.09;
    }
    else {
        price += kilometres * 0.06;
    }

    console.log(price.toFixed(2));
}
