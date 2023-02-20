const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIng = document.querySelector("#ingredients");

const newLiElements = ingredients.map((ingredient) => {
  const newLiCreate = document.createElement("li");
  newLiCreate.textContent = ingredient;
  newLiCreate.classList.add("item");
  return newLiCreate;
});

listOfIng.append(...newLiElements);
