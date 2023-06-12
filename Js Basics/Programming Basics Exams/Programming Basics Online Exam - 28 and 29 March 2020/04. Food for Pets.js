function foodForPets(input){
    let days = Number(input[0]);
    let food = Number(input[1]);
    
    let index = 2;
    
    let eatenBiscuits = 0;
    let percentageEatenFood = 0;
    let percentageEatenDogFood = 0;
    let percentageEatenCatFood = 0;
    
    for (let i = 1; i <= days; i++) {
        let dogFood = Number(input[index]);
        let catFood = Number(input[index + 1]);
        
        percentageEatenFood += dogFood + catFood;
        percentageEatenDogFood += dogFood;
        percentageEatenCatFood += catFood;
        
        if (i % 3 === 0) {
            eatenBiscuits += (dogFood + catFood) * 0.1;
        }
        
        index += 2;
    }
    
    percentageEatenDogFood *= 100 / percentageEatenFood;
    percentageEatenCatFood *= 100 / percentageEatenFood;
    percentageEatenFood *= 100 / food;
    
    console.log(`Total eaten biscuits: ${Math.round(eatenBiscuits)}gr.`);
    console.log(`${percentageEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentageEatenDogFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentageEatenCatFood.toFixed(2)}% eaten from the cat.`);
}
