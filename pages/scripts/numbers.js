const checkbox_1= document.querySelector('#checkbox_1');
checkbox_1.addEventListener('click', function clickHandler_1() {
    checkbox_1.classList.toggle('checkbox-active');
    } );

const checkbox_2= document.querySelector('#checkbox_2');
checkbox_2.addEventListener('click', function clickHandler_2() {
    checkbox_2.classList.toggle('checkbox-active');
    });

const checkbox_3= document.querySelector('#checkbox_3');
checkbox_3.addEventListener('click', function clickHandler_3() {
    checkbox_3.classList.toggle('checkbox-active');
    });

const checkbox_4= document.querySelector('#checkbox_4');
checkbox_4.addEventListener('click', function clickHandler_4() {
    checkbox_4.classList.toggle('checkbox-active');
    });

const checkbox_5= document.querySelector('#checkbox_5');
checkbox_5.addEventListener('click', function clickHandler_5() {
    checkbox_5.classList.toggle('checkbox-active');
    });

const checkbox_6= document.querySelector('#checkbox_6');
checkbox_6.addEventListener('click', function clickHandler_6() {
    checkbox_6.classList.toggle('checkbox-active');
    });

const checkbox_7= document.querySelector('#checkbox_7');
checkbox_7.addEventListener('click', function clickHandler_7() {
    checkbox_7.classList.toggle('checkbox-active');
    });

const checkbox_8= document.querySelector('#checkbox_8');
checkbox_8.addEventListener('click', function clickHandler_8() {
    checkbox_8.classList.toggle('checkbox-active');
    });

const checkbox_9= document.querySelector('#checkbox_9');
checkbox_9.addEventListener('click', function clickHandler_9() {
    checkbox_9.classList.toggle('checkbox-active');
    });

const checkbox_10= document.querySelector('#checkbox_10');
checkbox_10.addEventListener('click', function clickHandler_10() {
    checkbox_10.classList.toggle('checkbox-active');
    });

const checkbox_11= document.querySelector('#checkbox_11');
checkbox_11.addEventListener('click', function clickHandler_11() {
    checkbox_11.classList.toggle('checkbox-active');
    });

//сделал выпадающий список кроватей и т.д.
const comfort = document.querySelector('.arrow-comfort');
const dropdownComfort = document.querySelector('.dropdown-menu-comfort');

comfort.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'selection') return;
    dropdownComfort.classList.toggle('dropdown-menu-comfort-show');
});

//Сделал выпадающий список чекбоксов
const moreСomfort = document.querySelector('.more-comfort');
const  dropdownСheckbox = document.querySelector('.dropdown-checkbox');

moreСomfort.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'selection') return;
    dropdownСheckbox.classList.toggle('dropdown-checkbox-show');
});

// // Выпадающий список при нажатии на инпут


// // Объявляем всякие кнопки, менюшки инпуты
const dateGuests = document.querySelector('.roma');

// // объявляем плюсики и минусики и цифры
const adultsMinus = document.querySelector('.adults-minus');
const adultsPlus = document.querySelector('.adults-plus');
const adultsСounter = document.querySelector('.adults-number');

const childrenMinus = document.querySelector('.children-minus');
const childrenPlus = document.querySelector('.children-plus');
const childrenСounter = document.querySelector('.children-number');

const babiesMinus = document.querySelector('.babies-minus');
const babiesPlus = document.querySelector('.babies-plus');
const babiesСounter = document.querySelector('.babies-number');

// // Создаем счетчики для цифр, чтобы не залезать каждый раз в dom дерево (Так быстрее работает и так правильно)
let adults = 0;
let childrens = 0;
let babies = 0;
let completeCount = 0;

// // Методы для увеличения/уменьшания значений. Увеличиваем каунт + вызываем функцию для обнавления текущего значения
// // То есть при каждом уменьшении - увелечении у нас вызывается функция, которая обновляет счетчик и локальный и общий
adultsMinus.addEventListener('click', () => {
    if (adults > 0) adults--;

    updateCount(adultsСounter, adults)
})

adultsPlus.addEventListener('click', () => {
    adults++;

    updateCount(adultsСounter, adults)
})

childrenMinus.addEventListener('click', () => {
    if (childrens > 0) {
        childrens--
    }

    updateCount(childrenСounter, childrens)
    
})

childrenPlus.addEventListener('click', () => {
    childrens++

    updateCount(childrenСounter, childrens)
})

babiesMinus.addEventListener('click', ()=> {
    if (babies > 0) {
        babies--
    }

    updateCount(babiesСounter, babies)
})

babiesPlus.addEventListener('click', () => {
    babies++

    updateCount(babiesСounter, babies)
})


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
    const guestsSum = adults + childrens + babies;

    if (guestsSum == 1) {
        dateGuests.value = guestsSum + ' кровать';
    } else if ((guestsSum > 1) & (guestsSum < 5)) {
        dateGuests.value = guestsSum + ' кровати';
    } else if (guestsSum == 0) {
        dateGuests.value = null;
        dateGuests.placeholder = '0 кроватей';
    } else {
        dateGuests.value = guestsSum + ' кроватей';
    }
}