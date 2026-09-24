# Stuti Shrimal — Personal portfolio

A recruiter-first portfolio for **Stuti Shrimal**, Data Engineer. The entire site is driven by one file: [`src/content/site.ts`](src/content/site.ts). Change that file and every page, meta tag, and schema block updates with it.

This is not a freelance brochure. It is built to answer, in about ten seconds:

- Who is this?
- What level?
- What stack?
- What business impact?
- Should we interview her?

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS v4
- Framer Motion
- `next-themes` (dark by default, persisted)
- Accessible semantics, keyboard shortcuts, reduced-motion support

## Local development

```bash
cd ~/Projects/stuti-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Edit your content

Open `src/content/site.ts` and replace anything marked with `REPLACE` comments:

1. `person.headshot` — put a real photo at `public/headshot.jpg` (or `.webp`) and point the path at it.
2. `person.email`, `links.email`, `links.linkedin`, and `links.github` — replace every `REPLACE_WITH_*` value.
3. `links.resume` — add a one-page PDF at `public/resume/Stuti-Shrimal-Resume.pdf`.
4. `seo.url` — your production domain.
5. Project `github` / `live` URLs, only if you can share them.
6. Certification dates and `credentialUrl` values. Add Power BI or SnowPro only after you hold them.
7. Testimonial placeholders — replace with real recommendations or delete the cards. Keep the faculty line.

## Keyboard shortcuts

| Key | Action |
| --- | --- |
| `⌘K` / `Ctrl+K` | Command palette |
| `G` then `H` / `P` / `E` / `C` / `B` | Home, Projects, Experience, Contact, Writing |
| `T` | Toggle theme |
| `R` | Open resume |
| `Esc` | Close overlays |

## Folder structure

```
src/
  app/                  # routes, SEO, OG image, sitemap, robots, 404
  components/
    chrome/             # nav, cursor, palette, progress, resume chip
    sections/           # homepage sections
    contact/ projects/ seo/ ui/
  content/site.ts       # single source of truth
  lib/utils.ts
public/
  headshot.svg          # placeholder portrait
  resume/               # downloadable resume
```

## Deploy (Vercel)

1. Push this folder to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Set the production domain, then put that domain in `site.seo.url`.
4. Redeploy.

Any Node host that can run `next build` + `next start` also works.

## Recruiter snapshot

- **Role:** Data Engineer · Analytics Engineer · AI and data products
- **Experience:** Lakeshore Global, Adaptive Waves, Accenture
- **Impact on the page:** 4+ years, 1M+ users supported, 50+ enterprise interfaces, ~40% faster data loads, ~60% faster analytics
- **Education:** MS Information Systems, University of Maryland · BE Information Technology, University of Mumbai

Do not add revenue, extra user counts, or quotes you cannot defend. Skill labels are Core, Advanced, Proficient, and Working Knowledge — not percentages.

Homepage order is intentional: hero, impact, featured work, experience, expertise, about, education, certifications, recognition, testimonial, writing, contact.
