window.addEventListener('load', () => {
  const carouselWrap = document.querySelector('.carousel-wrap');
  const carouselImage = Array.from(document.querySelectorAll('.carousel-image'));
  const buttonPrev = document.querySelector('.carousel-button-prev');
  const buttonNext = document.querySelector('.carousel-button-next');

  let currentIndex = 0;

  function changeImage() {
    const nextIndex = (currentIndex + 1) % carouselImage.length;

    carouselImage[nextIndex].style.opacity = '0';

    setTimeout(() => {
      carouselWrap.append(carouselImage[currentIndex]);
      carouselImage[nextIndex].classList.add('carousel-image-big');
      carouselImage[currentIndex].classList.remove('carousel-image-big');
    }, 500);

    setTimeout(() => {
      carouselImage[nextIndex].style.opacity = '1';
      currentIndex = nextIndex;
      console.log(carouselImage)
    }, 500);
  }

  buttonPrev.addEventListener('click', changeImage);
  buttonNext.addEventListener('click', changeImage);
});