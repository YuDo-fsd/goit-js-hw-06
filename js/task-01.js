const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const subcategories = category.querySelectorAll("li").length;
  console.log(`Category:${categoryName} Elements:${subcategories}`);
});
