# Michael Chadwick — GitHub Pages portfolio

A one-page portfolio. Change the words in [`site.config.js`](site.config.js), push to `main`, and [https://mchadw.github.io/](https://mchadw.github.io/) updates. There is no build step.

## What you edit

Open **`site.config.js`** and change the values. Everything visitors see comes from that file.

| Field | What it controls |
| --- | --- |
| `name` | Your name (page heading and browser title) |
| `title` | Short line under your name. Use `""` to hide it. |
| `bio` | The paragraph under your name |
| `avatar` | Profile image URL. Use `""` to hide it. |
| `skills` | List of skills |
| `projects` | Past projects. Each one has `title`, `description`, and `link`. |
| `links` | Buttons for email, GitHub, LinkedIn, and anything else |
| `footer` | Line at the bottom of the page |

Email uses a `mailto:` link:

```javascript
{ label: "Email", href: "mailto:you@example.com" },
```

Replace `you@example.com` and the LinkedIn URL before you rely on those buttons. GitHub already points at [https://github.com/mchadw](https://github.com/mchadw).

To add a project, copy an existing block inside `projects` and fill it in. To remove one, delete its block (keep the commas valid).

## Publish the page

This repository is named `mchadw.github.io`, so GitHub Pages serves it at the root of your username:

```text
https://mchadw.github.io/
```

Pages is set to deploy the **`main`** branch from the **repository root** (`/`).

### Update the live site

1. Edit `site.config.js`.
2. Commit the change.
3. Push to `main`:

   ```bash
   git add site.config.js
   git commit -m "Update portfolio content"
   git push origin main
   ```

4. Wait one to two minutes, then open [https://mchadw.github.io/](https://mchadw.github.io/) and refresh. GitHub caches the page for a few minutes, so a hard refresh (Ctrl+Shift+R, or Cmd+Shift+R on a Mac) helps.

### Turn Pages on (only if the site is not already live)

1. Open [the repository on GitHub](https://github.com/mchadw/mchadw.github.io).
2. Go to **Settings** → **Pages**.
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Click **Save**.

The site files stay in the repository root (`index.html` next to this README). Do not move them into a `docs/` folder unless you also change the Pages folder setting to `/docs`.

The empty [`.nojekyll`](.nojekyll) file tells GitHub Pages to publish the files as-is and skip Jekyll.

## Preview on your computer

From the repository root:

```bash
python3 -m http.server 8765
```

Open [http://localhost:8765](http://localhost:8765). Edit `site.config.js`, save, and refresh the browser.

## Files

```text
.
├── index.html       # Page structure
├── site.config.js   # Your content — edit this
├── css/styles.css   # Styling
├── js/site.js       # Copies config into the page
├── .nojekyll        # Skip Jekyll on GitHub Pages
└── README.md
```
