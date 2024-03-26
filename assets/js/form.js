// grabs reference data from the DOM
const submitForm = document.querySelector('#submit-button');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title-name');
const contentInput = document.querySelector('#content-text');

//bloglist array to plug into local data
let blogList = [];

// function to grab the stored data and add it to the end of the local data
function init() {
    
    const storedBlog = JSON.parse(localStorage.getItem('blogData'));
    
    if (storedBlog !== null) {
        blogList = storedBlog;
    }
}

// checks if the form has been filled out (helped by Xpert)
function checkFormCompletion() {
    if (usernameInput.value.trim() === '') {
        return false;
    } else if (titleInput.value.trim() === '') {
        return false;
    } else if (contentInput.value.trim() === '') {
        return false;
    } else
    // If all input fields are filled, return true
    return true;
}
// Uses the submit button to update local storage and change the page
submitForm.addEventListener('click', function(){
       //object to store form information
    const blogStorage = {
        username: usernameInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentInput.value.trim(),
    };

    let isFormComplete = checkFormCompletion();
    // logic to kick back if form boxes are empty
    if (isFormComplete != true) {
        alert("Please complete the form!")
    } else {
    
    blogList.push(blogStorage);    
    // command that stores the data to local storage
    localStorage.setItem('blogData', JSON.stringify(blogList));
    // changes the page to blog
    window.location.href = 'blog.html'; 
    }
});

init();