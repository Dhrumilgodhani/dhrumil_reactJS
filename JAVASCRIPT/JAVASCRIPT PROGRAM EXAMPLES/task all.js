/* 1. Display Alert in JavaScript */
alert("hey no one is listening to me");


/* 13. Retrieve Today’s Date in JavaScript */

let date = new Date()
console.log(date);


/* 14. Reverse array javascript */

let arry = ["sass" , "javascript" , "css" , "HTML"] 
arry.reverse();
console.log(arry);


/* 15. JavaScript concate or merge two Arrays */

let array1 = ["Hello", "How"];
let array2 = ["are","you?"];
let result = array1.concat(array2);
console.log(result) // Hello, How are you?


/* 16. Reverse String in JavaScript */

let  str = "dlroW olleH";
let reverseStr = str.split('').reverse().join('');
console.log(reverseStr); // Hello World
console.log(typeof reverseStr); // string


/* 18. if else statement in JavaScrip */
{
    let age = 20;
    if (age < 18){
        console.log("You are a minor");
    }else{
        if (age == 18){
            console.log("You are old enough to vote");
        }else{
           console.log("You are an adult");  
        }
    }
}

/* 38. Convert Celsius Value to Farenheit Value in JavaScript */

let Fahrenheit = 99 ;
let celsius = (Fahrenheit - 32)*4/8;
console.log(celsius);
                   
/* 39. javascript get today’s date */

let  today = new Date();
console.log(today);

/* 54. Break and Continue in JavaScript */

let  fruits = ['apple', 'banana',  'mango', 'orange'];
for (let i=0; i<fruits.length;i++)
{
    if (fruits[i] === 'banana') {
      continue;
    }
    
    if (fruits[i] === 'orange') {
      break;
    }
    console.log('I like ' + fruits[i]);
}


/* 55. JavaScript Conditional Operator */ 
let age = 16;
let canVote = (age >=  18) ? "No" : "Yes";
console.log(canVote);