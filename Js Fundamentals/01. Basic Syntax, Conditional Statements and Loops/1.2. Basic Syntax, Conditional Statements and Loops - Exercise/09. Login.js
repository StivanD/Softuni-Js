function login(input) {
    let username = input[0];
    
    let counter = 1;
    
    while (counter <= 4) {    
        let currentPassword = input[counter];
        
        currentPassword = [...currentPassword].reverse().join("");
        if (currentPassword === username) {
            console.log(`User ${username} logged in.`);
            return;
        }
        else {
            if (counter === 4) {
                break;
            }
            console.log("Incorrect password. Try again.");
        }
        
        counter++;
    }
    
    console.log(`User ${username} blocked!`);
}
