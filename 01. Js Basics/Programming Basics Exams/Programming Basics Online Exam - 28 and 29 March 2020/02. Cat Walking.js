function catWalking(input) {
    let [minutesPerDay, numberOfWalksPerDay, caloriesIntakePerDay] = [...input.map((x) => Number(x))];
    
    let totalMinutes = minutesPerDay * numberOfWalksPerDay;
    let burnedCalories = totalMinutes * 5;
    
    if (burnedCalories >= caloriesIntakePerDay / 2) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`);
    }
    else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`);
    }
}