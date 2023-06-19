function movieDay(input){
    let [photoTime, scenesCount, sceneDuration] = [...input.map((x) => Number(x))];
    
    let placePreparation = photoTime * 0.15;
    let scenesTime = scenesCount * sceneDuration;
    
    let neededTime = placePreparation + scenesTime;
    
    if (photoTime > neededTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(photoTime - neededTime)} minutes left!`);
    }
    else {
        console.log(`Time is up! To complete the movie you need ${Math.round(neededTime - photoTime)} minutes.`);
    }
}
