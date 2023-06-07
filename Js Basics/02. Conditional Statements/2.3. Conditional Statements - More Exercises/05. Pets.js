function pets(input){
    let days = Number(input[0]);
    let foodKgNeeded = Number(input[1]);
    let dogFoodPerDay = Number(input[2]);
    let catFoodPerDay = Number(input[3]);
    let turtleFoodGrams = Number(input[4]);

    let dogFoodNeeded = days * dogFoodPerDay;
    let catFoodNeeded = days * catFoodPerDay;
    let turtleFoodNeeded = days * (turtleFoodGrams / 1000);

    let totalFood = dogFoodNeeded + catFoodNeeded + turtleFoodNeeded;

    if (totalFood <= foodKgNeeded) {
        console.log(`${Math.floor(foodKgNeeded - totalFood)} kilos of food left.`);
    }
    else {
        console.log(`${Math.ceil(totalFood - foodKgNeeded)} more kilos of food are needed.`)
    }
}
