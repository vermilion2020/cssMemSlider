const SLIDER_INFO = [{
  image: 'cats-and-nata.jpg',
  text: 'Наташа, мы все уронили'
},
{
  image: 'chipseci.png',
  text: 'Чипсеки!'
},
{
  image: 'dog-in-fire.webp',
  text: 'Собака в огне'
},
{
  image: 'food-not-free.jpg',
  text: 'Толстая собачка'
}];

function showImage(id, pictures) {
  const IMG_CONTAINER = document.querySelector('#slider-picture');
  const NEW_IMAGE = document.createElement('img');
  NEW_IMAGE.dataset.id = id;
  NEW_IMAGE.setAttribute('src', `images/${pictures[id].image}`);
  NEW_IMAGE.setAttribute('alt', pictures[id].text);
  IMG_CONTAINER.appendChild(NEW_IMAGE);
}

window.addEventListener('load', () => {
showImage(0, SLIDER_INFO);
}, true);   