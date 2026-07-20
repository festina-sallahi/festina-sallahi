// Content for the journey timeline, featured projects, and skills grid.
// Edit these arrays to update the site — no HTML editing required.
// `icon` keys reference the ICONS dictionary defined in main.js.

const JOURNEY = [
  {
    date: "09/2020",
    icon: "grad",
    title: "B.Sc. Business Information Systems",
    org: "University of Passau",
    text: "Built a strong foundation in business processes, systems analysis and software development.",
    badge: "Software Engineering Project — Grade: 1.0 (highest possible)",
  },
  {
    date: "03/2022 – 02/2023",
    icon: "chart",
    title: "Working Student – Data Management",
    org: "xeomed GmbH & Co. KG",
    text: "Cleansed and quality-checked CRM data, and planned structured functional/content testing ahead of product launches.",
    badge: null,
  },
  {
    date: "05/2023 – 10/2024",
    icon: "doc",
    title: "Working Student – Content Management",
    org: "Experience One AG · Mercedes-Benz Vans VMK",
    text: "Managed and structured digital content, vehicle equipment data, and image assets for the Mercedes-Benz Vans website.",
    badge: null,
  },
  {
    date: "03/2025 – 04/2026",
    icon: "box",
    title: "Working Student – Digital Products",
    org: "Walhalla Mediengruppe",
    text: "Supported a Shopware 6 migration and rollout, and maintained digital publications, reporting, and CRM data quality.",
    badge: null,
  },
  {
    date: "2024 – 2026",
    icon: "code",
    title: "Built 3 Independent Technical Projects",
    org: "Developer tools & test automation",
    text: "Went beyond coursework to independently design, build, and test three tools end to end — turning self-directed learning into shipped software (see Projects below).",
    badge: null,
  },
  {
    date: "04/2026",
    icon: "rocket",
    title: "B.Sc. Completing – Ready for What's Next",
    org: "Applying for Software Engineering / QA Automation roles",
    text: "Completing my degree in 04/2026 and excited to contribute to impactful engineering teams.",
    badge: null,
  },
];

const PROJECTS = [
  {
    title: "Review Dashboard",
    icon: "angular",
    image: "assets/screenshots/review-dashboard.png",
    description:
      "Angular dashboard for reviewing pull requests: PR list, findings detail, activity feed, and integrations screens — built around a swappable data-provider interface, with 28 unit tests and a mobile-responsive layout.",
    tags: ["Angular", "TypeScript", "RxJS"],
    link: "https://github.com/festina-sallahi/review-dashboard",
  },
  {
    title: "AI Code Reviewer",
    icon: "robot",
    image: "assets/screenshots/ai-code-reviewer.png",
    description:
      "CLI tool that reviews a git diff using the Claude API and reports structured findings (file, line, severity) behind a swappable model-provider interface, validated against a demo branch with a planted bug. Backed by a 7-test Vitest suite.",
    tags: ["Node.js", "TypeScript", "Claude API"],
    link: "https://github.com/festina-sallahi/ai-code-reviewer",
    ciBadge: "https://github.com/festina-sallahi/ai-code-reviewer/actions/workflows/test.yml/badge.svg",
    ciLink: "https://github.com/festina-sallahi/ai-code-reviewer/actions/workflows/test.yml",
  },
  {
    title: "QA Test Automation",
    icon: "check",
    image: "assets/screenshots/qa-automation-report.png",
    description:
      "End-to-end Playwright suite using the Page Object Model, covering login, cart, and checkout across 12 scenarios, running cross-browser (Chromium, Firefox, WebKit) via GitHub Actions on every push.",
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
    description:
      "Partnered on a genealogy platform's Angular front end and NestJS backend, and led the UI/UX design end-to-end — from layout to the component system.",
    tags: ["Angular", "NestJS", "Node.js"],
    link: "https://myfamhistory.com",
  },
];

const SKILL_GROUPS = [
  {
    title: "Languages",
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
    title: "Frontend & Testing",
    icon: "monitor",
    skills: [
      { name: "Angular" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Playwright" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: "server",
    skills: [{ name: "REST APIs" }, { name: "Node.js" }, { name: "SAP ABAP" }],
  },
  {
    title: "Tools & Platforms",
    icon: "wrench",
    skills: [
      { name: "Git / GitHub" },
      { name: "Jira" },
      { name: "Confluence" },
      { name: "Figma" },
    ],
  },
  {
    title: "CMS & E-Commerce",
    icon: "cart",
    skills: [{ name: "WordPress" }, { name: "Shopware 6" }, { name: "Sanity Studio" }],
  },
];
