
let redEl = document.querySelector('.red')
let blueEl = document.querySelector('.blue')
let greenEl = document.querySelector('.green')
let bodyEl = document.querySelector('body')

redEl.onclick = () => {
    bodyEl.style.backgroundColor = 'red'
}

blueEl.onclick = () => {
    bodyEl.style.backgroundColor = 'blue'
}

greenEl.onclick = () => {
    bodyEl.style.backgroundColor = 'green'
}
