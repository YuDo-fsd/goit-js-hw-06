const changeFont = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

changeFont.addEventListener("input", (event) => {
  text.style.fontSize = `${event.target.value}px`;
});
