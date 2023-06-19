function easterCompetition(input){
    let easterBreadsCount = Number(input[0]);
    
    let index = 1;
    
    let winner = {
        name: "",
        points: 0
    };
    
    for (let i = 1; i <= easterBreadsCount; i++) {
        let currentBaker = input[index];
        let points = 0;
        let currentPoints = input[index + 1];
        index++;
        
        while (currentPoints !== "Stop") {
            points += Number(currentPoints);
            index++;
            currentPoints = input[index];
        }
        
        console.log(`${currentBaker} has ${points} points.`);
        
        if (points > winner.points) {
            winner.points = points;
            winner.name = currentBaker;
            console.log(`${currentBaker} is the new number 1!`);
        }
        
        index++;
    }
    
    console.log(`${winner.name} won competition with ${winner.points} points!`)
}

