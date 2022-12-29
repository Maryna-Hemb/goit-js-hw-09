export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let ChangeColor = null;


const bodyEl = document.querySelector("body")
const btnStartEl = document.querySelector("[data-start]");
const btnStopEl = document.querySelector("[data-stop]");


btnStartEl.addEventListener("click", onClickChangeColor);

function onClickChangeColor() {
btnStartEl.setAttribute("disabled", "");    
ChangeColor = setInterval(() =>{bodyEl.style.backgroundColor = getRandomHexColor()}, 1000);
}

btnStopEl.addEventListener("click", onClickStopChangeColor);
function onClickStopChangeColor() {
    btnStartEl.removeAttribute("disabled");
    clearInterval(ChangeColor);
}
