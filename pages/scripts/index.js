const input = document.querySelector('.guests-input');
const dropdown = document.querySelector('.dropdown-menu');

input.addEventListener('click', inputClickHandler);

function inputClickHandler() {
    dropdown.classList.toggle('dropdown-menu-show');
}
//Реализовал выпадающий список при нажатии

const adultsMinus = document.querySelector('.adults-minus');
const adultsPlus = document.querySelector('.adults-plus');
const adultsСounter = document.querySelector('.adults-number');


adultsMinus.addEventListener('click', function () {
    if (parseInt(adultsСounter.innerText) > 0) {
        adultsСounter.innerText = --adultsСounter.innerText;
    }

})

adultsPlus.addEventListener('click', function () {
    adultsСounter.innerText = ++adultsСounter.innerText;
})
//Реализовал счетчик взрослых гостей

const childrenMinus = document.querySelector('.children-minus');
const childrenPlus = document.querySelector('.children-plus');
const childrenСounter = document.querySelector('.children-number');

childrenMinus.addEventListener('click', function () {
    if (parseInt(childrenСounter.innerText) > 0) {
        childrenСounter.innerText = --childrenСounter.innerText;
    }
})

childrenPlus.addEventListener('click', function () {
    childrenСounter.innerText = ++childrenСounter.innerText;
})
//Реализовал счетчик гостей - детей

const babiesMinus = document.querySelector('.babies-minus');
const babiesPlus = document.querySelector('.babies-plus');
const babiesСounter = document.querySelector('.babies-number');

babiesMinus.addEventListener('click', function () {
    if (parseInt(babiesСounter.innerText) > 0) {
        babiesСounter.innerText = --babiesСounter.innerText;
    }
})

babiesPlus.addEventListener('click', function () {
    babiesСounter.innerText = ++babiesСounter.innerText;
})
//Реализовал счетчик гостей - младенцев

const clean = document.querySelector('.clean');

clean.addEventListener('click', function () {
    adultsСounter.innerText = 0
    childrenСounter.innerText = 0
    babiesСounter.innerText = 0
    guestsInput.value = 0 + ' гостей'
})
//реализовал сброс счетчиков

const count = document.querySelector('.round-button');
count.addEventListener('click', inputClickHandler);
const guestsInput = document.querySelector('.guests-input');

function inputClickHandler() {
    let guestsSum = parseInt(adultsСounter.innerText) + parseInt(childrenСounter.innerText) + parseInt(babiesСounter.innerText)
    if (guestsSum == 1) {
        guestsInput.value = guestsSum + ' гость';
    } else if ((guestsSum > 1) & (guestsSum < 5)) {
        guestsInput.value = guestsSum + ' гостя';
    } else {
        guestsInput.value = guestsSum + ' гостей';
    }
}
//реализовал суммирование количества гостей