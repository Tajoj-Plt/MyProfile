/** View: project blocks on the Work page, laid out like the home page "Selected work" section. */

const LABELS = {
  en: { built: 'Built with', more: 'Read more about', contact: 'Ask about it' },
  ar: { built: 'بُني باستخدام', more: 'اقرأ المزيد عن', contact: 'اسأل عنه' },
};

/** One project. Every other project puts the phones on the opposite side. */
export function projectHtml(p, i, lang) {
  const t = LABELS[lang];
  const num = String(i + 1).padStart(2, '0');
  const flip = i % 2 === 1;
  const name = p.title[lang].split(' — ')[0];
  const [front, back] = p.screens;
  return `<section class="section project-block" id="${p.slug}">
      <div class="container-xl tw-relative">
        <div class="project-meta reveal"><b>${num}</b><span>${p.kind[lang]}</span><span class="status is-progress">${p.status[lang]}</span></div>
        <div class="row g-5 align-items-center work-row">
          <div class="col-lg-6 work-copy${flip ? ' order-lg-2' : ''}">
            <h2 class="section-title reveal">${p.title[lang]}</h2>
            <p class="section-lead tw-mt-5 reveal" style="--d:.1s">${p.lead[lang]}</p>
            <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-3 tw-gap-3 tw-mt-6 reveal" style="--d:.2s">
              ${p.features[lang].map(f => `<div class="feat-chip">${f}</div>`).join('')}
            </div>
            <div class="eyebrow tw-mt-8 tw-mb-3 reveal" style="--d:.25s">${t.built}</div>
            <div class="tw-flex tw-flex-wrap tw-gap-2 reveal" style="--d:.25s">
              ${p.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="tw-flex tw-flex-wrap tw-gap-3 tw-mt-8 reveal" style="--d:.3s">
              <a href="${p.page}" class="btn-ink btn-lg-x">${t.more} ${name} <i class="bi bi-arrow-up-right"></i></a>
              <a href="index.html#contact" class="btn-ghost-x btn-lg-x">${t.contact}</a>
            </div>
          </div>
          <div class="col-lg-6 work-media${flip ? ' order-lg-1' : ''}">
            <div class="phones reveal" data-front="a">
              <div class="phone phone-a"><div class="phone-screen shot light"><img src="${front.src}" alt="${front.alt}" loading="lazy" decoding="async"></div></div>
              ${back ? `<div class="phone phone-b"><div class="phone-screen shot light"><img src="${back.src}" alt="${back.alt}" loading="lazy" decoding="async"></div></div>` : ''}
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

export function renderProjects(container, projects, lang) {
  container.innerHTML = projects.map((p, i) => projectHtml(p, i, lang)).join('');
}
