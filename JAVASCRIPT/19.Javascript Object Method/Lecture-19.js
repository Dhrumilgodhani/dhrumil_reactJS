/* Javascript Object Method */

/* is Forzem Method */

{
    let obj = { key:56 , key:65 , key:98 , key:100}

    obj.key1 = 1020;

    delete obj .key1;

    console.log(obj);

    Object.freeze(obj);

    obj.key1 = 1020;

    delete obj.key2;

    console.log(obj);

    let Data = Object.isFrozen(obj);

    console.log(obj);
    
    console.log(Data);

}

/* Object.seal() Method */

{
    let obj = { key:56 , key:65 , key:98 , key:100}

    Object.seal(obj)

    delete obj.key

    console.log(obj); // { key: 56, key: 65, key: 98, key: 100 }

    let Data = Object.isSealed(obj);

    console.log(Data); // true
}

/* hasOwn() Method */

{
    let obj = {key1: "javascrip" , key2: "html" , key3:"bootstraps" , key4:"nodejs"}

    let Data = Object.hasOwn(obj , "html");

    console.log(Data); // true

    console.log(obj.hasOwnProperty("key1")); // true
}

/* Object.entries() Method */

{
    let obj = {key1: "javascrip" , key2: "html" , key3:"bootstraps" , key4:"nodejs"}

    for(const [key,value] of Object.entries(obj)){
        console.log(`This Object Key are ${key} and It's Value is ${value}`);
    }

    let array = [12,24,25,68,69]

    for (const value of array){
        console.log(`${value}`);
    }
}

/* Object.keys()*/

{
    let obj = {key1: "javascrip" , key2: "html" , key3:"bootstraps" , key4:"nodejs"}

    let Data = Object.keys(obj);

    console.log(Data); // [ 'key1', 'key2', 'key3', 'key4' ]
}

/* Object.values() Method */

{
    let obj = {key1: "javascrip" , key2: "html" , key3:"bootstraps" , key4:"nodejs"}

    let Data = Object.values(obj);

    console.log(Data); // [ 'javascrip', 'html', 'bootstraps', 'nodejs' ]
}

/* Object.groupBy */

{
    let Grosserys = [
    {name:"potato", type: "vegetable", price: 40, quntity:25},
    {name:"ladyfingures", type: "vegetable", price:20, quntity:30},
    {name:"mango", type:"fruit", price: 1200, quntity:5},
    {name:"orange", type:"fruit", price: 200, quntity:0},
    {name:"fish", type: "meat", price: 2000, quntity:100}
]

console.log(Grosserys);

let Data = Object.groupBy(Grosserys , ({name}) => name)

console.log(Data); /*  */

let Data1 = Object.groupBy(Grosserys, ({type}) => type)

console.log(Data1);

function Stock({quntity}){
    return quntity > 10 ? "enough Stock": "Restock" 
}

let data3=object.groupBy(grosserys , Stock)

console.log(data3);

 }
