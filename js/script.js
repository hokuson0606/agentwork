$(function () {
  $(".header-nav-link").on("click", function (e) {
    e.preventDefault();
    $(".header-nav-link").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function () {
  $(".js-replace-no-image").error(function () {
    $(this).attr({
      src: "img/Noimage.png",
      alt: "no image",
    });
  });
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 56,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

$(".openbtn6").click(function () {
  $(this).toggleClass("active");
});

const swiper2 = new Swiper(".swiper2", {
  slidesPerView: 4.5,
  spaceBetween: 16,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
