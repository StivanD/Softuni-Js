function aluminumJoinery(input) {
    let count = Number(input[0]);
    let type = input[1];
    let delivery = input[2];

    let price = 0;
    
    if (count < 10) {
        console.log("Invalid order");
        return;
    }
    
    switch (type) {
        case "90X130":
            price =
                count > 30 && count <= 60
                    ? price = (110 * count) * 0.95 
                    : count > 60
                    ? price = (110 * count) * 0.92
                    : price = 110 * count;
            break;

        case "100X150":
            price =
                count > 40 && count <= 80
                    ? price = (140 * count) * 0.94
                    : count > 80
                    ? price = (140 * count) * 0.9
                    : price = 140 * count;
            break;
        case "130X180":
            price = 
                count > 20 && count <= 50
                    ? price = (190 * count) * 0.93
                    : count > 50
                    ? price = (190 * count) * 0.88
                    : price = 190 * count;
            break;
        case "200X300":
            price = 
                count > 25 && count <= 50
                    ? price = (250 * count) * 0.91
                    : count > 50
                    ? price = (250 * count) * 0.86
                    : price = 250 * count;
            break;
    }
    
    
    if (delivery === "With delivery") {
        price += 60;
    }
    
    if (count > 99) {
        price *= 0.96;
    }
    
    console.log(`${price.toFixed(2)} BGN`);
}