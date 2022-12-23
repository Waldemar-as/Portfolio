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
$(function () {
  $(document).scroll(function () {
    // Get the element with id "mainNavbar"
    var $nav = $("#mainNavbar");
    // Toggle the class "scrolled" based on whether the document has been scrolled beyond the height of the element
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  })
})


// Listen for resize events on the window
window.addEventListener('resize', function () {
  // Get the height of the element with id "anchor"
  var anchorHeight = $('#anchorJSAboutMe').height();
  // Set the height of the element with class "BackgroundSideWay" to the height of the element with id "anchor"
  $('.BackgroundSideWay').height(anchorHeight);
});


// Loads when page is finished loading
$(document).ready(function () {
  // Get the height of the element with id "anchor"
  var anchorHeight2 = $('#anchorJSAboutMe').height();
  // Set the height of the element with class "BackgroundSideWay" to the height of the element with id "anchor"
  $('.BackgroundSideWay').height(anchorHeight2);
});


