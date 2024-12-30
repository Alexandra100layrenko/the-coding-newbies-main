export function blackFooter() {
  const toggleSwitch = document.getElementById('toggleSwitch');
  const navEl = document.querySelectorAll('.footer-socials-item-link');
  const navLogoEl = document.querySelector('.footer-logo');
  const copyright = document.querySelector('.subscribe-title');

  toggleSwitch.addEventListener('click', function () {
    if (this.checked) {
      navEl.forEach(link => {
        link.classList.add('black-theme-link-footer');
      });
      navLogoEl.classList.add('black-theme-logo-footer');
      copyright.classList.add('.black-theme-copyright');
    } else {
      copyright.classList.remove('.black-theme-copyright');
      navLogoEl.classList.remove('black-theme-logo-footer');
      navEl.forEach(link => {
        link.classList.remove('black-theme-link-footer');
      });
    }
  });
}
