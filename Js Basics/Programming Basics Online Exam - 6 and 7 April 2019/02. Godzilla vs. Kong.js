function godzillaVsKong(input){
    let budget = Number(input[0]);
    let movieExtrasCount = Number(input[1]);
    let clothesPricePerExtra = Number(input[2]);

    let decorPrice = budget * 0.10;
    
    let clothesPrice = clothesPricePerExtra * movieExtrasCount;

    if (movieExtrasCount > 150) {
        clothesPrice -= clothesPrice * 0.10;
    }

    let finalPrice = decorPrice + clothesPrice;

    if (budget < finalPrice){
        console.log("Not enough money!");
        console.log(`Wingard needs ${Math.abs(finalPrice - budget).toFixed(2)} leva more.`);
    }
    else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - finalPrice).toFixed(2)} leva left.`);
    }
}