/* Javascript HTML DOM Method */

/* DOM Selection Method */

let dom1 = document.getElementById('demo')

console.log(dom1);
// output: <p id="demo">This is a paragraph.</p>

let dom2 = document.getElementById('demo').id

console.log(dom2);
// output: HTMLCollection(1) [p#demo, p#demo]

let dom3 = document.getElementById('demo').className

console.log(dom3);
// output: HTMLCollection(1) [p#demo, p#demo]

/* Style */

document.getElementById('demo').style.color = 'purple';

let dom4 = document.getElementsByClassName('heading')

console.log(dom4);
// output: orange

/* Tag */

let dom5 = document.getElementsByTagName('heading')

console.log(dom5);
// output: HTMLCollection(2) [h1#heading, h2#heading]

let dom7 = document.getElementById('demo').textContent

console.log(dom7);
// output: This is a paragraph.

let dom8 = document.getElementById('demo').innerHTML

console.log(dom8);
// output: This is a paragraph.

let dom9 = document.getElementById('demo').innerText

console.log(dom9);
// output: This is a paragraph.<span style="display: none;"> sapn tag</span>



/*querySelector And querrySelectorAll */

let data1 = document.querySelector('h1')

console.log(data1);
// output: <h1 id="heading">Heading</h1>

data1.style.color = "orange"

let data2 = document.querySelector('li')

console.log(data2);
// output: NodeList(3) [li#one, li#two, li#three]

data2.style.color = "red"

let data3 = document.querySelectorAll('li')

console.log(data3);
// output: NodeList(3) [li#one, li#two, li#three]

data3.forEach((li) => {
    li.style.color = "orange"
})
9
let data4 = document.querySelector('input[type="text"]')

console.log(data4);

data4.style.backgroundColor = "red"

let data5 = document.querySelector('input[type="password"]')

console.log(data5);

data5.style.backgroundColor = "red"
