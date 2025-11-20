const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelectorAll('.nav-links a');

if (toggle) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

links.forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const revealables = document.querySelectorAll('.product, .pillar, .quote');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealables.forEach((el) => observer.observe(el));
