import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const markup = galleryItems.map(({ preview, original, description }) =>
`<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join("");

galleryContainer.insertAdjacentHTML('beforeend', markup);
console.log(markup);

galleryContainer.addEventListener('click', onclick);

function onclick(evt) {
    evt.preventDefault();

    const instance = basicLightbox.create(`
        <div class="modal">
            <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg" width="800" height="600">
        </div> `, {
    onShow: (instance) => {
        instance.element().querySelector('a').onclick = instance.close
    }
})
}

    instance.show()
