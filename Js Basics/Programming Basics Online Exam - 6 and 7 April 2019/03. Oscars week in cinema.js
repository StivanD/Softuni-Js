function oscarsWeekInCinema(input){
    let movieName = input[0];
    let roomType = input[1];
    let ticketsCount = Number(input[2]);
    
    let income = 0;
    
    switch (movieName) {
        case "A Star Is Born":
            switch (roomType) {
                case "normal":
                    income = ticketsCount * 7.50;
                    break;
                case "luxury":
                    income = ticketsCount * 10.50;
                    break;
                case "ultra luxury":
                    income = ticketsCount * 13.50;
                    break;
            }
            break;
        case "Bohemian Rhapsody":
            switch (roomType) {
                case "normal":
                    income = ticketsCount * 7.35;
                    break;
                case "luxury":
                    income = ticketsCount * 9.45;
                    break;
                case "ultra luxury":
                    income = ticketsCount * 12.75;
                    break;
            }
            break;
        case "Green Book":
            switch (roomType) {
                case "normal":
                    income = ticketsCount * 8.15;
                    break;
                case "luxury":
                    income = ticketsCount * 10.25;
                    break;
                case "ultra luxury":
                    income = ticketsCount * 13.25;
                    break;
            }
            break;
        case "The Favourite":
            switch (roomType) {
                case "normal":
                    income = ticketsCount * 8.75;
                    break;
                case "luxury":
                    income = ticketsCount * 11.55;
                    break;
                case "ultra luxury":
                    income = ticketsCount * 13.95;
                    break;
            }
            break;
    }
    console.log(`${movieName} -> ${income.toFixed(2)} lv.`);
}
