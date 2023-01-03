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
  window.open('https://10healthrules.netlify.app/index.html', '_blank');
});
CardPortfolio.addEventListener('click', function() {
  window.location = 'index.html#Landingpage'
});
CardNatours.addEventListener('click', function() {
  window.open('Not Published yet', '_blank');
});





// changes the navbar underline highlight depending on the position of the users view.
const navbarBrand = document.querySelector('.navbar-brand');
const aboutMeAnchor = document.querySelector('#AboutMeAnchor');
const workAnchor = document.querySelector('#WorkAnchor');
const projectsAnchor = document.querySelector('#ProjectsAnchor');

window.addEventListener('scroll', () => {
  const currentPosition = window.scrollY;

  var offsetnumber = 30;

  if (currentPosition > aboutMeAnchor.offsetTop -offsetnumber) {
    navbarBrand.classList.remove('selected');
  } else {
    navbarBrand.classList.add('selected');
  }

  if (currentPosition >= aboutMeAnchor.offsetTop -offsetnumber & currentPosition < workAnchor.offsetTop -offsetnumber) {
    $('.nav-link[href="#AboutMeAnchor"]').addClass('selected');
  } else {
    $('.nav-link[href="#AboutMeAnchor"]').removeClass('selected');
  }

  if (currentPosition >= workAnchor.offsetTop -offsetnumber & currentPosition < projectsAnchor.offsetTop -offsetnumber) {
    $('.nav-link[href="#WorkAnchor"]').addClass('selected');
  } else {
    $('.nav-link[href="#WorkAnchor"]').removeClass('selected');
  }

  if (currentPosition >= projectsAnchor.offsetTop -offsetnumber) {
    $('.nav-link[href="#ProjectsAnchor"]').addClass('selected');
  } else {
    $('.nav-link[href="#ProjectsAnchor"]').removeClass('selected');
  }


});









