function balls(input) {
    let count = Number(input[0]);
    
    let totalPoints = 0, 
        redBalls = 0, 
        orangeBalls = 0, 
        yellowBalls = 0, 
        whiteBalls = 0, 
        otherColors = 0, 
        dividesCount = 0;
    
    for (let i = 1; i <= count; i++) {
        let color = input[i];
        
        switch (color) {
            case "red":
                totalPoints += 5;
                redBalls++;
                break;
            case "orange":
                totalPoints += 10;
                orangeBalls++;
                break;
            case "yellow":
                totalPoints += 15;
                yellowBalls++;
                break;
            case "white":
                totalPoints += 20;
                whiteBalls++;
                break;
            case "black":
                totalPoints = Math.floor(totalPoints / 2);
                dividesCount++;
                break;
            default:
                otherColors++;
        }
    }
    
    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherColors}`);
    console.log(`Divides from black balls: ${dividesCount}`)
}

balls(["10", "white", "white", "ee", "red", "orange", "red", "black", "black", "black", "black"]);
