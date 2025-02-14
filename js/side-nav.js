function openNav() {
  var width = window.innerWidth;
  var sideNavWidth = 450;
  if (width < 600) {
    sideNavWidth = 250;
  }
  document.getElementById("mySidenav").style.width = sideNavWidth + "px";
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
          document.querySelector('.side-nav-open').addEventListener('click', openNav);
          document.querySelector('.closebtn').addEventListener('click', closeNav);
      });
}

document.addEventListener('DOMContentLoaded', loadNav);
