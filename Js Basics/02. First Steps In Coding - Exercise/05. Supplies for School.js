function priceOfSupplies(input) {
    let pensPackagesCount = Number(input[0]);
    let markersPackagesCount = Number(input[1]);
    let boardCleanerLitres = Number(input[2]);
    let discountPercentage = Number(input[3]);

    let sum = pensPackagesCount * 5.80 + markersPackagesCount * 7.20 + boardCleanerLitres * 1.20

    let discountedSum = sum - sum * discountPercentage / 100;

    console.log(discountedSum);
}