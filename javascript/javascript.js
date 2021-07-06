// SLIDER
var swiper = new Swiper(".mySwiper", {
  speed: 900,
  parallax: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "0" + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// SWIPER
var swiper = new Swiper(".eSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  speed: 800,
  parallax: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1028: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    820: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    350: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
  },
});

$(".match-filter .list").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

$(".list").click(function () {
  const value = $(this).attr("data-filter");
  if (value == "all") {
    $(".itembox").show("1000");
  } else {
    $(".itembox")
      .not("." + value)
      .hide("1000");
    $(".itembox")
      .filter("." + value)
      .show("1000");
  }
});

//BACK TO TOP
$(".backtotop").hide();

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $(".backtotop").fadeIn();
    $("header").css({
      transition: '500ms',
      background: '#040402'
    });
    $('.section-slider .social-media').css({
      display: 'none'
    });
  } else {
    $(".backtotop").fadeOut();
    $("header").css({
      background: 'transparent'
    });
    $('.section-slider .social-media').css({
      display: 'inline-flex'
    });
  }
});

$(".backtotop").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 100);
  return false;
});
