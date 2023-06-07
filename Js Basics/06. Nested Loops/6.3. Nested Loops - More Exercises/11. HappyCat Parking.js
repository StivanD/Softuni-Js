function happyCatParking(input) {
    let daysCount = Number(input[0]);
    let hoursPerDay = Number(input[1]);
    
    let sum = 0;
    let sumForTheDay = 0;
    
    for (let day = 1; day <= daysCount; day++) {
        
        for (let hour = 1; hour <= hoursPerDay; hour++) {
            
            if (day % 2 === 0 && hour % 2 !== 0) {
                sum += 2.50;
                sumForTheDay += 2.50;
            }
            else if (day % 2 !== 0 && hour % 2 === 0) {
                sum += 1.25
                sumForTheDay += 1.25
            }
            else {
                sum += 1;
                sumForTheDay += 1
            }
        }
        
        console.log(`Day: ${day} - ${sumForTheDay.toFixed(2)} leva`);
        sumForTheDay = 0;
    }
    
    console.log(`Total: ${sum.toFixed(2)} leva`);
}
