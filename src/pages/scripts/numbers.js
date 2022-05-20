//сделал выпадающий список кроватей и т.д.
// const comfort = document.querySelector(".arrow-comfort");
// const dropdownComfort = document.querySelector(".dropdown-menu-comfort");

// comfort.addEventListener("click", (e) => {
//   if (e.target.classList[0] === "selection") return;
//   dropdownComfort.classList.toggle("dropdown-menu-comfort-show");
// });

import "../../components/checkbox/checkbox.js";
import "../../components/dropdown/dropdown.js";

//Сделал выпадающий список чекбоксов

const moreСomfort = document.querySelector(".more-comfort");
const dropdownСheckbox = document.querySelector(".dropdown-checkbox");

moreСomfort.addEventListener("click", (e) => {
  if (e.target.classList[0] === "selection") return;
  dropdownСheckbox.classList.toggle("dropdown-checkbox-show");
});

// // // Объявляем всякие кнопки, менюшки инпуты
// const dateGuests = document.querySelector(".roma");

// // // объявляем плюсики и минусики и цифры
// const adultsMinus = document.querySelector(".adults-minus");
// const adultsPlus = document.querySelector(".adults-plus");
// const adultsСounter = document.querySelector(".adults-number");

// const childrenMinus = document.querySelector(".children-minus");
// const childrenPlus = document.querySelector(".children-plus");
// const childrenСounter = document.querySelector(".children-number");

// const babiesMinus = document.querySelector(".babies-minus");
// const babiesPlus = document.querySelector(".babies-plus");
// const babiesСounter = document.querySelector(".babies-number");

// // // Создаем счетчики для цифр, чтобы не залезать каждый раз в dom дерево (Так быстрее работает и так правильно)
// let adults = 0;
// let childrens = 0;
// let babies = 0;

// let bedroom = 0;
// let bed = 0;
// let bathrooms = 0;

// function updateCount(countElement, value) {
//   countElement.innerText = value;
//   updateCompleteCount();
// }

// // // Методы для увеличения/уменьшания значений. Увеличиваем каунт + вызываем функцию для обнавления текущего значения
// // // То есть при каждом уменьшении - увелечении у нас вызывается функция, которая обновляет счетчик и локальный и общий

// // Счетчик для спален
// adultsMinus.addEventListener("click", () => {
//   if (bedroom > 0) {bedroom--;
//   }

//   updateCount(adultsСounter, bedroom);
// });

// adultsPlus.addEventListener("click", () => {
//   bedroom++;

//   updateCount(adultsСounter, bedroom);
// });
// // Счетчик для кроватей
// childrenMinus.addEventListener("click", () => {
//   if (bed > 0) { bed--;
//   }

//   updateCount(childrenСounter, bed);
// });

// childrenPlus.addEventListener("click", () => {
//   bed++;

//   updateCount(childrenСounter, bed);
// });
// // Счетчик для ванных комнат
// babiesMinus.addEventListener("click", () => {
//   if (bathrooms > 0) {
//     bathrooms--;
//   }

//   updateCount(babiesСounter, bathrooms);
// });

// babiesPlus.addEventListener("click", () => {
//   bathrooms++;

//   updateCount(babiesСounter, bathrooms);
// });

// // Хелпер-функция updateCount
// // Аргументы: countElement, value
// // countElement: сюда передаем элемент count для каждого (взрослый, ребенок тд), который хотим обновить
// // value: сюда передаем значение, которое подставим в countElement
// // Что делает: задает элементу значение, вызывает функцию для обновления общего счетчика

// // Функция для обновления общего счетчика. складываем переменные (без innerText, потому что это большая нагрузка)
// // Проверяем и подставляем в инпут
// function updateCompleteCount() {
//   if (bedroom == 1) {
//     dateGuests.value = bedroom + " спальня";
//   } else if ((bedroom > 1) & (bedroom < 5)) {
//     dateGuests.value = bedroom + " спальни";
//   }
//   else {
//     dateGuests.value = bedroom + " спален";
//   }

//   if(bed == 1) {
//     dateGuests.value = dateGuests.value + ', ' + bed + " кровать";
//   }  else if ((bed > 1) & (bed < 5)) {
//     dateGuests.value = dateGuests.value + ', ' + bed + " кровати";
//   }
//  else {
//     dateGuests.value = dateGuests.value + ', ' + bed + " кроватей";
//   }

//   if (bathrooms) {
//     if (bathrooms == 1) {
//         dateGuests.value = dateGuests.value + ', ' + bathrooms + ' ванна'
//     }
//     else if ((bathrooms > 1) & (bathrooms < 5)) {
//       dateGuests.value = dateGuests.value + ', ' + bathrooms + " ванны";
//     }
//     else {
//         dateGuests.value = dateGuests.value + ', ' + bathrooms + ' ванн'
//     }
//     }
//   }

//Сложные чекбоксы
// const checkbox3 = document.querySelector('#checkbox_3');
// checkbox3.addEventListener("click", () => {
//   checkbox3.classList.toggle("checkbox-active");
//   })

// const checkbox4 = document.querySelector('#checkbox_4');
// checkbox4.addEventListener("click", () => {
// checkbox4.classList.toggle("checkbox-active");
// })

// const checkbox5 = document.querySelector('#checkbox_5');
// checkbox5.addEventListener("click", () => {
// checkbox5.classList.toggle("checkbox-active");
// })
