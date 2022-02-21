// const track = document.querySelector('.carousel-track');
// const slides = Array.from(track.children);
// const nextButton = document.querySelector('.carousel__button--right');
// const prevButton = document.querySelector('.carousel__button--left');
// const dotsNav = document.querySelector('.carousel__nav');
// const dots = Array.from(dotsNav.children);

// const slideWidth = slides[0].getBoundingClientRect().width;


// const setSlidePosition = (slide, index) => {
//     slide.style.left = slideWidth * index + 'px';
// };
// slides.forEach(setSlidePosition);

// nextButton.addEventListener('click', e=> {
//     const currentSlide = track.querySelector('.current-slide');
//     const nextSlide = currentSlide.nextElementSibling;
//     const amountToMove = nextSlide.style.left;
//     track.style.transform = 'translateX(-' + amountToMove + ')';
// })


const left = document.querySelector('.left');
const right = document.querySelector('.right');

const slider = document.querySelector('.slider');

const indicatorParent = document.querySelector('.control ul'); 
const indicators = document.querySelectorAll('.control li');
index = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.control .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translateX(' + (i) * -25 + '%)';  
    index = i;
    
  });
});

left.addEventListener('click', function() {
  index = (index > 0) ? index -1 : 0;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -25 + '%)';
});

right.addEventListener('click', function() {
  index = (index < 4 - 1) ? index+1 : 3;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -25 + '%)';
});