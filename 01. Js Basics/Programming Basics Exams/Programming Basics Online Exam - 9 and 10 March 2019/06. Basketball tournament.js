function basketballTournament(input){
    let index = 0;
    
    let currentTournament = input[index];
    let tournamentMatches = Number(input[index + 1]);
    let wonMatchesPercentage = 0;
    let lostMatchesPercentage = 0;
    let matchesCount = 0;
    
    while (input[index] !== "End of tournaments") {
        matchesCount += tournamentMatches;
        for (let i = 1; i <= tournamentMatches; i++) {
            let firstTeamPoints = Number(input[index + 2]);
            let secondTeamPoints = Number(input[index + 3]);
            index += 2;
            
            if (firstTeamPoints > secondTeamPoints) {
                console.log(`Game ${i} of tournament ${currentTournament}: win with ${firstTeamPoints - secondTeamPoints} points.`);
                wonMatchesPercentage++;
            }
            else {
                console.log(`Game ${i} of tournament ${currentTournament}: lost with ${secondTeamPoints - firstTeamPoints} points.`);
                lostMatchesPercentage++;
            }
        }
        
        index += 2;
        currentTournament = input[index];
        tournamentMatches = Number(input[index + 1]);
    }
    
    wonMatchesPercentage = wonMatchesPercentage / matchesCount * 100;
    lostMatchesPercentage = lostMatchesPercentage / matchesCount * 100;
    
    console.log(`${wonMatchesPercentage.toFixed(2)}% matches win`);
    console.log(`${lostMatchesPercentage.toFixed(2)}% matches lost`);
}
