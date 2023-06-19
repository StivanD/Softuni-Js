function agencyProfit(input) {
    let companyName = input[0];
    let adultTicketsCount = Number(input[1]);
    let childrenTicketsCount = Number(input[2]);
    let adultTicketsPrice = Number(input[3]);
    let serviceTax = Number(input[4]);
    
    let childrenTicketsPrice = adultTicketsPrice * 0.3 + serviceTax;
    adultTicketsPrice += serviceTax;
    
    let totalPrice = adultTicketsCount * adultTicketsPrice + childrenTicketsCount * childrenTicketsPrice;
    totalPrice *= 0.2;
    
    console.log(`The profit of your agency from ${companyName} tickets is ${totalPrice.toFixed(2)} lv.`)
}

