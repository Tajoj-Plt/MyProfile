/**
 * App entry point. Every page loads this one module; each controller skips features
 * its page doesn't have.
 *
 *   models/       data and state (skills, articles, translations, preferences)
 *   views/        build or change what's on the page
 *   controllers/  respond to the visitor and connect models to views
 *
 * Order matters: render data-driven content, then translate, then split headings,
 * then start the animations that look for those elements.
 */
import { renderSkillsSection, initSkillsCarousel } from './controllers/skillsController.js';
import { renderArticles } from './controllers/articlesController.js';
import { initLanguage } from './controllers/languageController.js';
import { initTheme } from './controllers/themeController.js';
import { initNavigation } from './controllers/navigationController.js';
import { initShowMore } from './controllers/expandController.js';
import { initContact } from './controllers/contactController.js';
import { prepareText, initMotion } from './controllers/motionController.js';
import { byId } from './utils/dom.js';

// 1. Content built from models
const skills = renderSkillsSection();
renderArticles();

// 2. Language and theme
initLanguage();
initTheme();

// 3. Text effects, then everything that reacts to the visitor
prepareText();
initMotion();
initNavigation();
initSkillsCarousel(skills);
initShowMore();
initContact();

// Hero photo: show a placeholder if the image file is missing
const heroImg = byId('heroImg');
if (heroImg) {
  const markMissing = () => heroImg.closest('.portrait-wrap').classList.add('no-img');
  heroImg.addEventListener('error', markMissing);
  if (heroImg.complete && heroImg.naturalWidth === 0) markMissing();
}

const year = byId('year');
if (year) year.textContent = new Date().getFullYear();
