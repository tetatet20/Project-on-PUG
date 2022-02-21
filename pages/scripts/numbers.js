//сделал выпадающий список кроватей и т.д.
const comfort = document.querySelector(".arrow-comfort");
const dropdownComfort = document.querySelector(".dropdown-menu-comfort");

comfort.addEventListener("click", (e) => {
  if (e.target.classList[0] === "selection") return;
  dropdownComfort.classList.toggle("dropdown-menu-comfort-show");
});

//Сделал выпадающий список чекбоксов
const moreСomfort = document.querySelector(".more-comfort");
const dropdownСheckbox = document.querySelector(".dropdown-checkbox");

moreСomfort.addEventListener("click", (e) => {
  if (e.target.classList[0] === "selection") return;
  dropdownСheckbox.classList.toggle("dropdown-checkbox-show");
});

// Выпадающий список при нажатии на инпут

// // Объявляем всякие кнопки, менюшки инпуты
const dateGuests = document.querySelector(".roma");

// // объявляем плюсики и минусики и цифры
const adultsMinus = document.querySelector(".adults-minus");
const adultsPlus = document.querySelector(".adults-plus");
const adultsСounter = document.querySelector(".adults-number");

const childrenMinus = document.querySelector(".children-minus");
const childrenPlus = document.querySelector(".children-plus");
const childrenСounter = document.querySelector(".children-number");

const babiesMinus = document.querySelector(".babies-minus");
const babiesPlus = document.querySelector(".babies-plus");
const babiesСounter = document.querySelector(".babies-number");

// // Создаем счетчики для цифр, чтобы не залезать каждый раз в dom дерево (Так быстрее работает и так правильно)
let adults = 0;
let childrens = 0;
let babies = 0;

let completeCount = 0;
let bathrooms = 0;

// // Методы для увеличения/уменьшания значений. Увеличиваем каунт + вызываем функцию для обнавления текущего значения
// // То есть при каждом уменьшении - увелечении у нас вызывается функция, которая обновляет счетчик и локальный и общий
adultsMinus.addEventListener("click", () => {
  if (adults > 0) adults--;

  updateCount(adultsСounter, adults);
});

adultsPlus.addEventListener("click", () => {
  adults++;

  updateCount(adultsСounter, adults);
});

childrenMinus.addEventListener("click", () => {
  if (childrens > 0) {
    childrens--;
  }

  updateCount(childrenСounter, childrens);
});

childrenPlus.addEventListener("click", () => {
  childrens++;

  updateCount(childrenСounter, childrens);
});

babiesMinus.addEventListener("click", () => {
  if (bathrooms > 0) {
    bathrooms--;
  }

  updateCount(babiesСounter, bathrooms);
});

babiesPlus.addEventListener("click", () => {
  bathrooms++;

  updateCount(babiesСounter, bathrooms);
});

// // // Удаляем класс для скрытия дропдауна. Тут нет ключевого слова function. Это стрелочная функция, ты должнен про нее прочитать в учебнике
// applyButton.addEventListener('click', () => dropdownComfort.classList.remove('dropdown-menu-comfort'))

// // // Тут чистим все переменные и вызываем методы для обновления локальных счетчиков. Эти же методы обновляют общий счетчик
// // e.stopPropagation() нужна для того, чтобы при клике не закрывалось
// cleanButton.addEventListener('click', (e) => {
//     e.stopPropagation();

//     adults = childrens = babies = 0;

//     updateCount(adultsСounter, adults);
//     updateCount(childrenСounter, childrens);
//     updateCount(babiesСounter, babies);
// })

// // Хелпер-функция updateCount
// // Аргументы: countElement, value
// // countElement: сюда передаем элемент count для каждого (взрослый, ребенок тд), который хотим обновить
// // value: сюда передаем значение, которое подставим в countElement
// // Что делает: задает элементу значение, вызывает функцию для обновления общего счетчика
function updateCount(countElement, value) {
  countElement.innerText = value;
  updateCompleteCount();
}

// // Функция для обновления общего счетчика. складываем переменные (без innerText, потому что это большая нагрузка)
// // Проверяем и подставляем в инпут
function updateCompleteCount() {
  const beds = adults + childrens;

  if (beds == 1) {
    dateGuests.value = beds + " кровать";
  } else if ((beds > 1) & (beds < 5)) {
    dateGuests.value = beds + " кровати";
  } else if (beds == 0) {
    dateGuests.value = null;
    dateGuests.placeholder = "0 кроватей";
  } else {
    dateGuests.value = beds + " кроватей";
  }
  
  if (bathrooms) {
    if (bathrooms == 1) {
        dateGuests.value = dateGuests.value + ', ' + bathrooms + ' ванна'
    } else {
        dateGuests.value = dateGuests.value + ', ' + bathrooms + ' ванн'
    }
    }
}
