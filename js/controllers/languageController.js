/** Controller: translate the page and handle the language dropdown and switch buttons. */
import { getLang, setLang } from '../models/preferences.js';
import { AR, AR_HTML } from '../models/translations.js';
import { translatePage, paintLanguageControls } from '../views/translationView.js';
import { $$ } from '../utils/dom.js';

export function initLanguage() {
  const lang = getLang();
  if (lang === 'ar') translatePage(AR, AR_HTML);
  paintLanguageControls(lang);

  $$('[data-lang]').forEach(el => el.addEventListener('click', e => {
    e.preventDefault();
    if (el.dataset.lang !== lang) setLang(el.dataset.lang);
  }));
  $$('[data-lang-switch]').forEach(el => el.addEventListener('click', () => setLang(lang === 'ar' ? 'en' : 'ar')));
}
