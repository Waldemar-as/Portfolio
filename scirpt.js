// ###Functions###

// adjusts the sidways background of work and projects
function adjust_sideway_background() {
  // Get the height of the element with id "anchor"
  var anchorHeight2 = $('#anchorJSAboutMe').height();
  var anchorHeightProjects2 = $('#anchorJSProjects').height();
  // Set the height of the element with class "BackgroundSideWay" to the height of the element with id "anchor"
  $('.BackgroundSideWay').height(anchorHeight2);
  $('.BackgroundSideWay2').height(anchorHeightProjects2);
}

// Set the height of myimage
function place_welcome_below_img() {
  const image = document.querySelector(".myimage");
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

// Loads when page is finished loading
document.addEventListener("DOMContentLoaded", function() {
  adjust_sideway_background();
});

// Listen for resize events on the window
window.addEventListener('resize', function () {
  // adjusts the sidways background of work and projects
  adjust_sideway_background();
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



// acts as an ahref when clicking a card div in the projects section
const CardOdyssai = document.getElementById('CardOdyssai');
const CardHealthRules = document.getElementById('CardHealthRules');
const CardPortfolio = document.getElementById('CardPortfolio');
const CardNatours = document.getElementById('CardNatours');

// Add click event listeners to the cards
CardOdyssai.addEventListener('click', function () {
  window.open('projects/odyssai.html', '_blank');
});
CardHealthRules.addEventListener('click', function () {
  window.open('https://10healthrules.vercel.app/', '_blank');
});
CardPortfolio.addEventListener('click', function () {
  window.location = 'index.html#Landingpage'
});
CardNatours.addEventListener('click', function () {
  window.open('projects/natourswa.html', '_blank');
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



// show more button
$(document).ready(function () {
  $("#toggleButton").click(function () {
    $("#targetDiv").toggle();
    adjust_sideway_background();
  });
});


