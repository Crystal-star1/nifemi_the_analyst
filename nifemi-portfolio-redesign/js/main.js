const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, {threshold:.08});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Keep the year current without editing every page.
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
