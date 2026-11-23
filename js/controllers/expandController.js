/** Controller: "Show more / Show less" buttons for the article list and the journey panel. */
import { getLang } from '../models/preferences.js';
import { toggleExtras } from '../views/expandView.js';
import { $$, byId } from '../utils/dom.js';

/**
 * Some items are hidden only on phones, so animate just the ones hidden right now
 * (on open) and fold the same ones back up (on close).
 */
function bindShowMore(button, container, extrasSelector) {
  if (!button || !container) return;
  const label = button.querySelector('.more-label');
  const [more, less] = getLang() === 'ar' ? ['عرض المزيد', 'عرض أقل'] : ['Show more', 'Show less'];
  let revealed = [];
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    if (open) revealed = $$(extrasSelector, container).filter(el => getComputedStyle(el).display === 'none');
    toggleExtras(container, 'show-all', revealed, open);
    button.setAttribute('aria-expanded', open);
    label.textContent = open ? less : more;
  });
}

export function initShowMore() {
  bindShowMore(byId('articlesMore'), byId('articleList'), '.is-extra, .is-extra-sm');
  const xpMore = byId('xpMore');
  bindShowMore(xpMore, xpMore && xpMore.closest('.dark-panel'), '.xp-extra, .xp-extra-sm');
}
