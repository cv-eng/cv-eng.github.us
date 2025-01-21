function openNav() {
  var width = window.innerWidth;
  var sideNavWidth = 450;
  if (width < 600) {
    sideNavWidth = 250;
  }
  document.getElementById("mySidenav").style.width = sideNavWidth + "px"; // Set the width dynamically
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function loadNav() {
  fetch('nav.html')
      .then(response => response.text())
      .then(data => {
          document.body.insertAdjacentHTML('afterbegin', data);
      })
      .then(() => {
          // Re-attach event listeners if needed
          document.querySelector('.side-nav-open').addEventListener('click', openNav);
          document.querySelector('.closebtn').addEventListener('click', closeNav);
      });
}

// Your existing openNav and closeNav functions here

// Load the navigation when the DOM is ready
document.addEventListener('DOMContentLoaded', loadNav);
