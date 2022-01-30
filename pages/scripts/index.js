const input = document.querySelector('.guests-input');
const dropdown = document.querySelector('.dropdown-menu');

input.addEventListener('click', inputClickHandler);

function inputClickHandler() {
    dropdown.classList.toggle('dropdown-menu-show');
}
