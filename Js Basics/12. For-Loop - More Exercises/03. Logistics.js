function logistics(input){
    let cargoCount = Number(input[0]);
    
    let totalCargoWeigth = 0;
    let averagePricePerTon = 0;
    
    let microbusPercentage = 0;
    let truckPercentage = 0;
    let trainPercentage = 0;
    
    for (let counter = 1; counter <= cargoCount; counter++) {
        let cargoWeigth = Number(input[counter]);
        
        totalCargoWeigth += cargoWeigth;
        
        if (cargoWeigth <= 3) {
            microbusPercentage += cargoWeigth;
            averagePricePerTon += cargoWeigth * 200;
        }
        else if (cargoWeigth > 3 && cargoWeigth <= 11) {
            truckPercentage += cargoWeigth;
            averagePricePerTon += cargoWeigth * 175;
        }
        else {
            trainPercentage += cargoWeigth;
            averagePricePerTon += cargoWeigth * 120;
        }
    }
    
    averagePricePerTon /= totalCargoWeigth;
    microbusPercentage = microbusPercentage / totalCargoWeigth * 100;
    truckPercentage = truckPercentage / totalCargoWeigth * 100;
    trainPercentage = trainPercentage / totalCargoWeigth * 100;
    
    console.log(averagePricePerTon.toFixed(2));
    console.log(`${microbusPercentage.toFixed(2)}%`);
    console.log(`${truckPercentage.toFixed(2)}%`);
    console.log(`${trainPercentage.toFixed(2)}%`);
}
