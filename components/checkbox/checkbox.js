const checkboxes = document.querySelectorAll('.checkbox-passive')

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
        checkbox.classList.toggle('checkbox-active')
    })
})
