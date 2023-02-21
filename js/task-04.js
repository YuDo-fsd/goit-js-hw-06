// ===============
// Варіант №1
// ===============

// const counterValue = document.querySelector("#value");
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const decrementBtn = document.querySelector('[data-action="decrement"]');

// let count = 0;

// function increment() {
//   count += 1;
//   counterValue.textContent = count;
// }

// function decrement() {
//   count -= 1;
//   counterValue.textContent = count;
// }

// incrementBtn.addEventListener("click", increment);
// decrementBtn.addEventListener("click", decrement);

// ===============
// Варіант №2
// ===============

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
});

incrementBtn.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
});
