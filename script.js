const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.navigation');

if (navToggle && navigation) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('active');
  });
}
