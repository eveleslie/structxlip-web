// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Copy BibTeX
function copyBib() {
  const text = document.getElementById('bib-text').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-btn');
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = 'Copy', 2000);
  });
}

// Nav transparency on scroll
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const opacity = Math.max(0.5, 1 - window.scrollY / 200);
  nav.style.background = `rgba(245, 244, 249, ${opacity})`;
});