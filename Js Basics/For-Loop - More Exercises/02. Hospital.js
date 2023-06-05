function hospital(input){
    let days = Number(input[0]);
    
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let doctors = 7;
    
    for (let day = 1; day <= days; day++) {
        let currentPatients = Number(input[day]);
        if (day % 3 === 0) {
            if (untreatedPatients > treatedPatients) {
                doctors++;
            }
        }
        
        if (currentPatients <= doctors) {
            treatedPatients += currentPatients;
        }
        else {
            untreatedPatients += currentPatients - doctors;
            treatedPatients += doctors;
        }
    }
    
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}
