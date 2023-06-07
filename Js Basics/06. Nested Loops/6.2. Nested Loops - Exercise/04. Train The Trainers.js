function trainTheTrainers(input){
    let jurriesCount = Number(input[0]);

    let index = 1;
    let currentPresentation = input[index];
    let finalGrade = 0;
    let gradesCount = 0;

    while (input[index] !== "Finish") {
        let currentGrade = 0;
        for (let i = 1; i <= jurriesCount; i++) {
            currentGrade += Number(input[index + i]);
            finalGrade += Number(input[index + i]);
            gradesCount++;
        }
        console.log(`${currentPresentation} - ${(currentGrade / jurriesCount).toFixed(2)}.`);
        
        index += jurriesCount + 1;
        currentPresentation = input[index];
    }
    console.log(`Student's final assessment is ${(finalGrade / gradesCount).toFixed(2)}.`);
}