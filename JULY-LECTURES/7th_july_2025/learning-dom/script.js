//DOM - 2

// This is how we add a particular class to the selected element.
let h1 = document.querySelector('h1')
h1.classList.add('class1', 'class2', 'class3')
h1.classList.remove('class1');
h1.classList.toggle('class1');
console.log(h1.classList.contains('class2'));
h1.classList.remove('class2')
console.log(h1.classList.contains('class2'));
h1.classList.toggle('class2');

