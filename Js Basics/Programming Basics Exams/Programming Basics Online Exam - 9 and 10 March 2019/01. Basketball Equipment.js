function basketballEquipment(input){
    let taxForOneYear = Number(input[0]);

    let shoes = taxForOneYear - taxForOneYear * 40 / 100;
    let clothes = shoes - shoes * 20 / 100;
    let ball = clothes / 4;
    let accessories = ball / 5;

    let totalPrice = taxForOneYear + shoes + clothes + ball + accessories;
    console.log(totalPrice.toFixed(2));
}