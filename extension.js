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

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('filterButton');
    const menu = document.getElementById('filterMenu');
    const selectedText = document.getElementById('selectedText');
     const filterLabel = document.getElementById('filter-label');
    const menuItems = menu.querySelectorAll('.menu-item');

    button.addEventListener('click', function(event) {
        event.stopPropagation();
        button.classList.toggle('open');
        menu.classList.toggle('open');
        filterLabel.classList.toggle('open');
    });
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const currentSelected = menu.querySelector('.menu-item.selected');
            if (currentSelected) {
                currentSelected.classList.remove('selected');
            }
            item.classList.add('selected');
            selectedText.textContent = item.textContent;
            button.classList.remove('open');
            menu.classList.remove('open');
        });
    });

    document.addEventListener('click', function(event) {
        if (!button.contains(event.target) && !menu.contains(event.target)) {
            button.classList.remove('open');
            menu.classList.remove('open');
        }
    });
});