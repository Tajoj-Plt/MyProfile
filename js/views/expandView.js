/** View: animate hidden list items opening (drop down) and closing (fold up). */
import { reduceMotion } from '../utils/env.js';

const EASE = 'cubic-bezier(.2,.7,.2,1)';
const closed = { height: '0px', paddingTop: '0px', paddingBottom: '0px', opacity: 0, transform: 'translateY(-10px)' };
const openFrame = (el, cs) => ({ height: el.offsetHeight + 'px', paddingTop: cs.paddingTop, paddingBottom: cs.paddingBottom, opacity: 1, transform: 'none' });

/**
 * Show or hide `extras` inside `container`. The CSS shows them while `openClass` is on
 * the container; this adds the motion on top.
 */
export function toggleExtras(container, openClass, extras, open) {
  if (reduceMotion) { container.classList.toggle(openClass, open); return; }

  if (open) {
    container.classList.add(openClass);
    extras.forEach((el, i) => {
      el.classList.add('in');
      const cs = getComputedStyle(el);
      el.style.overflow = 'hidden';
      el.animate([closed, openFrame(el, cs)], { duration: 480, delay: i * 80, easing: EASE, fill: 'backwards' })
        .finished.then(() => { el.style.overflow = ''; });
    });
    return;
  }

  const runs = [...extras].reverse().map((el, i) => {
    const cs = getComputedStyle(el);
    el.style.overflow = 'hidden';
    return el.animate([openFrame(el, cs), closed], { duration: 380, delay: i * 60, easing: EASE, fill: 'forwards' });
  });
  Promise.all(runs.map(a => a.finished)).then(() => {
    container.classList.remove(openClass);
    extras.forEach(el => { el.style.overflow = ''; });
    runs.forEach(a => a.cancel());
  });
}
