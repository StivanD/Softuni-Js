function accountBalance(input){
    let sum = input.shift();

    let totalSum = 0;

    while (sum !== "NoMoreMoney") {

        if(sum < 0) {
            console.log("Invalid operation!");
            break;
        }
        else {
            totalSum += Number(sum);
            console.log(`Increase: ${Number(sum).toFixed(2)}`);
        }


        sum = input.shift();
    }

    console.log(`Total: ${totalSum.toFixed(2)}`);
}
