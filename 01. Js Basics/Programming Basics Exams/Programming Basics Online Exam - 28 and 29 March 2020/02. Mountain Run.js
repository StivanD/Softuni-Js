function mountainRun(input) {
    let [recordInSeconds, distanceInMetres, secondsPerOneMetre] = [...input.map((x) => Number(x))];
    
    let time = distanceInMetres * secondsPerOneMetre
    time += (Math.floor(distanceInMetres / 50) * 30);
    
    if (time >= recordInSeconds) {
        console.log(`No! He was ${(time - recordInSeconds).toFixed(2)} seconds slower.`);
    }
    else {
        console.log(`Yes! The new record is ${time.toFixed(2)} seconds.`)
    }
}

