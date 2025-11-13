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

// Filter Box

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(drop => {
  const selected = drop.querySelector('.selected');

  selected.addEventListener('click', (e) => {
    e.stopPropagation();

    dropdowns.forEach(other => {
      if (other !== drop) other.classList.remove('click');
    });

    drop.classList.toggle('click');
  });

  drop.querySelectorAll('.menu div').forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      selected.textContent = option.textContent;
      drop.classList.remove('click');
    });
  });
});

document.addEventListener('click', () => {
  dropdowns.forEach(drop => drop.classList.remove('click'));
});

// Load More

const loadMore = document.getElementById('loadMore');
const grid = document.getElementById('grid');

if (sessionStorage.getItem('flexVisible') === 'true') {
  grid.style.display = 'grid';
}

loadMore.addEventListener('click', () => {
  grid.style.display = 'grid';
  sessionStorage.setItem('flexVisible', 'true');
});

// On Top

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) { 
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Search

const searchIcon = document.getElementById('searchIcon');

const searchPill = document.getElementById('searchPill');

const navLogo = document.getElementById('navLogo');


searchIcon.addEventListener('click', () => {
    searchPill.style.display = 'flex';
    searchIcon.style.display = 'none';
    navLogo.style.display = 'none';
});

// Hamburger 

const hamburger = document.getElementById('hamburger');
const leftBox = document.getElementById('left');
const sec = document.getElementById('sec');
const cancelBtn = document.getElementById('cancelBtn');

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

hamburger.addEventListener('click', () => {
     leftBox.classList.toggle('left-active');
     overlay.classList.toggle('show');
     sec.style.display = 'flex';
});

overlay.addEventListener('click', () => {
     leftBox.classList.remove('left-active');
     overlay.classList.remove('show');
});

cancelBtn.addEventListener('click', () => {
leftBox.classList.remove('left-active');
     overlay.classList.remove('show');
});