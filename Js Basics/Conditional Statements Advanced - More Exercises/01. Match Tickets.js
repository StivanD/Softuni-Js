function matchTickets(input){
    let budget = Number(input[0]);
    let ticketCategory = input[1];
    let peopleCount = Number(input[2]);

    let neededMoney = 0;

    if (peopleCount > 0 && peopleCount <= 4) {
        budget -= budget * 0.75;
    }
    else if (peopleCount >= 5 && peopleCount <= 9) {
        budget -= budget * 0.6;
    }
    else if (peopleCount >= 10 && peopleCount <= 24) {
        budget -= budget * 0.5;
    }
    else if (peopleCount >= 25 && peopleCount <= 49) {
        budget -= budget * 0.4;
    }
    else {
        budget -= budget * 0.25;
    }

    if (ticketCategory === "VIP") {
        neededMoney = peopleCount * 499.99;
    }
    else if (ticketCategory === "Normal") {
        neededMoney = peopleCount * 249.99;
    }

    if (neededMoney <= budget) {
        console.log(`Yes! You have ${(budget - neededMoney).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money! You need ${(neededMoney - budget).toFixed(2)} leva.`)
    }
}