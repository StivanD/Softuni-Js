function darts(input) {
    let playerName = input[0];

    let startingPoints = 301
    let index = 1;
    let sector = input[index];
    let currentPoints = Number(input[index + 1]);
    let successfulShots = 0;
    let unsuccessfulShots = 0;
    let retire = true;

    while (input[index] !== "Retire") {
        if (startingPoints === 0) {
            retire = false;
            break;
        }

        switch (sector) {
            case "Single":
                if (startingPoints - currentPoints < 0) {
                    index += 2;
                    sector = input[index];
                    currentPoints = Number(input[index + 1]);
                    unsuccessfulShots++;
                    continue;
                }
                else {
                    startingPoints -= currentPoints;
                    successfulShots++
                }
                break;
            case "Double":
                if (startingPoints - currentPoints * 2 < 0) {
                    index += 2;
                    sector = input[index];
                    currentPoints = Number(input[index + 1]);
                    unsuccessfulShots++;
                    continue;
                }
                else {
                    startingPoints -= currentPoints * 2;
                    successfulShots++;
                }
                break;
            case "Triple":
                if (startingPoints - currentPoints * 3 < 0) {
                    index += 2;
                    sector = input[index];
                    currentPoints = Number(input[index + 1]);
                    unsuccessfulShots++;
                    continue;
                }
                else {
                    startingPoints -= currentPoints * 3;
                    successfulShots++;
                }
                break;
        }
        
        index += 2;
        sector = input[index];
        currentPoints = Number(input[index + 1]);
    }
    
    if (retire) {
        console.log(`${playerName} retired after ${unsuccessfulShots} unsuccessful shots.`);
    }
    else {
        console.log(`${playerName} won the leg with ${successfulShots} shots.`);
    }
}
