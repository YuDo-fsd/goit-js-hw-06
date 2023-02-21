const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// ===============
// Варіант №1
// ===============

// const newUrl = document.querySelector(".gallery");

// images.forEach((image) => {
//   const newLi = document.createElement("li");
//   const newImg = document.createElement("img");
//   newImg.src = image.url;
//   newImg.alt = image.alt;
//   newLi.appendChild(newImg);
//   newUrl.appendChild(newLi);
// });

// ===============
// Варіант №2
// ===============

const gallery = document.querySelector(".gallery");

const galleryItems = images
  .map(({ url, alt }) => {
    return `<li class="gallery-item"><img src="${url}" alt="${alt}" class="gallery-img" width = "300px"></li>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", galleryItems);
