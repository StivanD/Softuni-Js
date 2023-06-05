function travelAgency(input){
    let town = input[0];
    let package = input[1];
    let vip = input[2];
    let days = Number(input[3]);
    
    if (days > 7) {
        days--;
    }
    
    let price = 0;
    let isValid = true;
    
    if (town === "Bansko" || town === "Borovets") {
        if (package === "withEquipment") {
            price = (vip === "yes") ? days * 100 * 0.90 : days * 100;
        }
        else if (package === "noEquipment") {
            price = (vip === "yes") ? days * 80 * 0.95 : days * 80;
        }
        else {
            console.log("Invalid input!");
            isValid = false;
        }
    }
    else if (town === "Varna" || town === "Burgas") {
        if (package === "withBreakfast") {
            price = (vip === "yes") ? days * 130 * 0.88 : days * 130;
        }
        else if (package === "noBreakfast") {
            price = (vip === "yes") ? days * 100 * 0.93 : days * 100;
        }
        else {
            console.log("Invalid input!");
            isValid = false;
        }
    }
    else {
        console.log("Invalid input!");
        isValid = false;
    }
    
    if (days < 1) {
        console.log("Days must be positive number!");
        isValid = false;
    }
    
    if (isValid) {
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }
}