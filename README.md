# Acid-Base Calculation & Practice Sheet

An interactive, step-by-step acid-base worksheet (primary disorder → compensation → anion gap → Δ/Δ & osmolar gap → urine anion gap / RTA), with 8 practice cases, a "Try It Yourself" mode and an "Auto-Solve" mode.

It is an installable web app: open it on a phone and add it to the home screen, and it runs full-screen with its own icon, and keeps working offline after the first visit.

## Files

| File | What it does |
|---|---|
| `index.html` | The whole app |
| `manifest.webmanifest` | App name, colours and icons used when installing |
| `sw.js` | Offline support |
| `icons/` | App icons in the sizes phones and browsers need |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Publish on GitHub Pages

1. On github.com, click **New repository**, name it (e.g. `acid-base`), set it to **Public**, and create it.
2. Click **uploading an existing file**, drag in everything from this folder (including the `icons` folder), and click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, set **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)**, and click **Save**.
4. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/acid-base/`.

## Install it as an app

- **iPhone / iPad (Safari):** Share button → **Add to Home Screen**.
- **Android (Chrome):** menu ⋮ → **Install app** (or **Add to Home screen**).
- **Desktop (Chrome / Edge):** the install icon at the right of the address bar.

## Updating

Upload the changed `index.html` over the old one, then open `sw.js` and change `acid-base-v1` to `acid-base-v2` (and so on each time) so installed copies fetch the new version.
