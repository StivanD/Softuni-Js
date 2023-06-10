function easterBakery(input) {
    let [flourPricePerKg, flourKg, sugarKg, eggBoxesCount, yeastPackagesCount] = [...input.map((x) => Number(x))];
    
    let sugarPrice = (flourPricePerKg * 0.75) * sugarKg;
    let eggBoxesPrice = (flourPricePerKg * 1.1) * eggBoxesCount;
    let yeastPrice = ((flourPricePerKg * 0.75) * 0.2) * yeastPackagesCount;
    let flourPrice = flourKg * flourPricePerKg;
    
    let totalPrice = sugarPrice + eggBoxesPrice + yeastPrice + flourPrice;
    
    console.log(totalPrice.toFixed(2));
}
