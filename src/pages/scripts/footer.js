const menuLinkFirst = document.querySelector(".navigation-footer");
const menuLinkSecond = document.querySelector(".about-us");
const menuLinkThird = document.querySelector(".support-service");
const linkPassiveFirst = document.querySelectorAll("#first");
const linkPassiveSecond = document.querySelectorAll("#second");
const linkPassiveThird = document.querySelectorAll("#third");
const menuLinkFourth = document.querySelector(".bold-nav-footer-subscription");
const linkPassiveFourth = document.querySelector(".subscription-email");

linkPassiveFirst.forEach(function (second) {
  menuLinkFirst.addEventListener("click", function () {
    second.classList.toggle("link-active");
  });
});

linkPassiveSecond.forEach(function (first) {
  menuLinkSecond.addEventListener("click", function () {
    first.classList.toggle("link-active");
  });
});

linkPassiveThird.forEach(function (third) {
  menuLinkThird.addEventListener("click", function () {
    third.classList.toggle("link-active");
  });
});

menuLinkFourth.addEventListener("click", function () {
  linkPassiveFourth.classList.toggle("subscription-margin-active");
});
