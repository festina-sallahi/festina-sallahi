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
      en: "Studied Business Information Systems with a focus on the intersection of business processes, systems analysis, and software development.",
      de: "Studium der Wirtschaftsinformatik mit Fokus auf die Verbindung von Geschäftsprozessen, Systemanalyse und Softwareentwicklung.",
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
      en:"Improved CRM data quality and performed structured functional and content testing to support product relaunches.",
      de:"Verbesserte die CRM-Datenqualität und führte strukturierte Funktions- und Content-Tests zur Unterstützung Produkt-Relaunches durch.",
    },
    badge: null,
  },
  {
    date: "05/2023 – 10/2024",
    icon: "doc",
    title: { en: "Working Student – Content Management", de: "Werkstudentin – Content-Management" },
    org: "Experience One AG · Mercedes-Benz Vans VMK",
    text: {
      en: "Managed and structured digital content, vehicle equipment data, and media assets for the Mercedes-Benz Vans website.",
      de: "Verwaltete und strukturierte digitale Inhalte, Fahrzeugausstattungsdaten sowie Medieninhalte für die Mercedes-Benz Vans Website.",
    },
    badge: null,
  },
  {
    date: "03/2025 – 04/2026",
    icon: "box",
    title: { en: "Working Student – Digital Products", de: "Werkstudentin – Digitale Produkte" },
    org: "Walhalla Mediengruppe",
    text: {
      en: "Supported a Shopware 6 migration and rollout, created and maintained digital ebooks, and ensured data quality across publications, reporting, and CRM processes.",
      de: "Unterstützte die Shopware-6-Migration und den Rollout, erstellte und pflegte digitale E-Books und stellte die Datenqualität in Publikationen, Reportings und CRM-Prozessen sicher.",
    },
    badge: null,
  },
  {
    date: "2024 – 2026",
    icon: "code",
    title: { en: "Built 3 Independent Technical Projects", de: "3 eigenständige technische Projekte umgesetzt" },
    org: { en: "Developer tools & test automation", de: "Entwicklertools & Testautomatisierung" },
    text: {
      en:"Independently designed, built, and tested three technical tools end-to-end, transforming self-directed learning into practical software solutions.",
      de:"Entwickelte eigenständig drei technische Tools von der Konzeption bis zum Test und setzte selbstgesteuertes Lernen in praxisnahe Softwarelösungen um.",
    },
    badge: null,
  },
  {
    date: "02/2026",
    icon: "rocket",
    title: { en: "B.Sc. Business Information Systems Completed", de: "B.Sc. Wirtschaftsinformatik abgeschlossen" },
    org: {
      en: "Seeking Software Engineering / QA Automation opportunities",
      de: "Auf der Suche nach Positionen im Bereich Software Engineering und QA-Automatisierung",
    },
    text: {
      en:"Completed my degree in February 2026 and am ready to contribute my software engineering and testing skills to innovative engineering teams.",
      de:"Ich habe mein Studium im Februar 2026 abgeschlossen und möchte meine Kenntnisse in Softwareentwicklung und Testing in innovativen Engineering-Teams einbringen.",
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
      en:"Angular dashboard for reviewing pull requests with PR lists, findings details, activity feeds, and integration views. Built with a flexible data-provider architecture, 28 unit tests, and a responsive layout.",
      de:"Angular-Dashboard zur Überprüfung von Pull Requests mit PR-Listen, Findings-Details, Aktivitäts-Feed und Integrationsansichten. Entwickelt mit einer flexiblen Datenanbieter-Architektur, 28 Unit-Tests und einem responsiven Layout.",
    },
    tags: ["Angular", "TypeScript", "RxJS"],
    link: "https://github.com/festina-sallahi/review-dashboard",
  },
  {
    title: "AI Code Reviewer",
    icon: "robot",
    image: "assets/screenshots/ai-code-reviewer.png",
    description: {
      en:"CLI tool that analyzes Git diffs using the Claude API and generates structured code review findings (file, line, severity). Built with a modular model-provider architecture and validated with automated tests.",
      de:"CLI-Tool zur Analyse von Git-Diffs mit der Claude API, das strukturierte Code-Review-Ergebnisse (Datei, Zeile, Schweregrad) erzeugt. Entwickelt mit einer modularen Modellanbieter-Architektur und durch automatisierte Tests validiert.",
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
      en:"End-to-end Playwright test suite using the Page Object Model, covering login, cart, and checkout flows across 12 scenarios. Runs cross-browser (Chromium, Firefox, WebKit) through GitHub Actions on every push.",
      de:"End-to-End-Playwright-Testsuite nach dem Page-Object-Model, die Login-, Warenkorb- und Checkout-Prozesse in 12 Szenarien abdeckt. Führt browserübergreifende Tests (Chromium, Firefox, WebKit) über GitHub Actions bei jedem Push aus.",
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
      en:"Contributed to the Angular frontend and NestJS backend of a genealogy platform, while leading the UI/UX design end-to-end — from layouts to the component system.",
      de:"Entwickelte am Angular-Frontend und NestJS-Backend einer Genealogie-Plattform mit und verantwortete das UI/UX-Design von der Konzeption bis zum Komponentensystem.",
    },
    tags: ["Angular", "NestJS", "Node.js"],
    link: "https://myfamhistory.com",
  },
   {
    title: "Clockin – Time Tracking System",
    logo: "assets/logos/timetrackingsystem-icon.png",
    image: "assets/screenshots/timetrackingsystem.png",
    live: false,
    description: {
      en: "University team project (6 members): a Flask web application for digital time tracking, developed from a formal requirements specification with role-based access control. Implemented the navigation bar, home page, and detailed time-entry views by customer and employee, while contributing to UI/UX decisions.",
      de: "Teamprojekt (6 Personen) an der Universität Passau: eine Flask-Webanwendung zur digitalen Zeiterfassung, entwickelt auf Basis eines Pflichtenhefts mit rollenbasiertem Rechtekonzept. Implementierte die Menüleiste, Startseite und detaillierte Zeiterfassungsansichtennach Kunde und Mitarbeiter und wirkte an UI/UX-Entscheidungen mit.",
    },
    tags: ["Python", "Flask", "UI/UX", "Requirements Engineering"],
    link: "https://github.com/Wirtschaftsinformatik-Passau/softwareprojekt-gruppe-6-1",
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
      { name: "Playwright" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    title: { en: "Backend & APIs", de: "Backend & APIs" },
    icon: "server",
    skills: [{ name: "Node.js" }, { name: "REST APIs" }, { name: "NestJS" },{ name: "SAP ABAP" }],

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
