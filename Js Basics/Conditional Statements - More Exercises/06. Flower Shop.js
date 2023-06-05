function flowerShop(input){
    let magnoliasCount = Number(input[0]);
    let hyacinthsCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let cactusesCount = Number(input[3]);
    let giftPrice = Number(input[4]);

    let sum = magnoliasCount * 3.25 + hyacinthsCount * 4 + rosesCount * 3.50 + cactusesCount * 8;

    sum -= sum * 0.05;

    if (sum >= giftPrice) {
        console.log(`She is left with ${Math.floor(sum - giftPrice)} leva.`);
    }
    else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - sum)} leva.`);
    }
}
