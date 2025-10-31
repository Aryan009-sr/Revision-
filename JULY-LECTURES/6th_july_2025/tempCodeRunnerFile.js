= 'https://jsonplaceholder.typicode.com/todos';
async function fetchData(){
    const response = await axios.get(API3);
    console.log(response.data)
}
fetchData()