function vegetableMarket(input){
    let vegetablesPricePerKilo = Number(input[0]);
    let fruitsPricePerKilo = Number(input[1]);
    let vegetablesKilos = Number(input[2]);
    let fruitsKilos = Number(input[3]);

    let price = ((vegetablesPricePerKilo * vegetablesKilos) + (fruitsPricePerKilo * fruitsKilos)) / 1.94;

    console.log((price).toFixed(2));
}
