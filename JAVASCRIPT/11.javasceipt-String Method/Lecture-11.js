// Javascript String Methods

// let str1 = "this is String method";
// let str2 = 'this is String method';
// let str3 = `this is String method`;
// let str4 = new String("this is String method");

// console.log(str1); //  this is String method
// console.log(typeof str1);  //  string
// console.log(str2);//   this is String method
// console.log(typeof str2);//     string
// console.log(str3);   //     this is String method
// console.log(typeof str3); // string
// console.log(str4);//     String {0: "t", 1: "h", 2: "i", ...}
// console.log(typeof str4); // object
 
// String Methods--------------------

// CharacterData(nymber);

// {
//     let str = "thid id mmorning upon us!";
//     let CharStr = str.charAt(2) //  returns the character at position 2 in a string, which is "i"
//     console.log(CharStr); //  i
// }

  /*  indexOf And lastInderxof Method */

// {
//     let str = "this is morning  upon us is!"
//     let indexStr = str.indexOf("is")
//     let lastStr = str.lastIndexOf("is")
//     console.log(indexStr); //   9
//     console.log(lastStr); //   17

//     let indexStr1 = str.indexOf("z")
//     let indexStr2 = str.lastIndexOf("z")

//     console.log(indexStr1); // -1
//     console.log(indexStr2); //   18

//     let indexStr3 = str.indexOf("is" ,6);
//     let lastStr1 = str.lastIndexOf("is" ,4)

//     console.log(indexStr3); //  15
//     console.log(lastStr1);  //   4

//     let indexStr4 = str.indexOf("is" ,-1)
//     console.log(indexStr4); //  0

//     let lastStr2 = str.lastIndexOf("is" ,1)
//     console.log(lastStr2); 
// }

/* Javascript trim , trimEnd and trimStart  Methods*/

// {
//     let str = " this is morning upon us is! "
//     console.log(str); //    this is morning upon us is! 

//     let trimStr = str.trim()
//     console.log(trimStr);//    this is morning upon us is!

//     let  trimStart1 = str.trimStart()
//     console.log(trimStart1);//       this is morning upon us is!

//     let  trimStart2 = str.trimEnd()
//     console.log(trimStart2); //       this is morning upon us is!
// }

/* Javascript padStart and padEnd */

// let str = "Be"
// let padStr = str.padStart(10 , "BB")
// let endStr = str.padEnd(10 , "B")
// console.log(padStr);
// console.log(endStr);

/* Javascript string split() method */
// {
// let str = "Hello! Javascript undefined Hello Hello"

// let str1 = str.split("")
// let str2 = str.split(" ")
// let  str3 = str.split("e")
// let  str4 = str.split()

// console.log(str1);//  ["H","e","l","l","o","!"," ", "J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
// console.log(str2);//    ["Hello!", "Javascript", "undefined", "Hello", "Hello"]
// console.log(str3);//   ["H,ll,o!, Jav,scr,ipt"];
// console.log(str4);//    []
// }

/* Javascript string concat method */

// {
//     let str = "Hello! Javascript undefined Hello Hello"
//     let str1 = "Datascript"
//     let str2 = "DateDemences"
//     console.log(str+ "" + str1 + "" +  str2) 

//     let concatStr = str.concat(" ", str2 , " " , str1)

//     console.log(concatStr);//       Hello! Javascript undefined Hello Hello Date Demences Datascript
// }

/* Javascript string include Method */

// {
//     let str = "Hello! Javascript undefined Hello Hello"
//     let includeStr = str.includes("Hello")
//     let includeStr1 = str.includes("Hello" , 0)

//     console.log(includeStr); // true
//     console.log(includeStr1); //  false
// }

/* Javascript string length method */

// {
//     let str = " Hello Java! "
//     console.log(str.length); 
// }