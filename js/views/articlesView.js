/** View: article rows (home page and "More articles") and the reading page. */
import { articlePhoto, articleUrl } from '../models/articles.js';

/** One list row. Rows at index >= extraFrom start hidden behind "Show more". */
export function articleRowHtml(a, i, lang, { extraFrom = null, stagger = 3 } = {}) {
  const extra = extraFrom != null && i >= extraFrom ? ' is-extra' : '';
  return `<a href="${articleUrl(a)}" class="article-row reveal${extra}" style="--d:${((i % stagger) * 0.06).toFixed(2)}s">
      <span class="article-thumb" style="--g1:${a.g1};--g2:${a.g2}"><img src="${articlePhoto(a, 240, 240)}" alt="" loading="lazy" decoding="async"></span>
      <span class="article-info">
        <span class="article-title">${a.title[lang]}</span>
        <span class="article-excerpt">${a.excerpt[lang]}</span>
        <span class="article-meta"><span>${a.date[lang]}</span><b>${a.cat[lang]}</b></span>
      </span>
      <span class="article-go"><i class="bi bi-arrow-up-right"></i></span>
    </a>`;
}

export function renderArticleList(container, articles, lang, visible) {
  container.innerHTML = articles.map((a, i) => articleRowHtml(a, i, lang, { extraFrom: visible, stagger: visible })).join('');
}

const part = (page, name) => page.querySelector(`[data-article="${name}"]`);

export function renderArticle(page, a, lang) {
  const mins = lang === 'ar' ? `${a.mins} دقائق قراءة` : `${a.mins} min read`;
  document.title = `${a.title[lang]} · tajoj-plt`;
  document.documentElement.dataset.titleAr = `${a.title.ar} · tajoj-plt`;
  part(page, 'cat').textContent = a.cat[lang];
  part(page, 'title').textContent = a.title[lang];
  part(page, 'lead').textContent = a.excerpt[lang];
  part(page, 'meta').innerHTML = `<span>${a.date[lang]}</span><span>${mins}</span>`;
  const cover = part(page, 'cover');
  cover.style.setProperty('--g1', a.g1);
  cover.style.setProperty('--g2', a.g2);
  cover.innerHTML = `<img src="${articlePhoto(a, 1400, 700)}" alt="" decoding="async">`;
  part(page, 'body').innerHTML = a.body[lang];
}

export function renderArticleNotFound(page, lang) {
  part(page, 'title').textContent = lang === 'ar' ? 'المقال غير موجود' : 'Article not found';
  part(page, 'body').innerHTML = `<p>${lang === 'ar' ? 'ربما نُقل هذا المقال. تصفح المقالات الأخرى أدناه.' : 'This article may have moved. Browse the other articles below.'}</p>`;
  part(page, 'meta').remove();
  part(page, 'cover').remove();
}
