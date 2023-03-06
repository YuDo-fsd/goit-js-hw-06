const lostFocus = document.querySelector("#validation-input");

lostFocus.addEventListener("blur", (event) => {
  lostFocus.classList.remove("valid", "invalid");
  if (event.target.value.length === 6) {
    lostFocus.classList.add("valid");
  } else {
    lostFocus.classList.add("invalid");
  }
});
