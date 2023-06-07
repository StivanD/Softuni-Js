function coffeeMachine(input){
    let drinksType = input[0];
    let sugar = input[1];
    let drinksCount = Number(input[2]);
    
    let price = 0;
    
    switch (drinksType) {
        case "Espresso":
            switch (sugar) {
                case "Without":
                    price = (drinksCount * 0.90) * 0.65;
                    break;
                case "Normal":
                    price = drinksCount * 1;
                    break;
                case "Extra":
                    price = drinksCount * 1.2;
                    break;
            }
            
            if (drinksCount >= 5) {
                price *= 0.75;
            }
            break;
        case "Cappuccino":
            switch (sugar) {
                case "Without":
                    price = (drinksCount * 1) * 0.65;
                    break;
                case "Normal":
                    price = drinksCount * 1.2;
                    break;
                case "Extra":
                    price = drinksCount * 1.6;
                    break;
            }
            break;
        case "Tea":
            switch (sugar) {
                case "Without":
                    price = (drinksCount * 0.5) * 0.65;
                    break;
                case "Normal":
                    price = drinksCount * 0.6;
                    break;
                case "Extra":
                    price = drinksCount * 0.7;
                    break;
            }
            break;
    }
    
    if (price > 15) {
        price *= 0.8;
    }
    
    console.log(`You bought ${drinksCount} cups of ${drinksType} for ${price.toFixed(2)} lv.`);
}
