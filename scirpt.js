// ### toggle(hamburger) ###
//Animates the navbar toggle(hamburger) button
$('.first-button').on('click', function () {
  $('.animated-icon1').toggleClass('open');
});
$('.second-button').on('click', function () {
  $('.animated-icon2').toggleClass('open');
});
$('.third-button').on('click', function () {
  $('.animated-icon3').toggleClass('open');
});

// triggers click event of the toggle(hamburger) button to hide the navbar after an nav-link or nav-brand was pressed
document.addEventListener("click", function (event) {
  if (window.innerWidth < 768) {
    // Navitems
    if (event.target.matches(".nav-link") && event.target.closest("#mainNavbar")) {
      document.querySelector(".navbar-toggler").click();
    }
    // Homebutton
    if (event.target.matches(".navbar-brand") && document.querySelector(".collapse").classList.contains("show")) {
      document.querySelector(".navbar-toggler").click();
    }
  }
});
// ### toggle(hamburger) END ##


// ### underline highlight ###
// changes the navbar underline highlight depending on the position of the users view.
const navbarBrand = document.querySelector('.navbar-brand');
const aboutMeAnchor = document.querySelector('#AboutMeAnchor');
const workAnchor = document.querySelector('#WorkAnchor');
const projectsAnchor = document.querySelector('#ProjectsAnchor');
const offsetNumber = 150;

const toggleSelectedClass = (selector, condition) => {
  if (condition) {
    selector.classList.add('selected');
  } else {
    selector.classList.remove('selected');
  }
};

// sets an underline for the navbar items depending on where the user position is.
window.addEventListener('scroll', () => {
  const currentPosition = window.scrollY;

  toggleSelectedClass(navbarBrand, currentPosition <= aboutMeAnchor.offsetTop - offsetNumber);

  toggleSelectedClass(
    document.querySelector('.nav-link[href="#AboutMeAnchor"]'),
    currentPosition >= aboutMeAnchor.offsetTop - offsetNumber && currentPosition < workAnchor.offsetTop - offsetNumber
  );

  toggleSelectedClass(
    document.querySelector('.nav-link[href="#WorkAnchor"]'),
    currentPosition >= workAnchor.offsetTop - offsetNumber && currentPosition < projectsAnchor.offsetTop - offsetNumber
  );

  toggleSelectedClass(
    document.querySelector('.nav-link[href="#ProjectsAnchor"]'),
    currentPosition >= projectsAnchor.offsetTop - offsetNumber
  );
});
// ### underline highlight END##



