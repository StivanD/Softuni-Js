function cinema(input){
    let seats = Number(input[0]);
    
    index = 1;
    let entering = Number(input[index]);
    
    let income = 0;
    let full = false;
    
    while (input[index] !== "Movie time!") {
        if (entering > seats) {
            console.log("The cinema is full.");
            full = true;
            break;
        }
        else {
            seats -= entering;
        }
        
        if (entering % 3 === 0) {
            income += (entering - 1) * 5;
        }
        else {
            income += entering * 5;
        }
        
        index++;
        entering = Number(input[index]);
    }
    
    if (!full) {
        console.log(`There are ${seats} seats left in the cinema.`);
    }
    
    console.log(`Cinema income - ${income} lv.`);
}
