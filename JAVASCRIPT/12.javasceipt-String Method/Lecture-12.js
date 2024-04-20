/* Javascript String method */

/* String TtoUpperCase And toLowerCase Method */

{
    let str = " Dog is very danger and dog is honest but Cut is very cute and cat is lazy!";

    let UpperStr = str.toUpperCase()

    let LowerStr = str.toLowerCase()

    console.log(UpperStr); //  Output: DOG IS VERY DANGER AND DOG IS HONEST BUT CUT IS VERY CUTE AND CAT IS LAZY!    
    console.log(LowerStr); //  Output: dog is very danger and dog is honest but cut is very cute and cat is lazy
}

/* String Slice And Substring Method */

{
    let str = "this is morning upon us!"

    let  sliceStr1 = str.slice(10)
    let  sliceStr2 = str.slice(0)
    let  sliceStr3 = str.slice(-10)

    let sliceStr4 = str.slice(10 , 22)
    let sliceStr5 = str.slice(10 , -5)

    console.log(sliceStr1); //us!
    console.log(sliceStr2);// this is morning upon us!
    console.log(sliceStr3);// !
    
    console.log(sliceStr4); //morning upon us
    console.log(sliceStr5); // morning upon u

    let subStr1 = str.substring(10, -20)
    let  subStr2 = str.slice(10 , -5)

    console.log(subStr1); // ""
    console.log(subStr2); // morning upon us
}

/* Javascript replace And replaceAll Method */


/* 
replce (Regx)
replaceAll (regx)
*/

{
    let str =   " Dog is very danger and dog is honest but Cut is very cute and cat is lazy!";

    let replaceStr = str.replace("Dog" , "Cat");
    let replaceStr1 = str.replace("dog", "Cat");
    let replaceStr2 = str.replace(/dog/gi , "Cat")

    console.log(replaceStr); // Cat is very danger and Cat is honest but Cut is very cute and cat is lazy!
    console.log(replaceStr1); //  Cat is very dangerous and Cat is honest but Cut is very cute and cat is lazy!
    console.log(replaceStr2); //  Cat is very dangerous and Cat is honest but Cut is very cute and cat is lazy!

    let replaceAll = str.replaceAll("Dog" , "Cat")
    let replaceAll1 =str.replaceAll(/Dog/gi , "Cat")

    console.log(replaceAll);//  Cat is very danger and Cat is honest but Cut is very cute and cat is lazy!
    console.log(replaceAll1);//  Cat is very danger and Cat is honest but Cut is very cute and cat is lazy!
}

/* Javascript charcodeAt() */

{
    let  string ="Hello World!";

    let CharStr = str.charCodeAt(10)
    let  CharStr1= str.charcodeAt(2)

    let replaceStr = str.repeat(2)

    console.log(CharStr); // 32
    console.log(CharStr1); // 97
    console.log(replaceStr); // Hello World!Hello World!
}