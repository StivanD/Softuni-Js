function renovation(input){
    let height = Number(input[0]);
    let width = Number(input[1]);
    let percent = Number(input[2]);
    
    let total = height * width * 4;
    let toPaint = Math.ceil(total - total * 1.0 * percent / 100);
    
    let index = 3;
    let currentInput = input[index];
    
    while(currentInput !== "Tired!") {
        let litres = Number(currentInput);
        toPaint -= litres;
        
        if (toPaint <= 0) {
            break;
        }
        index++;
        currentInput = input[index];
    }
    
    if (toPaint === 0) {
        console.log("All walls are painted! Great job, Pesho!");
    }
    else if (toPaint > 0) {
        console.log(`${toPaint} quadratic m left.`);
    }
    else {
        console.log(`All walls are painted and you have ${toPaint * -1} l paint left!`);
    }
}