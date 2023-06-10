function easterBake(input){
    let easterBreadsCount = Number(input[0]);
    
    let index = 1;
    let currentSugar = Number(input[index]);
    let currentFlour = Number(input[index + 1]);
    
    let usedSugar = 0;
    let usedFlour = 0;
    
    max = {
        sugar: 0,
        flour: 0
    };
    
    for (let i = 1; i <= easterBreadsCount; i++) {
        usedSugar += currentSugar;
        usedFlour += currentFlour;
        
        if (currentSugar > max.sugar) {
            max.sugar = currentSugar;
        }
        if (currentFlour > max.flour) {
            max.flour = currentFlour;
        }
        
        
        index += 2;
        currentSugar = Number(input[index]);
        currentFlour = Number(input[index + 1]);
    }
    
    let sugarPackages = Math.ceil(usedSugar / 950);
    let flourPackages = Math.ceil(usedFlour / 750);
    
    console.log(`Sugar: ${sugarPackages}`);
    console.log(`Flour: ${flourPackages}`);
    console.log(`Max used flour is ${max.flour} grams, max used sugar is ${max.sugar} grams.`);
}
