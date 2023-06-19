function footballResults(input) {
    let wins = 0;
    let losses = 0;
    let draws = 0;
 
    for (i = 0; i < input.length; i++) {
        let firstResult = input[i].substring(0, 1);
        let secondResult = input[i].substring(2, 3);
        if (firstResult > secondResult) {
            wins++;
        }
        else if (firstResult < secondResult) {
            losses++;
        }
        else {
            draws++;
        }
    }
 
    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${draws}`);
}

