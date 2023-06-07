function housePainting(input){
    let houseHeight = Number(input[0]);
    let lengthOfSideWall = Number(input[1]);
    let lengthOfTriangleRoofWall = Number(input[2]);

    let sideWallArea = houseHeight * lengthOfSideWall;
    let windowArea = 1.5 * 1.5;
    let bothSidesArea = 2 * sideWallArea - 2 * windowArea;

    let backWallArea = houseHeight * houseHeight;
    let doorArea = 1.2 * 2;
    let bothFacesArea = 2 * backWallArea - doorArea;

    let totalWallsArea = bothSidesArea + bothFacesArea;
    let greenPaintNeeded = totalWallsArea / 3.4;

    let bothRoofRectanglesArea = 2 * (houseHeight * lengthOfSideWall);
    let bothRoofTrianglesArea = 2 * (houseHeight * lengthOfTriangleRoofWall / 2);

    let totalRoofArea = bothRoofRectanglesArea + bothRoofTrianglesArea;
    let redPaintNeeded = totalRoofArea / 4.3;

    console.log((greenPaintNeeded).toFixed(2));
    console.log((redPaintNeeded).toFixed(2));
}

