import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCollection = document.querySelector('.gallery');

function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join('');
}

const markupGallery = createGallery(galleryItems);
galleryCollection.insertAdjacentHTML('beforeend', markupGallery);

const gallery = new SimpleLightbox('.gallery  a', {
  captionsData: 'alt',
  captionDelay: 250,
});
