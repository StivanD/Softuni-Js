function changeBureau(input){
    let [bitcoinsCount, chineseYuansCount, comission] = [...input.map((x) => Number(x))];
    
    let bitcoin = 1168; // leva
    let chineseYuan = 0.15; //dollars
    let dollar = 1.76; // leva
    let euro = 1.95; // leva
    
    let sum = bitcoin * bitcoinsCount + ((chineseYuan * chineseYuansCount) * dollar);
    
    sum /= euro;
    sum -= sum * comission / 100;
    
    console.log(sum.toFixed(2));
}
