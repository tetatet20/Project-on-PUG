import AirDatepicker from "air-datepicker";
import "../../components/dropdown/dropdown.js";

let button = {
  content: " Применить",
  className: "custom-button-classname",
  onClick: (dp) => {
    dp.hide();
  },
};

new AirDatepicker("#arrival", {
  buttons: [button, "clear"], // Custom button, and pre-installed 'clear' button
  //   range: true,
  //   inline: true,
});

new AirDatepicker("#departure", {
  buttons: [button, "clear"], // Custom button, and pre-installed 'clear' button
});

new AirDatepicker("#data-registration", {
  buttons: [button, "clear"], // Custom button, and pre-installed 'clear' button
});

console.log(AirDatepicker);

// // ТУТ ДРУГАЯ ВЕРСИЯ ЧЕРЕЗ DATA АТРИБУТЫ. МОЖЕШЬ ЗАПУСТИТЬ, НЕ УДАЛЯЙ, ПОСМОТРИ

// const label = document.querySelector(".guests");
// const dropdown = document.querySelector(".dropdown-menu");
// const guestsInput = document.querySelector(".guests-input");
// const adultsСounter = document.querySelector(".adults-number");
// const childrenСounter = document.querySelector(".children-number");
// const babiesСounter = document.querySelector(".babies-number");
// const applyButton = document.querySelector(".apply");
// const cleanButton = document.querySelector(".clean");

// let adults = 0;
// let childrens = 0;
// let babies = 0;
// let completeCount = 0;

// label.addEventListener("click", (e) => {
//   if (e.target.classList[0] === "selection") return;

//   dropdown.classList.toggle("dropdown-menu-show");
// });

// applyButton.addEventListener("click", () =>
//   dropdown.classList.remove(".dropdown-menu-show")
// );

// cleanButton.addEventListener("click", (e) => {
//   e.stopPropagation();

//   adults = childrens = babies = 0;

//   adultsСounter.innerText = 0;
//   childrenСounter.innerText = 0;
//   babiesСounter.innerText = 0;

//   updateCompleteCount();
// });

// dropdown.addEventListener("click", (e) => {
//   if (!e.target.dataset?.button) return;

//   switch (e.target.dataset.button) {
//     case "adult-minus":
//       if (adults === 0) return;
//       adults--;
//       break;
//     case "adult-plus":
//       adults++;
//       break;
//     case "childrens-minus":
//       if (childrens === 0) return;
//       childrens--;
//       break;
//     case "childrens-plus":
//       childrens++;
//       break;
//     case "babies-minus":
//       if (babies === 0) return;
//       babies--;
//       break;
//     case "babies-plus":
//       babies++;
//       break;
//   }

//   updateCounts(e.target.dataset.button);
// });

// function updateCounts(count) {
//   switch (count) {
//     case "adult-minus":
//     case "adult-plus":
//       adultsСounter.innerText = adults;
//       break;

//     case "childrens-minus":
//     case "childrens-plus":
//       childrenСounter.innerText = childrens;
//       break;

//     case "babies-minus":
//     case "babies-plus":
//       babiesСounter.innerText = babies;
//       break;
//   }

//   updateCompleteCount();
// }

// function updateCompleteCount() {
//   const guestsSum = adults + childrens + babies;

//   if (guestsSum == 1) {
//     guestsInput.value = guestsSum + " гость";
//   } else if ((guestsSum > 1) & (guestsSum < 5)) {
//     guestsInput.value = guestsSum + " гостя";
//   } else if (guestsSum == 0) {
//     guestsInput.value = null;
//     guestsInput.placeholder = "Сколько гостей";
//   } else {
//     guestsInput.value = guestsSum + " гостей";
//   }
// }

// //Подключение календаря

// // // Выпадающий список при нажатии на инпут

// // // Чтобы не закрывалось по клику на сам дропдаун - сделал открытие по лейблу. Он как-раз отслеживает клик по инпуту
// // const input = document.querySelector('.guests');

// // input.addEventListener('click', openDropdown);

// // function openDropdown() {
// //     dropdown.classList.toggle('dropdown-menu-show');
// // }

