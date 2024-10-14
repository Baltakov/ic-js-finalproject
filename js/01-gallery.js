import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

function createImgMarkup() {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join("");
  return markup;
}

const markup = createImgMarkup();
gallery.innerHTML = markup;

gallery.addEventListener("click", () => {});