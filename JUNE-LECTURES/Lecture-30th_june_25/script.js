//Async Programming
// console.log("Script start");

// setTimeout(() => {
//     console.log("Set Timeout for causing a 2seconds delay");
// }, 2000);

// console.log("Script end");

// Javascript is single-threaded and synchronous in nature but we can achieve asynchrony using callbacks, promises, async/await and other techniques.

//Single threaded means only one command is executed at a time.

// Javascript uses an event loop to handle asynchronous operations.

// Callbacks are functions passed as arguments to other functions to be executed later, often after an asynchronous operation completes.

// Web APIs are something provided by the browser (like setTimeout, DOM events, Fetch API) that allow us to perform asynchronous operations.

// The definition of Web APIs can be defined as a set of functions and protocols that enable interaction between different software applications over the web.

// When an asynchronous operation is initiated, the Web API handles it in the background, allowing the main thread to continue executing other code.

// console.log("Prakhar")
// setTimeout(() => {
//     console.log("Three seconds time out");
// }, 3000);

// setTimeout(() => {
//     console.log("four seconds time out");
// }, 4000);

// console.log("Singh");

// console.log("start");
// setTimeout(() => {
//     console.log("Settimeout with 0 seconds");
// }, 0);

// console.log("End");
// Even with a delay of 0 seconds, the setTImeout callback is executed after the synchronous code completes due to the event loop mechanism.


// IMplementing a simple instagram image posting feature using setTimeout to simulate network delay
// console.log("User is trying to post an Image on Instagram");

// function selectImage() {
//     setTimeout(() => {
//         console.log("Image being Selected...")
//        console.log("Image Selected") 
//     }, 4000);
// }
// selectImage();

// function applyFilter() {
//     setTimeout(() => {
//          console.log("Applying Filter to the Image...");
//         console.log("Filter Applied to the Image");
//     }, 2000);
// }
// applyFilter();

// function addCaption() {
//     setTimeout(() => {
//         console.log("Adding Caption to the Image...");
//         console.log("Caption Added to the Image");
//     }, 5000);
// }
// addCaption();

// function uploadImage() {
//     setTimeout(() => {
//         console.log("Uploading Image to Instagram...");
//         console.log("Image Uploaded to Instagram")
//     }, 3000)
// }
// uploadImage();


//Way 2
function step1(Image){
    console.log("Step 1: Selecting Image...");
    setTimeout(() => {
        Image("Image Selected");
    }, 4000);
}

function step2(Filter){
    console.log("Step 2: Applying Filter to the Image...");
    setTimeout(() => {
        Filter("Filter Applied to the Image");
    }, 3000);
}

function step3(Caption){
    console.log("Step 3: Adding Caption to the Image...");
    setTimeout(() => {
        Caption("Caption Added to the Image");
    }, 2000);
}
function step4(Upload){
    console.log("Step 4: Uploading Image to Instagram...");
    setTimeout(() => {
        Upload("Image Uploaded to Instagram");
    }, 3000);
}

step1(function(image){
    console.log(image);
    step2(function(filter){
        console.log(filter)
        step3(function(caption){
            console.log(caption)
            step4(function(upload){
                console.log(upload)
            });
        });
    });
});

// Successfully created a pyramid of doom using callbacks!
