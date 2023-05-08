var mySwiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});