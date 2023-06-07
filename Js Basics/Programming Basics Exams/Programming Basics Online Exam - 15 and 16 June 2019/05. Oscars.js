function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let judgesCount = Number(input[2]);
    
    index = 3;
    let currentJudgeName = input[index];
    let currentJudgePoints = input[index + 1];
    
    let points = academyPoints;
    let hasEnoughPoints = false;
    
    for (let i = 1; i <= judgesCount; i++) {
        points += (currentJudgeName.length * currentJudgePoints) / 2;
        
        if (points > 1250.5) {
            hasEnoughPoints = true;
            break;
        }
        
        index += 2;
        currentJudgeName = input[index];
        currentJudgePoints = input[index + 1];
    }
    
    if (hasEnoughPoints) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
    }
    else {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - points).toFixed(1)} more!`);
    }
}