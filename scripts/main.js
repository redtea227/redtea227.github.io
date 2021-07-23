// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here

$(function () {
  $('.navbar a').on('click', function () {
    $('.navbar-toggler').click();
  });
});

