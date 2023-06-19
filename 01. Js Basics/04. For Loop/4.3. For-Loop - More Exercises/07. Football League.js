function footballLeague(input){
    let stadiumCapacity = Number(input[0]);
    let fansCount = Number(input[1]);
    
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;
    
    for (let i = 1; i <= fansCount; i++) {
        let sector = input[i + 1];
        
        switch (sector) {
            case "A":
                sectorA++;
                break;
            case "B":
                sectorB++;
                break;
            case "V":
                sectorV++;
                break;
            case "G":
                sectorG++;
        }
    }
    
    sectorA = sectorA / fansCount * 100;
    sectorB = sectorB / fansCount * 100;
    sectorV = sectorV / fansCount * 100;
    sectorG = sectorG / fansCount * 100;
    let allFansPercentage = fansCount / stadiumCapacity * 100;
    
    console.log(`${sectorA.toFixed(2)}%`);
    console.log(`${sectorB.toFixed(2)}%`);
    console.log(`${sectorV.toFixed(2)}%`);
    console.log(`${sectorG.toFixed(2)}%`);
    console.log(`${allFansPercentage.toFixed(2)}%`);
}