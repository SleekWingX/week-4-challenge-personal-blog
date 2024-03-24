const backButton = document.querySelector('#back-button');

// convert string to javascript object
const blogListDiv = document.querySelector('#blog-list')

let blogList = [];
/* document.getElementById('blog-title-1').textContent = blogPost.title;
document.getElementById('blog-content-1').textContent = blogPost.content;
document.getElementById('blog-author-1').textContent = ('Created by ' + blogPost.username); */
// makes the back button take us back to form submission
backButton.addEventListener('click', function(){
    window.location.href = 'index.html';
})

function init() {
    // Get stored todos from localStorage
    const storedData = JSON.parse(localStorage.getItem('blogData'));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedData !== null) {
      blogList = storedData;
    }
  
    // This is a helper function that will render todos to the DOM
    renderBlogs();
  }

function renderBlogs() {
    // Render a new li for each todo
    for (let i = 0; i < blogList.length; i++) {
      const blogItem = blogList[i];
  
      const li = document.createElement('li');
      li.setAttribute('class', "blog-element");
  
      const titleElement = document.createElement('h3');
      titleElement.textContent = blogItem.title;

      const contentElement = document.createElement('p');
      contentElement.textContent = blogItem.content;

      const usernameElement = document.createElement('p');
      usernameElement.textContent = ('Created by ' + blogItem.username);
  
      li.appendChild(titleElement);
      li.appendChild(contentElement);
      li.appendChild(usernameElement);
      blogListDiv.appendChild(li);
    }
  }

  init();
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
