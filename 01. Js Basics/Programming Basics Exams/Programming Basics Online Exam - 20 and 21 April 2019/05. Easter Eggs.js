function easterEggs(input) {
    let eggsCount = Number(input[0]);
    
    let redEggs = 0;
    let orangeEggs = 0;
    let blueEggs = 0;
    let greenEggs = 0;
    
    let max = {
        eggs: 0,
        color: ""
    };
    
    for (let i = 1; i <= eggsCount; i++) {
        let currentColor = input[i];
        
        switch (currentColor) {
            case "red":
                redEggs++;
                if (redEggs > max.eggs) {
                    max.eggs = redEggs;
                    max.color = "red";
                }
                break;
            case "orange":
                orangeEggs++;
                if (orangeEggs > max.eggs) {
                    max.eggs = orangeEggs;
                    max.color = "orange";
                }
                break;
            case "blue":
                blueEggs++;
                if (blueEggs > max.eggs) {
                    max.eggs = blueEggs;
                    max.color = "blue";
                }
                break;
            case "green":
                greenEggs++;
                if (greenEggs > max.eggs) {
                    max.eggs = greenEggs;
                    max.color = "green";
                }
                break;
        }
    }
    
    console.log(`Red eggs: ${redEggs}`)
    console.log(`Orange eggs: ${orangeEggs}`)
    console.log(`Blue eggs: ${blueEggs}`)
    console.log(`Green eggs: ${greenEggs}`)
    console.log(`Max eggs: ${max.eggs} -> ${max.color}`);
}