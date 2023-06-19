function weddingSeats(input){
    let endSector = input[0].charCodeAt();
    let rowFirstSector = Number(input[1]);
    let seatsOddRow = Number(input[2]);
    
    let counter = 0;
    let startSector = 65;
    let startSeat = 97;
    
    for (let sector = startSector; sector <= endSector; sector++) {
        for (let row = 1; row <= rowFirstSector; row++){
            if (row % 2 !== 0) {
                for (let seats = startSeat; seats < startSeat + seatsOddRow; seats++) {
                    console.log(`${String.fromCharCode(sector)}${row}${String.fromCharCode(seats)}`);
                    counter++;
                }
            }
            else if (row % 2 === 0) {
                for (let seats = startSeat; seats < startSeat + seatsOddRow + 2; seats++) {
                    console.log(`${String.fromCharCode(sector)}${row}${String.fromCharCode(seats)}`);
                    counter++;
                }
            }
        }
        
        if (rowFirstSector + 1 > rowFirstSector) {
            rowFirstSector++;
        }
    }
    
    console.log(counter)
}
