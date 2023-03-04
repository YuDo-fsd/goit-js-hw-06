function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonPress = document.querySelector(".change-color");
const widgetBgColor = document.querySelector(".color");

widgetBgColor.textContent = getRandomHexColor();

buttonPress.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;

  widgetBgColor.textContent = newColor;
});
