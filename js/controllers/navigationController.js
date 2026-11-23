/** Controller: header shadow, active nav link while scrolling, and the phone side menu. */
import { $$, byId } from '../utils/dom.js';
import { reduceMotion } from '../utils/env.js';

function initHeaderShadow() {
  const header = byId('siteHeader');
  if (!header) return;
  const update = () => header.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/** Highlight the nav link of the section in the middle of the screen (same-page links only). */
function initActiveLink() {
  const links = $$('#mainNav .nav-link-x');
  // Certificates sits inside Journey, so several targets can be in view at once:
  // highlight the last one in page order (the innermost).
  const inView = new Set();
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => (en.isIntersecting ? inView.add(en.target) : inView.delete(en.target)));
    const current = [...inView].sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1)).pop();
    if (current) links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current.id));
  }, { rootMargin: '-45% 0px -50% 0px' });
  links.forEach(l => {
    const href = l.getAttribute('href');
    const target = href.startsWith('#') ? document.querySelector(href) : null;
    if (target) spy.observe(target);
  });
}

/**
 * Side menu links close the menu, then go to their target.
 * (Bootstrap's data-bs-dismiss cancels navigation on <a>, so the links handle closing themselves.)
 */
function initSideMenu() {
  const menu = byId('mobileMenu');
  if (!menu) return;
  $$('[data-menu-link]', menu).forEach(link => {
    link.addEventListener('click', e => {
      const offcanvas = bootstrap.Offcanvas.getInstance(menu);
      if (!offcanvas || !menu.classList.contains('show')) return;
      e.preventDefault();
      menu.addEventListener('hidden.bs.offcanvas', () => goTo(link.getAttribute('href')), { once: true });
      offcanvas.hide();
    });
  });
}

function goTo(href) {
  const url = new URL(href, location.href);
  const samePage = href.startsWith('#') || url.pathname === location.pathname;
  const target = samePage && url.hash && byId(url.hash.slice(1));
  if (target) {
    history.pushState(null, '', url.hash);
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  } else {
    location.href = href;
  }
}

export function initNavigation() {
  initHeaderShadow();
  initActiveLink();
  initSideMenu();
}
