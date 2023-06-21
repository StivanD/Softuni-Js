function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());
    
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        let currentLine = command[0];
        
        if (currentLine === 'Add') {
            let num = Number(command[1]);
            wagons.push(num);
        }
        else {
            currentLine = Number(currentLine);
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + currentLine <= maxCapacity) {
                    wagons[j] += currentLine;
                    break;
                }
            }
        }
    }
    
    console.log(wagons.join(' '));
}
