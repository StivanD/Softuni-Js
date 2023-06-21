function houseParty(input) {
    let guests = [];
    
    for (let i = 0; i < input.length; i++) {
        let currentLine = input[i].split(' ');
        let name = currentLine[0];
        let going = currentLine[2];
        
        if (going === 'going!') {
            if (!guests.includes(name)) { 
                guests.push(name);
            }
            else {
                console.log(`${name} is already in the list!`);
            }
        }
        else {
            if (!guests.includes(name)) {
                console.log(`${name} is not in the list!`);
            }
            else {
                guests.splice(guests.indexOf(name), 1);
            }
        }
    }
    
    console.log(guests.join(`\n`));
}
