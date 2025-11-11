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

// const MainImgTwo = document.getElementById('main-img-two');

// const BodyMainImg = document.getElementById('body-main-img-two');

// const BodyMainImgDiv = document.getElementById('body-main-img-div');

// MainImgTwo.addEventListener('click', () => {
//   BodyMainImgDiv.style.zIndex = 2;
//   BodyMainImg.style.display = 'block';
//   overlay.style.opacity = 0.3;
//   overlay.style.zIndex = 1;
// });

updateActiveThumbnail();

// OverView

function overview() {
  const overviewSeeMore = document.getElementById('overviewSeeMore');
const overviewSeeLess = document.getElementById('overviewSeeLess');
const overviewParagraphs = document.querySelector('.overview-paragraphs');

overviewSeeMore.addEventListener('click', () => {
  overviewParagraphs.classList.add('expanded');
  overviewSeeMore.style.display = 'none';
  overviewSeeLess.style.display = 'flex';
});

overviewSeeLess.addEventListener('click', () => {
  overviewParagraphs.classList.remove('expanded');
  overviewSeeLess.style.display = 'none';
  overviewSeeMore.style.display = 'flex';
});
}
overview();

// Details

function detail() {
  const detailClick = document.querySelectorAll('.detail-click');

  detailClick.forEach((click) => {
    const flexIcon = click.querySelector('.detail-flex');
    const noneIcon = click.querySelector('.detail-none');

    click.addEventListener('toggle', () => {
      if (click.open) {
        flexIcon.style.display = 'none';
        noneIcon.style.display = 'flex';
      } else {
        flexIcon.style.display = 'flex';
        noneIcon.style.display = 'none';
      }
    });
  });
}

detail();