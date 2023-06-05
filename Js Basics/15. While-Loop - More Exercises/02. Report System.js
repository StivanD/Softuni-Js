function reportSystem(input){
    let sumToCollect = Number(input[0]);

    let index = 1;
    let price = Number(input[index]);

    let collectedSum = 0;
    let cashSum = 0;
    let cardSum = 0;
    let cashCount = 0;
    let cardCount = 0;

    let end = false;

    while(collectedSum < sumToCollect) {
        if (input[index] === "End") {
            end = true;
            break;
        }

        if (index % 2 === 0) {
            if (price < 10) {
                console.log("Error in transaction!");
            }
            else {
                collectedSum += price;
                cardSum += price;
                cardCount++;
                console.log("Product sold!");
            }
        }
        else {
            if (price > 100) {
                console.log("Error in transaction!");
            }
            else {
                collectedSum += price;
                cashSum += price;
                cashCount++;
                console.log("Product sold!");
            }
        }

        index++;
        price = Number(input[index]);
    }

    if (end) {
        console.log("Failed to collect required money for charity.");
    }
    else {
        console.log(`Average CS: ${(cashSum / cashCount).toFixed(2)}`);
        console.log(`Average CC: ${(cardSum / cardCount).toFixed(2)}`);
    }
}
