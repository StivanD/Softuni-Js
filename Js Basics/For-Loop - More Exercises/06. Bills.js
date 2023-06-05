function bills(input){
    let monthsCount = Number(input[0]);
    
    let electricityBills = 0;
    let waterBills = 20 * monthsCount;
    let internetBills = 15 * monthsCount;
    let otherBills = 0;
    
    
    for (let i = 1; i <= monthsCount; i++){
        let currentElectricityBill = Number(input[i]);
        electricityBills += currentElectricityBill;
        otherBills += (currentElectricityBill + 20 + 15) + ((currentElectricityBill + 20 + 15) * 0.2);
    }
    
    let averageBills =  (electricityBills + waterBills + internetBills + otherBills) / monthsCount;
    
    console.log(`Electricity: ${electricityBills.toFixed(2)} lv`);
    console.log(`Water: ${waterBills.toFixed(2)} lv`);
    console.log(`Internet: ${internetBills.toFixed(2)} lv`);
    console.log(`Other: ${otherBills.toFixed(2)} lv`);
    console.log(`Average: ${averageBills.toFixed(2)} lv`);
}
