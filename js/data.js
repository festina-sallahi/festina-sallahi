// Content for the journey timeline, featured projects, and skills grid.
// Edit these arrays to update the site — no HTML editing required.
// `icon` keys reference the ICONS dictionary defined in main.js.
// Translatable fields are { en, de } objects; proper nouns (org names,
// tags, links, skill names) are left as plain strings in both languages.

const JOURNEY = [
  {
    date: "09/2020",
    icon: "grad",
    title: { en: "B.Sc. Business Information Systems", de: "B.Sc. Wirtschaftsinformatik" },
    org: "University of Passau",
    text: {
      en: "Built a strong foundation in business processes, systems analysis and software development.",
      de: "Legte ein solides Fundament in Geschäftsprozessen, Systemanalyse und Softwareentwicklung.",
    },
    badge: {
      en: "Software Engineering Project — Grade: 1.0 (highest possible)",
      de: "Software-Engineering-Projekt — Note: 1,0 (beste mögliche Note)",
    },
  },
  {
    date: "03/2022 – 02/2023",
    icon: "chart",
    title: { en: "Working Student – Data Management", de: "Werkstudentin – Datenmanagement" },
    org: "xeomed GmbH & Co. KG",
    text: {
      en: "Cleansed and quality-checked CRM data, and planned structured functional/content testing ahead of product launches.",
      de: "Bereinigte und prüfte CRM-Daten und plante strukturierte funktionale Tests sowie Content-Tests vor Produkteinführungen.",
    },
    badge: null,
  },
  {
    date: "05/2023 – 10/2024",
    icon: "doc",
    title: { en: "Working Student – Content Management", de: "Werkstudentin – Content-Management" },
    org: "Experience One AG · Mercedes-Benz Vans VMK",
    text: {
      en: "Managed and structured digital content, vehicle equipment data, and image assets for the Mercedes-Benz Vans website.",
      de: "Verwaltete und strukturierte digitale Inhalte, Fahrzeugausstattungsdaten und Bildmaterial für die Mercedes-Benz-Vans-Website.",
    },
    badge: null,
  },
  {
    date: "03/2025 – 04/2026",
    icon: "box",
    title: { en: "Working Student – Digital Products", de: "Werkstudentin – Digitale Produkte" },
    org: "Walhalla Mediengruppe",
    text: {
      en: "Supported a Shopware 6 migration and rollout, and maintained digital publications, reporting, and CRM data quality.",
      de: "Unterstützte eine Shopware-6-Migration und deren Rollout und pflegte digitale Publikationen, Reportings und die CRM-Datenqualität.",
    },
    badge: null,
  },
  {
    date: "2024 – 2026",
    icon: "code",
    title: { en: "Built 3 Independent Technical Projects", de: "3 eigenständige technische Projekte umgesetzt" },
    org: { en: "Developer tools & test automation", de: "Entwicklertools & Testautomatisierung" },
    text: {
      en: "Went beyond coursework to independently design, build, and test three tools end to end — turning self-directed learning into shipped software (see Projects below).",
      de: "Ging über das Studium hinaus und konzipierte, entwickelte und testete drei Tools eigenständig von Anfang bis Ende — aus selbstgesteuertem Lernen wurde einsatzbereite Software (siehe Projekte unten).",
    },
    badge: null,
  },
  {
    date: "04/2026",
    icon: "rocket",
    title: { en: "B.Sc. Completing – Ready for What's Next", de: "B.Sc.-Abschluss – bereit für den nächsten Schritt" },
    org: {
      en: "Applying for Software Engineering / QA Automation roles",
      de: "Bewirbt sich auf Software-Engineering- / QA-Automatisierungs-Rollen",
    },
    text: {
      en: "Completing my degree in 04/2026 and excited to contribute to impactful engineering teams.",
      de: "Schließe mein Studium im 04/2026 ab und freue mich darauf, wirkungsvolle Engineering-Teams zu unterstützen.",
    },
    badge: null,
  },
];

