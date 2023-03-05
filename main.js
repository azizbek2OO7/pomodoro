console.log("Pomodoro");

const section = document.querySelector("section");
const header = document.querySelector("header");
const pomodoro = document.querySelector(".pomodoro");
const shortBreak = document.querySelector(".short-break");
const longBreak = document.querySelector(".long-break");
const start = document.querySelector(".start");
const time = document.querySelector(".time");

pomodoro.addEventListener("click", () => {
  document.body.style.background = "rgb(227, 71, 71)";
  section.style.background = "rgb(193, 92, 92)";
  start.style.color = "rgb(193, 92, 92)";
  time.textContent = "25:00";
});

shortBreak.addEventListener("click", () => {
  document.body.style.background = "rgb(56,133,138)";
  section.style.background = "rgb(76,145,150)";
  start.style.color = "rgb(76,145,150)";
  time.textContent = "5:00";
});

longBreak.addEventListener("click", () => {
  document.body.style.background = "rgb(57,112,151)";
  section.style.background = "rgb(77,127,162)";
  start.style.color = "rgb(77,127,162)";
  time.textContent = "15:00";
});

start.addEventListener("click", () => {
  start.toggleAttribute("class");
  if (start.hasAttribute("class")) start.textContent = "Start";
  else if (!start.hasAttribute("class")) start.textContent = "Pouse";
});
