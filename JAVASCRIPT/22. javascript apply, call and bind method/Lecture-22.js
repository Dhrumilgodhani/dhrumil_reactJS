/* javascript function apply() , call() and bind() method */

/* apply method */

{
  const human = {
      firstName: "john",
      lastName: "walker",
      age:33
  }

  const person = {
      firstName:"roit", 
      lastName:"harma",
  }

  function intro(message , pro ){
      console.log(`$(message) my firstname is $(this.firstname) and my lastname is $(this.lastname) ${pro}`);

      console.log(intro());

      let result = intro.apply(person , ["hi" , "i am cricketer"])

      console.log(result);
  
  }
}

/* call() method */
{
function sum(a , b) {
return a + b
}

let result = sum.call(null , 10 , 20)

console.log(result);

}

{
  let human = {
      firstName:"john",
      lastName: " walker",
      age:55
  }
  function intro(message){
      console.log(message + this.firstName + this.lastName);
  }

  let result = intro.call(human , "hi")

  console.log(result);
}

/* bind() method */

const human = {
  firstName: "john",
  lastName: "walker",
  intro:function(){
      console.log(`${this.firstName} ${this.lastName}`);
  }
}

const person = {
  firstName:"rohit",
  lastName:"shrama", 
}

let result= human.intro.bind(person)

console.log(result());

/* asyncronous function */

/* setinterval 
  settimeout
  clearinterval
  cleartimeout
*/

// setTimeout

setTimeout(multi , 4000 , arg1 , arg2, argn)

{
  setTimeout(() => console.log("hello") , 5000)
  setTimeout(() => {
      console.log("hello");
  } , 5000)
  setInterval(() => console.log("hi") , 3000);
}


function multi(){
  console.log("settimeout");
}

setTimeout(multi , 4000)
console.log("after settimeout");