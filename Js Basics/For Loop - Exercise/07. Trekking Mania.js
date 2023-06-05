function trekkingMania(input){
    let groupsCount = Number(input[0]);
    
    let peopleCount = 0;

    let musala = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= groupsCount; i++) {
        let peopleInCurrentGroup = Number(input[i]);

        peopleCount += peopleInCurrentGroup;

        if (peopleInCurrentGroup <= 5) {
            musala += peopleInCurrentGroup;
        }
        else if (peopleInCurrentGroup > 5 && peopleInCurrentGroup <= 12) {
            montBlanc += peopleInCurrentGroup;
        }
        else if (peopleInCurrentGroup > 12 && peopleInCurrentGroup <= 25) {
            kilimanjaro += peopleInCurrentGroup;
        }

        else if (peopleInCurrentGroup > 25 && peopleInCurrentGroup <= 40) {
            k2 += peopleInCurrentGroup;
        }
        else {
            everest += peopleInCurrentGroup;
        }
    }

    let musalaPercentange = musala / peopleCount * 100;
    let montBlancPercentage = montBlanc / peopleCount * 100;
    let kilimanjaroPercentage = kilimanjaro / peopleCount * 100;
    let k2Percentage = k2 / peopleCount * 100;
    let everestPercentage = everest / peopleCount * 100;

    console.log(`${musalaPercentange.toFixed(2)}%`);
    console.log(`${montBlancPercentage.toFixed(2)}%`);
    console.log(`${kilimanjaroPercentage.toFixed(2)}%`);
    console.log(`${k2Percentage.toFixed(2)}%`);
    console.log(`${everestPercentage.toFixed(2)}%`);
}