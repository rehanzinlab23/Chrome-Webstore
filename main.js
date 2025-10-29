let swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 25000,
        disableOnInteraction: false,
      },
         pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });