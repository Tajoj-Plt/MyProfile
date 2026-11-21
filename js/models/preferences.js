/**
 * Model: the visitor's language and theme.
 * The inline script in each page's <head> applies them before first paint;
 * this model reads the current values and saves changes.
 */
const root = document.documentElement;

function save(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* storage blocked: the change still applies to this visit */ }
}

export const getLang = () => (root.lang === 'ar' ? 'ar' : 'en');

/** Save the language and reload the page in it (?lang=ar keeps shared links in Arabic). */
export function setLang(next) {
  save('lang', next);
  const url = new URL(location.href);
  url.searchParams.delete('lang');
  if (next === 'ar') url.searchParams.set('lang', 'ar');
  location.href = url.toString();
}

export const getTheme = () => (root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

export function setTheme(next) {
  root.setAttribute('data-theme', next);
  root.setAttribute('data-bs-theme', next);
  save('theme', next);
}
