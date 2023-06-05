function walking(input) {
    let steps = Number(input[0]);

    let index = 0;
    let neededSteps = 10000;
    let stepsMade = 0;

    while (stepsMade < neededSteps) {
        if (input[index] === "Going home") {
            stepsMade += Number(input[index + 1]);
            break;
        }

        stepsMade += steps;
        
        index++;
        steps = Number(input[index]);
    }

    if (stepsMade >= neededSteps) {
        console.log(`Goal reached! Good job!`);
        console.log(`${stepsMade - neededSteps} steps over the goal!`);
    }
    else {
        console.log(`${neededSteps - stepsMade} more steps to reach goal.`);
    }
}