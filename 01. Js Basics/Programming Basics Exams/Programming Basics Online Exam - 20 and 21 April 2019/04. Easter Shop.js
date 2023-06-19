function easterShop(input) {
    let eggsCount = Number(input[0]);
    
    let soldEggs = 0;
    
    index = 1;
    let command = input[index];
    let currentEggsCount = Number(input[index + 1]);
    
    while (command !== "Close") {
        if (command === "Buy") {
            if (eggsCount - currentEggsCount < 0) {
                console.log("Not enough eggs in store!");
                console.log(`You can buy only ${eggsCount}.`);
                return;
            }
            eggsCount -= currentEggsCount;
            soldEggs += currentEggsCount;
        }
        else if (command === "Fill") {
            eggsCount += currentEggsCount;
        }
        
        index += 2;
        command = input[index];
        currentEggsCount = Number(input[index + 1]);
    }
    
    console.log("Store is closed!");
    console.log(`${soldEggs} eggs sold.`);
}
