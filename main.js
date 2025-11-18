document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides');
    const slides = Array.from(document.querySelectorAll('.slide'));
    const totalSlides = slides.length;

    const prevBtn = document.querySelector('.prev-button');
    const nextBtn = document.querySelector('.next-button');
    const playPauseBtn = document.querySelector('.play-button');
    const pageIndicator = document.querySelector('.page-indicator');

    let currentSlide = 1;
    let slideWidth = slides[0];
    let isPlaying = true;
    let autoplayInterval;

    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    slidesContainer.appendChild(firstClone);
    slidesContainer.insertBefore(lastClone, slidesContainer.firstChild);

    const allSlides = Array.from(slidesContainer.children);

    slidesContainer.style.marginLeft = `-${slideWidth}px`;

    function updateSlideWidth() {
        slideWidth = slides[0];
        slidesContainer.style.transition = 'none';
        slidesContainer.style.marginLeft = `-${slideWidth * currentSlide}px`;
        setTimeout(() => { slidesContainer.style.transition = 'margin-left 0.5s ease-in-out'; }, 50);
    }

    function goToSlide(index) {
        currentSlide = index;
        const offset = currentSlide * slideWidth;
        slidesContainer.style.transition = 'margin-left 0.5s ease-in-out';
        slidesContainer.style.marginLeft = `-${offset}px`;

        // Update page indicator
        let realIndex = currentSlide;
        if (realIndex < 1) realIndex = totalSlides;
        else if (realIndex > totalSlides) realIndex = 1;
        pageIndicator.textContent = `${realIndex} / ${totalSlides}`;

        updateSlideInert();
        updateButtonColors();
    }

    function updateSlideInert() {
        allSlides.forEach((slide, i) => {
            const section = slide.querySelector('section');
            if (i === currentSlide) section?.removeAttribute('inert');
            else section?.setAttribute('inert', '');
        });
    }

    function updateButtonColors() {
        const realIndex = currentSlide > totalSlides ? 1 : currentSlide < 1 ? totalSlides : currentSlide;
        if (realIndex === 2) {
            [prevBtn, nextBtn, playPauseBtn].forEach(btn => {
                btn.style.color = '#fff';
                btn.classList.add('white-btn');
            });
            pageIndicator.style.color = '#fff';
        } else {
            [prevBtn, nextBtn, playPauseBtn].forEach(btn => {
                btn.style.color = '#000';
                btn.classList.remove('white-btn');
            });
            pageIndicator.style.color = '#000';
        }
    }

    function startAutoplay() {
        autoplayInterval = setInterval(() => moveNext(), 2500);
        isPlaying = true;
        updatePlayPauseIcon();
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
        isPlaying = false;
        updatePlayPauseIcon();
    }

    function updatePlayPauseIcon() {
        const playIcon = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
        const pauseIcon = '<path d="M6,19h4V5H6V19z M14,5v14h4V5H14z"></path>';
        playPauseBtn.querySelector('svg g:last-child').innerHTML = isPlaying ? pauseIcon : playIcon;
    }

    function moveNext() { goToSlide(currentSlide + 1); }
    function movePrev() { goToSlide(currentSlide - 1); }

    nextBtn.addEventListener('click', () => { moveNext(); if (isPlaying) { clearInterval(autoplayInterval); startAutoplay(); } });
    prevBtn.addEventListener('click', () => { movePrev(); if (isPlaying) { clearInterval(autoplayInterval); startAutoplay(); } });
    playPauseBtn.addEventListener('click', () => { isPlaying ? stopAutoplay() : startAutoplay(); });

    window.addEventListener('resize', () => {
        updateSlideWidth();
    });

    slidesContainer.addEventListener('transitionend', () => {
        if (currentSlide > totalSlides) {
            slidesContainer.style.transition = 'none';
            currentSlide = 1;
            slidesContainer.style.marginLeft = `-${slideWidth * currentSlide}px`;
            setTimeout(() => { slidesContainer.style.transition = 'margin-left 0.5s ease-in-out'; }, 50);
        } else if (currentSlide < 1) {
            slidesContainer.style.transition = 'none';
            currentSlide = totalSlides;
            slidesContainer.style.marginLeft = `-${slideWidth * currentSlide}px`;
            setTimeout(() => { slidesContainer.style.transition = 'margin-left 0.5s ease-in-out'; }, 50);
        }
    });

    goToSlide(1);
    startAutoplay();

    // Search

    const searchIcon = document.getElementById('searchIcon');

    const searchPill = document.getElementById('searchPill');

    const navLogo = document.getElementById('navLogo');


    searchIcon.addEventListener('click', () => {
        searchPill.style.display = 'flex';
        searchIcon.style.display = 'none';
        navLogo.style.display = 'none';
    });

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