// // // Объявляем всякие кнопки, менюшки инпуты
// // const dropdown = document.querySelector('.dropdown-menu');
// // const guestsInput = document.querySelector('.guests-input');
// // const cleanButton = document.querySelector('.clean');
// // const applyButton = document.querySelector('.apply');

// // // объявляем плюсики и минусики и цифры
// // const adultsMinus = document.querySelector('.adults-minus');
// // const adultsPlus = document.querySelector('.adults-plus');
// // const adultsСounter = document.querySelector('.adults-number');

// // const childrenMinus = document.querySelector('.children-minus');
// // const childrenPlus = document.querySelector('.children-plus');
// // const childrenСounter = document.querySelector('.children-number');

// // const babiesMinus = document.querySelector('.babies-minus');
// // const babiesPlus = document.querySelector('.babies-plus');
// // const babiesСounter = document.querySelector('.babies-number');

// // // Создаем счетчики для цифр, чтобы не залезать каждый раз в dom дерево (Так быстрее работает и так правильно)
// // let adults = 0;
// // let childrens = 0;
// // let babies = 0;
// // let completeCount = 0;

// // // Методы для увеличения/уменьшания значений. Увеличиваем каунт + вызываем функцию для обнавления текущего значения
// // // То есть при каждом уменьшении - увелечении у нас вызывается функция, которая обновляет счетчик и локальный и общий
// // adultsMinus.addEventListener('click', () => {
// //     if (adults > 0) adults--;

// //     updateCount(adultsСounter, adults)
// // })

// // adultsPlus.addEventListener('click', () => {
// //     adults++;

// //     updateCount(adultsСounter, adults)
// // })

// // childrenMinus.addEventListener('click', () => {
// //     if (childrens > 0) {
// //         childrens--
// //     }

// //     updateCount(childrenСounter, childrens)

// // })

// // childrenPlus.addEventListener('click', () => {
// //     childrens++

// //     updateCount(childrenСounter, childrens)
// // })

// // babiesMinus.addEventListener('click', ()=> {
// //     if (babies > 0) {
// //         babies--
// //     }

// //     updateCount(babiesСounter, babies)
// // })

// // babiesPlus.addEventListener('click', () => {
// //     babies++

// //     updateCount(babiesСounter, babies)
// // })

// // // Удаляем класс для скрытия дропдауна. Тут нет ключевого слова function. Это стрелочная функция, ты должнен про нее прочитать в учебнике
// // applyButton.addEventListener('click', () => dropdown.classList.remove('.dropdown-menu-show'))

// // // Тут чистим все переменные и вызываем методы для обновления локальных счетчиков. Эти же методы обновляют общий счетчик
// // // e.stopPropagation() нужна для того, чтобы при клике не закрывалось
// // cleanButton.addEventListener('click', (e) => {
// //     e.stopPropagation();

// //     adults = childrens = babies = 0;

// //     updateCount(adultsСounter, adults);
// //     updateCount(childrenСounter, childrens);
// //     updateCount(babiesСounter, babies);
// // })

// // // Хелпер-функция updateCount
// // // Аргументы: countElement, value
// // // countElement: сюда передаем элемент count для каждого (взрослый, ребенок тд), который хотим обновить
// // // value: сюда передаем значение, которое подставим в countElement
// // // Что делает: задает элементу значение, вызывает функцию для обновления общего счетчика
// // function updateCount(countElement, value) {
// //     countElement.innerText = value;
// //     updateCompleteCount();
// // }

// // // Функция для обновления общего счетчика. складываем переменные (без innerText, потому что это большая нагрузка)
// // // Проверяем и подставляем в инпут
// // function updateCompleteCount() {
// //     const guestsSum = adults + childrens + babies;

// //     if (guestsSum == 1) {
// //         guestsInput.value = guestsSum + ' гость';
// //     } else if ((guestsSum > 1) & (guestsSum < 5)) {
// //         guestsInput.value = guestsSum + ' гостя';
// //     } else if (guestsSum == 0) {
// //         guestsInput.value = null;
// //         guestsInput.placeholder = 'Сколько гостей';
// //     } else {
// //         guestsInput.value = guestsSum + ' гостей';
// //     }
// // }
