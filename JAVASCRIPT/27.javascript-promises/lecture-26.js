let process1 = {
    stock : ['Stock is Availble'],
    production : ['Production was Started'],
    Fruits : ['Mango' , 'StrawBerry' ,'Orange'],
    AddIngrediant : ['Milk' , 'Milkpowder'],
    Toppings : ['Chocolate' , 'Nuts'],
    Packing : ['Cone' , 'Cup' , 'Stick'],
    AfterPack : ['Serve IceCream'],
}

let promise1 = new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log(`${process1.stock[0]}`);
        console.log(`${process1.Fruits[0]} Flavour production`);
        resolve()
    } , 2000)
})