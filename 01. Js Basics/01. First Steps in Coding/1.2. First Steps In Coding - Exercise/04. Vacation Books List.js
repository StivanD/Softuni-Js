function hoursForReading(input){
    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysCount = Number(input[2]);

    let timeForReading = (bookPages / pagesPerHour) / daysCount;
    console.log(timeForReading);
}