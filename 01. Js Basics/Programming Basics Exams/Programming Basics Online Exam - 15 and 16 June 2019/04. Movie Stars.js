function movieStars(input){
    let budget = Number(input[0]);
    
    let index = 1;
    let actor = input[index];
    
    while(actor !== "ACTION") {
        let actorSalary;
        
        if (actor.length <= 15) {
            actorSalary = Number(input[index + 1]);
            index++;
        }
        else {
            actorSalary = budget * 0.20;
        }
        
        budget -= actorSalary;
        
        if (budget < 0) {
            break;
        }
        
        index++;
        actor = input[index];
    }
    
    if (budget >= 0) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    }
    else {
        console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
    }
    
}