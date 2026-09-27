# GitHub Pages Portfolio Template

A minimal, config-driven personal portfolio you can publish for free on [GitHub Pages](https://pages.github.com/). Edit one JavaScript file for your bio, skills, projects, and links—no build step required.

## Quick start (publish on GitHub)

### 1. Create the repository

On [GitHub](https://github.com/new), create a **public** repository named exactly:

```text
{your-github-username}.github.io
```

Example: if your username is `octocat`, the repo must be `octocat.github.io`.

### 2. Push this template

If you cloned an empty repo, copy these files into it and push. From your machine:

```bash
git init
git add .
git commit -m "Add portfolio template"
git branch -M main
git remote add origin https://github.com/{your-github-username}/{your-github-username}.github.io.git
git push -u origin main
```

Replace `{your-github-username}` with your GitHub username.

### 3. Enable GitHub Pages

1. Open your repo on GitHub → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your default branch)
   - **Folder**: **`/ (root)`** ← this template is designed for the repository root, not `docs/`
3. Click **Save**.

After a minute or two, your site is live at:

```text
https://{your-github-username}.github.io/
```

### 4. Customize content

Edit **[`site.config.js`](site.config.js)** at the repo root:

| Field | What to change |
| --- | --- |
| `name`, `title`, `bio` | Header and browser title |
| `avatar` | Optional image URL (leave `""` to hide) |
| `skills` | Array of skill strings |
| `projects` | Array of `{ title, description, link }` |
| `links` | Quick links (email, GitHub, LinkedIn, etc.) |
| `footer` | Footer line |

Commit and push; GitHub Pages will update automatically.

## Project structure

```text
.
├── index.html          # Page shell (sections only; content comes from config)
├── site.config.js      # ← Edit your content here
├── css/styles.css      # Visual styling
├── js/site.js          # Renders config into the page
├── .nojekyll           # Tells GitHub Pages not to run Jekyll
└── README.md
```

**Deployment folder:** **root** (`/`). Do not move the site into `docs/` unless you change Pages settings to use the `/docs` folder instead.

## Local preview (optional)

Any static file server works. Examples:

```bash
# Python 3
python3 -m http.server 8765

# Node (npx, no install)
npx --yes serve -p 8765
```

Open `http://localhost:8765` in your browser. Edit `site.config.js`, refresh to see changes.

## Using a project repo instead of `username.github.io`

You can host this template on any repo (e.g. `my-portfolio`) and enable Pages from the root of `main`. The URL will be:

```text
https://{username}.github.io/{repo-name}/
```

For a site at `https://{username}.github.io/` with no path prefix, use the special `{username}.github.io` repository name.

## License

Use and modify freely for your own portfolio.
