import $ from "jquery";
$(function () {
  $(window).scroll = () => scrollCardBuyCourse();
});
function scrollCardBuyCourse() {
  var card = $(".card-buy-course");
  var TopFooter = $("#footer").offset().top;
  var heightFooter = $("#footer").height();
  var offset = $(window).scrollTop();
  var heightMain = $("#main").height();
  if (TopFooter > heightFooter + offset + 60) {
    card.removeClass("position-absolute");
    card.addClass("position-fixed");
    card.css("top", "120px");
  } else {
    card.removeClass("position-fixed");
    card.addClass("position-absolute");
    card.css("top", heightMain - heightFooter + 100 + "px");
  }
}
