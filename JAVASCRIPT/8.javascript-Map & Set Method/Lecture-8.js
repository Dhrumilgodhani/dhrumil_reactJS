/* Javascript Map Object Method */

/*
New Map()
set method
get method
delete method
clear method
has method
key method
values method
foreach method
size method
entries method
*/

// let myobject = {
//     "Name" : "Rudra",
//     "Age" : 19,
//     "From": "Surat"
// };

// let dataobject = myobject.Age
// let dataobject1 = myobject.Name
// let dataobject2 = myobject.From

// console.log(dataobject);
// console.log(dataobject1);
// console.log(dataobject2);

/* Map Method */

// let mapobject = new Map();

/* Set Method */

// mapobject.set("Fname","Vraj")
// mapobject.set("Lname","Sutariya")
// mapobject.set("Age",19)
// mapobject.set("Hobby","Devloper")
// mapobject.set("Gender","Male")

// console.log(mapobject);

/* Get Method */

// let getobject1  = mapobject.get("Name")
// let getobject2  = mapobject.get("Age")
// let getobject3  = mapobject.get("From")

// console.log(getobject1);
// console.log(getobject2);
// console.log(getobject3);

/* Delete Method */

// let deletemap = mapobject.delete("Lname")

// console.log(mapobject);


/* Size Method */

// let sizemap = mapobject.size;

// console.log(sizemap);

/* Values Method */

// let valuesmap = mapobject.values();

// console.log(valuesmap);

// console.log(valuesmap.next().value);
// console.log(valuesmap.next().value);
// console.log(valuesmap.next().value);
// console.log(valuesmap.next().value);

/* Key Method */

// let keydata = mapobject.keys();

// console.log(keydata);
// console.log(keydata.next().value);
// console.log(keydata.next().value);
// console.log(keydata.next().value);
// console.log(keydata.next().value);

/* Has Method */

// let hasmap = mapobject.has("Fname")

// console.log(hasmap);

/* Clear Method */

// let clearmap = mapobject.clear();

// console.log(mapobject);

/* Entries Method */

// let entriesmap = mapobject.entries();

// console.log(entriesmap);


/* ForEach Method */

// mapobject.set("Name","Rudra")
// mapobject.set("Age",19)
// mapobject.set("From","Surat")
// mapobject.set("Hobby","Devloper")

// console.log(mapobject);

// function data(value,key) {
//     console.log(${key} = ${value});
// }  





/* Javascript Set Object */

/* Add Method */

let setobject = new Set();

let addset = setobject.add("RUDRA");
let addset1 = setobject.add("VRAJ");
let addset3 = setobject.add("DEVIN");
let addset0 = setobject.add("GPT");

console.log(addset);

/* Entrie Method */

let entries = setobject.entries()

console.log(entries);
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);

/* Has Method */

let getset = setobject.has("RUDRA");

console.log(getset);

/* Key Method */

let keyset = setobject.keys();

console.log(keyset);
console.log(keyset.next().value);
console.log(keyset.next().value);
console.log(keyset.next().value);
console.log(keyset.next().value);

/* Values Method */

let valueset = setobject.values();

console.log(valueset);
console.log(valueset.next().value);
console.log(valueset.next().value);
console.log(valueset.next().value);
console.log(valueset.next().value);

/* Size Method */

let sizeset = setobject.size

console.log(sizeset);

/* Delete Method */

let deleteset = setobject.delete("GPT")

console.log(setobject);

/* Clear Method */

let clearset = setobject.clear()

console.log(setobject);


/* For Each Method */

let foreachset = setobject.forEach(print)

function print(key , value) {
    console.log(${key} => ${value});
}