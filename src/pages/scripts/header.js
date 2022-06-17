const burger = document.querySelector(".container-burger");
const passive = document.querySelector(".navigation");
const buttonsActive = document.querySelector(".buttons-active");

burger.addEventListener("click", function () {
  passive.classList.toggle("navigation-active");
  burger.classList.toggle("change");
  buttonsActive.classList.toggle("buttons-active-active");
});

// // Забыл для чего этот скрипт
// const border = document.querySelectorAll(".border");

// border.forEach(function (border) {
//   burger.addEventListener("click", function () {
//     border.classList.remove("border");
//   });
// });

const link = document.querySelectorAll(".class-link");

link.forEach(function (link) {
  link.addEventListener("click", function () {
    passive.classList.remove("navigation-active");
    burger.classList.remove("change");
  });
});
