function PetShop(input){
    let dogFoodCount = Number(input[0]);
    let catFoodCount = Number(input[1]);
    
    const dogFoodPrice = 2.50;
    const catFoodPrice = 4;

    let finalSum = dogFoodCount * dogFoodPrice + catFoodCount * catFoodPrice;

    console.log(`${finalSum} lv.`)
}