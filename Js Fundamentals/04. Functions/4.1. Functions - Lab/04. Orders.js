function orders(product, quantity) {
    let price = 
        product === 'coffee'
        ? quantity * 1.50
        : product === 'water'
        ? quantity * 1.00
        : product === 'coke'
        ? quantity * 1.40
        : product === 'snacks'
        ? quantity * 2.00
        : 0;
        
    console.log(price.toFixed(2));
}
