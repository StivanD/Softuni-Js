function fitnessCenter(input) {
    let visitorsCount = Number(input[0]);

    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    let trainingPeoplePercentage = 0;
    let shoppingPeoplePercentage = 0;

    for (let i = 1; i <= visitorsCount; i++) {
        let activity = input[i];
        
        switch (activity) {
            case "Back":
                back++;
                trainingPeoplePercentage++;
                break;
            case "Chest":
                chest++;
                trainingPeoplePercentage++;
                break;
            case "Legs":
                legs++;
                trainingPeoplePercentage++;
                break;
            case "Abs":
                abs++;
                trainingPeoplePercentage++;
                break;
            case "Protein shake":
                proteinShake++;
                shoppingPeoplePercentage++;
                break;
            case "Protein bar":
                proteinBar++;
                shoppingPeoplePercentage++
                break;
        }
    }
    
    trainingPeoplePercentage = trainingPeoplePercentage / visitorsCount * 100;
    shoppingPeoplePercentage = shoppingPeoplePercentage / visitorsCount * 100;
    
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${trainingPeoplePercentage.toFixed(2)}% - work out`);
    console.log(`${shoppingPeoplePercentage.toFixed(2)}% - protein`);
}
