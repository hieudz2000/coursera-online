const auto = () => {
  var body = document.getElementsByTagName("body");
  var cardBuyCourse = document.getElementById("card-buy-course");
  body[0].onscroll = () => {
    if (
      window.pageYOffset > 161 &&
      !cardBuyCourse.classList.contains("card-fixed")
    ) {
      cardBuyCourse.classList.add("card-fixed");
    } else if (
      window.pageYOffset <= 161 &&
      cardBuyCourse.classList.contains("card-fixed")
    ) {
      cardBuyCourse.classList.remove("card-fixed");
    }
  };
};
auto();
