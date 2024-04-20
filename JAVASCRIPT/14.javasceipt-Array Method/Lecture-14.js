/* javasceipt Array Methods */
{
    let Array = [ 10 , 20 , 30 , 40 , 50];

    console.log(Array); // Output : [10,  20, 30, 40, 50]

    console.log(Array.length) ;// Output: length of the array i.e., 5

    console.log(typeof  Array); //Output: object as arrays are objects in javascript

    let Newarray = new Array(10 , 20 , 30 , 40 , 50)

    console.log(Newarray); // Output: Array [ 10, 20, 30, 40, 50 ]

    console.log(Newarray.length); // Output: 5 because we used 'new' keyword to create an object from a constructor

    console.log(typeof Newarray); //  Output: object because we used 'new' keyword to create an object from a constructor function which is
}

{
    /* array switch method */
    
    let Array = [ 10 , 20 , 30 , 40 , 50];

    Array[0] = 90

    console.log(Array); //  Output: [90, 20, 30, 40, 50]
}

{
    let array = [10]

    let Newarray = new array(10)

    console.log(array);//  Output: 1

    console.log(Newarray);// Output: 10

    console.log(array.length);// Output: 1 because we have only one element in array

    console.log(Newarray.length);// Output: 10 which is passed while creating the new array
}

{
    let array = ["Javasceipt", 15 , false , undefined , null]

    console.log(array); //  Output : [ 'Javasceipt',  15, false, undefined, null ]

    console.log(array.length); // Output: 5

    console.log(typeof array ); //  Output: Object

    /* Array push Method */

    array.push("Nodejs");
    array.push(18);

    console.log(array); //  Output: [ 'Javasceipt',    15, false, undefined, null, 'Nodejs', 18 ]

    console.log(array.length); // Output: 7


    /* Array unshift Method */

    array.unshift("Python") ;
    array.unshift(23);
    console.log(array); // Output: [ 23,'Python','Javasceipt', 15, false, undefined, null, 'Nodejs', 18 ]
    console.log(array.length); // Output: 9

    /* Array pop method */

    array.pop()
    array.pop()

    console.log(array); //  Output: [ 23,'Python','Javasceipt', 15, false, undefined, null, 'Nodejs' ]
    console.log(array.length); // Output: 7

    /* Array shift method */

    array.shift()
    array.shift()

    console.log(array); //  Output: ['Javasceipt', 15, false, undefined, null, 'Nodejs']
    console.log(array.length) // Output: 6

    /* Array toString method */

    let string = array.toString();

    console.log(string); // Output : "Javasceipt,15,false,,null,Nodejs"

    /* Array reverce Method */

    let Reverce = array.reverse();

    console.log(Reverce); // Output: ["Nodejs", null, false, 15, false, 15, "Javascript"]

    /* Array forEach method */

    array.forEach((item) => console.log(item)) //  Output: Nodejs null false 15 false 15 Javascript

    /* array concat Method */

    {
        let array1 = [10 , 20 , 250]
        let array2 = [true , false]
        let array3 = ["sass" , "java"]

        let Newarray =array1.concat(array2 , array3)

        console.log(Newarray) ;//Output : [10, 20, 250, true, false, "sass", "java"]
    }

}