function addAndRemove(commands) {
    let num = 1;
    let numbers = [];
    
    for(let i = 0; i < commands.length; i++, num++) {
        if (commands[i] === 'add') {
            numbers.push(num);
        }
        else if (commands[i] === 'remove') {
            numbers.pop();
        }
    }
    
    if (numbers.length === 0) {
        console.log('Empty')
    }
    else {
        console.log(numbers.join(' '));
    }
}
