function dishwasher(input){
    let detergentBottles = Number(input[0]);

    let index = 1;
    let dishesAndPots = Number(input[index]);

    let detergent = detergentBottles * 750;

    let cleanDishes = 0;
    let cleanPots = 0;

    let isEnough = false;

    while (detergent >= 0) {
        if (input[index] === "End") {
            isEnough = true;
            break;
        }

        if (index % 3 === 0) {
            cleanPots += dishesAndPots;
            detergent -= dishesAndPots * 15;
        }
        else {
            cleanDishes += dishesAndPots;
            detergent -= dishesAndPots * 5;
        }
        
        index++;
        dishesAndPots = Number(input[index]);
    }

    if(isEnough) {
        console.log("Detergent was enough!");
        console.log(`${cleanDishes} dishes and ${cleanPots} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml.`);
    }
    else {
        console.log(`Not enough detergent, ${Math.abs(detergent)} ml. more necessary!`);
    }
}
