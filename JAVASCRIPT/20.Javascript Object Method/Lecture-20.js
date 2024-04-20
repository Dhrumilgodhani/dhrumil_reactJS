/* Javascript Object Method */

/* is() Method */

let obj = [10 , 20 , 30 , 40]

let obj2 = [10 , 20 , 30 , 40]

let Is = Object.is('obj' , 'obj')

console.log(Is);

let Is2 = Object.is(obj , obj2)

console.log(Is2);

let Is3 = Object.is([] , [])

console.log(Is3);


/* Object.getownpropertyNames() Method */

{
    const object1 = {
        a: 1,
        b: 2,
        c: 3,
    };

    console.log(Object.getOwnPropertyDescriptor(object1));
    console.log(Object.keys(object1));
}

/* Object .fromEntries() Method */

{
    let obj = new Map ([["option-1 , 20"] , ["option-2" , 30]])

    let DataEntries = Object.fromEntries(obj)

    console.log(DataEntries);
}

/* Object.DefineProperties() Method*/

{
    let obj = {}

    let Props2 = Object.defineProperties(
        object , {
            obj1:{
                name:"dhrumil",
                value: 10,
            },
            obj2:{
                name:"Raj",
                value: 10,

            }
        }
    )
    console.log(Props2);

    let obj3  = {
        name: "dhrumil",
                    value: 10,
                }

                let props = Object.defineProperties(obj3 , {})
                 console.log(obj3);
    }

    /* Object.Prototype Method */

    {
        let obj = []

        let obj1 = {key1: 20 , key2:30 , key3:40 , key4:500}

        console.log(obj1.key1);

        let DataObject = Object.getPrototypeOf(DataObject)

        console.log(ProtoObject === obj1);
    }

    /* javascript call back function */
// {
// function(){}
// function sayHello(){
//     console.log('hello');
// }

function sayHi(){
    console.log("Hi");
   }
   
   function sum (a , b , callback){
       callback()
       return console.log(a+b)
   }
   
   console.log(sum(10 , 20 , sayHello));
   console.log(sum(30 , 40 , sayHi));
   
   /* javascript arrow function */
   
   function foo(){
       return console.log("this is basic function");
   }
   
   foo()
   
   const foo = () => {return console.log('this is arrow function');}
   foo()
   
   const foos = () => console.log("this is arrow function");
   
   foos()
   
   const fo = a => a + a
   console.log(fo(10));
   
   const foo1 = (a , b)  => a + b
   
   console.log(fool(10 , 20));
