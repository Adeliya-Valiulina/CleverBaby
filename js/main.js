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

  document.querySelector(".burger").addEventListener('click' , function ()  {
    this.classList.toggle('active');
    document.querySelector(".header-menu").classList.toggle('open');
    
  })
