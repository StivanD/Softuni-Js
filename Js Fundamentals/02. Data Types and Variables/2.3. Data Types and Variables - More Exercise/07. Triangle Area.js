function triangleArea(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    
    let s = 1 / 2 * (a + b + c);
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
    console.log(area)
}
