function vacation(peopleCount, groupType, dayOfTheWeek) {
    let price = 0;
    
    switch (dayOfTheWeek) {
        case "Friday":
            switch (groupType) {
                case "Students":
                    price = peopleCount >= 30 ? (peopleCount * 8.45) * 0.85 : peopleCount * 8.45;
                    break;
                case "Business":
                    price = peopleCount >= 100 ? ((peopleCount - 10) * 10.90) : peopleCount * 10.90;
                    break;
                case "Regular":
                    price = peopleCount >= 10 && peopleCount <= 20 ? (peopleCount * 15) * 0.95 : peopleCount * 15;
                    break;
            }
            break;
        case "Saturday":
            switch (groupType) {
                case "Students":
                    price = peopleCount >= 30 ? (peopleCount * 9.80) * 0.85 : peopleCount * 9.80;
                    break;
                case "Business":
                    price = peopleCount >= 100 ? ((peopleCount - 10) * 15.60) : peopleCount * 15.60;
                    break;
                case "Regular":
                    price = peopleCount >= 10 && peopleCount <= 20 ? (peopleCount * 20) * 0.95 : peopleCount * 20;
                    break;
            }
            break;
        case "Sunday":
            switch (groupType) {
                case "Students":
                    price = peopleCount >= 30 ? (peopleCount * 10.46) * 0.85 : peopleCount * 10.46;
                    break;
                case "Business":
                    price = peopleCount >= 100 ? ((peopleCount - 10) * 16) : peopleCount * 16;
                    break;
                case "Regular":
                    price = peopleCount >= 10 && peopleCount <= 20 ? (peopleCount * 22.50) * 0.95 : peopleCount * 22.50;
                    break;
            }
            break;        
    }
    
    console.log(`Total price: ${price.toFixed(2)}`);
}
