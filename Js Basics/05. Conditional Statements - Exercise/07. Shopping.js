function shopping(input){
    let budget = Number(input[0]);
    let graphicCrardsCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let graphicCrardsPrice = 250 * graphicCrardsCount;
    let processorsPrice = (graphicCrardsPrice * 0.35) * processorsCount;
    let ramPrice = (graphicCrardsPrice * 0.10) * ramCount;

    let totalPrice = graphicCrardsPrice + processorsPrice + ramPrice;

    if (graphicCrardsCount > processorsCount){
        totalPrice -= totalPrice * 0.15;
    }

    if (budget >= totalPrice){
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);      
    }
    else {
        console.log(`Not enough money! You need ${Math.abs(totalPrice - budget).toFixed(2)} leva more!`);
    }
}
