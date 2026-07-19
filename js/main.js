// Renders the data-driven sections (journey, projects, skills) and wires up
// the small bits of interactivity: mobile nav toggle, smooth scroll, and
// active-link highlighting while scrolling.

const ICONS = {
  grad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1 2.5 3 6 3s6-2 6-3v-5"/><path d="M22 9v6"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="5" width="3" height="13"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6"/><path d="M16 6l6 6-6 6"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-3 3-3-3c-1-1-2-3-2-5 0-4 2-8 5-10z"/><circle cx="12" cy="9" r="1.5"/><path d="M7 16l-3 5 5-3"/><path d="M17 16l3 5-5-3"/></svg>',
  angular: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 3-1.5 12L12 22l-7.5-5L3 5z"/><path d="M7.5 15h9"/><path d="M12 6l4 9M12 6L8 15"/></svg>',
  robot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 8V4"/><circle cx="12" cy="3" r="1"/><circle cx="9" cy="14" r="1.1" fill="currentColor"/><circle cx="15" cy="14" r="1.1" fill="currentColor"/><path d="M9 18h6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg>',
  monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8"/><path d="M12 16v4"/></svg>',
  server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><circle cx="7" cy="7" r=".6" fill="currentColor" stroke="none"/><circle cx="7" cy="17" r=".6" fill="currentColor" stroke="none"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-3-3Z"/></svg>',
  pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.5 3h2l2.7 12.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6"/></svg>',
  "check-circle": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.3 2.3 4.7-5"/></svg>',
};

function renderJourney() {
  const list = document.getElementById("journeyList");
  list.innerHTML = JOURNEY.map(
    (item) => `
    <li class="timeline-item">
      <span class="timeline-icon">${ICONS[item.icon] || ""}</span>
      <span class="timeline-date">${item.date}</span>
      <div class="timeline-body">
        <p class="timeline-title">${item.title}</p>
        <p class="timeline-org">${item.org}</p>
      </div>
      <div class="timeline-text">
        <p>${item.text}</p>
        ${item.badge ? `<span class="timeline-badge">&#10022; ${item.badge}</span>` : ""}
      </div>
    </li>`
  ).join("");
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = PROJECTS.map(
    (p) => `
    <article class="project-card">
      <div class="project-thumb">
        ${
          p.image
            ? `<img class="project-shot" src="${p.image}" alt="${p.title} screenshot" loading="lazy" />`
            : `<span class="project-icon">${ICONS[p.icon] || ""}</span>`
        }
      </div>
      <h3>${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">
        ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
      <a class="project-link" href="${p.link}" target="_blank" rel="noopener">
        ${p.link.replace("https://", "")}
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>
      </a>
    </article>`
  ).join("");
}

function renderCollaborations() {
  const grid = document.getElementById("collabGrid");
  grid.innerHTML = COLLABORATIONS.map(
    (c) => `
    <article class="project-card">
      <div class="project-thumb">
        ${
          c.image
            ? `<img class="project-shot" src="${c.image}" alt="${c.title} screenshot" loading="lazy" />`
            : `<img class="collab-logo-img" src="${c.logo}" alt="${c.title} logo" loading="lazy" />`
        }
      </div>
      <h3>${c.title}</h3>
      <p class="project-desc">${c.description}</p>
      <div class="project-tags">
        ${c.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
      <a class="project-link" href="${c.link}" target="_blank" rel="noopener">
        ${c.link.replace("https://", "")}
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>
      </a>
    </article>`
  ).join("");
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILL_GROUPS.map(
    (group) => `
    <div class="skill-group">
      <div class="skill-group-header">
        ${ICONS[group.icon] || ""}
        <span>${group.title}</span>
      </div>
      <div class="skill-group-items">
        ${group.skills
          .map((s) => `<span class="skill-tile">${s.name}</span>`)
          .join("")}
      </div>
    </div>`
  ).join("");
}

function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initActiveSection() {
  const ids = [...new Set(
    Array.from(document.querySelectorAll(".nav-link[data-nav]")).map((l) => l.dataset.nav)
  )];

  function setActive(id) {
    document.querySelectorAll(".nav-link[data-nav]").forEach((link) => {
      link.classList.toggle("active", link.dataset.nav === id);
    });
  }

  function onScroll() {
    const doc = document.documentElement;
    const atBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 2;

    if (atBottom) {
      setActive(ids[ids.length - 1]);
      return;
    }

    const triggerLine = window.scrollY + window.innerHeight * 0.35;
    let current = ids[0];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= triggerLine) current = id;
    }
    setActive(current);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
}

document.addEventListener("DOMContentLoaded", () => {
  renderJourney();
  renderProjects();
  renderCollaborations();
  renderSkills();
  initNavToggle();
  initActiveSection();
});
