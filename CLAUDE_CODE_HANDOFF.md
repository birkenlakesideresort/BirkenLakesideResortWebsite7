# Birken Lakeside Resort — Deploy Handoff

**For: Claude Code (or any dev)**
**Goal: push this folder to a new GitHub repo, then deploy it to Vercel.**

This is a finished static site. **Do not modify the code, the design, the file structure, or any content.** Your job is purely operational: get it from this folder onto GitHub, then onto Vercel. That's it.

---

## What's in this folder

```
index.html, 404.html, vercel.json
styles.css
data.js
layout.jsx, page-home.jsx, page-stay.jsx, page-rest.jsx
assets/   (37 images, ~12 MB)
README.md (project notes)
```

No build step. No `package.json`. No `node_modules`. Static files only.

---

## Step 1 — Verify locally (optional but recommended)

```bash
cd <this folder>
npx serve .
# open http://localhost:3000 — site should look exactly like the staging preview
```

If it loads cleanly and all images appear, you're good to deploy. **Do not edit anything.**

---

## Step 2 — Push to GitHub

The user does **not** have an existing repo for this. Create a fresh one.

### Prerequisites
- Confirm GitHub CLI is installed: `gh --version`
  - If not: install via `brew install gh` (macOS) or see https://cli.github.com
- Confirm GitHub auth: `gh auth status`
  - If not authed: `gh auth login` — pick **GitHub.com → HTTPS → authenticate via browser**

### Commands

```bash
cd <this folder>

# Initialize git
git init
git add .
git commit -m "Initial commit: Birken Lakeside Resort website"
git branch -M main

# Create a new public GitHub repo and push
gh repo create birken-lakeside-resort --public --source=. --remote=origin --push
```

If `gh` is unavailable, fall back to the manual flow:

```bash
# After initializing locally as above…
# 1. Manually create empty repo at https://github.com/new
#    name: birken-lakeside-resort, no README/license/gitignore
# 2. Then:
git remote add origin https://github.com/<USERNAME>/birken-lakeside-resort.git
git push -u origin main
```

Print the repo URL when done.

---

## Step 3 — Deploy to Vercel

### Prerequisites
- Confirm Vercel CLI: `vercel --version`
  - If not: `npm i -g vercel`
- Confirm logged in: `vercel whoami`
  - If not: `vercel login` (use the same email the user gave you, or prompt them)

### Commands

```bash
cd <this folder>

vercel --yes
# Accept all defaults:
#   - Set up and deploy? Y
#   - Which scope? (user's personal scope)
#   - Link to existing project? N
#   - Project name? birken-lakeside-resort
#   - Directory? ./
#   - Override settings? N

# Then promote the preview to production:
vercel --prod --yes
```

Print the production URL when done (will be `https://birken-lakeside-resort.vercel.app` or similar).

---

## Step 4 — (Optional) Custom domain

The user owns **birkenlakesideresort.ca**. To attach it:

```bash
vercel domains add birkenlakesideresort.ca birken-lakeside-resort
vercel domains add www.birkenlakesideresort.ca birken-lakeside-resort
```

Vercel will print DNS records the user needs to add at their registrar. Pass those to the user verbatim — do not configure DNS yourself.

---

## Important notes

- **Do not run a build step.** This is a static site loaded as-is. There's no `npm run build`. Vercel auto-detects static and serves it raw.
- **Do not change `vercel.json`.** It's already configured for clean URLs and SPA fallback.
- **Do not edit any `.html`, `.jsx`, `.css`, or `.js` file.** The site is final and signed off.
- **Routing is hash-based** (`/#/stay`, `/#/cabin/wild-west`). Don't try to "fix" this — it's intentional, lets the site work on any static host.
- React + Babel are loaded from unpkg CDN at runtime. Keep the CDN script tags as-is.

---

## When you're done

Report back to the user:
1. ✅ GitHub repo URL
2. ✅ Vercel production URL
3. ⚠️ Any DNS records they need to add for the custom domain (if Step 4 was done)
