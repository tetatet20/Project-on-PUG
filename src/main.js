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
// const linkPassive = document.querySelectorAll(".color-monserat");
// const boldLink = document.querySelectorAll(".bold-nav-footer");

// boldLink.forEach(function (linkes) {
//   linkes.addEventListener("click", function () {
//     linkPassive.classList.remove("color-monserat-active");
//   });
// });
