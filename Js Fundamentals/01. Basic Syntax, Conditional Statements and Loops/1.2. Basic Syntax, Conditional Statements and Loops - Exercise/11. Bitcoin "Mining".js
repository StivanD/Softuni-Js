function bitcoinMining(shifts) {
    let bitcoin = 11949.16;
    let bitcoinCounts = 0;
    let days = 0;
    let firstDay = 0;
    let totalMoney = 0;
    
    for (let i = 0; i < shifts.length; i++) {
        days++;
        
        let currentShift = shifts[i];
        
        if (days % 3 === 0) {
            currentShift *= 0.7;
        }
        
        let goldToLeva = currentShift * 67.51;
        totalMoney += goldToLeva;
        
        if (totalMoney >= bitcoin) {
            while (totalMoney >= bitcoin) {
                totalMoney -= bitcoin;
                bitcoinCounts++;
                
                if(bitcoinCounts === 1) {
                    firstDay = days;
                }
            }
        }
    }
    
    console.log(`Bought bitcoins: ${bitcoinCounts}`);
    if (firstDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
