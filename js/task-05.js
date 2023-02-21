const nameInput = document.querySelector("#name-input");
const nameYouEntered = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  if (event.target.value === "") {
    nameYouEntered.textContent = "Anonymous";
  } else {
    nameYouEntered.textContent = event.target.value;
  }
});
