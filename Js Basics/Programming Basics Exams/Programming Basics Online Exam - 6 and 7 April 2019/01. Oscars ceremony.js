function oscarsCeremony(input){
    let rent = Number(input[0]);
    
    let statuettesPrice = rent * 0.70;
    let cateringPrice = statuettesPrice * 0.85;
    let soundPrice = cateringPrice / 2;
    
    let finalPrice = rent + statuettesPrice + cateringPrice + soundPrice;
    
    console.log(finalPrice.toFixed(2));
}
