function paintingEggs(input){
    let eggsSize = input[0];
    let eggsColor = input[1];
    let batchesCount = Number(input[2]);
    
    let price = 0;
    
    switch (eggsSize) {
        case "Large":
            switch (eggsColor) {
                case "Red":
                    price = 16 * batchesCount * 0.65;
                    break;
                case "Green":
                    price = 12 * batchesCount * 0.65;
                    break;
                case "Yellow":
                    price = 9 * batchesCount * 0.65;
                    break;
            }
            break;
        case "Medium":
            switch (eggsColor) {
                case "Red":
                    price = 13 * batchesCount * 0.65;
                    break;
                case "Green":
                    price = 9 * batchesCount * 0.65;
                    break;
                case "Yellow":
                    price = 7 * batchesCount * 0.65;
                    break;
            }
            break;
        case "Small":
            switch (eggsColor) {
                case "Red":
                    price = 9 * batchesCount * 0.65;
                    break;
                case "Green":
                    price = 8 * batchesCount * 0.65;
                    break;
                case "Yellow":
                    price = 5 * batchesCount * 0.65;
                    break;
            }
            break;
    }
    
    console.log(`${price.toFixed(2)} leva.`)
}

