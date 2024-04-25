// /* javascript Dom New Element */
// // createElement
// // textContent
// // appendChild

let element3 = document.createElement("marquee")
element3.setAttribute("bgcolor" , "green")
element3.setAttribute("direction" , "")
element3.textContent = "I love JavaScript"
document.body.appendChild(element3)



{
    let image = document.createElement("img")
    
    image.setAttribute('src' , "https://posterphotography.com/wp-content/uploads/2020/06/001-B11-Radha-Krishna-05-grey-mat-1-600x600.jpg")
    image.setAttribute('height' , "400")
    
    document.body.appendChild(image)
    console.log(image);
}

/* 
    addeventListeners
    attributes
    appendChild
    blur()
    focus()
    childElementCount
    childNodes
    classList
    className
    click()
    firstChild
    hasAttribute
    hasAttributes
    removeChild
*/

document.getElementById('clicks').addEventListener("mouseover" , size)
function size(){
    document.getElementById('demobox').style.height = "200px"
    document.getElementById('demobox').style.width = "200px"
    document.getElementById('demobox').style.backgroundColor = "red"
}

document.getElementById('headtext').style.display = "none"


let image = document.getElementById('img').attributes
let image1= document.getElementById("img").attributes.length


console.log(image);
console.log(image1);

let inputs = document.getElementById("text").focus()

function blur() {
    document.getElementById('text').blur()
}

document.getElementById("focuss").addEventListener("click" , function(){
    document.getElementById('text').focus()
})

document.getElementById("blurr").addEventListener("click" , function(){
    document.getElementById('text').blur()
})

let element = document.getElementById("demo").childElementCount
console.log(element);

let element1 = document.getElementById("demo").childNodes
console.log(element1);

let data = document.getElementById("demo").classList
data.add('heading')

/*  ClassName */

{
    let value = document.getElementById("demo")
    
    
    function Color(){
        if (value.className == 'heading') {
            value.className = 'heading-1'
        }
        else{
            value.className = 'heading';
        }
    }
}

{
    let value = document.getElementById("demo")
    
    function Hello(){
        if (value.className == 'heading') {
            value.className = 'heading-1';
        } 
        else if(value.className == 'heading-1'){
            value.className = 'heading-2';
        }
        else {
            value.className = "heading";
        }
    }
}

/* Click() */

document.getElementById("Newtext").addEventListener("mouseover", Hello);

function Hello() {
    document.getElementById("Newtext").click();
}

document.getElementById("New").addEventListener("mouseover" , Data);

function Data(){
    document.getElementById("New").focus(); 
}


/* FirstChild Method */


{
    let element = document.getElementById("demo").firstChild.innerHTML;
    console.log(element);
}

// console.log(element);

/* HasAttributes */

let val = document.getElementById("demo").hasAttribute("type");
let value = document.getElementById("demo").hasAttribute("src");

console.log(val);
console.log(value);

/* Body In HasAttributes */

{
    let element = document.body.hasAttributes()
    
    console.log(element);
}


/* Remove Child */

function intro(){
    const list = document.getElementById("demo")
    list.removeChild(list.firstElementChild)
}
