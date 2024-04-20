/* Javascript String Method */

/* match And matchAll string Method */

// let str = 'Dog is very cute but dog it is danger and Dog is so cute but dog is lazy!'


// let Match = str.match(/Dog/gi)

// let MatchAll  = [...str.matchAll(/Dog/gi)] //  using spread operator to convert iterator object into array

// console.log(MatchAll); //  Output: Array(4) [ "Dog", "Dog", "Dog", "dog" ]

/* Basic Function in Javascript */

// function greet(){
//     console.log(true); //  Output : true
// }

// greet();


/* Parameters and arguments */

// function Sum(number1 , number2){
//     console.log(number1 + number2);  //    Output : undefined + NaN
// }

// function Multiplication (num1 , num2 ){
//     console.log(num1*num2); //    Output : NaN * undefined
// }

// Sum(4 , 8); //    Output : undefined + NaN
// Sum(10 , 20); //    Output : 10 + 20 = 30
// Sum(10 , "10") //    Output : 10 + NaN =  10

// Multiplication(2 , 10) //     Output : 20
// Multiplication(2 , "10") //      Output : 2 * NaN = Nan
// Multiplication("10" , "10") //        Output : NaN * NaN = Nan</s>

/* Function With return keyword */

// function greet(a , b){

//     console.log("Hello Function!"); //  Logs Hello Function!
//     return a + b; //  Return statement adds the values of a & b
// }

// let str = `${a} and ${b}` //  Template literals are string literals that allow embedded expressions. You can use multi-line strings and
// console.log(str); //   Logs Undefined because str is not defined yet
// console.log(greet(10 , 25)); //    Logs Hello Function! And then logs  10+25=35</s>

// const print = (a) => console.log(a+a); //  Arrow functions are shorter than regular ones
// console.log(print(10)); //    Prints 10+10=20

