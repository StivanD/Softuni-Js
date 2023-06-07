function filmPremiere(input){
    let movie = input[0];
    let package = input[1];
    let ticketsCount = Number(input[2]);
    
    let bill = 0;
    
    switch (movie) {
        case "John Wick":
            switch (package) {
                case "Drink":
                    bill = ticketsCount * 12;
                    break;
                case "Popcorn":
                    bill = ticketsCount * 15;
                    break;
                case "Menu":
                    bill = ticketsCount * 19;
                    break;
            }
            break;
        case "Star Wars":
            switch(package) {
                case "Drink":
                    bill = ticketsCount * 18;
                    break;
                case "Popcorn":
                    bill = ticketsCount * 25;
                    break;
                case "Menu":
                    bill = ticketsCount * 30;
                    break;
            }
            
            if (ticketsCount >= 4) {
                bill *= 0.70;
            }
            break;
        case "Jumanji":
            switch(package) {
                case "Drink":
                    bill = ticketsCount * 9;
                    break;
                case "Popcorn":
                    bill = ticketsCount * 11;
                    break;
                case "Menu":
                    bill = ticketsCount * 14;
                    break;
            }
            
            if (ticketsCount === 2) {
                bill *= 0.85;
            }
            break;
    }
    
    console.log(`Your bill is ${bill.toFixed(2)} leva.`);
}
