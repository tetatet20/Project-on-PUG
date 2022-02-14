const checkbox_1= document.querySelector('#checkbox_1');
checkbox_1.addEventListener('click', clickHandler_1);

function clickHandler_1() {
checkbox_1.classList.toggle('checkbox-active');
}

const checkbox_2= document.querySelector('#checkbox_2');
checkbox_2.addEventListener('click', clickHandler_2);

function clickHandler_2() {
checkbox_2.classList.toggle('checkbox-active');
}

const checkbox_3= document.querySelector('#checkbox_3');
checkbox_3.addEventListener('click', clickHandler_3);

function clickHandler_3() {
checkbox_3.classList.toggle('checkbox-active');
}

const checkbox_4= document.querySelector('#checkbox_4');
checkbox_4.addEventListener('click', clickHandler_4);

function clickHandler_4() {
checkbox_4.classList.toggle('checkbox-active');
}

const checkbox_5= document.querySelector('#checkbox_5');
checkbox_5.addEventListener('click', clickHandler_5);

function clickHandler_5() {
checkbox_5.classList.toggle('checkbox-active');
}

const checkbox_6= document.querySelector('#checkbox_6');
checkbox_6.addEventListener('click', clickHandler_6);

function clickHandler_6() {
checkbox_6.classList.toggle('checkbox-active');
}

const checkbox_7= document.querySelector('#checkbox_7');
checkbox_7.addEventListener('click', clickHandler_7);

function clickHandler_7() {
checkbox_7.classList.toggle('checkbox-active');
}

const checkbox_8= document.querySelector('#checkbox_8');
checkbox_8.addEventListener('click', clickHandler_8);

function clickHandler_8() {
checkbox_8.classList.toggle('checkbox-active');
}

const checkbox_9= document.querySelector('#checkbox_9');
checkbox_9.addEventListener('click', clickHandler_9);

function clickHandler_9() {
checkbox_9.classList.toggle('checkbox-active');
}

const checkbox_10= document.querySelector('#checkbox_10');
checkbox_10.addEventListener('click', clickHandler_10);

function clickHandler_10() {
checkbox_10.classList.toggle('checkbox-active');
}

const checkbox_11= document.querySelector('#checkbox_11');
checkbox_11.addEventListener('click', clickHandler_11);

function clickHandler_11() {
checkbox_11.classList.toggle('checkbox-active');
}

const moreComfort= document.querySelector('.more-comfort')
const dropdownCheckbox= document.querySelector('.dropdown-checkbox')
const moreComfortActive=document.querySelector('.more-comfort::after')
moreComfort.addEventListener('click', openDropdownCheckbox);

function openDropdownCheckbox() {
    dropdownCheckbox.classList.toggle('dropdown-checkbox-show');
    moreComfortActive.classList.toggle('.active');
}
