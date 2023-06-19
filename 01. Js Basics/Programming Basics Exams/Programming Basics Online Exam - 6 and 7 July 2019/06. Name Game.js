function nameGame(input){
    let name = input.shift();
    
    let bestPoints = 0;
    let winner = "";
    
    while (name !== "Stop") {
        let currentPoints = 0;
        
        for (let i = 0; i < name.length; i++) {
            let number = Number(input[i]);
            if (name.charCodeAt(i) === number) {
                currentPoints += 10;
            }
            else {
                currentPoints += 2;
            }
        }
        
        if(currentPoints >= bestPoints) {
            bestPoints = currentPoints;
            winner = name;
        }
        name = input.shift();
    }
    
    console.log(`The winner is ${winner} with ${bestPoints} points!`);
}
