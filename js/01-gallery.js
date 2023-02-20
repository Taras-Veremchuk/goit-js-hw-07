import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createImagesGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
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
    .join('');
}
const myGallery = createImagesGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', myGallery);

gallery.addEventListener('click', onMyGalleryElClick);

function onMyGalleryElClick(e) {
  e.preventDefault();
  const isCorrectClick = e.target.nodeName === 'IMG';
  if (!isCorrectClick) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="1280" height="720">
`);
  onOpenModal(instance);
  onCloseModal(instance);

  console.log(e.target.dataset.source);
}

function onOpenModal(modal) {
  modal.show();
}
function onCloseModal(modal) {
  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      modal.close();
    }
  });
}
