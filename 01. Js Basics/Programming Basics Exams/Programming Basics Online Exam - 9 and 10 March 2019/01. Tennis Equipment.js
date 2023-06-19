function tennisEquipment(input){
    let [raquetPrice, raquetsCount, shoesCount] = [...input.map((x) => Number(x))];
    
    let allRaquetsPrice = raquetPrice * raquetsCount;
    let shoesPrice = (raquetPrice / 6) * shoesCount;
    let otherEquipmentPrice = (allRaquetsPrice + shoesPrice) * 0.2;
    let finalPrice = allRaquetsPrice + shoesPrice + otherEquipmentPrice;
    
    console.log(`Price to be paid by Djokovic ${Math.floor(finalPrice / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(finalPrice * 7 / 8)}`);
}
