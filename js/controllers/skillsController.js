/** Controller: the "Tools & technologies" carousel (dots, mouse drag, auto-advance). */
import { SKILLS } from '../models/skills.js';
import { renderSkills, showActiveSkill } from '../views/skillsView.js';
import { byId } from '../utils/dom.js';
import { reduceMotion } from '../utils/env.js';

/** Render the cards. Call before translation so card titles get translated too. */
export function renderSkillsSection() {
  const track = byId('skillsTrack');
  const dots = byId('skillsDots');
  if (!track || !dots) return null;
  return { track, ...renderSkills(track, dots, SKILLS) };
}

export function initSkillsCarousel(section) {
  if (!section) return;
  const { track, cards, dotBtns } = section;

  const activeIndex = () => cards.findIndex(c => c.classList.contains('is-active'));
  const scrollToCard = i => {
    const c = cards[i];
    track.scrollTo({ left: c.offsetLeft - (track.clientWidth - c.offsetWidth) / 2, behavior: 'smooth' });
  };
  const updateActive = () => {
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bestDist = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    showActiveSkill(cards, dotBtns, best);
  };

  dotBtns.forEach((d, i) => d.addEventListener('click', () => scrollToCard(i)));
  track.addEventListener('scroll', () => requestAnimationFrame(updateActive), { passive: true });
  window.addEventListener('resize', updateActive);
  updateActive();

  // Drag to scroll with a mouse; snap to the nearest card on release
  let down = false, startX = 0, startLeft = 0, moved = false;
  track.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse') return;
    down = true; moved = false; startX = e.clientX; startLeft = track.scrollLeft;
  });
  window.addEventListener('pointermove', e => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 4) { moved = true; track.classList.add('dragging'); }
    track.scrollLeft = startLeft - dx;
  });
  window.addEventListener('pointerup', () => {
    if (!down) return;
    down = false;
    track.classList.remove('dragging');
    if (moved) { updateActive(); scrollToCard(activeIndex()); }
  });

  // Auto-advance every 3.5s while visible, until the visitor interacts
  if (reduceMotion) return;
  let paused = false, hovering = false, visible = false;
  const pause = () => { paused = true; };
  ['pointerdown', 'wheel', 'touchstart'].forEach(ev => track.addEventListener(ev, pause, { passive: true }));
  dotBtns.forEach(d => d.addEventListener('click', pause));
  track.addEventListener('pointerenter', () => { hovering = true; });
  track.addEventListener('pointerleave', () => { hovering = false; });
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(track);
  setInterval(() => {
    if (paused || hovering || !visible) return;
    scrollToCard((activeIndex() + 1) % cards.length);
  }, 3500);
}
