function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);

    let combinationsCount = 0;
    let isFound = false;
    
    for (let i = start; i <= end; i++) {
        
        for (let k = start; k <= end; k++) {
            
            combinationsCount++;
            if (i + k === magicNum) {
                console.log(`Combination N:${combinationsCount} (${i} + ${k} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${combinationsCount} combinations - neither equals ${magicNum}`);
    }
}
