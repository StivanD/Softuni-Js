function carWash(commands) {
    
    let wash = (commands) => {
        let percentage = 10;  
              
        for (let i = 1; i <= commands.length; i++) {
            switch (commands[i]) {
                case 'soap':
                    percentage += 10;
                    break;
                case 'water':
                    percentage *= 1.2;
                    break;
                case 'vacuum cleaner':
                    percentage *= 1.25;
                    break;
                case 'mud':
                    percentage *= 0.9;
                    break;
            }
        }
        return percentage;
    }
    
    console.log(`The car is ${wash(commands).toFixed(2)}% clean.`);
}
