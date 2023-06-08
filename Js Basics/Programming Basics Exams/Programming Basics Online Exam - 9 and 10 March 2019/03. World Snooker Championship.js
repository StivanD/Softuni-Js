function worldSnookerChampionship(input){
    let tournamentStage = input[0];
    let ticketType = input[1];
    let ticketsCount = Number(input[2]);
    let photoWithTrophy = input[3];
    
    let price = 0;
    let freePhotos = false;
    
    switch(tournamentStage) {
        case "Quarter final":
            switch (ticketType) {
                case "Standard":
                    price = 55.50 * ticketsCount;
                    break;
                case "Premium":
                    price = 105.20 * ticketsCount;
                    break;
                case "VIP":
                    price = 118.90 * ticketsCount;
                    break;
            }
            break;
        case "Semi final":
            switch (ticketType) {
                case "Standard":
                    price = 75.88 * ticketsCount;
                    break;
                case "Premium":
                    price = 125.22 * ticketsCount;
                    break;
                case "VIP":
                    price = 300.40 * ticketsCount;
                    break;
            }
            break;
        case "Final":
            switch (ticketType) {
                case "Standard":
                    price = 110.10 * ticketsCount;
                    break;
                case "Premium":
                    price = 160.66 * ticketsCount;
                    break;
                case "VIP":
                    price = 400 * ticketsCount;
                    break;
            }
            break
    }
    
    if (price > 4000) {
        price -= price * 0.25;
        freePhotos = true;
    }
    else if (price > 2500) {
        price -= price * 0.1;
    }
    
    if (!freePhotos) {
        if (photoWithTrophy === "Y") {
            price += 40 * ticketsCount;
        }
    }
    
    console.log(price.toFixed(2));
}
