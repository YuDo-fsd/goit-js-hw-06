const lostFocus = document.querySelector("#validation-input");

lostFocus.addEventListener("blur", (event) => {
  if (event.target.value.length >= 6) {
    lostFocus.classList.add("valid");
    lostFocus.classList.remove("invalid");
  } else if (event.target.value.length === 0) {
    lostFocus.classList.remove("invalid");
    lostFocus.classList.remove("valid");
  } else {
    lostFocus.classList.add("invalid");
    lostFocus.classList.remove("valid");
  }
});
