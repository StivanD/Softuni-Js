function moving(input) {
    let freeSpaceWidth = Number(input[0]);
    let freeSpaceLength = Number(input[1]);
    let freeSpaceHeight = Number(input[2]);
    let totalFreeSpace = freeSpaceWidth * freeSpaceLength * freeSpaceHeight;

    let index = 3;
    let boxesCount = Number(input[index]);

    while (totalFreeSpace >= 0) {
        if (input[index] === "Done") {
            break;
        }

        totalFreeSpace -= boxesCount;
        
        index++;
        boxesCount = Number(input[index]);
    }

    if (totalFreeSpace >= 0) {
        console.log(`${totalFreeSpace} Cubic meters left.`);
    }
    else {
        console.log(`No more free space! You need ${Math.abs(totalFreeSpace)} Cubic meters more.`);
    }
}
