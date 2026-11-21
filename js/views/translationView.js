/** View: apply Arabic translations to the page and label the language controls. */
import { $$ } from '../utils/dom.js';

const normalize = t => t.replace(/\s+/g, ' ').trim();
const SKIP = 'script, style, .ticker, .hero-name, [data-i18n]';

/** Replace English text with Arabic. English stays as-is when a string has no translation. */
export function translatePage(dict, htmlDict) {
  document.title = document.documentElement.dataset.titleAr || 'tajoj-plt · Altgani Motasim';

  $$('[data-i18n]').forEach(el => {
    const html = htmlDict[el.dataset.i18n];
    if (html) el.innerHTML = html;
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    const key = normalize(node.textContent);
    if (!key || !dict[key] || node.parentElement.closest(SKIP)) return;
    const lead = /^\s/.test(node.textContent) ? ' ' : '';
    const trail = /\s$/.test(node.textContent) ? ' ' : '';
    node.textContent = lead + dict[key] + trail;
  });

  $$('[aria-label]').forEach(el => {
    const t = dict[el.getAttribute('aria-label')];
    if (t) el.setAttribute('aria-label', t);
  });
}

/** Show the current language in the header dropdown and the menu's switch button. */
export function paintLanguageControls(lang) {
  const ar = lang === 'ar';
  $$('.lang-flag').forEach(el => { el.textContent = ar ? '🇸🇩' : '🇬🇧'; });
  $$('.lang-name').forEach(el => { el.textContent = ar ? 'العربية' : 'English'; });
  $$('.lang-short').forEach(el => { el.textContent = ar ? 'EN' : 'ع'; });
  $$('.lang-other').forEach(el => { el.textContent = ar ? 'English' : 'العربية'; });
  $$('[data-lang]').forEach(el => el.classList.toggle('active', el.dataset.lang === lang));
}
