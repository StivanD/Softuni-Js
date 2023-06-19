function spiceMustFlow(startingYield) {
    let spices = 0;
    let days = 0;
    
    while (startingYield >= 100) {
        days++;
        spices += startingYield - 26;
        startingYield -= 10;
    }
    
    if (spices != 0) {
        spices -= 26;
    }
    
    console.log(days);
    console.log(spices);
}
