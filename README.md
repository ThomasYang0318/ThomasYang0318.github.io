# Yang Chi Hung — Personal Portfolio

A lightweight, modular static portfolio that deploys directly to GitHub Pages.

## Edit projects, images, and videos

Most portfolio updates only require editing [`data/projects.js`](data/projects.js).

- `projectTracks` controls the three disciplines and their order.
- `featured` selects the project from each discipline shown first in the shared card grid.
- `otherProjects` adds the remaining cards. The homepage can filter all cards by discipline.
- `images` is the carousel image list. Add another `{ src, alt }` object to add a slide.
- The homepage uses one cover per card; full galleries appear on detail pages.
- `galleryLayout: 'compact'` places a small gallery alongside the project summary on desktop.
- `videos` accepts privacy-enhanced YouTube embeds or local MP4 files, including portrait video and muted autoplay options.
- `featureTour` creates an interactive annotated-image walkthrough on a project page.
- `caseStudy` creates a chapter-based product narrative with captioned project images.
- `details` contains the paragraphs shown on a project's internal article page.
- `links` contains external presentations, demos, or source links shown inside the article.

Example:

```js
images: [
  {
    src: 'assets/images/projects/visual/my-image.jpg',
    alt: 'Description of the image'
  }
],
videos: [
  {
    title: 'Project demo',
    youtubeId: 'VIDEO_ID_ONLY',
    autoplay: true,
    muted: true,
    portrait: true
  },
  {
    title: 'Project introduction',
    src: 'assets/videos/project-introduction.mp4',
    type: 'video/mp4'
  }
]
```

Use only the YouTube video ID, not the entire URL. For example, the ID in
`https://youtu.be/DJ7WR7n6QPM` is `DJ7WR7n6QPM`.
For a local video, place the file in `assets/videos/` and use its root-relative
project path as `src`; nested project pages are adjusted automatically.

## Link skills to projects

Edit [`data/skills.js`](data/skills.js) to control the Technical Toolkit tags.

- Use `projectId` when a skill points to one project. Clicking jumps directly to it.
- Use `projectIds` when a skill points to multiple projects. Clicking opens a project chooser.

```js
{ name: 'OpenGL', projectId: 'opengl' }
{ name: 'Flutter', projectIds: ['nebula', 'mijing', 'wearable'] }
```

Project IDs are defined in `data/projects.js`.

## Traditional Chinese and English

The header language button switches the entire page without navigating or
resetting interactive controls. The first visit follows the browser's primary
language (Chinese uses Traditional Chinese); later visits use the saved
`portfolio-language` preference. Switching still works when storage is blocked.

English content remains in the HTML and project data. Add or update the matching
English-keyed translation in [`data/zh-tw.js`](data/zh-tw.js) whenever copy changes.
Whitespace is normalized for lookup. [`components/i18n.js`](components/i18n.js)
translates text, page titles, descriptions, image alternatives, and accessible
labels, including content inserted by dialogs and interactive controls. Code,
URLs, image pixels, and embedded media are preserved. Use `data-no-translate`
for deliberately language-independent content. JavaScript-disabled pages retain
the original English fallback.

The browser regression checks in [`tests/i18n.browser.js`](tests/i18n.browser.js)
export `runI18nChecks(browser, baseURL)`. Pass an isolated Playwright Browser and
the local preview URL. The checks cover all page routes, English restoration,
Chinese text coverage, unchanged links/media, mobile layout, preference storage,
blocked storage, dialogs, navigation, themes, and carousel state.

## Project article pages

Each project card contains a topic, title, and one-sentence summary. Featured
projects use their dedicated pages in `projects/`. Other projects use the shared
`projects/project.html?id=PROJECT_ID` page, which is populated from
`data/projects.js`. External Canva and YouTube destinations belong inside the
detail page, so card clicks stay within the portfolio first.

## Structure

- `index.html` — page content outside the project list, plus a static project fallback
- `data/projects.js` — single source of truth for project cards, galleries, and videos
- `data/skills.js` — skill tags and their one-to-one or one-to-many project links
- `components/projects.js` — project-card and gallery rendering
- `components/reading-nav.js` — chapter links generated from project-page headings
- `components/project-detail.js` — shared article-style detail-page rendering
- `components/feature-tour.js` — reusable hotspot-driven project walkthroughs
- `components/project-story.js` — chapter navigation and systematic project storytelling
- `components/carousel.js` — reusable carousel markup and controls
- `components/videos.js` — reusable local MP4 and privacy-enhanced YouTube embeds
- `components/skills.js` — skill links and the multi-project selection dialog
- `components/site.js` — navigation, reveal animation, and copyright year
- `script.js` — small module entry point
- `projects/` — featured project detail pages
- `styles.css` — responsive visual system
- `assets/images/projects/` — project images grouped by discipline
- `assets/videos/` — locally hosted project videos

## Preview locally

JavaScript modules require a local web server. From the repository directory, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

`tests/browsing.browser.js` exports `runBrowsingChecks(browser, baseURL)` for an
isolated Playwright Browser. It checks category filtering, keyboard access,
language/filter state, skill-link targets, chapter links, gallery navigation,
mobile reflow, and the static project-card fallback.

## GitHub Pages

No build step is required. GitHub Pages can continue publishing directly from
the `main` branch and repository root.
