function skiTrip(input){
    let days = Number(input[0]);
    let roomType = input[1];
    let grade = input[2];

    let nights = days - 1;
    let price;

    if (roomType === "room for one person"){
        price = nights * 18.0;
    }
    else if (roomType === "apartment"){
        price = nights * 25.0;
        if (days < 10) {
            price -= price * 0.3;
        }
        else if (days >= 10 && days <= 15) {
            price -= price * 0.35;
        }
        else {
            price -= price * 0.5;
        }
    }
    else if (roomType === "president apartment"){
        price = nights * 35.0;
        if (days < 10) {
            price -= price * 0.1;
        }
        else if (days >= 10 && days <= 15) {
            price -= price * 0.15;
        }
        else {
            price -= price * 0.2;
        }
    }

    if (grade === "positive") {
        price += price * 0.25;
    }
    else if (grade === "negative") {
        price -= price * 0.1;
    }

    console.log(price.toFixed(2));
}