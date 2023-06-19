function bestPlayer(input) {
    index = 0;
    
    let player = input[index];
    let goals = Number(input[index + 1]);
    
    let max = {
        name: "",
        goals: 0
    }
    while (player !== "END") {
        if (goals >= 10) {
            console.log(`${player} is the best player!`);
            console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
            return;
        }
        
        if (goals > max.goals) {
            max.name = player;
            max.goals = goals;
        }
        
        index += 2;
        player = input[index];
        goals = Number(input[index + 1]);
    }
    
    console.log(`${max.name} is the best player!`);
    if (max.goals >= 3) {
        console.log(`He has scored ${max.goals} goals and made a hat-trick !!!`);
    }
    else {
        console.log(`He has scored ${max.goals} goals.`);
    }
}
