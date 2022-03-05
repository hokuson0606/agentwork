$(function () {
  $(".header-nav-link").on("click", function (e) {
    e.preventDefault();
    $(".header-nav-link").removeClass("active");
    $(this).addClass("active");
  });
});
