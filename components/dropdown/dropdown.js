const label = document.querySelector('.guests');
const dropdown = document.querySelector('.dropdown-menu');
const guestsInput = document.querySelector('.guests-input');
const adultsСounter = document.querySelector('.adults-number');
const childrenСounter = document.querySelector('.children-number');
const babiesСounter = document.querySelector('.babies-number');
const applyButton = document.querySelector('.apply');
const cleanButton = document.querySelector('.clean');

let adults = 0;
let childrens = 0;
let babies = 0;
let completeCount = 0;

label.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'selection') return;

    dropdown.classList.toggle('dropdown-menu-show');

});

applyButton.addEventListener('click', () => dropdown.classList.remove('.dropdown-menu-show'));

cleanButton.addEventListener('click', (e) => {
    e.stopPropagation();

    adults = childrens = babies = 0;

    adultsСounter.innerText = 0;
    childrenСounter.innerText = 0;
    babiesСounter.innerText = 0;

    updateCompleteCount();
})

dropdown.addEventListener('click', (e) => {
    if (!e.target.dataset?.button) return

    switch (e.target.dataset.button) {
        case 'adult-minus':
            if (adults === 0) return
            adults--
            break;
        case 'adult-plus':
            adults++
            break;
        case 'childrens-minus':
            if (childrens === 0) return
            childrens--
            break;
        case 'childrens-plus':
            childrens++
            break;
        case 'babies-minus':
            if (babies === 0) return
            babies--
            break;
        case 'babies-plus':
            babies++
            break;
    }

    updateCounts(e.target.dataset.button)
})

function updateCounts(count) {
    switch (count) {
        case 'adult-minus':
        case 'adult-plus':
            adultsСounter.innerText = adults;
            break;

        case 'childrens-minus':
        case 'childrens-plus':
            childrenСounter.innerText = childrens;
            break;
    
        case 'babies-minus':
        case 'babies-plus':
            babiesСounter.innerText = babies;
            break;
    }

    updateCompleteCount();
}

function updateCompleteCount() {
    const guestsSum = adults + childrens + babies;

    if (guestsSum == 1) {
        guestsInput.value = guestsSum + ' гость';
    } else if ((guestsSum > 1) & (guestsSum < 5)) {
        guestsInput.value = guestsSum + ' гостя';
    } else if (guestsSum == 0) {
        guestsInput.value = null;
        guestsInput.placeholder = 'Сколько гостей';
    } else {
        guestsInput.value = guestsSum + ' гостей';
    }
}
