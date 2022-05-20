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
