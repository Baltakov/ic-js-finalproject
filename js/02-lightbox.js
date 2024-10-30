import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createImgMarkup() {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
  return markup;
}

const markup = createImgMarkup();
gallery.innerHTML = markup;

gallery.addEventListener("click", imageClick);

function imageClick(event) {
  event.preventDefault();
}
