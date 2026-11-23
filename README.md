# tajoj-plt

Personal site of Altgani Motasim, Senior Data Engineer. Static HTML, CSS and JavaScript (Bootstrap 5 and Tailwind from CDNs), in English and Arabic with light and dark themes. No build step.

## Run locally

The JavaScript uses ES modules, so serve the folder over HTTP rather than opening the files directly:

```bash
python3 -m http.server 5173
```

Then open http://localhost:5173.

## Structure (MVC)

```
index.html, work.html, atnii.html, article.html   page markup (English source text)
                      work.html lists projects; atnii.html is the Atnii Square case study
css/
  main.css            imports the partials below, in order
  base/ layout/ components/ sections/ pages/ motion/ themes/
js/
  app.js              entry point: starts the controllers in order
  models/             data and state
    skills.js           skill groups for the carousel
    articles.js         articles (English and Arabic) and lookups
    projects.js         projects listed on the Work page
    translations.js     Arabic for every English string on the pages
    preferences.js      the visitor's language and theme
  views/              build or change what's on the page
    skillsView.js, articlesView.js, projectsView.js, translationView.js,
    themeView.js, textEffectsView.js, expandView.js
  controllers/        respond to the visitor; connect models to views
    languageController.js, themeController.js, navigationController.js,
    skillsController.js, articlesController.js, projectsController.js, expandController.js,
    contactController.js, motionController.js
  utils/              dom.js (selectors), env.js (motion and pointer support)
assets/               photos, screenshots, certificates, logos
```

## Common edits

- **Add an article:** add an entry to `js/models/articles.js`. It appears on the home page and gets its own page at `article.html?a=<slug>`.
- **Add a project:** add an entry to `js/models/projects.js`. It appears on the Work page in the same layout as the home page Selected work section.
- **Change skills:** edit `js/models/skills.js`.
- **Change or add page text:** edit the HTML, then add the Arabic for the new English string in `js/models/translations.js`.
