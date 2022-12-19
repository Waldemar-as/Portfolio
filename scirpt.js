$(document).ready(function () {

    $('.first-button').on('click', function () {
    
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
    
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
    
      $('.animated-icon3').toggleClass('open');
    });});



  $(function () {
    $(document).scroll(function () {
      var $nav = $("#mainNavbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    })
  })


