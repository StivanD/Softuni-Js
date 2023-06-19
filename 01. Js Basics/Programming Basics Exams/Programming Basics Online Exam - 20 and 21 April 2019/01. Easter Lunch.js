function easterLunch(input){
    let [easterBreadsCount, eggsBoxesCount, cookiesKg] = [...input.map((x) => Number(x))];
    
    let easterBreadsPrice = easterBreadsCount * 3.20;
    let eggsBoxesPrice = eggsBoxesCount * 4.35;
    let cookiesPrice = cookiesKg * 5.40;
    let eggsPaintPrice = eggsBoxesCount * 12 * 0.15;
    let totalPrice = easterBreadsPrice + eggsBoxesPrice + cookiesPrice + eggsPaintPrice;
    
    console.log(totalPrice.toFixed(2));
}
