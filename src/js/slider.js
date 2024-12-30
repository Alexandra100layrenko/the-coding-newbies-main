export function initializeSlider() {
  const toggleSwitch = document.getElementById('toggleSwitch');
  const navEl = document.querySelectorAll('.header-link');
  const navLogoEl = document.querySelector('.header-logo');

  toggleSwitch.addEventListener('click', function () {
    if (this.checked) {
      document.body.classList.add('dark-mode');
      navEl.forEach(link => {
        link.classList.add('black-theme-link');
      });
      navLogoEl.classList.add('black-theme-logo');
    } else {
      document.body.classList.remove('dark-mode');
      navLogoEl.classList.remove('black-theme-logo');
      navEl.forEach(link => {
        link.classList.remove('black-theme-link');
      });
    }
  });
}
