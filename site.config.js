/**
 * Portfolio site configuration — edit this file to customize your site.
 * Layout and styling live in index.html, css/styles.css, and js/site.js.
 */
window.SITE_CONFIG = {
  name: "Michael Chadwick",
  title: "Computer Engineering, Honors Student @ Irvine Valley College",
  bio:
    "I am a freshman studying CE at IVC and like to make projects related to math, machine learning, computer engineering, and the intersection between sports access/performance and technology.",
  avatar: "", // Optional: URL to a profile image (leave empty to hide)
  skills: [
    "Python",
    "C/C++",
    "Java",
    "Verilog",
    "Git",
    "Pandas",
    "NumPy",
    "matplotlib"
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
    { label: "Email", href: "mchadwick5@ivc.edu", icon: "email" },
    { label: "GitHub", href: "https://github.com/mchadw", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/michael-chadwick-4b29842b2/",
      icon: "linkedin",
    },
    // Add more: { label: "Mastodon", href: "https://...", icon: "link" },
  ],
};
