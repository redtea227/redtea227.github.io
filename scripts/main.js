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


$("#rogerMenu a").click(function () {
  const who = $(this).attr('href'),
    val = $(who).offset().top - $("#rogerMenu").innerHeight();
  // $("html").scrollTop(val);
  $("html").animate({
    scrollTop: val
  }, 1000);
});
