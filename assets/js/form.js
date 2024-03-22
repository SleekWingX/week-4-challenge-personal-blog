const submitForm = document.querySelector('#submit-button');

submitForm.addEventListener('click', function(){
    window.location.href = 'blog.html';
})
// 1) We NEED HTML elements on the screen/page 
// 2) We need to GRAB reference to the ELEMENT on the DOM
// Q) HOW do we capture the DATA (?)
// 3) We need to setup an EVENT listener


// we might consider putting the data into a structure for us to use
/* var newBlog = { 
    username: "",
    title: "",
    content: "" 
} */



// 4) Once we capture the data we want to ADD the NEW data to localStorage
// 



// -- localStorage -- // --> Database in the browser (Cookies)
// local storgage can ONLY STORE STRING TYPE DATA
// JSON OBJECT 

/*
// JSON is a STRING OBJECT
jsonObj = {
    "key": "value",
    "name": "Sara"
}

jsObj = {
    key: "value",
    name: "Sara",
    age: 25
}

*/

// Data Conversion is importatnt
// convert JSON String to JS OBJECT  --> JSON.parse(stringData)
// convert JS ONject  to JSON Object  --> JSON.stringify(jsData)


/* localStorage.setItem('blogs', JSON.stringify(["blog-1", 'blog-2']))
var storedData = localStorage.getItem('blogs');
console.log("Data: ", storedData)
console.log("Type: ", typeof storedData)
var jsData = JSON.parse(storedData);
console.log("Data: ", jsData)
console.log("Type: ", typeof jsData)
jsData.push("Bingo")
console.log("Data: ", jsData) */

