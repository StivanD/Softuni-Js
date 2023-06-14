function dungeonestDark(arr) {
    let splitArr = arr[0].split('|');
    
    let coins = 0;
    let health = 100;
    
    for (let i = 0; i < splitArr.length; i++) {
        let currentRoom = splitArr[i].split(' ');
        let monsterOrItem = currentRoom[0];
        let number = Number(currentRoom[1]);
        
        switch (monsterOrItem) {
            case 'potion':
                if (health + number >= 100) {
                    console.log(`You healed for ${100 - health} hp.`);
                    health = 100;
                }
                else {
                    console.log(`You healed for ${number} hp.`)
                    health += number;
                }
                
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                coins += number;
                console.log(`You found ${number} coins.`);
                break;
            default:
                if (health - number > 0) {
                    console.log(`You slayed ${monsterOrItem}.`);
                    health -= number;
                }
                else {
                    console.log(`You died! Killed by ${monsterOrItem}.`);
                    console.log(`Best room: ${i + 1}`);
                    return;
                }
                break;
        }
    }
    
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

