let a = 10;
let b = 20;
let c = 5;
let d = a;

let e = a + c + d - d - a;
// 10+5+10-10-10 = 5
console.log(e);

let f = e + c + a - a -e;
// 5+5+10-10-5 = 5
console.log(f);

let g = c + c + b + b - e;
// 5+5+20+20-5 =45
console.log(g);

let h = f - f - b + e - e;
// 5-5-20+5-5 = -20
console.log(h);

let i = f + (-f) + b + e + a + (-d);
//5+(-5)+20+5+10+(-10)
//5-5+20+5+10-10
//=25
console.log(i);

let j = f / f + e - e - h - g + e;
// 5 / 5 + 5-5-(-20)-45+5   
console.log(j);


