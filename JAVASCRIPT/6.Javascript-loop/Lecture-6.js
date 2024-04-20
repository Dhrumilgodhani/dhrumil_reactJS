/* javascript template literals */

let String1 = "Hi, I 'am' A Frontend Developer!";

let String2 = 'Hi, I "am" A Frontend Developer!';

let String3 = "'Hi, I am A Frontend Developer!'";

let String4 = "Hi, I \"am\" A Frontend Developer!";

let String5 = 'Hi, I \'am\' A Frontend Developer!';

console.log(String1);
console.log(String2);
console.log(String3);
console.log(String4);
console.log(String5);

let String6 = `Hi, I 'am' A Fronten Developer!`;

console.log(String6); // Output: Hi, I 'am' A Fronten Developer!

/* Passing The Varibles */

let text = "Hello World!";

let String7 = "Hi, I 'am' A Frontend Developer ${text}!";
let String8 = `Hi, I 'am' A Frontend Developer ${text}!`;

console.log(String7); //  Output: Hi, I 'am' A Frontend Developer Hello World!
console.log(String8); // Output: Hi, I 'am' A Frontend Developer Hello World!

/* javascript loop */

/* 
    while loop
    do-while loop
    for loop
    for in... loop
    for of... loop
*/


/* while loop */

/* 
    While (condition) {
        statements
    }
*/

let Num = 0;

while(Num <= 10){
    console.log("Hello javascript!");
    document.write("Hello javascript!" + " <br>");
    document.write(`Hello javascript! ${Num}` + " <br>");
    document.getElementById("demo").innerHTML = "Hello World!" + Num;
    Num++;
}

/* do-while loop */

/* 
do{
    statement(s);
}while( condition );
*/

// let i = -10;

// do{
//     document.write(`our Loop! ${i}` + "<br>");
//     i++;
// }while(i <= 10);


/* for loop */
 /* for(initilization; condition; afterthought){

 } */

 let i = 0;
 let n = 10;

 for(i; i<=n; i++){
    console.log("DHRUMIL!");
 }

 for(let i = 0; i < 10; i++){
    console.log("Hello! I am Dhrumil!");
 }

 for(i = 10; i < 10; i++){
    console.log("Hello! I am Dhrumil!");
 }
 for(let i = 10; i < 10; i++){
    console.log("Hello! I am Dhrumil!");
 }
 for(const i = 10; i < 10; i++){
    console.log("Hello! I am Dhrumil!");
 }
