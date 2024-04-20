/* javasscript Object And It'S Method */

const obj = {id:1 , firstName:"dhrumil" , lastName:"godhani" , age:"21"}
const Obj = new Object()

let Data = obj.firstName

let Data1 = obj.firstName

let Data2 = obj["id"] // 1

console.log(Data); // dhrumil
console.log(Data1); // dhrumil
console.log(Data2); // 1

obj.address = "united states"
console.log(obj);// {id: 1, firstName: 'dhrumil', lastName: 'godhani', age: '21', address: 'united states'}

obj.id = 2
console.log(obj);// {id: 2, firstName: 'dhrumil', lastName: 'godhani', age: '21', address: 'united states'}


/* Object Method :- Object.assign() Method */

{
    const obj = {id:1 , firstName:"dhrumil" , lastName:"godhani" , age:"21"}

    const num = {key1:30 , key2:20 , key:10 , key:100}

    let assign = Object.assign(obj , num)

    console.log(assign); // {id: 1, firstName: 'dhrumil', lastName: 'godhani', age: '21', key1: 30, key2: 20, key: 100}

    console.log(obj);

    let assign1 = Object.assign({} , num , obj)

    console.log(assign1); 
}

/* Objet Method :- Object.freeze() Method */

{
    const obj = {id:1 , firstName:"dhrumil" , lastName:"godhani" , gender:"male" , age:"21"}

    obj.id = 2

    console.log(obj);

    let Data = Object.freeze(obj)

    Data.id = 30

    console.log(obj);

    obj.key1 = 100

    console.log(obj);

}


/* Object Method : Object.create() Method */

{
    const obj ={
        id:1 ,

        firstName:"dhrumil" ,

        lastName:"godhani" ,

        gender:"male" ,

        age:21 ,

        NewObj:function(){

            console.log(`my name is ${this.firstName} i am ${this.occupation}`);
        }

    }
    const obj1 = Object.create(obj)

    obj1.occupation = "student"

    console.log(obj1.occupation);

    console.log(Obj.NewObj());

    console.log(obj);

}

