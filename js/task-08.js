const users = {
  login: "",
  password: "",
};

const formEdit = document.querySelector(".login-form");

formEdit.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    return alert("Будь ласка, заповніть всі поля форми!");
  }

  users.login = email.value;
  users.password = password.value;

  event.currentTarget.reset();
}

console.log(users);
