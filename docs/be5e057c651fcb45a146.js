const containerRadio=document.querySelector(".container-radio"),radio=document.querySelector(".radio");containerRadio.addEventListener("click",(e=>{"selection"!==e.target.classList[0]&&radio.classList.toggle("radio-active")}));