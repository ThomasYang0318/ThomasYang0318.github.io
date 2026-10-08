export function initReadingNavigation(root = document) {
  if (!root.body.classList.contains('project-page')) return;
  const hero = root.querySelector('.project-hero');
  const sections = [...root.querySelectorAll('main > .case-section, [data-generic-project-detail] > .case-section')];
  const chapters = sections.map((section, index) => {
    const heading = section.querySelector('h2');
    if (!heading) return null;
    if (!section.id) section.id = `section-${index + 1}`;
    return { section, heading };
  }).filter(Boolean);
  if (!hero || chapters.length < 2) return;
  const nav = root.createElement('nav');
  nav.className = 'reading-nav wrap';
  nav.setAttribute('aria-label', 'On this page');
  const label = root.createElement('span');
  label.textContent = 'On this page';
  nav.append(label);
  const links = root.createElement('div');
  chapters.forEach(({ section, heading }) => {
    const link = root.createElement('a');
    link.href = `#${section.id}`;
    link.textContent = heading.textContent;
    links.append(link);
  });
  nav.append(links);
  hero.after(nav);
}
