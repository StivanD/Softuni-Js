function movieProfit(input){
    let movieName = input[0];
    let daysCount = Number(input[1]);
    let ticketsCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let cinemaPercent = Number(input[4]);
    
    let profit = (ticketsCount * ticketPrice) * daysCount;
    profit = profit - profit * cinemaPercent / 100;
    
    console.log(`The profit from the movie ${movieName} is ${profit.toFixed(2)} lv.`);
}
