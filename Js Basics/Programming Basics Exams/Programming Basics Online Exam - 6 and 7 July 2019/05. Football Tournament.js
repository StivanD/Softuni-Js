function footballTournament(input){
    let teamName = input[0];
    let matchesPlayed = Number(input[1]);
    
    let points = 0;
    let wins = 0;
    let draws = 0;
    let losses = 0;
    
    for (let i = 1; i <= matchesPlayed; i++) {
        let currentMatch = input[i + 1];
        
        switch (currentMatch) {
            case "W":
                points += 3;
                wins++;
                break;
            case "D":
                points += 1;
                draws++
                break;
            case "L":
                losses++;
                break;
        }
    }
    
    let winrate = wins * 100 / matchesPlayed;
    
    if (matchesPlayed <= 0) {
        console.log(`${teamName} hasn't played any games during this season.`)
    }
    else {
        console.log(`${teamName} has won ${points} points during this season.`);
        console.log("Total stats:")
        console.log(`## W: ${wins}`);
        console.log(`## D: ${draws}`);
        console.log(`## L: ${losses}`);
        console.log(`Win rate: ${winrate.toFixed(2)}%`);
    }
}
