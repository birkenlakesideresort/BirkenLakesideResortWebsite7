# Birken Lakeside Resort — Website

Static site. No build step. Drop-in deployable.

## Structure

```
index.html          Entry point, hash router
404.html            Vercel 404 page (also rewrites SPA routes back to index.html)
vercel.json         Clean URLs + SPA rewrite config
styles.css          All global styles
data.js             Cabin + content data (loaded as global)
layout.jsx          Nav + footer + shared components (Babel-transpiled in browser)
page-home.jsx       Home page
page-stay.jsx       Stay (cabins index) + Cabin detail
page-rest.jsx       Gatherings, Weddings, Grille, Area, About, Book, Contact, NotFound
assets/             All images + logo (used assets only — unused images stripped)
```

## Deploy to Vercel

1. Push this folder to a GitHub repo (root of repo = this folder)
2. Vercel → New Project → Import the repo → Deploy (no config needed)
3. Custom domain: Project Settings → Domains → add `birkenlakesideresort.ca`

## Local preview

Any static file server works:

```bash
npx serve .          # then open http://localhost:3000
# or
python3 -m http.server 8000
```

Just opening `index.html` directly via `file://` will NOT work — JSX files must be served over HTTP for Babel to fetch them.

## Notes

- Routing is hash-based (`#/stay`, `#/cabin/wild-west`, etc.) so the site works on any static host without rewrite rules. `vercel.json` adds clean-URL niceties on top.
- React + Babel are loaded from unpkg CDN. No bundler. To go fully offline-capable, swap to a Vite build later.
- Bookings page is a placeholder ("Bookings coming soon"). Live booking flow can be wired up by editing `page-rest.jsx → Book`.
