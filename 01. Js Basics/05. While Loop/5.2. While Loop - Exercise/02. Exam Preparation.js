function examPreparation(input){
    let badGradesNeeded = Number(input[0]);

    let goodGradesCount = 0;
    let badGradesCount = 0;
    let gradesSum = 0;
    let tasksCount = 0;
    let lastTask = "";

    let index = 1;

    let currentTask = input[index];
    let currentGrade = Number(input[index + 1]);

    while (badGradesCount < badGradesNeeded) {
        if (currentTask === "Enough") {
            console.log(`Average score: ${(gradesSum / (goodGradesCount + badGradesCount)).toFixed(2)}`);
            console.log(`Number of problems: ${tasksCount}`);
            console.log(`Last problem: ${lastTask}`);
            break;
        }

        if (currentGrade <= 4) {
            badGradesCount++;
        }
        else {
            goodGradesCount++;
        }

        tasksCount++;
        lastTask = currentTask;
        gradesSum += currentGrade;

        index += 2;
        currentTask = input[index];
        currentGrade = Number(input[index + 1]);
    }

    if (badGradesCount >= badGradesNeeded) {
        console.log(`You need a break, ${badGradesCount} poor grades.`);
    }
}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
;