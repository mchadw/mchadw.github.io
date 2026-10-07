/**
 * Portfolio site configuration — edit this file to customize your site.
 * Layout and styling live in index.html, css/styles.css, and js/site.js.
 *
 * workingOn is the in-progress project shown at the top of the page.
 * Set title and description (link is optional). Leave both blank to hide it.
 */
window.SITE_CONFIG = {
  name: "M Chadwick",
  title: "Computer Engineering, Honors Student @ Irvine Valley College",
  bio:
    "I am a freshman studying CE at IVC and like to make projects related to math, machine learning, computer engineering, and the intersection between sports access/performance and technology.",
  avatar: "", // Optional: URL to a profile image (leave empty to hide)
  workingOn: {
    title: "Project name",
    description: "What it is, what you're figuring out, and what's next.",
    link: "", // Optional: URL for the project
  },
  skills: [
    "Python",
    "C",
    "Java",
    "Git",
    "Pandas",
    "NumPy",
    "matplotlib"
  ],
  projects: [
    {
      title: "[empty]",
      description:
        "[empty]",
      link: "https://github.com/example/task-flow",
    },
    {
      title: "[empty]",
      description:
        "[empty]",
      link: "https://github.com/example/contrast-checker",
    },
    {
      title: "[empty]",
      description:
        "[empty]",
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
