const labels = document.querySelectorAll(".guests");

labels.forEach(function (label) {
  const input = label.querySelector(".guests-input");
  const firstСounter = label.querySelector(".adults-number");
  const secondСounter = label.querySelector(".children-number");
  const thirdСounter = label.querySelector(".babies-number");
  const applyButton = label.querySelector(".apply");
  const cleanButton = label.querySelector(".clean");

  let first = 0;
  let second = 0;
  let third = 0;

  const dropdown = label.querySelector(".dropdown-menu");

  label.addEventListener("click", (e) => {
    dropdown.classList.toggle("dropdown-menu-show");
  });

  applyButton.addEventListener("click", () =>
    dropdown.classList.remove(".dropdown-menu-show")
  );
  cleanButton.addEventListener("click", (e) => {
    e.stopPropagation();

    first = second = third = 0;

    firstСounter.innerText = 0;
    secondСounter.innerText = 0;
    thirdСounter.innerText = 0;

    updateCompleteCount();
  });

  dropdown.addEventListener("click", (e) => {
    if (!e.target.dataset?.button) return;

    switch (e.target.dataset.button) {
      case "first-minus":
        if (first === 0) return;
        first--;
        break;
      case "first-plus":
        first++;
        break;
      case "second-minus":
        if (second === 0) return;
        second--;
        break;
      case "second-plus":
        second++;
        break;
      case "third-minus":
        if (third === 0) return;
        third--;
        break;
      case "third-plus":
        third++;
        break;
    }

    updateCounts(e.target.dataset.button);
  });

  function updateCounts(count) {
    switch (count) {
      case "first-minus":
      case "first-plus":
        firstСounter.innerText = first;
        break;

      case "second-minus":
      case "second-plus":
        secondСounter.innerText = second;
        break;

      case "third-minus":
      case "third-plus":
        thirdСounter.innerText = third;
        break;
    }

    updateCompleteCount();
  }

  function bedsString() {
    let firstText =
      first === 1 ? "спальня" : first > 1 && first < 5 ? "спальни" : "спален";

      // тоже самое что и выше
      // if (first === 1) {
      //   firstText = 'спальня'
      // } else if (first > 1 && first < 5) {
      //   firstText = 'спальни'
      // } else {
      //   firstText = 'спален'
      // }

    const secondText =
      second === 1
        ? "кровать"
        : second > 1 && second < 5
        ? "кровати"
        : "крвоватей";

    const thirdText =
      third === 1 ? "ванна" : third > 1 && third < 5 ? "ванны" : "ванн";

    return `${first} ${firstText}, ${second} ${secondText}, ${third} ${thirdText}`;
  }
  function updateCompleteCount() {
    const sum = first + second + third;

    if (label.dataset.type === "guest") {
      if (sum == 1) {
        input.value = sum + " гость";
      } else if ((sum > 1) & (sum < 5)) {
        input.value = sum + " гостя";
      } else if (sum == 0) {
        input.value = null;
        input.placeholder = "Сколько гостей";
      } else {
        input.value = sum + " гостей";
      }
    } else {
      input.value = bedsString();

      // это говнокод романа огромный 
      // if (first == 1) {
      //   input.value = bedsString("спальня", "кровать", "");
      // } else if ((first > 1) & (first < 5)) {
      //   input.value = bedsString("спальни");
      // } else {
      //   input.value = bedsString("спален");
      // }

      // if (second == 1) {
      //   input.value = input.value + ", " + second + " кровать";
      // } else if ((second > 1) & (second < 5)) {
      //   input.value = input.value + ", " + second + " кровати";
      // } else {
      //   input.value = input.value + ", " + second + " кроватей";
      // }

      // if (third) {
      //   if (third == 1) {
      //     input.value = input.value + ", " + third + " ванна";
      //   } else if ((third > 1) & (third < 5)) {
      //     input.value = input.value + ", " + third + " ванны";
      //   } else {
      //     input.value = input.value + ", " + third + " ванн";
      //   }
      // }
    }
  }
});
