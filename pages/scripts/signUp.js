const containerRadio = document.querySelector ('.container-radio')
const radio = document.querySelector ('.radio')

containerRadio.addEventListener("click", (e) => {
    if (e.target.classList[0] === "selection") return;
    radio.classList.toggle("radio-active");
  });