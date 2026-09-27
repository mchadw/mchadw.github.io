(function () {
  const config = window.SITE_CONFIG;
  if (!config) {
    console.error("SITE_CONFIG not found. Load site.config.js before site.js.");
    return;
  }

  function text(value) {
    return value == null ? "" : String(value).trim();
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    const content = text(value);
    if (!el) return;
    el.textContent = content;
    el.hidden = content.length === 0;
  }

  function isHttp(href) {
    return href.startsWith("http://") || href.startsWith("https://");
  }

  function renderHero() {
    const name = text(config.name) || "Portfolio";
    const title = text(config.title);
    document.title = title ? name + " — " + title : name;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", text(config.bio) || name);
    }

    setText("site-name", name);
    setText("site-role", title);
    setText("site-bio", config.bio);

    const avatar = document.getElementById("site-avatar");
    const avatarUrl = text(config.avatar);
    if (avatar) {
      if (avatarUrl) {
        avatar.src = avatarUrl;
        avatar.alt = name;
        avatar.hidden = false;
      } else {
        avatar.removeAttribute("src");
        avatar.hidden = true;
      }
    }
  }

  function renderQuickLinks() {
    const nav = document.getElementById("quick-links");
    if (!nav) return;
    nav.replaceChildren();

    const links = Array.isArray(config.links) ? config.links : [];
    links.forEach(function (item) {
      const href = text(item && item.href);
      const label = text(item && item.label);
      if (!href || !label) return;

      const a = document.createElement("a");
      a.href = href;
      a.textContent = label;
      if (isHttp(href)) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      nav.appendChild(a);
    });

    nav.hidden = nav.childElementCount === 0;
  }

  function renderSkills() {
    const list = document.getElementById("skills-list");
    const section = document.querySelector(".skills");
    if (!list) return;
    list.replaceChildren();

    const skills = Array.isArray(config.skills) ? config.skills : [];
    skills.forEach(function (skill) {
      const label = text(skill);
      if (!label) return;
      const li = document.createElement("li");
      li.textContent = label;
      list.appendChild(li);
    });

    if (section) section.hidden = list.childElementCount === 0;
  }

  function renderProjects() {
    const container = document.getElementById("projects-list");
    const section = document.querySelector(".projects-section");
    if (!container) return;
    container.replaceChildren();

    const projects = Array.isArray(config.projects) ? config.projects : [];
    projects.forEach(function (project) {
      const title = text(project && project.title);
      if (!title) return;

      const article = document.createElement("article");
      article.className = "project-card";

      const h3 = document.createElement("h3");
      const href = text(project.link);
      if (href) {
        const link = document.createElement("a");
        link.href = href;
        link.textContent = title;
        if (isHttp(href)) {
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        }
        h3.appendChild(link);
      } else {
        h3.textContent = title;
      }

      article.appendChild(h3);

      const description = text(project.description);
      if (description) {
        const p = document.createElement("p");
        p.textContent = description;
        article.appendChild(p);
      }

      container.appendChild(article);
    });

    if (section) section.hidden = container.childElementCount === 0;
  }

  function renderFooter() {
    setText("site-footer", config.footer);
    const footer = document.querySelector(".site-footer");
    const line = document.getElementById("site-footer");
    if (footer && line) footer.hidden = line.hidden;
  }

  renderHero();
  renderQuickLinks();
  renderSkills();
  renderProjects();
  renderFooter();
})();
