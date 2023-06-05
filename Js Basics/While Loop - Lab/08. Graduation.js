function graduation(input){
    let name = input[0];
    let grade = Number(input[1]);
    let counter = 1;

    let fails = 0;
    let gradesSum = 0;

    while (counter <= 12) {
        grade = Number(input[counter]);
        
        gradesSum += grade;

        if (grade < 4.00) {
            fails++;
        }
        if (fails >= 2) {
            console.log(`${name} has been excluded at ${counter - 1} grade`);
            break;
        }
        counter++;
    }

    if (fails < 2) {
        console.log(`${name} graduated. Average grade: ${(gradesSum / (counter - 1)).toFixed(2)}`);
    }
}
