import "./styles/pages/index.scss";
import "./styles/pages/number.scss";
import "./styles/pages/numbers.scss";
import "./styles/pages/numbers2.scss";
import "./styles/pages/signIn.scss";
import "./styles/pages/signUp.scss";
import "air-datepicker/air-datepicker.css";
import "./pages/scripts/index.js";

//Код для бургера в шапке
const burger = document.querySelector(".container-burger");
const passive = document.querySelector(".navigation");

burger.addEventListener("click", function () {
  passive.classList.toggle("navigation-active");
  burger.classList.toggle("change");
});

const border = document.querySelectorAll(".border");

border.forEach(function (border) {
  burger.addEventListener("click", function () {
    border.classList.remove("border");
  });
});

const link = document.querySelectorAll(".class-link");

link.forEach(function (link) {
  link.addEventListener("click", function () {
    passive.classList.remove("navigation-active");
    burger.classList.remove("change");
  });
});

//Код для меню в подвале

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
