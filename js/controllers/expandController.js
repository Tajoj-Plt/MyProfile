/** Controller: "Show more / Show less" buttons for the article list and the journey panel. */
import { getLang } from '../models/preferences.js';
import { toggleExtras } from '../views/expandView.js';
import { $$, byId } from '../utils/dom.js';

function bindShowMore(button, container, extrasSelector) {
  if (!button || !container) return;
  const label = button.querySelector('.more-label');
  const [more, less] = getLang() === 'ar' ? ['عرض المزيد', 'عرض أقل'] : ['Show more', 'Show less'];
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    toggleExtras(container, 'show-all', $$(extrasSelector, container), open);
    button.setAttribute('aria-expanded', open);
    label.textContent = open ? less : more;
  });
}

export function initShowMore() {
  bindShowMore(byId('articlesMore'), byId('articleList'), '.is-extra');
  const xpMore = byId('xpMore');
  bindShowMore(xpMore, xpMore && xpMore.closest('.dark-panel'), '.xp-extra');
}
