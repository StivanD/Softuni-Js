function repaintingPrice(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let diluent = Number(input[2]);
    let hours = Number(input[3]);

    let suppliesPrice = ((nylon + 2) * 1.50) + ((paint + paint * 0.10) * 14.50) + (diluent * 5.00) + 0.40;
    let moneyForWorkers = (suppliesPrice * 0.30) * hours;

    let finalPrice = suppliesPrice + moneyForWorkers;
    
    console.log(finalPrice);
}
