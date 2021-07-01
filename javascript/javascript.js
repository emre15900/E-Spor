
// SLIDER
var swiper = new Swiper(".mySwiper", {
    speed: 900,
    parallax: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
        },
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

