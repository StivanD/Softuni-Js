function orderPrice(input){
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegetarianMenus = Number(input[2]);

    let menusPrice = chickenMenus * 10.35 + fishMenus * 12.40 + vegetarianMenus * 8.15;
    let dessertPrice = menusPrice * 0.20;
    let deliveryPrice = 2.50;

    let finalPrice = menusPrice + dessertPrice + deliveryPrice;

    console.log(finalPrice);
}

