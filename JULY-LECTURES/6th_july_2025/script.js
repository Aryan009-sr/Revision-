// Fetch and promise

const { default: axios } = require("axios");

// import axios from "axios";

// const API = "https://jsonplaceholder.typicode.com/todos"

// fetch (API)
// .then((d) => {
//     return d.json()
// })
// .then((resp) => {
//     console.log(resp)
// })
// .catch((err) => {
//     console.log(err)
// })


//Fetch with async await
// const API2 = "https://jsonplaceholder.typicode.com/todos"

// async function getData(){
//     const response = await fetch(API2);
//     const data = await response.json()
//     console.log(data)
//     // console.log(response) 
// }
// getData()


// Axios
//Axios with promise
// const API = 'https://jsonplaceholder.typicode.com/todos'
// axios.get(API)
// .then((data) => {
//     console.log(data)
// })
// .then((error) => {
//     console.log(error)
// })

//Axios with async-await
// const API3 = 'https://jsonplaceholder.typicode.com/todos';
// async function fetchData(){
//     const response = await axios.get(API3);
//     const list = response.data;
//     const userIds = list.map(item => item.userId);
//     console.log(userIds);
    
// }
// fetchData()


