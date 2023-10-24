const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // How sliders in block
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    
    // Effect
    effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
  
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },

    breakpoints: {
      960: {
        slidesPerView: 3
      }
    },

    observer: true,
    observeParents: true,
    observeSlideChildren: true,
  });