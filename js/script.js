$(function () {
  $(".header-nav-link").on("click", function (e) {
    e.preventDefault();
    $(".header-nav-link").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function() {
  $('.js-replace-no-image').error(function() {
      $(this).attr({
          src: "img/Noimage.png",
          alt: 'no image'
      });
  });
});

$(".openbtn6").click(function () {
  $(this).toggleClass('active');
});