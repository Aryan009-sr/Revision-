// Dom is something which we used to make changes to our html file using javascript.

// first step is selecting the element you need for making the changes to your html File 
// So there are multiple ways for selecting the element.

//get element by tag name-gives us array of elements
// let tag1 = document.getElementsByTagName('h2')
// console.log(tag1)

// let p1 = document.getElementsByTagName('p')
// console.log(p1)

// // get element by id
// let el = document.getElementById('id1')
// console.log(el);

// // get element by class
// let para = document.getElementsByClassName('para')
// console.log(para);

// // get element by using queryselector

// let ele = document.querySelector('.para')
// console.log(ele);

// // get element by using queryselectorAll
// let allEel = document.querySelectorAll('h1')
// console.log(allEel);


//DOM MANIPULATION

// let head = document.querySelector('h1')

// head.textContent = 'Prakhar is learning DOM';
// head.innerText = '<span>This is written along with Span</span>'
// head.innerHTML = '<span>This is also span but it is treated as html element </span>'


let h1 = document.querySelector('h1')
console.log(h1)
console.log(h1.getAttribute('class'))
console.log(h1.setAttribute('class', 'Hello I am learning DOM'))
