/** Controller: scroll and pointer effects (reveals, progress bar, parallax, tilt, magnetic buttons). */
import { splitHeroName, splitTitleWords } from '../views/textEffectsView.js';
import { $, $$, byId } from '../utils/dom.js';
import { reduceMotion, finePointer } from '../utils/env.js';

/** Split headings into words. Call after translation so the translated words are the ones animated. */
export function prepareText() {
  const heroName = $('.hero-name');
  if (heroName) splitHeroName(heroName);
  $$('.section-title, .hero-title').forEach(splitTitleWords);
  $$('.xp-row').forEach((row, i) => row.style.setProperty('--d', `${i * 0.08}s`));
}

/** Fade elements in as they scroll into view. Call after all content is rendered. */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      io.unobserve(en.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(el => io.observe(el));
}

/** Scroll progress bar and the slow drift of the big background words. */
function initScrollEffects() {
  const progress = byId('scrollProgress');
  const watermarks = $$('.watermark');
  let ticking = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.setProperty('--p', max > 0 ? scrollY / max : 0);
    if (!reduceMotion && innerWidth >= 768) {
      watermarks.forEach(w => {
        const r = w.parentElement.getBoundingClientRect();
        const offset = Math.max(-36, Math.min(36, (r.top + r.height / 2 - innerHeight / 2) * -0.06));
        w.style.setProperty('--py', `${offset.toFixed(1)}px`);
      });
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
}

/** 3D tilt toward the cursor, with a soft spotlight where the cursor is. */
function addTilt(el, maxDeg) {
  el.classList.add('tilt');
  el.addEventListener('pointermove', e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.classList.add('tilting');
    el.style.setProperty('--mx', `${x * 100}%`);
    el.style.setProperty('--my', `${y * 100}%`);
    el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * maxDeg}deg) rotateY(${(x - 0.5) * maxDeg}deg) translateY(-6px)`;
  });
  el.addEventListener('pointerleave', () => { el.classList.remove('tilting'); el.style.transform = ''; });
}

function initPointerEffects() {
  if (reduceMotion || !finePointer) return;

  $$('.svc-card').forEach(c => addTilt(c, 10));
  $$('.form-card').forEach(c => addTilt(c, 3));
  $$('.media-card').forEach(c => addTilt(c, 6));

  // The home page phone mockups turn slightly to follow the cursor
  const phones = byId('phones');
  if (phones) {
    const box = phones.parentElement;
    phones.style.transition = 'transform .4s var(--ease), opacity .9s var(--ease)';
    box.addEventListener('pointermove', e => {
      const r = box.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      phones.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 8}deg)`;
    });
    box.addEventListener('pointerleave', () => { phones.style.transform = ''; });
  }

  // Buttons lean toward the cursor
  $$('.btn-ink, .btn-whatsapp, .btn-ghost-x, .fab-main').forEach(btn => {
    btn.classList.add('magnetic');
    btn.addEventListener('pointermove', e => {
      const r = btn.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      btn.style.transform = `translate(${dx * 0.22}px, ${dy * 0.35}px)`;
    });
    btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
  });
}

export function initMotion() {
  initReveal();
  initScrollEffects();
  initPointerEffects();
}
