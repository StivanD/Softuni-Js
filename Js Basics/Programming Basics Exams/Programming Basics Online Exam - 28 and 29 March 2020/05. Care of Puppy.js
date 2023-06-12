function careOfPuppy(input) {
    let boughtFood = Number(input[0]) * 1000;
    
    index = 1;
    let currentFood = Number(input[index]);
    
    let eatenFood = 0;
    
    while (input[index] !== "Adopted") {
        eatenFood += currentFood;
        
        index++;
        currentFood = Number(input[index]);
    }
    
    if (eatenFood <= boughtFood) {
        console.log(`Food is enough! Leftovers: ${boughtFood - eatenFood} grams.`);
    }
    else {
        console.log(`Food is not enough. You need ${eatenFood - boughtFood} grams more.`);
    }
}
