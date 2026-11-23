/** Controller: the home page article list and the article reading page. */
import { ARTICLES, VISIBLE_ARTICLES, VISIBLE_ARTICLES_MOBILE, findArticle, otherArticles } from '../models/articles.js';
import { getLang } from '../models/preferences.js';
import { renderArticleList, renderArticle, renderArticleNotFound, articleRowHtml } from '../views/articlesView.js';
import { byId } from '../utils/dom.js';

/** Render list and reading page content. Call before the reveal animations start. */
export function renderArticles() {
  const lang = getLang();

  const list = byId('articleList');
  if (list) {
    renderArticleList(list, ARTICLES, lang, VISIBLE_ARTICLES, VISIBLE_ARTICLES_MOBILE);
    const more = byId('articlesMore');
    if (more) {
      // Nothing to reveal on desktop: keep the button for phones only (or drop it entirely)
      if (ARTICLES.length <= VISIBLE_ARTICLES_MOBILE) more.hidden = true;
      else if (ARTICLES.length <= VISIBLE_ARTICLES) more.classList.add('d-md-none');
    }
  }

  const page = byId('articlePage');
  if (page) {
    const slug = new URLSearchParams(location.search).get('a');
    const article = findArticle(slug);
    if (article) renderArticle(page, article, lang);
    else renderArticleNotFound(page, lang);
    const others = byId('moreArticles');
    if (others) others.innerHTML = otherArticles(slug).map((a, i) => articleRowHtml(a, i, lang)).join('');
  }
}
