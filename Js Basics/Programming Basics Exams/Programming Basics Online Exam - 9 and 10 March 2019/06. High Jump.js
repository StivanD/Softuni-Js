function highJump(input) {
    let wantedHeight = Number(input[0]);
    
    let startingHeight = wantedHeight - 30;
    let jumpsCount = 0;
    
    while (startingHeight <= wantedHeight) {
        for (let i = 0; i < 3; i++) {
            jumpsCount++;
            let currentJump = Number(input[jumpsCount]);
            
            if (currentJump > startingHeight) {
                startingHeight += 5;
                break;
            }
            if (i === 2) {
                console.log(`Tihomir failed at ${startingHeight}cm after ${jumpsCount} jumps.`);
                return;
            }
        }
    }
    
    console.log(`Tihomir succeeded, he jumped over ${wantedHeight}cm after ${jumpsCount} jumps.`);
}
