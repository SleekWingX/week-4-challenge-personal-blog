const backButton = document.querySelector('#back-button');
// pull stored string data
const storedData = localStorage.getItem('blogData');
// convert string to javascript object
const blogPost = JSON.parse(storedData);

console.log(blogPost)


// makes the back button take us back to form submission
backButton.addEventListener('click', function(){
    window.location.href = 'index.html';
})

// Data Conversion is important
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
