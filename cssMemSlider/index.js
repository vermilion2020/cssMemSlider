const SLIDER_INFO = [{
  image: 'cats-and-nata.jpg',
  text: 'Наташа, мы все уронили'
},
{
  image: 'chipseki.png',
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

class Slider {
  activeElement = 0;

  constructor(pictures) {
    this.pictures = pictures;
  }

  showImage(id) {
    this.activeElement = id;
    const IMG_CONTAINER = document.querySelector('#slider-picture');
    const NEW_IMAGE = document.createElement('img');
    NEW_IMAGE.dataset.id = id;
    NEW_IMAGE.setAttribute('src', `images/${this.pictures[id].image}`);
    NEW_IMAGE.setAttribute('alt', this.pictures[id].text);
    IMG_CONTAINER.innerHTML = '';
    IMG_CONTAINER.appendChild(NEW_IMAGE);
    document.querySelector("#slider-text").innerText = this.pictures[id].text;
    document.querySelector(".active").classList.remove('active');
    document.querySelector(`#slider-controls > [data-id="${id}"]`).classList.add('active');
  }

  sliderControls() {
    for (let i = 0; i < this.pictures.length; i++) {
      const NEW_CONTROL = document.createElement('div');
      NEW_CONTROL.classList.add('container');
      i === 0 ? NEW_CONTROL.classList.add('active') : '';
      NEW_CONTROL.dataset.id = i;
      const INNER_CIRCLE =  document.createElement('div');
      this.activeElement = 0;
      NEW_CONTROL.appendChild(INNER_CIRCLE);
      document.querySelector('#slider-controls').appendChild(NEW_CONTROL);
    }
  }
}

function fadeOut(id) {
  const SLIDER_IMG = document.querySelector('#slider-picture img');
  const SLIDER_TEXT = document.querySelector('#slider-text');
  SLIDER_IMG.setAttribute('data-id', id);
  SLIDER_IMG.classList.add('transition-fade-out');
  SLIDER_TEXT.classList.add('transition-fade-out');
};

const SLIDER = new Slider(SLIDER_INFO);

window.addEventListener('load', () => {
  SLIDER.sliderControls();
  SLIDER.showImage(0);
}, true);   

document.querySelector('#slider-controls').addEventListener('click', (event) => {
  let { target } = event;
  if (!target.classList.length) {
    target = event.path['1'];
  }
  if (target.dataset.id !== undefined) {
    fadeOut(target.dataset.id);
  }});

document.querySelector('#slider-picture').addEventListener('animationend', (animation) => {
  if (animation.target.dataset.id !== undefined) {
    const SLIDER_IMG = document.querySelector('#slider-picture img');
    const SLIDER_TEXT = document.querySelector('#slider-text');
    if (animation.animationName === 'fade-out') {
      if (animation.target.dataset.id !== undefined) {
        SLIDER.showImage(animation.target.dataset.id);
        const SLIDER_IMG = document.querySelector('#slider-picture img');
        const SLIDER_TEXT = document.querySelector('#slider-text');
        SLIDER_IMG.classList.remove('transition-fade-out');
        SLIDER_IMG.classList.add('transition-fade-in');
        SLIDER_TEXT.classList.remove('transition-fade-out');
        SLIDER_TEXT.classList.add('transition-fade-in');
      }
    } else {
      SLIDER_IMG.classList.remove('transition-fade-in');
      SLIDER_TEXT.classList.remove('transition-fade-in');
    }
  }
});
