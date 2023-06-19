function truckDriver(input){
    let season = input[0];
    let kmPerMonth = Number(input[1]);

    let salary = 0;

    if (kmPerMonth <= 5000) {
        if (season === "Spring" || season === "Autumn") {
            salary = (kmPerMonth * 0.75) * 4 * 0.9;
        }
        else if (season === "Summer") {
            salary = (kmPerMonth * 0.90) * 4 * 0.9;
        }
        else if (season === "Winter") {
            salary = (kmPerMonth * 1.05) * 4 * 0.9;
        }
    }
    else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
        if (season === "Spring" || season === "Autumn") {
            salary = (kmPerMonth * 0.95) * 4 * 0.9;
        }
        else if (season === "Summer") {
            salary = (kmPerMonth * 1.10) * 4 * 0.9;
        }
        else if (season === "Winter") {
            salary = (kmPerMonth * 1.25) * 4 * 0.9;
        }
    }
    else {
        salary = (kmPerMonth * 1.45) * 4 * 0.9;
    }

    console.log(salary.toFixed(2));
}
