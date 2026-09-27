/**
 * Portfolio site configuration — edit this file to customize your site.
 * Layout and styling live in index.html, css/styles.css, and js/site.js.
 */
window.SITE_CONFIG = {
  name: "Jane Developer",
  title: "Software Engineer",
  bio:
    "I build thoughtful web experiences and open-source tools. Currently focused on developer productivity and accessible interfaces.",
  avatar: "", // Optional: URL to a profile image (leave empty to hide)
  skills: [
    "JavaScript / TypeScript",
    "React & Node.js",
    "HTML & CSS",
    "Git & GitHub Actions",
    "REST APIs",
    "Technical writing",
  ],
  projects: [
    {
      title: "Task Flow",
      description:
        "A lightweight kanban board with offline support and keyboard shortcuts.",
      link: "https://github.com/example/task-flow",
    },
    {
      title: "Color Contrast Checker",
      description:
        "Browser extension that flags WCAG contrast issues on any page.",
      link: "https://github.com/example/contrast-checker",
    },
    {
      title: "API Starter Kit",
      description:
        "Opinionated FastAPI template with auth, tests, and Docker compose.",
      link: "https://github.com/example/api-starter",
    },
  ],
  links: [
    { label: "Email", href: "mailto:hello@example.com", icon: "email" },
    { label: "GitHub", href: "https://github.com/example", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/example",
      icon: "linkedin",
    },
    // Add more: { label: "Mastodon", href: "https://...", icon: "link" },
  ],
  footer: "© 2026 Jane Developer. Built with GitHub Pages.",
};
