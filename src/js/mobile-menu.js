const mobMenu = document.querySelector('.mob-menu')
const mobMenuOpen = document.querySelector('.burger-button');
const mobMenuExt = document.querySelector('.mob-menu-btn');
const mobMenuLinks = document.querySelectorAll('.mob-menu-item-link');

function closeMobileMenu() {
  mobMenu.classList.remove('is-open-mob-menu')
}
export default function setupMobMenu() {
    mobMenuOpen.addEventListener('click', () => {
        mobMenu.style.transition = 'opacity 0.4s, visibility 0.4s';
        mobMenu.classList.add('is-open-mob-menu');
    });
    mobMenuExt.addEventListener('click', () => {
        mobMenu.classList.remove('is-open-mob-menu');
    });
    mobMenuLinks.forEach(link => {
    link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection && targetSection.offsetParent !== null) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth', 
      });
      closeMobileMenu();
    }
  });
});
}
