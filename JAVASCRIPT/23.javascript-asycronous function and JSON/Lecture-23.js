/* Asyncronous Function */

// SetTimeout

function greet(a , b){
    console.log(a + b);
    return a + b;
}

setTimeout(greet , 5000 , 10 , 20)
// output : 30

// SetInterval

function greet(a , b){
    console.log(a + b);
    return a + b;
}

setInterval(greet , 5000 , 10 , 20)
// output : 30

// cleartimeout

let setTimeout = setTimeout(function (){
    console.log("Hello");
} , 5000)

console.log(setTimeout);
 // output : 30


 /* clearInterval */

 let count = 0;

 let SetIntervalId = setInterval(function(){

    count+=1;
    if(count == 5){
        clearInterval(SetIntervalId)
    }
 } , 3000)

 //output : 5

 /* this keyword in javascript */

 /* this in global scope */

 let firstname = this

 console.log(firstname); // output : undefined

 /* this in inner function */

 function greet(){
    console.log(this);
 }

 greet() // output : window

 /* this in object */

 let person = {
     firstname : "John",
     age: 25,

     greet(){
        console.log(this);
        console.log(this,firstname);
     }
}

profile.greet() // output : {firstname : "John", age: 25, greet: ƒ}


/* this keyword in inner function */

{
    const user = {
        firstname : dhrumil,
        lastname : godhani,
        age : 22,

        greet() {
            console.log(this);
            console.log(this.firstname);
            
            function innerFunction(){
                console.log(this);
                console.log(this.firstname);
            }

            innerFunction();
        }

    
    }

    user.greet();

    // output : {firstname : "dhrumil", lastname : "godhani", age : 22, greet: ƒ}
    //          dhrumil
    //          window
    //          undefined
}


/* this with arrow funtion */

let greet = () => console.log(this);
greet(); // output : window

{
    const user = {
        firstname : "dhrumil",
        lastname : "godhani",
        age : 22,

        greet() {
            console.log(this);
            console.log(this.lastnamename);

            const innerFunction = () => {
                console.log(this);
                console.log(this.firstname);
            }

            innerFunction();
        }
    }

    user.greet();

    // output : {firstname : "dhrumil", lastname : "godhani", age : 22, greet: ƒ}
}




/* Javascript JSON */

/* fetch()Method */

// fetch('http://localhost:3000/comments')
// .then(Response => Response.json())
// .then(data => console.log(data))

// fetch('http://localhost:3000/posts')
// .then(Response => Response.json())
// .then(data => console.log(data))

// fetch('http://localhost:3000/profile')
// .then(Response => Response.json())
// .then(data => console.log(data))