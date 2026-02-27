// ===== HERO SLIDER =====
let hCur = 0;
const hSlides = document.getElementById('heroSlides');
const hDots = document.querySelectorAll('.hdot');
const hTotal = 4;

function goSlide(n) {
  hCur = (n + hTotal) % hTotal;
  hSlides.style.transform = `translateX(-${hCur * 100}%)`;
  hDots.forEach((d,i) => d.classList.toggle('active', i === hCur));
}

document.getElementById('hPrev').onclick = () => goSlide(hCur - 1);
document.getElementById('hNext').onclick = () => goSlide(hCur + 1);
const hAuto = setInterval(() => goSlide(hCur + 1), 5000);

// ===== MEGA NAV SLIDER =====
let msCur = 0;
const msSlides = document.getElementById('megaSlides');
const msLinks = document.querySelectorAll('.mega-link');
const msPerPage = 3;
const msTotal = 8;

function goMsSlide(n) {
  msCur = Math.max(0, Math.min(n, msTotal - msPerPage));
  msSlides.style.transform = `translateX(-${msCur * (180 + 12)}px)`;
  msLinks.forEach((l,i) => l.classList.toggle('active', i === msCur));
}

document.getElementById('msNext').onclick = () => goMsSlide(msCur + 1);
document.getElementById('msPrev').onclick = () => goMsSlide(msCur - 1);

msLinks.forEach((link, i) => {
  link.addEventListener('mouseenter', () => goMsSlide(i));
});

// ===== FAQ =====
function toggleFAQ(el) {
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) el.classList.add('open');
}

// ===== ECOEASE IMAGE SWITCHER =====
function switchEco(thumb, src) {
  document.getElementById('ecoMainImg').src = src;
  document.querySelectorAll('.eco-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.feat-card, .dcard, .tech-card, .bcard, .pcard, .stat-item, .proj-card, .hl-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});