const PROJECTS = [
  {
    title: "Review Dashboard",
    icon: "angular",
    image: "assets/screenshots/review-dashboard.png",
    description: {
      en: "Angular dashboard for reviewing pull requests: PR list, findings detail, activity feed, and integrations screens — built around a swappable data-provider interface, with 28 unit tests and a mobile-responsive layout.",
      de: "Angular-Dashboard zur Überprüfung von Pull Requests: PR-Liste, Detailansicht der Findings, Aktivitäts-Feed und Integrationsseiten — aufgebaut um eine austauschbare Datenanbieter-Schnittstelle, mit 28 Unit-Tests und einem mobil-responsiven Layout.",
    },
    tags: ["Angular", "TypeScript", "RxJS"],
    link: "https://github.com/festina-sallahi/review-dashboard",
  },
  {
    title: "AI Code Reviewer",
    icon: "robot",
    image: "assets/screenshots/ai-code-reviewer.png",
    description: {
      en: "CLI tool that reviews a git diff using the Claude API and reports structured findings (file, line, severity) behind a swappable model-provider interface, validated against a demo branch with a planted bug. Backed by a 7-test Vitest suite.",
      de: "CLI-Tool, das einen Git-Diff mithilfe der Claude-API überprüft und strukturierte Findings (Datei, Zeile, Schweregrad) meldet — hinter einer austauschbaren Modellanbieter-Schnittstelle, validiert an einem Demo-Branch mit einem eingebauten Bug. Abgesichert durch eine Vitest-Suite mit 7 Tests.",
    },
    tags: ["Node.js", "TypeScript", "Claude API"],
    link: "https://github.com/festina-sallahi/ai-code-reviewer",
    ciBadge: "https://github.com/festina-sallahi/ai-code-reviewer/actions/workflows/test.yml/badge.svg",
    ciLink: "https://github.com/festina-sallahi/ai-code-reviewer/actions/workflows/test.yml",
  },
  {
    title: "QA Test Automation",
    icon: "check",
    image: "assets/screenshots/qa-automation-report.png",
    description: {
      en: "End-to-end Playwright suite using the Page Object Model, covering login, cart, and checkout across 12 scenarios, running cross-browser (Chromium, Firefox, WebKit) via GitHub Actions on every push.",
      de: "End-to-End-Playwright-Suite nach dem Page-Object-Model, die Login, Warenkorb und Checkout in 12 Szenarien abdeckt und bei jedem Push browserübergreifend (Chromium, Firefox, WebKit) über GitHub Actions läuft.",
    },
    tags: ["Playwright", "JavaScript", "CI/CD"],
    link: "https://github.com/festina-sallahi/qa-test-automation",
    ciBadge: "https://github.com/festina-sallahi/qa-test-automation/actions/workflows/playwright.yml/badge.svg",
    ciLink: "https://github.com/festina-sallahi/qa-test-automation/actions/workflows/playwright.yml",
  },
];

const COLLABORATIONS = [
  {
    title: "MyFamHistory",
    logo: "assets/logos/myfamhistory-icon.svg",
    image: "assets/screenshots/myfamhistory.png",
    live: true,
    description: {
      en: "Partnered on a genealogy platform's Angular front end and NestJS backend, and led the UI/UX design end-to-end — from layout to the component system.",
      de: "Arbeitete am Angular-Frontend und NestJS-Backend einer Genealogie-Plattform mit und verantwortete das UI/UX-Design von Anfang bis Ende — vom Layout bis zum Komponentensystem.",
    },
    tags: ["Angular", "NestJS", "Node.js"],
    link: "https://myfamhistory.com",
  },
];

const SKILL_GROUPS = [
  {
    title: { en: "Languages", de: "Sprachen" },
    icon: "code",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "Java" },
      { name: "XML" },
    ],
  },
  {
    title: { en: "Frontend & Testing", de: "Frontend & Testing" },
    icon: "monitor",
    skills: [
      { name: "Angular" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Playwright" },
    ],
  },
  {
    title: { en: "Backend & APIs", de: "Backend & APIs" },
    icon: "server",
    skills: [{ name: "REST APIs" }, { name: "Node.js" }, { name: "SAP ABAP" }],
  },
  {
    title: { en: "Tools & Platforms", de: "Tools & Plattformen" },
    icon: "wrench",
    skills: [
      { name: "Git / GitHub" },
      { name: "Jira" },
      { name: "Confluence" },
      { name: "Figma" },
    ],
  },
  {
    title: { en: "CMS & E-Commerce", de: "CMS & E-Commerce" },
    icon: "cart",
    skills: [{ name: "WordPress" }, { name: "Shopware 6" }, { name: "Sanity Studio" }],
  },
];
