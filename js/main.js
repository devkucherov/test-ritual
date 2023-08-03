const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,
  parallax: true,
  speed: 1000,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  keyboard: {
    enabled: true,
  },
});
