// ###Functions###

// Set the height of myimage
function place_welcome_below_img() {
  const welcomeHeading = document.querySelector("#Welcome h1");
  welcomeHeading.style.paddingTop = "450px";
}

//Animates the navbar toggle button
function animateNavbarToggle() {
  $('.first-button').on('click', function () {
    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {
    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {
    $('.animated-icon3').toggleClass('open');
  });
}

// ###Functionos END###





// Executes the code right away, does not have to wait until the page is done loading.
place_welcome_below_img();

//Animates the navbar toggle button
animateNavbarToggle();




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




