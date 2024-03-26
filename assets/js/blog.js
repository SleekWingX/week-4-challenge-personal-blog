const backButton = document.querySelector('#back-button');

// convert string to javascript object
const blogListDiv = document.querySelector('#blog-list')

// uses an array format to pull local data
let blogList = [];

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
    // Render a new list item with elements for each title/content/username
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
