function grades(input){
    let studentsCount = Number(input[0]);
    
    let topStudentsPercentage = 0;
    let between4and5Percentage = 0;
    let between3and4Percentage = 0;
    let failedPercentage = 0;
    
    let averageGrade = 0;
    
    for (let i = 1; i <= studentsCount; i++) {
        let currentStudentGrade = Number(input[i]);
        
        averageGrade += currentStudentGrade;
        
        if (currentStudentGrade >= 5.00) {
            topStudentsPercentage++
        }
        else if (currentStudentGrade >= 4.00 && currentStudentGrade <= 4.99) {
            between4and5Percentage++;
        }
        else if (currentStudentGrade >= 3.00 && currentStudentGrade <= 3.99){
            between3and4Percentage++;        
        }
        else {
            failedPercentage++;
        }
        
    }
    
    topStudentsPercentage = topStudentsPercentage * 100 / studentsCount;
    between4and5Percentage = between4and5Percentage * 100 / studentsCount;
    between3and4Percentage = between3and4Percentage * 100 / studentsCount;
    failedPercentage = failedPercentage * 100 / studentsCount;
    averageGrade /= studentsCount;
    
    console.log(`Top students: ${topStudentsPercentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${between4and5Percentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${between3and4Percentage.toFixed(2)}%`);
    console.log(`Fail: ${failedPercentage.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}