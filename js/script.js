$(".burger-menu").click(function () {
   $(".burger-menu").toggleClass("burger-menu__active");
   $(".nav-header").toggleClass("nav-header__active");
   $("body").toggleClass("no-scroll");
});

// categories
$(".categories-nav").click(function () {
    $(".categories-nav__list").toggleClass("nav-list__active")
})