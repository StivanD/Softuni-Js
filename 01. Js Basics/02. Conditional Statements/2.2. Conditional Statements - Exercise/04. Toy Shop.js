function toyShop(input){
    let [excursionPrice, puzzlesCount, dollsCount, teddyBearsCount, minionsCount, trucksCount] = [...input.map((x) => Number(x))];
    
    let toysCount = puzzlesCount + dollsCount + teddyBearsCount + minionsCount + trucksCount;
    let toysPrice = puzzlesCount * 2.60 + dollsCount * 3 + teddyBearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;

    if (toysCount >= 50){
        toysPrice -= toysPrice * 0.25;
    }

    let moneyEarned = toysPrice - toysPrice * 0.10;

    if (moneyEarned >= excursionPrice){
        console.log(`Yes! ${(moneyEarned - excursionPrice).toFixed(2)} lv left.`);
    }
    else {
        console.log(`Not enough money! ${Math.abs(excursionPrice - moneyEarned).toFixed(2)} lv needed.`)
    }

}