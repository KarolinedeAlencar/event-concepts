const divs = document.querySelectorAll('div');

function logText(e) {
  // e.stopPropagation(); // stop bubling
  // console.log(this);
  console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true
}));
