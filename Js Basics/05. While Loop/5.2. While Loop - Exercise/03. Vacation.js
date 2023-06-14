function vacation(input){
    let neededMoney = Number(input[0]);
    let moneyOwned = Number(input[1]);

    let index = 2;
    let action = input[index];
    let sum = Number(input[index + 1]);

    let passedDays = 0;
    let consecutiveSpendingDays = 0;

    while (moneyOwned < neededMoney) {
        if (consecutiveSpendingDays >= 5) {
            console.log(`You can't save the money.`);
            console.log(passedDays);
            break;
        }

        if (action === "spend") {
            moneyOwned -= sum;
            consecutiveSpendingDays++;
            if (moneyOwned < 0) {
                moneyOwned = 0;
            }
        }
        else if (action === "save") {
            moneyOwned += sum;
            consecutiveSpendingDays = 0;
        }
        
        passedDays++
        index += 2;
        action = input[index];
        sum = Number(input[index + 1]);
    }

    if (moneyOwned >= neededMoney) {
        console.log(`You saved the money for ${passedDays} days.`);
    }
}
