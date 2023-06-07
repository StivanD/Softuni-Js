function areaOfFigures(input){
    let figure = input[0];
    let area;

    if (figure == "square"){
        let side = Number(input[1]);
        area = side ** 2;
    }
    else if (figure == "rectangle"){
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        area = sideA * sideB;
    }
    else if (figure == "circle"){
        let r = Number(input[1]);
        area = Math.PI * (r ** 2);
    }
    else if (figure == "triangle"){
        let side = Number(input[1]);
        let h = Number(input[2]);
        area = (side * h) / 2;
    }

    console.log(area.toFixed(3));
}
