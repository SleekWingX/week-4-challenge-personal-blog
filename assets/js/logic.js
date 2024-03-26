const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

/* sets a default mode for the page */
let mode = 'light';

// creates toggle for dark-light mode on switcher button
themeSwitcher.addEventListener('click', function () {
    // dark to light
    if (mode === 'dark') {
      mode = 'light';
      container.setAttribute('class', 'light');
    }
    // light mode setting
    else {
      mode = 'dark';
      container.setAttribute('class', 'dark');
    }
  });