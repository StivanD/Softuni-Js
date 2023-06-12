function energyBooster(input) {
    let fruit = input[0];
    let size = input[1];
    let count = Number(input[2]);
    
    price = 0;
    
    switch (size) {
        case "small":
            switch (fruit) {
                case "Watermelon":
                    price = 56 * count * 2;
                    break;
                case "Mango":
                    price = 36.66 * count * 2;
                    break;
                case "Pineapple":
                    price = 42.10 * count * 2;
                    break;
                case "Raspberry":
                    price = 20 * count * 2;
                    break;
            }
            break;
        case "big":
            switch (fruit) {
                case "Watermelon":
                    price = 28.70 * count * 5;
                    break;
                case "Mango":
                    price = 19.60 * count * 5;
                    break;
                case "Pineapple":
                    price = 24.80 * count * 5;
                    break;
                case "Raspberry":
                    price = 15.20 * count * 5;
                    break;
            }
            break;
    }
    
    if (price >= 400 && price <= 1000) {
        price *= 0.85
    }
    else if (price > 1000) {
        price /= 2;
    }
    
    console.log(`${price.toFixed(2)} lv.`);
}
