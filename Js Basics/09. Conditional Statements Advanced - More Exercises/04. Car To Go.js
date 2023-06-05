function carToGo(input){
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let typeOfCar = "";
    let classOfCar = "";

    if (budget <= 100) {
        classOfCar = "Economy class";

        if (season === "Summer") {
            typeOfCar = "Cabrio";
            price = budget * 0.35;
        }
        else if (season === "Winter") {
            typeOfCar = "Jeep";
            price = budget * 0.65;
        }
    }
    else if (budget > 100 && budget <= 500) {
        classOfCar = "Compact class";

        if (season === "Summer") {
            typeOfCar = "Cabrio";
            price = budget * 0.45;
        }
        else if (season === "Winter") {
            typeOfCar = "Jeep";
            price = budget * 0.8;
        }
    }
    else {
        classOfCar = "Luxury class";
        typeOfCar = "Jeep";
        price = budget * 0.9;
    }

    console.log(classOfCar);
    console.log(`${typeOfCar} - ${price.toFixed(2)}`);
}
