function hotelRoom(input){
    let month = input[0];
    let nightsCount = Number(input[1]);

    let studioPrice;
    let apartmentPrice;

    if (month === "May" || month === "October") {
        studioPrice = 50 * nightsCount;
        apartmentPrice = 65 * nightsCount;
        if (nightsCount > 7 && nightsCount <= 14) {
            studioPrice -= studioPrice * 0.05;
        }
        else if (nightsCount > 14){
            studioPrice -= studioPrice * 0.3;
        }
    }
    else if (month === "June" || month === "September") {
        studioPrice = 75.20 * nightsCount;
        apartmentPrice = 68.70 * nightsCount;
        if (nightsCount > 14) {
            studioPrice -= studioPrice * 0.2;
        }
    }
    else if (month === "July" || month === "August") {
        studioPrice = 76 * nightsCount;
        apartmentPrice = 77 * nightsCount;
    }

    if (nightsCount > 14) {
        apartmentPrice -= apartmentPrice * 0.1;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
