import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCollection = document.querySelector('.gallery');

function createGallery(items) {
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
const markupGallery = createGallery(galleryItems);

galleryCollection.insertAdjacentHTML('beforeend', markupGallery);

galleryCollection.addEventListener('click', onGalleryImgClick);

function onGalleryImgClick(e) {
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
}

function onOpenModal(instance) {
  instance.show();
}
function onCloseModal(instance) {
  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}
