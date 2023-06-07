function harvest(input){
    let vineyardArea = Number(input[0]);
    let grapes = Number(input[1]);
    let wineLitresNeeded = Number(input[2]);
    let workersCount = Number(input[3]);

    let totalWineLitres = (40 * (vineyardArea * grapes) / 100) / 2.5;

    if (totalWineLitres < wineLitresNeeded) {
        console.log(`It will be a tough winter! More ${Math.floor(wineLitresNeeded - totalWineLitres)} liters wine needed.`);
    }
    else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(totalWineLitres)} liters.`);
        console.log(`${Math.ceil(totalWineLitres - wineLitresNeeded)} liters left -> ${Math.ceil((totalWineLitres - wineLitresNeeded) / workersCount)} liters per person.`);
    }
}
