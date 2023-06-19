function fruitMarket(input){
    let [strawberriesPrice, bananasKg, orangesKg, raspberriesKg, strawberriesKg] = [...input.map((x) => Number(x))];
    
    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberriesPrice * 0.6;
    let bananasPrice = raspberriesPrice * 0.2;
    
    let finalPrice = strawberriesPrice * strawberriesKg + raspberriesPrice * raspberriesKg + orangesPrice * orangesKg + bananasPrice * bananasKg;
    
    console.log(finalPrice.toFixed(2));
}
