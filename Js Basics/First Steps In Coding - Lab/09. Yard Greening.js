function yardGreening(input){
    let yardArea = Number(input[0]);

    let priceWithoutDiscount = yardArea * 7.61;
    let discount = priceWithoutDiscount * 0.18;
    let finalPrice = priceWithoutDiscount - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}
