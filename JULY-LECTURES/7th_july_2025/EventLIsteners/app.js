let h1 = document.querySelector('h1')

h1.addEventListener('click', clickOne)
h1.addEventListener('click', clickTwo)

function clickOne() {
    console.log("This is the first Task")
}

function clickTwo() {
    console.log("This is the task number two")
}

