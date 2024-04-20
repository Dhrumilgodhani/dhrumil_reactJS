/* javascript Number method */
{
    let newNumber = true;

    console.log(typeof newNumber);  // Output: boolean

    let convertNum = Number(newNumber);  

    console.log(convertNum);      // Output : NaN

    console.log(typeof convertNum);   // Output: number
}

/* Number Method */

{
    let Num = 10;

    let StringNum = Num.toString()

    console.log(StringNum); //  Output: "10"

    console.log(typeof StringNum); //  Output: string
}

{
    let Num = 265.5454111;

    let Num1 = Num.toPrecision();

    console.log(Num1); // Output: "265.5454111"
     
    let Num2 = Num.toPrecision(5)

    console.log(Num2); // Output: "265.5454"
}

{
    let Num = 25.65465

    let Num1 = Num.toFixed();

    console.log(Num1); // Output: "25"

    let Num2 = Num.toFixed(3);

    console.log(Num2); // Output: "25.655"
}

{
    let Num = 630000

    let Num1 = Num.toExponential();

    console.log(Num1); // Output: "6e+05"
}

{
    let Num =252525252525;

    let Num1 =  Num.toString();
    let Num2 =  Num.toLocaleString();

    console.log(Num1); //  Output: "252525252525"

    console.log(typeof Num1); //  Output: string
    console.log(typeof Num2); //  Output: string
    console.log(Num2); // Output: "25,252,525,252,525"
}

{
    let Num = "10";

    console.log(Number(Num)); // Output: 10

    let Num1 = "10 10"

    console.log(Number(Num1)); // Output NaN
    console.log(Number.Num1); // Output Uncaught TypeError: Number is not

    let Num2 = "10 items"

    let coNum = Number("10 items")

    console.log(Number(Num2)); //  Output NaN

    console.log(coNum); // Output 10
}

{
    let Num = (20+5) + "4"

    let Num1 = Num.valueOf();

    console.log(Num1); //  Output  254
}

{
    let Nam = 149;

    let num1 = Number.isFinite(Nam);

    let Num2 = Number.isSafeInteger(Nam);

    let Num3 = Number.isInteger(Nam);

    console.log(num1); //  Output true

    console.log(Num2); //  Output false

    console.log(Num3); //  Output false
}



/* javascript date() object */

/* 1 Jan 1970 */

/* Month 0 to 11 */
{
    let now = new Date()
    
    console.log(now);  //Tue Mar 16 2021 18:54:31 GMT+0530 (India Standard Time)
    
    console.log(typeof now); // Output : Object
    
    console.log(now.toString());//  Output : Thu Mar 17 2021 03:24:51 GMT+0530 (India Standard Time)
    
    console.log(now.toDateString()); // Output : Thursday, March  17, 2021
    
    console.log(now.toISOString()); // Output : "2021-03-17T13:54:51.061Z"
    
    console.log(now.toJSON());      // Output : "2021-03-17T13:54:51.061Z"
    
    console.log(now.toLocaleDateString());// Output : 17/03/2021
    
    console.log(now.toLocaleString()); // Output : Thu, 17 March 2021 13:54:51 GMT +05:30
    
    console.log(now.toTimeString()) ;// Output : "13:54:51 GMT+0530 (India Standard Time)"
    
    console.log(now.toUTCString())  ;// Output : "Thu, 17 Mar 2021  08:24:51 GMT"
    
    let now1 = now.toString();
    
    console.log(typeof now1);//  Output : String
}




