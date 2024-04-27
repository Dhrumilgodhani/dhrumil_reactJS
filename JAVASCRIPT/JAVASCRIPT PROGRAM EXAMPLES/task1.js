let process1 = {
    stock : ['Stock is are Availble'],
    production : ['Production was Started'],
    Fruits : ['Mango' , 'StrawBerry' ,'Orange'],
    AddIngrediant : ['Milk' , 'Milkpowder'],
    Toppings : ['Chocolate' , 'Nuts'],
    Packaging : ['Cone' , 'Cup' , 'Stick'],
    AfterPack : ['Serve IceCream'],
}

let promise1 = new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log(`${process1.stock[0]}`);
        console.log(`${process1.Fruits[2]} Flavour production`);
        resolve()
    } , 5000)
})


promise1.then(() => {
    console.log(`${process1.production[0]}`)
} , 2000)

promise1.then(() => {
    console.log(`production with added some ingrediant was name called ${process1.AddIngrediant[0]} and ${process1.AddIngrediant[1]}`)
} , 1000)

promise1.then(() => {
    console.log(`add toppings was ${process1.Toppings[0]} and ${process1.Toppings[1]}`)
} , 2000)

promise1.then(() => {
    console.log(`icecrem was package with ${process1.Packaging[1]}`)
} , 1000)

promise1.then(() => {
    console.log(`after packaging was ${process1.AfterPack[0]}`)
} , 5000)
