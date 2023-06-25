function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');
    
    for (let i = 0; i < arr.length; i++) {
        let currentLine = arr[i].split(' ');
        let command = currentLine[0];
        let equipment = currentLine[1];
        
        switch (command) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash':
                if (inventory.includes(equipment)) {
                    inventory.splice(inventory.indexOf(equipment), 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(equipment)) {
                    let eq = inventory.splice(inventory.indexOf(equipment), 1);
                    inventory.push(eq.toString());
                }
                break;
            case 'Upgrade':
                let upgrade = equipment.split('-');
                let eq = upgrade[0];
                
                if (inventory.includes(eq)) {
                    let upgradedEquipment = upgrade.join(':');
                    let index = inventory.indexOf(eq);
                    inventory.splice(index + 1, 0, upgradedEquipment);
                }
                break;
        }
    }
    
    console.log(inventory.join(' '));
}
