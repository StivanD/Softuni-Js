function fishland(input){
    let mackerelPricePerKg = Number(input[0]);
    let spratPricePerKg = Number(input[1]);
    let bonitoKg = Number(input[2]);
    let scadKg = Number(input[3]);
    let clamsKg = Number(input[4]);

    let bonitoPrice = bonitoKg * (mackerelPricePerKg + mackerelPricePerKg * 0.60);
    let scadPrice = scadKg * (spratPricePerKg + spratPricePerKg * 0.80);
    let clamsPrice = clamsKg * 7.50;

    let finalPrice = bonitoPrice + scadPrice + clamsPrice;

    console.log((finalPrice).toFixed(2));
}
