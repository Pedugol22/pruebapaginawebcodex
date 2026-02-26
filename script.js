const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggleButton && navLinks) {
  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}
