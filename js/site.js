(function () {
  const config = window.SITE_CONFIG;
  if (!config) {
    console.error("SITE_CONFIG not found. Load site.config.js before site.js.");
    return;
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el && text != null) el.textContent = text;
  }

  function renderHero() {
    document.title = config.name + (config.title ? " — " + config.title : "");
    setText("site-name", config.name);
    setText("site-role", config.title);
    setText("site-bio", config.bio);

    const avatar = document.getElementById("site-avatar");
    if (avatar) {
      if (config.avatar) {
        avatar.src = config.avatar;
        avatar.alt = config.name;
        avatar.hidden = false;
      } else {
        avatar.hidden = true;
      }
    }
  }

  function renderQuickLinks() {
    const nav = document.getElementById("quick-links");
    if (!nav || !Array.isArray(config.links)) return;
    nav.replaceChildren();
    config.links.forEach(function (item) {
      const a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.label;
      if (item.href.startsWith("http")) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      nav.appendChild(a);
    });
  }

  function renderSkills() {
    const list = document.getElementById("skills-list");
    if (!list || !Array.isArray(config.skills)) return;
    list.replaceChildren();
    config.skills.forEach(function (skill) {
      const li = document.createElement("li");
      li.textContent = skill;
      list.appendChild(li);
    });
  }

  function renderProjects() {
    const container = document.getElementById("projects-list");
    if (!container || !Array.isArray(config.projects)) return;
    container.replaceChildren();
    config.projects.forEach(function (project) {
      const article = document.createElement("article");
      article.className = "project-card";

      const h3 = document.createElement("h3");
      const link = document.createElement("a");
      link.href = project.link;
      link.textContent = project.title;
      if (project.link.startsWith("http")) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      h3.appendChild(link);

      const p = document.createElement("p");
      p.textContent = project.description;

      article.appendChild(h3);
      article.appendChild(p);
      container.appendChild(article);
    });
  }

  function renderFooter() {
    setText("site-footer", config.footer || "");
  }

  renderHero();
  renderQuickLinks();
  renderSkills();
  renderProjects();
  renderFooter();
})();
