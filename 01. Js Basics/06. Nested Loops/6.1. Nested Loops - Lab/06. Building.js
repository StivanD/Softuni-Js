function building(input) {
    let floorsCount = Number(input[0]);
    let roomsCount = Number(input[1]);

    for (let currentFloor = floorsCount; currentFloor > 0; currentFloor--){
        let floor = "";
        for (let room = 0; room < roomsCount; room++) {
            if (currentFloor === floorsCount) {
                floor += "L" + currentFloor + room + " ";
            }
            else if (currentFloor % 2 === 0) {
                floor += "O" + currentFloor + room + " ";
            }
            else {
                floor += "A" + currentFloor + room + " ";
            }
        }
        console.log(floor);
    }
}