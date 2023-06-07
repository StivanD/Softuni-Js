function cleverLily(input){
    let n = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let priceForOneToy = Number(input[2]);

    let toys = 0;
    let money = 0;
    
    for (i = 1; i <= n; i++) {

        if (i % 2 == 0) {
            money += 10 + (toys - 1) * 10 - 1;
        }
        else {
            toys++;
        }
    }

    money += toys * priceForOneToy;

    if (money >= washingMachinePrice) {
        console.log(`Yes! ${(money - washingMachinePrice).toFixed(2)}`);
    }
    else {
        console.log(`No! ${(washingMachinePrice - money).toFixed(2)}`);
    }
}
