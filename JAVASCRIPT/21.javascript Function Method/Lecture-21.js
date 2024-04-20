/* function as constructoe */

function sum(){

}

const sum = () => {}

// const result = new function("a" , "b" ,"return a+b")

console.log(result(10 , 20));


/* function.length */

function greet (a , b , c , d, e){

}
console.log(greet.length);

/* function.tostring() */

function sum (a, b){
    return a * b
}

console.log(sum.toString());

/* function.name() */

// const sum = () => {}

// console.log(sum.name());

// const name = function (){}

// console.log(name.name);

/* function apply method */

function multi(a , b , c){
    return a * b * c
}


// let result = multi.apply.(null , [10 , 10 , 20])

console.log(multi(10 , 10));
console.log(result);

const max = math.max.apply(null , [10 , 20 , 30 , 40 , 50])
const min = math.min.apply(null , [10 , 20 , 30 , 40 , 50])

console.log(max);

console.log(min);

/* apply arg with loop */

{
  let num = [10 , 20]

  function sum(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
  }
  return sum
}
{
    let result = sum.apply(null , num)
    console.log(result);
}


/* array method */

let num1 = [10 , 20 , 30 , 40]

let num2 = [50 , 60 , 70 ,80]

console.log(num1.concat(num2));

let result = num1.push.apply(num1 , num2)

console.log(result);

console.log(num1);

let result1 = num1.push(...num2)

console.log(result);

console.log(num1);