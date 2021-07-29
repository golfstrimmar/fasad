import $ from "jquery";
// ------------------------------------------------


// --------------------------------------------------------------------------
 $(window).scroll(function () {
   var $section = $("section");

   $section.each(function (i, el) {

     var top = $(el).offset().top - 100;
     var bottom = top + $(el).height();
     var scroll = $(window).scrollTop();
     var id = $(el).attr("id");

     if (scroll > top && scroll < bottom) {
       $("a.menu__link").removeClass("menu__link--active");
       $('a[href="#' + id + '"').addClass("menu__link--active");
       $("a.footer-menu__link").removeClass("menu__link--active");

     }
   });
 });





$(".menu__link").on("click", function (event) {
  event.preventDefault();
  var id = $(this).attr("href"),
    top = $(id).offset().top;
 $("a").removeClass("menu__link--active");
  $(this).addClass("menu__link--active");
$('a[href="#' + id + '"').addClass("menu__link--active");
  $("body,html").animate({ scrollTop: top - 80}, 800);

 setTimeout(function () {
   $(".menu").removeClass("menu-active")
     .find(".header__info")
     .remove();
     $(".info").removeClass("info-active");
   $("body").removeClass("lock");
 }, 1000);

});


$(".footer-menu__link").on("click", function (event) {
  event.preventDefault();
  var id = $(this).attr("href"),
    top = $(id).offset().top;
 $("a").removeClass("footer-menu__link--active");
  $(this).addClass("footer-menu__link--active");
$('a[href="#' + id + '"').addClass("menu__link--active");
  $("body,html").animate({ scrollTop: top - 80}, 800);


});