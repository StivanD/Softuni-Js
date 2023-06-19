function tennisRanklist(input) {
    let tournaments = Number(input[0]);
    let points = Number(input[1]);

    let tournamentPoints = 0;
    let tournamentsWon = 0;

    for (let i = 1; i <= tournaments; i++) {
        let currentStage = input[i + 1];

        switch(currentStage) {
            case 'W':
                points += 2000;
                tournamentPoints += 2000;
                tournamentsWon++;
                break;
            case 'F':
                points += 1200;
                tournamentPoints += 1200;
                break;
            case 'SF':
                points += 720;
                tournamentPoints += 720;
                break;
        }
    }

    let averagePoints = tournamentPoints / tournaments;
    let tournamentsWonPercentage = (tournamentsWon / tournaments) * 100;

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${tournamentsWonPercentage.toFixed(2)}%`);
}
