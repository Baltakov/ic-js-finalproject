import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
let instance;

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

gallery.addEventListener("click", imageClick);

function imageClick(event) {
  event.preventDefault();

  const largeImage = event.target.dataset.source;
  instance = basicLightbox.create(
    `
    <img src="${largeImage}" width="800" height="600">
  `,
    {
      onShow: () => {
        document.addEventListener("keydown", closeByEsc);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeByEsc);
      },
    }
  );

  instance.show();
}

function closeByEsc(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
