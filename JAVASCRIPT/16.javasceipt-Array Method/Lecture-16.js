// //javascript array method

// /*
// fill
// some
// every
// reduce
// reduceright
// find
// findindex
// findlastindex
// include
// array.isarray
// flat
// flatmap
// */

// /*fill method in array */

// let array=["java","html","react","css","node"]

// let fill=array.fill("skillqode",2)

// console.log(fill);

// /*some/every method */

// let array=["java","html","react","css","node"]

// let some=array.some(item=>item === "html")
// let every=array.every(item=>item === "html")

// console.log(some);
// console.log(every);


// // /*reduce method */

// // // let num=[11,22,37,12]

// let reduce=num.reduce((current,previ)=>current+previ)
// let reduceright=num.reduceright((current,previ)=>current+previ)

// console.log(reduce);
// console.log(reduceright);

// // /*findindex,findlastindex */

// let array=["java","html","react","css","node"]
// let num=[11,22,37,12]


// let arrays=array.findIndex(item=>item.length<4)
// let arrays1=array.findlastIndex(item=>item.length<4)

// let num1=array.findIndex(item=>item>30)

// console.log(arrays);
// console.log(arrays1);
// console.log(num1);

// // /*inclide method in array */

// let num=[32,56,87,98,11]

// let include=num.includes(98)

// console.log(include);

// // /*array.isarray */

// let arrayoject=new array(45,56,78,98,333)

// console.log(arrayoject);

// let array=[12,45,65]

// let isarray=array.isarray()

// console.log(array);

// console.log(array.isarray([]));
// console.log(array.isarray('12'));
// console.log(array.isarray(new array(45,56,78,98,333)));
// console.log(array.isarray(new array()));

// // /*flat/flatmap method in array */

// let newarray=[12,15,36,[45,65,78,[13,43,25]]]

// console.log(newarray);

// let flat=newarray.flat()

// console.log(flat);

// let flat1=newarray.flat()

// console.log(flat1);


// let array=[10,20,10,20]

// let flatmap=array.flatMap(item=>(item===10?[10,[10,10]]:20))

// console.log(flatmap);

// /*at() method */

// let array=["a","b","c","d"]

// let at=array.at(4)

// console.log(at);

// /*join array method */

// let array=["a","b","c","d"]

// let join=array.join("\"")

// console.log(join);

// console.log(typeof join);

// /*mathobject method  in javascript*/

// console.log(math);

let maths1=math.PI

console.log(maths1);

let maths2=math.sqrt(1024)

console.log(maths2);

let maths3=math.log(10)
let maths4=math.log2(10)
let maths5=math.log10(10)

console.log(maths3);
console.log(maths4);
console.log(maths5);

let maths6=math.ceil(26.47)

let maths7=math.floor(26.67)

console.log(maths6);
console.log(maths7);

let fix=10.476

let tofix=fix.toFixed(2)

console.log(tofix);

let maths8=trunc(101.99)

console.log(maths8);

let maths9=math.pow(5,3)

console.log(maths9);