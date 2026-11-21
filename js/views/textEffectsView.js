/** View: wrap headings word by word so CSS can slide each word up out of a mask. */
import { $$ } from '../utils/dom.js';

/** Hero name: each part ("ALTGANI", "MOTASIM") slides up in turn once the page loads. */
export function splitHeroName(el) {
  $$(':scope > span', el).forEach((part, i) => {
    part.innerHTML = `<span class="hn" style="--i:${i}">${part.textContent}</span>`;
  });
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('in')));
}

/** Section titles: each word slides up when the title scrolls into view (see the reveal controller). */
export function splitTitleWords(el) {
  let wi = 0;
  [...el.childNodes].forEach(node => {
    if (node.nodeType !== Node.TEXT_NODE) return;
    const frag = document.createDocumentFragment();
    node.textContent.split(/(\s+)/).forEach(chunk => {
      if (!chunk) return;
      if (/^\s+$/.test(chunk)) { frag.append(' '); return; }
      const w = document.createElement('span');
      w.className = 'w';
      w.innerHTML = `<span style="--i:${wi++}">${chunk}</span>`;
      frag.append(w);
    });
    node.replaceWith(frag);
  });
  el.classList.add('split');
}
