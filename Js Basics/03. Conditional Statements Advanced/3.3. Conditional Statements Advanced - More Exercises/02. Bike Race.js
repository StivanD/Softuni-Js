function bikeRace(input){
    let juniorsCount = Number(input[0]);
    let seniorsCount = Number(input[1]);
    let traceType = input[2];

    let sum = 0;

    switch (traceType) {
        case "trail":
            sum += juniorsCount * 5.50 + seniorsCount * 7;
            break;
        case "cross-country":
            sum += juniorsCount * 8 + seniorsCount * 9.50;
            if (juniorsCount + seniorsCount >= 50) {
                sum -= sum * 0.25;
            }
            break;
        case "downhill":
            sum += juniorsCount * 12.25 + seniorsCount * 13.75;
            break;
        case "road":
            sum += juniorsCount * 20 + seniorsCount * 21.50;
            break;
    }

    sum -= sum * 0.05;

    console.log(sum.toFixed(2));
}
