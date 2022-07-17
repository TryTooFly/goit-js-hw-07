import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
function photoCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
const cardsMarkup = photoCardMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);
galleryContainer.addEventListener("click", openImageClick);

function openImageClick(e) {
  e.preventDefault();

  const modal = basicLightbox.create(
    `<img scr= "${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => window.addEventListener("keydown", onPressKeyESC),
      onclose: () => window.removeEventListener("keydown", onPressKeyESC),
    }
  );
  modal.show();
  function onPressKeyESC(e) {
    if (e.code === "Escape") {
      modal.close();
    }
  }
}
