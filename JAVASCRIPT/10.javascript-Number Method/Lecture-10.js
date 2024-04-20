/* javascript-number Method */

/* isNaN */
{
    let num = NuN;
    
    let Num = Number.isNaN(num);
    
    console.log(Num);// true
} 


/* parseFloat , parseintiger() */

let num = 20.9851555;

let num1 = Number.parseFloat(num)

console.log(num1); // 20.9851555

let num2 = Number.parseInt(num)

console.log(num2); 


/*Date Method in Javascript */

let NewDate = new Date()

console.log(NewDate);     // Mon Feb 07 2022 14:36:19 GMT+0530 (India Standard Time)


/* Get Method in Date Object */

let NewDate1 = NewDate.getDate();
console.log(NewDate1);   // 7

console.log(NewDate.getDay());      // 1
console.log(NewDate.getHours());    // 14
console.log(NewDate.getMinutes()); // 36
console.log(NewDate.getMonth()) ;   // 1
console.log(NewDate.getSeconds());  // 19
console.log(NewDate.getFullYear()); // 2022

/* Set Method in Date Object */

let Date = new Date()

console.log(Date);       // Thu Jan 01 1970 00:00:00 GMT+0530 (India Standard Time)

let Date1 = Date.setDate(25)

console.log(Date1);        // 98400000
console.log(Date);          // Wed Jan 25 1970 00:00:00 GMT+0530 (India Standard Time)

let Date2 = Date.setFullYear(2003)

console.log(Date);         //  Wed Jan 25 00:00:00 GMTimezone:GMT +0530 (India Standard Time)
                            
let Date3 = Date.setHours(24)

console.log(Date);             // Tue Jan 25 00:00:00 GMT+0530 (India Standard Time)

let  Date4 = Date.setMilliseconds(55)

console.log(Date);            // Tue Jan 25 00:00:00.055 GMT+0530 (India Standard Time)

let Date5 = Date.setMinutes(30)

console.log(date);            // Tue Jan 25 00:30:00.055 GMT+0530 (India Standard Time)