function gameNumberWars(input){
    let firstPlayerName = input[0];
    let secondPlayerName = input[1];
    
    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;
    
    index = 2;
    let firstPlayerCurrentCard = Number(input[index]);
    let secondPlayerCurrentCard = Number(input[index + 1]);
    
    while (input[index] !== "End of game") {
        if (firstPlayerCurrentCard > secondPlayerCurrentCard) {
            firstPlayerPoints += firstPlayerCurrentCard - secondPlayerCurrentCard;
        }
        else if (firstPlayerCurrentCard < secondPlayerCurrentCard) {
            secondPlayerPoints += secondPlayerCurrentCard - firstPlayerCurrentCard;
        }
        else {
            console.log("Number wars!");
            firstPlayerCurrentCard = Number(input[index + 2]);
            secondPlayerCurrentCard = Number(input[index + 3]);
            if (firstPlayerCurrentCard > secondPlayerCurrentCard) {
                console.log(`${firstPlayerName} is winner with ${firstPlayerPoints} points`);
            }
            else if (firstPlayerCurrentCard < secondPlayerCurrentCard) {
                console.log(`${secondPlayerName} is winner with ${secondPlayerPoints} points`);
            }
            return;
        }
        index += 2;
        firstPlayerCurrentCard = Number(input[index]);
        secondPlayerCurrentCard = Number(input[index + 1]);
    }
    
    console.log(`${firstPlayerName} has ${firstPlayerPoints} points`);
    console.log(`${secondPlayerName} has ${secondPlayerPoints} points`);
}