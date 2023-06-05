function schoolCamp(input){
    let season = input[0];
    let groupType = input[1];
    let pupilsCount = Number(input[2]);
    let nights = Number(input[3]);

    let price = 0;
    let sport = "";

    switch (season) {
        case "Winter":
            switch (groupType) {
                case "girls":
                    price = nights * pupilsCount * 9.60;
                    sport = "Gymnastics";
                    break;
                case "boys":
                    price = nights * pupilsCount * 9.60;
                    sport = "Judo";
                    break;
                case "mixed":
                    price = nights * pupilsCount * 10;
                    sport = "Ski";
                    break;
                }
            break;
        case "Summer":
            switch (groupType) {
                case "girls":
                    price = nights * pupilsCount * 15;
                    sport = "Volleyball";
                    break;
                case "boys":
                    price = nights * pupilsCount * 15;
                    sport = "Football";
                    break;
                case "mixed":
                    price = nights * pupilsCount * 20;
                    sport = "Swimming";
                    break;
                }
            break;
        case "Spring":
            switch (groupType) {
                case "girls":
                    price = nights * pupilsCount * 7.20;
                    sport = "Athletics";
                    break;
                case "boys":
                    price = nights * pupilsCount * 7.20;
                    sport = "Tennis";
                    break;
                case "mixed":
                    price = nights * pupilsCount * 9.50;
                    sport = "Cycling";
                    break;
                }
            break;
    }

    if (pupilsCount >= 50) {
        price -= price * 0.5;
    }
    else if (pupilsCount >= 20 && pupilsCount < 50) {
        price -= price * 0.15;
    }
    else if (pupilsCount >= 10 && pupilsCount < 20) {
        price -= price * 0.05;
    }

    console.log(`${sport} ${price.toFixed(2)} lv.`)
}
