function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorbtn = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.querySelector("body");

changeColorbtn.addEventListener("click", () => {
const randomColor= getRandomHexColor();
  color.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});