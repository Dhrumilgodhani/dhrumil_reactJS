/* Javascript Array method */

/* 
    Shift
    Filter
    indecOf
    slice
    splicev
    sort
    copyWithin
    entries()
    keys()
    values()

    fill
    some
    every
    reduce
    reduceRight
    find
    findIndex
    findLastIndex
    flat
    flatMap
*/


/* shift Method in Array */

{
    let array = ["apple" , "banana" , "cherry" , "date" , "elderberry" , "fig" , "grape" , "honeydew"];
    console.log(array);

    array.shift(); // remove the first element of array and return removed element
    array.shift(); // remove the first element of array and return removed element
    array.shift(); // remove the first element of array and return removed element
    array.shift(); // remove the first element of array and return removed element
    console.log(array);
}


/* Filter method in Array */


{
    let array = ["javascript" , "jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "nodejs" ]

    let filter = array.filter((any) => any == "jquery");  
    console.log(filter); // [ 'jquery' ] 

    let ArrayObject = [
        {id:1 , item:"mobile" , name:"iphone12" , color:"gray" , price:"55000" , discount:"9%" , storage:"64GB"},
        {id:1 , item:"mobile" , name:"iphone12pro" , color:"red" , price:"80000" , discount:"8%" , storage:"128GB"},
        {id:1 , item:"mobile" , name:"iphone13" , color:"gray" , price:"55000" , discount:"9%" , storage:"64GB"},
        {id:1 , item:"mobile" , name:"iphone13pro" , color:"red" , price:"55000" , discount:"9%" , storage:"64GB"},
        {id:1 , item:"mobile" , name:"iphone14" , color:"gray" , price:"55000" , discount:"9%" , storage:"64GB"},
        {id:1 , item:"leptop" , name:"dell" , color:"gray" , price:"89000" , discount:"9%" , storage:"64GB"},
        {id:1 , item:"leptop" , name:"dell" , color:"black" , blackprice:"45000" , discount:"9%" , storage:"64GB"},
        {id:1 , item:"leptop" , name:"dell" , color:"black" , price:"65000" , discount:"9%" , storage:"64GB"},
        {id:1 , item:"leptop" , name:"iphone" , color:"gray" , price:"89000" , discount:"9%" , storage:"64GB"},
        {id:1 , item:"leptop" , name:"iphone" , color:"gray" , price:"89000" , discount:"9%" , storage:"64GB"},
        {id:1 , item:"leptop" , name:"iphone" , color:"gray" , price:"89000" , discount:"9%" , storage:"64GB"},
        {id:1 , item:"pendrive" , name:"hp" , color:"gray" , price:"2000" , discount:"9%" , storage:"64GB"},
        {id:1 , item:"pendrive" , name:"hp" , color:"gray" , price:"2000" , discount:"9%" , storage:"64GB"},
        {id:1 , item:"pendrive" , name:"sanddisk" , color:"red" , price:"1000" , discount:"9%" , storage:"GB"},
    ]

        let Filter = ArrayObject.filter((item) => item.price < "30000") 
        console.log(Filter); // [{ id: 1, item: 'leptop', name: 'dell', color: 'gray', price: '89000', discount: '9%', storage
    

        let Filter1 = ArrayObject.filter((data) => data.color === "red");
        console.log(Filter1);

        let Filter2 = ArrayObject.filter((data) => data.item === "leptop");
        console.log(Filter2);
}

/* Map Method In Array */
{
    let num = [10 , 45 , 67 , 42 , 89]

    let Map = num.map((data) => data = 100)
    console.log(Map);
}

/* indexOf And LastIndexOf Method in Array */

{
    let array = ["Javascript" , "Jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "css" , "nodejs"]

    let Index = array.indexOf("css" , 4);

    let IndexLast = array.lastIndexOf("css" , 6);

    console.log(Index);

    console.log(IndexLast);
}

/* Slice And Splice Method in Array */

{
    let array = ["Javascript" , "Jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "css" , "nodejs"]

    let Slice = array.slice(2)

    let Slice1 = array.slice(2 , 5)

    console.log(Slice);
    
    console.log(Slice1);

    let Splice1 = array.splice( 2 , 2 , "expressjs" , "SQL" )

    console.log(Splice1);

    console.log(array);
}

/* sorting in Array */

{
    let array = ["Javascript" , "Jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "css" , "nodejs"]

    let num = [12 , 52 , 25 , 46 , 78 , 12 , 36 , 5 , 9]

    let sort = array.sort()

    let Num = num.sort((a , b) => a - b)

    console.log(sort);

    console.log(Num);
}

/* entries() , keys() , values() , method in array */

{
    let array = ["Javascript" , "Jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "css" , "nodejs"]
    let Entries = array.entries()

    console.log(Entries.next().value);
    console.log(Entries.next().value);
    console.log(Entries.next().value);

    let Keys = array.keys();

    console.log(Keys.next().value);
    console.log(Keys.next().value);
    console.log(Keys.next().value);
    console.log(Keys.next().value);

    let Values = array.values()

    console.log(Values.next().value);
    console.log(Values.next().value);
    console.log(Values.next().value);
    console.log(Values.next().value);
    console.log(Values.next().value);
    console.log(Values.next().value);
}

/* CopyWithin method In Array */

{
    let array = ["Javascript" , "Jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "css" , "nodejs"]
    console.log(array);

    let copy1 = array.copyWithin(3)
    console.log(copy1);

    let copy2 = array.copyWithin(2 , 5)
    console.log(copy2);

    let copy3 = array.copyWithin(2 , 4 , 6)
    console.log(copy3);
}

