function easterEggsBattle(input){
    let playerOneEggs = Number(input[0]);
    let playerTwoEggs = Number(input[1]);
    
    let index = 2;
    let winner = input[index];
    
    while (input[index] !== "End") {
        if (winner === "one") {
            playerTwoEggs--;
            if (playerTwoEggs === 0) {
                console.log(`Player two is out of eggs. Player one has ${playerOneEggs} eggs left.`);
                return;
            }
        }
        else if (winner === "two") {
            playerOneEggs--;
            if (playerOneEggs === 0) {
                console.log(`Player one is out of eggs. Player two has ${playerTwoEggs} eggs left.`);
                return;
            }
        }
        
        index++;
        winner = input[index];
    }
    
    console.log(`Player one has ${playerOneEggs} eggs left.`);
    console.log(`Player two has ${playerTwoEggs} eggs left.`);
}
