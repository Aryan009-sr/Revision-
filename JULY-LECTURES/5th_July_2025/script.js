// // Promises in Javascript

// const { data } = require("react-router-dom");

// // A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// // It uses the new keywords: resolve, reject, then, catch, and finally.
// // A Promise can be in one of three states: pending, fulfilled, or rejected.

// // Promise is sort of constructor function that takes a function as an argument with two parameters: resolve and reject.

// // Example of creating a Promise.
// // let myPromise = new Promise((resolve, reject) => {
// //     let success = true;
// //     if(success) {
// //         resolve("The operation was successful!");
// //     }
// //     else {
// //         reject("The operation failed.");
// //     }
// // })
// // //consuming the promise using then and catch
// // myPromise.then((message) => {
// //     console.log("Success: "  + message)
// // }).catch((message) => {
// //     console.log("Error: " + message) 
// // }).finally(() => {
// //     console.log("Promise has been handled.")
// // })

// //Example 2: Simulating a network request using Promises

// // function fetchDataFromServer() {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             const data = { userId: 1, username: "PrakharSingh"};
// //             resolve(data)
// //         }, 3000);
// //     });
// // }
// // dataPromise = fetchDataFromServer();
// // dataPromise.then((data) => {
// //     console.log("Data fetched from server: ", data)
// // }).catch((error) => {
// //     console.log("Error fetching data: ", error)
// // })


// //Promises 
// function step1() {
//     console.log("Step 1: Starting the Process... selecting the image")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Image Selected")
//         }, 4000)
//     })
// }

// function step2(selectedImage) {
//     console.log("Step 2: Adding filter to the image")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Filtered Image")
//         }, 2000)
//     })
// }

// function step3(filteredImage){
//     console.log("Step 3: Adding caption to the image")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("captioned Image")
//         }, 3000);
//     })
// }

// function step4(captionedImage) {
//     console.log("Step 4: Uploading the image to the server")
//     return new Promise((resolve, reject ) => {
//         setTimeout(() => {
//             resolve("Image uploaded successfully")
//         }, 2000)
//     })
// }

// step1()
// .then((image) => {
//     console.log(image)
//     return step2(image)
// })
// .then((filteredImage) => {
//     console.log(filteredImage)
//     return step3(filteredImage)
// })
// .then((captionedImage) => {
//     console.log(captionedImage)
//     return step4(captionedImage)
// })


// let object1 = new Promise((resolve, reject) => {
//     let info = "I will pay you"
//     let err = "I won't pay you"
//     // resolve(info)
//     reject(err)
// })
// // console.log(object1)
// object1
// .then((message) => {
//     console.log("Success: " + message)
// })
// .catch((message ) => {
//     console.log("Error: " + message) 
// })
// .finally(() => {
//     console.log("Promise has been handled.")
// });


// Creating an instagram post feature using Promises
// step1: select image
//step2 : addfilter
//step3: add caption
//step4: upload image

// function step1() {
//     console.log("Selecting the image...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Image selected")
//         }, 4000);
//     })
// }

// function step2(selectedImage) {
//     console.log("Adding filter to the selected Image...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Filter added to the Image.")
//         }, 2000);
//     });
// }

// function step3(filteredImage) {
//     console.log("Adding caption to the filtered Image...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Caption added to the Image.")
//         }, 5000);
//     })
// }

// function step4(CaptionedImage){
//     console.log("Image ready for uploading...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Image uploaded.")
//         }, 3000);
//     })
// }

// step1()
// .then((image) => {
//     console.log(image)
//     return step2(image)
// })
// .then((filteredImage) => {
//     console.log(filteredImage)
//     return step3(filteredImage)
// })
// .then((CaptionedImage) => {
//     console.log(CaptionedImage) 
//     return step4(CaptionedImage)
// })
// .then((finalImage) => {
//     console.log(finalImage)
// })

//Stil this is the process of multiple chainings that require to chain lots of promises using .then function that could still potentially lead to nested hell in my opinion. To overcome this we have "Async/Await".


//ASYNC-AWAIT
//CALLBACK HELL ->  PROMISES  ->  ASYNC-AWAIT
// Whenever we write async infront of a function, that function is always going to return a promise.

// async function add(x,y){
//     return x + y
// }
// console.log(add(4,5));
// THe output will still be 9 but it would be returned as a promise, you can run the file in the browser and check it. So async/await always returns a promise.


// Example: 1

// function one(){
//     console.log(1)
//     let data = fetch('https://jsonplaceholder.typicode.com/todos')
//     console.log(data)
//     console.log(2)
//     console.log(3)
// }
// one()
// console.log(4);
// console.log(5);

// Example : 2
// async function two(){
//     console.log(6)
//     console.log(7)
//     let data1 = await fetch('https://jsonplaceholder.typicode.com/todos')
//     console.log(data1)
//     console.log(8)
//     console.log(9)
// }
// console.log(10)
// two()
// console.log(11)

//example : 3
// async function two(){
//     console.log(60)
//     console.log(70)
//     let data2 = await fetch('https://jsonplaceholder.typicode.com/todos/2')
//     console.log(data2)
//     console.log(80)
//     console.log(90)
// }
// console.log(100)
// two()
// console.log(111)


// Instagram post feature using Async/Await
function step1() {
    console.log("Selecting the image...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Image selected")
        }, 4000);
    })
}

function step2(selectedImage) {
    console.log("Adding filter to the selected Image...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Filter added to the Image.")
        }, 2000);
    });
}

function step3(filteredImage) {
    console.log("Adding caption to the filtered Image...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Caption added to the Image.")
        }, 5000);
    })
}

function step4(CaptionedImage){
    console.log("Image ready for uploading...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Image uploaded.")
        }, 3000);
    })
}

async function processImage(){
    console.log("\n Starting Image processing using async/await");

    //1. Select the image
    const selectedImage = await step1();
    console.log(`-Result: ${selectedImage}`)
    //2. Add filter
    const filteredImage = await step2(selectedImage)
    console.log(`- Result : ${filteredImage}`)
    //3. Add caption
    const captionedImage = await step3(filteredImage)
    console.log(`- Result : ${captionedImage}`)
    //4. Upload Image
    const finalImage = await step4(captionedImage)
    console.log(`- Result : ${finalImage}`)

}
processImage();
