function worldSwimmingRecord(input){
    let currentRecord = Number(input[0]);
    let metres = Number(input[1]);
    let secondsPerMetre = Number(input[2]);

    let time = metres * secondsPerMetre;

    let timeAdded = Math.floor(metres / 15) * 12.5;

    let totalTime = time + timeAdded;

    if (totalTime < currentRecord){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
    else {
        console.log(`No, he failed! He was ${Math.abs(totalTime - currentRecord).toFixed(2)} seconds slower.`)
    }
}
