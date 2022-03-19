const all = document.querySelectorAll('.checkbox-component-container');

all.forEach(el => {
  el.addEventListener('click', (e) => {
    e.target.classList.toggle('checkbox-active');
  })
})