export const slider = () => {
  const carouselWrap = document.querySelector('.carousel__wrap');
  const carouselImage = Array.from(document.querySelectorAll('.carousel__image'));
  const buttonPrev = document.querySelector('.carousel-button-prev');
  const buttonNext = document.querySelector('.carousel-button-next');

  let currentIndex = 0;

  const changeImage = () => {
    const nextIndex = (currentIndex + 1) % carouselImage.length;

    carouselWrap.append(carouselImage[currentIndex]);
    carouselImage[nextIndex].classList.add('carousel__image_big');
    carouselImage[currentIndex].classList.remove('carousel__image_big');
    currentIndex = nextIndex;
  }

  buttonPrev.addEventListener('click', changeImage);
  buttonNext.addEventListener('click', changeImage);
};
