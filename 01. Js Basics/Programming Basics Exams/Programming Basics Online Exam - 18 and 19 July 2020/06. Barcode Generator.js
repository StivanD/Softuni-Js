function barcodeGenerator(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    
    let firstStart = parseInt(start / 1000);
    let secondStart = parseInt((start / 100) % 10);
    let thirdStart = parseInt((start / 10) % 10);
    let fourthStart = parseInt(start % 10);
    
    let firstEnd = parseInt(end / 1000);
    let secondEnd = parseInt((end / 100) % 10);
    let thirdEnd = parseInt((end / 10) % 10);
    let fourthEnd= parseInt(end % 10);
    
    let barcodes = "";
    
    for (let i = firstStart; i <= firstEnd; i++) {
        
        for (let j = secondStart; j <= secondEnd; j++) {
            
            for (let k = thirdStart; k <= thirdEnd; k++) {
                
                for (let l = fourthStart; l <= fourthEnd; l++) {
                    
                    if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
                        barcodes += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }
    
    console.log(barcodes);
}
