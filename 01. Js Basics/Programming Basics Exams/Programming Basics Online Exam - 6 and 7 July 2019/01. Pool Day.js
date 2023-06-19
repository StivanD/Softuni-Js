function poolDay(input){
    let [peopleCount, entryTax, loungerPrice, umbrellaPrice] = [...input.map((x) => Number(x))];
    
    let totalEntryTax = peopleCount * entryTax;
    let totalLoungersPrice = Math.ceil(peopleCount * 0.75) * loungerPrice;
    let totalUmbrellasPrice = Math.ceil(peopleCount / 2) * umbrellaPrice;
    
    let finalPrice = totalEntryTax + totalLoungersPrice + totalUmbrellasPrice;
    
    console.log(`${finalPrice.toFixed(2)} lv.`);
}
