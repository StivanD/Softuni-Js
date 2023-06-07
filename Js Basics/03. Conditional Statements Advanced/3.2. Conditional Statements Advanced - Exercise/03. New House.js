function newHouse(input){
    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    if (flowersType === "Roses") {
        price = flowersCount * 5
        if (flowersCount > 80) {
            price -= price * 0.1
        }
    }
    else if (flowersType === "Dahlias") {
        price = flowersCount * 3.80;
        if (flowersCount > 90) {
            price -= price * 0.15;
        }
    }
    else if (flowersType === "Tulips") {
        price = flowersCount * 2.80;
        if (flowersCount > 80) {
            price -= price * 0.15;
        }
    }
    else if (flowersType === "Narcissus") {
        price = flowersCount * 3;
        if (flowersCount < 120) {
            price += price * 0.15;
        }
    }
    else if (flowersType === "Gladiolus") {
        price = flowersCount * 2.50;
        if (flowersCount < 80) {
            price += price * 0.2;
        }
    }

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget - price).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money, you need ${Math.abs(price - budget).toFixed(2)} leva more.`);
    }
}