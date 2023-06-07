function cake(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);

    let index = 2;
    let allPieces = length * width;
    let piecesTaken = Number(input[index]);
    
    while (allPieces >= 0) {
        if (input[index] === "STOP") {
            break;
        }
        
        allPieces -= piecesTaken;

        index++;
        piecesTaken = Number(input[index]);
    }

    if (allPieces > 0) {
        console.log(`${allPieces} pieces are left.`);
    }
    else {
        console.log(`No more cake left! You need ${Math.abs(allPieces)} pieces more.`);
    }
}


