function easterDecoration(input){
    let customersCount = Number(input[0]);
    
    let index = 1;
    let currentPurchase = input[index];
    let totalPrice = 0;
    
    for (let i = 1; i <= customersCount; i++) {
        let price = 0;
        let productsCount = 0;
        
        while (currentPurchase !== "Finish") {
            switch (currentPurchase) {
                case "basket":
                    price += 1.50;
                    break;
                case "wreath":
                    price += 3.80;
                    break;
                case "chocolate bunny":
                    price += 7;
                    break;
            }
            productsCount++;
            index++;
            currentPurchase = input[index];
        }
        
        if (productsCount % 2 === 0) {
            price *= 0.8;
        }
        
        totalPrice += price;
        
        console.log(`You purchased ${productsCount} items for ${price.toFixed(2)} leva.`);
        
        index++;
        currentPurchase = input[index];
    }
    
    console.log(`Average bill per client is: ${(totalPrice / customersCount).toFixed(2)} leva.`);
}

