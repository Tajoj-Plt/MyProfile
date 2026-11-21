/** Controller: the home page article list and the article reading page. */
import { ARTICLES, VISIBLE_ARTICLES, findArticle, otherArticles } from '../models/articles.js';
import { getLang } from '../models/preferences.js';
import { renderArticleList, renderArticle, renderArticleNotFound, articleRowHtml } from '../views/articlesView.js';
import { byId } from '../utils/dom.js';

/** Render list and reading page content. Call before the reveal animations start. */
export function renderArticles() {
  const lang = getLang();

  const list = byId('articleList');
  if (list) {
    renderArticleList(list, ARTICLES, lang, VISIBLE_ARTICLES);
    const more = byId('articlesMore');
    if (more && ARTICLES.length <= VISIBLE_ARTICLES) more.hidden = true;
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
