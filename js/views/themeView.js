/** View: the theme toggle's icon (moon in light mode, sun in dark mode) and optional label. */
import { $$ } from '../utils/dom.js';

export function paintThemeToggle(theme, lang) {
  const dark = theme === 'dark';
  $$('.theme-toggle .bi').forEach(i => { i.className = dark ? 'bi bi-sun' : 'bi bi-moon-stars'; });
  const label = dark ? (lang === 'ar' ? 'الوضع الفاتح' : 'Light mode') : (lang === 'ar' ? 'الوضع الداكن' : 'Dark mode');
  $$('.theme-label').forEach(el => { el.textContent = label; });
}
