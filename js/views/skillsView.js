/** View: skill cards and their pagination dots. */

const pad = n => String(n).padStart(2, '0');

function cardHtml(skill, i) {
  const tags = skill.tags
    .map(([label, icon, color]) => `<span class="skill-tag"><i class="bi ${icon}" style="color:${color}"></i>${label}</span>`)
    .join('');
  return `<article class="skill-card">
      <span class="skill-ghost">${pad(i + 1)}</span><span class="skill-num">${pad(i + 1)}</span>
      <div class="skill-icon" style="background:${skill.tint};color:${skill.color}"><i class="bi ${skill.icon}"></i></div>
      <h3>${skill.title}</h3>
      <div class="skill-tags">${tags}</div>
    </article>`;
}

/** Render the cards and dots; returns their elements for the controller. */
export function renderSkills(track, dots, skills) {
  track.innerHTML = skills.map(cardHtml).join('');
  dots.innerHTML = skills.map((_, i) => `<button aria-label="Go to card ${i + 1}"></button>`).join('');
  return { cards: [...track.children], dotBtns: [...dots.children] };
}

export function showActiveSkill(cards, dotBtns, index) {
  cards.forEach((c, i) => c.classList.toggle('is-active', i === index));
  dotBtns.forEach((d, i) => d.classList.toggle('active', i === index));
}
