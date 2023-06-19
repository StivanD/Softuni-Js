function trainingLab(input){
    let height = Number(input[0]) * 100;
    let width = Number(input[1]) * 100;
 
    let freeWidth = width - 100;
    let countDesksRow = Math.floor(freeWidth / 70);
    let countDesksColumn = Math.floor(height / 120);
    let totalSeats = (countDesksRow * countDesksColumn) - 3;
 
    console.log(totalSeats);
 
}