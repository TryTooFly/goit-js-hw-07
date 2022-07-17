import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

const photoCardMarkup = galleryItems
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

// const cardsMarkup = photoCardMarkup(galleryItems);
// galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);
// galleryContainer.addEventListener("click", openImageClick);

// function openImageClick(e) {
//   e.preventDefault();

//   const modal = basicLightbox.create(
//     `<img scr= "${e.target.dataset.source}" width="800" height="600">`,
//     {
//       onShow: (modal) => {
//         window.addEventListener("keydown", onPressKeyESC);
//       },
//     },
//     {
//       onclose: (modal) => {
//         window.removeEventListener("keydown", onPressKeyESC);
//       },
//     }
//   );
galleryContainer.innerHTML = photoCardMarkup;

let imgOriginalLink = "";

galleryContainer.addEventListener("click", (e) => {
  e.preventDefault();

  imgOriginalLink = e.target.dataset.source;

  const modal = basicLightbox.create(
    `
      <img src="${imgOriginalLink}">`,
    {
      onShow: (modal) => {
        window.addEventListener("keydown", openModal);
      },
      onClose: (modal) => {
        window.removeEventListener("keydown", openModal);
      },
    }
  );

  modal.show();
  function openModal(e) {
    if (e.code === "Escape") {
      modal.close();
    }
  }
});
