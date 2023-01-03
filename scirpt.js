//Navbar Toggle Button animation
$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});


// Listen for scroll events on the document
// $(function () {
//   $(document).scroll(function () {
//     // Get the element with id "mainNavbar"
//     var $nav = $("#mainNavbar");
//     // Toggle the class "scrolled" based on whether the document has been scrolled beyond the height of the element
//     $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//   })
// })


// Listen for resize events on the window
window.addEventListener('resize', function () {
  // Get the height of the element with id "anchor"
  var anchorHeight = $('#anchorJSAboutMe').height();
  var anchorHeightProjects = $('#anchorJSProjects').height();
  // Set the height of the element with class "BackgroundSideWay" to the height of the element with id "anchor"
  $('.BackgroundSideWay').height(anchorHeight);
  $('.BackgroundSideWay2').height(anchorHeightProjects);
});



// Loads when page is finished loading
window.onload = function() {
  // Get the height of the element with id "anchor"
  var anchorHeight2 = $('#anchorJSAboutMe').height();
  var anchorHeightProjects2 = $('#anchorJSProjects').height();
  // Set the height of the element with class "BackgroundSideWay" to the height of the element with id "anchor"
  $('.BackgroundSideWay').height(anchorHeight2);
  $('.BackgroundSideWay2').height(anchorHeightProjects2);
};



// Press the toggle Button to hide the navbar
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





// Acts a an a href when clicking a card div the projects section
const CardHealthRules = document.getElementById('CardHealthRules');
const CardPortfolio = document.getElementById('CardPortfolio');
const CardNatours = document.getElementById('CardNatours');


// Add click event listeners to the cards
CardHealthRules.addEventListener('click', function() {
  window.location = 'https://10healthrules.netlify.app/index.html';
});
CardPortfolio.addEventListener('click', function() {
  window.location = 'index.html#Landingpage'
});
CardNatours.addEventListener('click', function() {
  window.location = 'Not Published Yet';
});










const navbarLinks = document.querySelectorAll('.nav-link');
const navbarBrand = document.querySelector('.navbar-brand');

function updateNavbar() {
  // Get the current scroll position
  const scrollPos = window.scrollY;

  // Check if the scroll position is above the "About Me" section
  if (scrollPos < document.querySelector('#AboutMeAnchor').offsetTop) {
    // If it is, set the "selected" class on the navbar-brand element
    navbarBrand.classList.add('selected');

    // Remove the "selected" class from all nav-link elements
    navbarLinks.forEach(link => link.classList.remove('selected'));
  } else {
    // If it isn't, remove the "selected" class from the navbar-brand element
    navbarBrand.classList.remove('selected');

    // Check which nav-link element should have the "selected" class
    navbarLinks.forEach(link => {
      // If the scroll position is within the bounds of the section corresponding to the nav-link element, set the "selected" class on that element
      if (scrollPos >= document.querySelector(link.getAttribute('href')).offsetTop - 25 && scrollPos < document.querySelector(link.getAttribute('href')).offsetTop + document.querySelector(link.getAttribute('href')).offsetHeight - 25) {
        link.classList.add('selected');
      } else {
        // If it isn't, remove the "selected" class from that element
        link.classList.remove('selected');
      }
    });
  }
}

// Add an event listener to the scroll event
window.addEventListener('scroll', updateNavbar);