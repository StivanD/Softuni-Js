function aquarium(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentageFilled = Number(input[3]);

    let aquariumVolume = (length * width * height) * 0.001;
    let neededLitres = aquariumVolume * (1 - percentageFilled * 0.01);

    console.log(neededLitres);
}
