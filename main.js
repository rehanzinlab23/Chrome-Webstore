let swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
         pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
        loop: true,
    navigation: {
      nextEl: "#nextBtn",
      prevEl: "#prevBtn", 
    },
    });

      // Play/Pause Button Logic

  const playPauseBtn = document.getElementById("playPauseBtn");
  let isPlaying = true;

  playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
      swiper.autoplay.stop(); // ⏸ Stop autoplay
      playPauseBtn.innerHTML = `<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" class=" NMm5M"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M6,19h4V5H6V19z M14,5v14h4V5H14z"></path></g></g></svg>`;

    } else {
      swiper.autoplay.start(); // ▶ Start autoplay
      playPauseBtn.innerHTML = `<svg enable-background="new 0 0 24 24" focusable="false" height="24" viewBox="0 0 24 24" width="24" class=" NMm5M"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M8,5v14l11-7L8,5z"></path></g></g></svg>`;
    }
    isPlaying = !isPlaying;
  });