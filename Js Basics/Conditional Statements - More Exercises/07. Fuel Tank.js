function fuelTank(input){
    let fuelType = input[0];
    let litres = Number(input[1]);

    if (fuelType === "Diesel" || fuelType === "Gasoline" || fuelType === "Gas") {
        if (litres >= 25) {
            console.log(`You have enough ${fuelType.toLowerCase()}.`);
        }
        else {
            console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
        }
    }
    else {
        console.log("Invalid fuel!")
    }
    
}