/** Controller: light / dark theme toggle. */
import { getLang, getTheme, setTheme } from '../models/preferences.js';
import { paintThemeToggle } from '../views/themeView.js';
import { $$ } from '../utils/dom.js';

export function initTheme() {
  const lang = getLang();
  $$('.theme-toggle').forEach(btn => btn.addEventListener('click', () => {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
    paintThemeToggle(getTheme(), lang);
  }));
  paintThemeToggle(getTheme(), lang);
}
