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
    viewWidth = $(window).innerWidth(),
    val = $(who).offset().top - $("#rogerMenu").innerHeight()+1;
  // $("html").scrollTop(val);
  if (viewWidth > 960) {
    $("html").animate({
      scrollTop: val
    }, 1000);
  } else {
    $("html").animate({
      scrollTop: val + 200
    }, 1000);
  }
});

//check bg menu
const bgmenu = function () {
  const
    viewWidth = $(window).innerWidth(),
    nowat = $(window).scrollTop(),
    // height = $("#intro").innerHeight(),
    offset = $("#rogerMenu").innerHeight() + 1;

  if (nowat <= offset) { //0~910 menu沒有bg 首區內
    $("#rogerArrow").fadeOut(); //隱藏至頂按鈕

    if (viewWidth > 767) $("#rogerMenu").removeClass('bg-custom'); //大畫面
    else $("#rogerMenu").addClass('bg-custom'); //小畫面
  } else { //在其他主題時
    $("#rogerMenu").addClass('bg-custom');
    $("#rogerArrow").fadeIn();
  }
}



// 網頁滾動時
$(window).scroll(function () {
  // spy();
  bgmenu();
});
// 網頁更改寬度時
$(window).resize(bgmenu);

// spy();
bgmenu();

// typewriter
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 100,
});

typewriter
  .pauseFor(500)
  .typeString('<span id="slogan">To make each day count...<span>&#128513;</span><span>&#128513;</span><span>&#128513;</span></span>')
  .pauseFor(200)
  .deleteChars(8)
  .typeString('<br><span style="font-size:40px">Roger Lo</span><br><span>Web developer</span>')
  .pauseFor(1000)
  .start();
