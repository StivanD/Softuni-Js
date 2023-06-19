function touristShop(input) {
    let budget = Number(input[0]);
    
    let index = 1;
    let productName = input[index];
    let productPrice = Number(input[index + 1]);
    let productsCount = 0;
    let price = 0;
    let days = 0;
    
    while (input[index] !== "Stop") {
        days++;
        
        if (days % 3 === 0) {
            productPrice /= 2;
        }
        
        productsCount++;
        price += productPrice
        budget -= productPrice;
        
        if (budget < 0) {
            console.log("You don't have enough money!");
            console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
            return;
        }
        
        index += 2;
        productName = input[index];
        productPrice = Number(input[index + 1]);
    }
    
    console.log(`You bought ${productsCount} products for ${price.toFixed(2)} leva.`)

}