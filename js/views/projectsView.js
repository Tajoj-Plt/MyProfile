/** View: project blocks on the Work page, laid out like the home page "Selected work" section. */

const LABELS = {
  en: { built: 'Built with', more: 'Read more about', visit: 'Visit', contact: 'Ask about it', web: 'Web version', mobile: 'Mobile version' },
  ar: { built: 'بُني باستخدام', more: 'اقرأ المزيد عن', visit: 'زيارة', contact: 'اسأل عنه', web: 'نسخة الويب', mobile: 'نسخة الجوال' },
};

const phoneHtml = (shot, cls) =>
  `<div class="phone ${cls}"><div class="phone-screen shot light"><img src="${shot.src}" alt="${shot.alt}" loading="lazy" decoding="async"></div></div>`;

/** Two overlapping phones (like the home page), or the web and mobile versions shown separately. */
function mediaHtml(p, t) {
  if (p.web) {
    return `<div class="project-gallery">
              <div class="gallery-part reveal">
                <span class="gallery-label"><i class="bi bi-laptop"></i>${t.web}</span>
                <div class="browser gallery-browser"><div class="browser-bar"><i></i><i></i><i></i></div><img src="${p.web.src}" alt="${p.web.alt}" loading="lazy" decoding="async"></div>
              </div>
              <div class="gallery-part reveal" style="--d:.1s">
                <span class="gallery-label"><i class="bi bi-phone"></i>${t.mobile}</span>
                <div class="gallery-phones">${p.screens.map(s => phoneHtml(s, 'phone-sm')).join('')}</div>
              </div>
            </div>`;
  }
  const [front, back] = p.screens;
  return `<div class="phones reveal" data-front="a">
              ${phoneHtml(front, 'phone-a')}
              ${back ? phoneHtml(back, 'phone-b') : ''}
            </div>`;
}

/** The main button: the project's own page on this site, or its public website. */
function linkHtml(p, name, t) {
  if (p.page) return `<a href="${p.page}" class="btn-ink btn-lg-x">${t.more} ${name} <i class="bi bi-arrow-up-right"></i></a>`;
  if (p.site) return `<a href="${p.site.href}" class="btn-ink btn-lg-x" target="_blank" rel="noopener">${t.visit} ${p.site.label} <i class="bi bi-arrow-up-right"></i></a>`;
  return '';
}

/** One project. Every other project puts the media on the opposite side. */
export function projectHtml(p, i, lang) {
  const t = LABELS[lang];
  const num = String(i + 1).padStart(2, '0');
  const flip = i % 2 === 1;
  const name = p.name ? p.name[lang] : p.title[lang].split(' — ')[0];
  const status = p.status ? `<span class="status is-progress">${p.status[lang]}</span>` : '';
  const tagsLabel = p.tagsLabel ? p.tagsLabel[lang] : t.built;
  return `<section class="section project-block" id="${p.slug}">
      <div class="container-xl tw-relative">
        <div class="project-meta reveal"><b>${num}</b><span>${p.kind[lang]}</span>${status}</div>
        <div class="row g-5 align-items-center work-row">
          <div class="col-lg-6 work-copy${flip ? ' order-lg-2' : ''}">
            <h2 class="section-title reveal">${p.title[lang]}</h2>
            <p class="section-lead tw-mt-5 reveal" style="--d:.1s">${p.lead[lang]}</p>
            <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-3 tw-gap-3 tw-mt-6 reveal" style="--d:.2s">
              ${p.features[lang].map(f => `<div class="feat-chip">${f}</div>`).join('')}
            </div>
            <div class="eyebrow tw-mt-8 tw-mb-3 reveal" style="--d:.25s">${tagsLabel}</div>
            <div class="tw-flex tw-flex-wrap tw-gap-2 reveal" style="--d:.25s">
              ${(Array.isArray(p.tags) ? p.tags : p.tags[lang]).map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="tw-flex tw-flex-wrap tw-gap-3 tw-mt-8 reveal" style="--d:.3s">
              ${linkHtml(p, name, t)}
              <a href="index.html#contact" class="btn-ghost-x btn-lg-x">${t.contact}</a>
            </div>
          </div>
          <div class="col-lg-6 work-media${flip ? ' order-lg-1' : ''}">
            ${mediaHtml(p, t)}
          </div>
        </div>
      </div>
    </section>`;
}

export function renderProjects(container, projects, lang) {
  container.innerHTML = projects.map((p, i) => projectHtml(p, i, lang)).join('');
}
