 // Modal

const threeDots = document.querySelector('.three-dots');
const menu = document.querySelector('.context-menu-container');

threeDots.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
});

document.body.addEventListener('click', () => {
  menu.style.display = 'none';
});

// Scroll Effect

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Swiper

const swiper = document.querySelector('.second-swiper');
const prevBtn = document.querySelectorAll('.arrow-left-btn')[0];
const nextBtn = document.querySelectorAll('.arrow-left-btn')[1];
const thumbnails = document.querySelectorAll('.thumbnail-div');

let index = 0;
const totalImages = 7;
const visibleImages = 2;
const movePercent = 52;

function updateSwiper() {
  swiper.style.transition = 'left 0.5s ease';
  swiper.style.left = `-${index * movePercent}%`;
  updateActiveThumbnail();
}

function updateActiveThumbnail() {
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle('thumbnail-active', i === index);
  });
}

nextBtn.addEventListener('click', () => {
  index++;
  if (index > totalImages - visibleImages) {
    updateSwiper();
    setTimeout(() => {
      swiper.style.transition = 'none';
      index = 0;
      swiper.style.left = `-${index * movePercent}%`;
      updateActiveThumbnail();
      setTimeout(() => {
        swiper.style.transition = 'left 0.5s ease';
      }, 20);
    }, 500);
  } else {
    updateSwiper();
  }
});

prevBtn.addEventListener('click', () => {
  index--;
  if (index < 0) {
    swiper.style.transition = 'left 0.5s ease';
    swiper.style.left = `-${(totalImages - visibleImages) * movePercent}%`;
    setTimeout(() => {
      swiper.style.transition = 'none';
      index = totalImages - visibleImages;
      swiper.style.left = `-${index * movePercent}%`;
      updateActiveThumbnail();
      setTimeout(() => {
        swiper.style.transition = 'left 0.5s ease';
      }, 20);
    }, 500);
  } else {
    updateSwiper();
  }
});

thumbnails.forEach((thumb, i) => {
  thumb.addEventListener('click', () => {
    index = i;
    updateSwiper();
  });
});

updateActiveThumbnail();

// OverView

const overviewSeeMore = document.getElementById('overviewSeeMore');

const overviewParagraphs = document.querySelector('.overview-paragraphs');

const overviewSeeLess = document.getElementById('overviewSeeLess');

const para = document.querySelector('.overview-para');

// Overview More

overviewSeeMore.addEventListener('click', () => {
overviewParagraphs.style.height = 'auto';
para.style.height = 'auto';
overviewSeeLess.style.display = 'flex';
overviewSeeMore.style.display = 'none';
});

// OverView Less

overviewSeeLess.addEventListener('click', () => {
  overviewParagraphs.style.height = '286px';
para.style.height = '286px';
overviewSeeLess.style.display = 'none';
overviewSeeMore.style.display = 'flex';
})