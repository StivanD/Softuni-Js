function sleepyTomCat(input){
    let daysOff = Number(input[0]);

    let totalPlayTime = (365 - daysOff) * 63 + daysOff * 127;

    let hours = Math.floor(Math.abs((30000 - totalPlayTime) / 60));
    let minutes = (Math.abs((30000 - totalPlayTime) % 60));

    if(totalPlayTime <= 30000) {
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
    else {
        console.log("Tom will run away");
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    }
}
