import { carouselMarkup } from './carousel.js?v=20261008-11';

function projectCardMarkup(project, track, featured, pathPrefix) {
  const image = project.image || project.images[0];
  const href = project.href?.startsWith('http') ? project.href : `${pathPrefix}${project.href}`;
  const external = project.href?.startsWith('http') ? ' target="_blank" rel="noreferrer"' : '';
  return `
    <a id="project-${project.id}" class="project-tile" data-project-category="${track.id}" href="${href}"${external} aria-labelledby="title-${project.id}">
      <div class="project-tile-media"><img src="${pathPrefix}${image.src}" alt="${image.alt}" loading="lazy" /></div>
      <div class="project-tile-body">
        <div class="project-tile-meta"><span>${track.name}</span>${featured ? '<span class="featured-label">Featured project</span>' : ''}</div>
        <h3 id="title-${project.id}">${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tile-footer"><span>${project.tags.slice(0, 2).join(' · ')}</span><b>Read project</b></div>
      </div>
    </a>`;
}

export function renderProjectTracks(tracks, { root = document, pathPrefix = '' } = {}) {
  const container = root.querySelector('[data-project-tracks]');
  if (!container) return;
  const projects = [
    ...tracks.map(track => ({ project: track.featured, track, featured: true })),
    ...tracks.flatMap(track => track.otherProjects.map(project => ({ project, track, featured: false })))
  ];
  container.innerHTML = `
    <div class="project-browser-controls">
      <div class="project-filters" role="group" aria-label="Filter projects by discipline">
        <button type="button" data-project-filter="all" aria-pressed="true"><span>All projects</span><span class="filter-count">${projects.length}</span></button>
        ${tracks.map(track => `<button type="button" data-project-filter="${track.id}" aria-pressed="false"><span>${track.name}</span><span class="filter-count">${track.otherProjects.length + 1}</span></button>`).join('')}
      </div>
      <p class="project-result-count" role="status"><span data-project-count>${projects.length}</span> <span>projects shown</span></p>
    </div>
    <div class="project-browser-grid">${projects.map(({ project, track, featured }) => projectCardMarkup(project, track, featured, pathPrefix)).join('')}</div>`;

  const buttons = [...container.querySelectorAll('[data-project-filter]')];
  const cards = [...container.querySelectorAll('[data-project-category]')];
  function select(category) {
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.projectFilter === category)));
    let count = 0;
    cards.forEach(card => {
      card.hidden = category !== 'all' && card.dataset.projectCategory !== category;
      if (!card.hidden) count++;
    });
    container.querySelector('[data-project-count]').textContent = count;
  }
  buttons.forEach(button => button.addEventListener('click', () => select(button.dataset.projectFilter)));
  // Skill links and back links must still find their project after filtering.
  function revealHashTarget() {
    const target = root.getElementById(window.location.hash.slice(1));
    if (target?.matches('[data-project-category]') && target.hidden) select(target.dataset.projectCategory);
    return target;
  }
  window.addEventListener('hashchange', () => {
    const target = revealHashTarget();
    if (target?.matches('[data-project-category]')) target.scrollIntoView({ block: 'start' });
  });
  root.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#project-"]');
    if (!link) return;
    const target = root.getElementById(link.getAttribute('href').slice(1));
    if (target?.hidden) select(target.dataset.projectCategory);
  });
  revealHashTarget();
}

export function renderProjectGalleries(projects, { root = document, pathPrefix = '' } = {}) {
  root.querySelectorAll('[data-project-gallery]').forEach(gallery => {
    const project = projects[gallery.dataset.projectGallery];
    if (!project) return;
    gallery.classList.add('project-carousel', 'project-detail-carousel');
    if (project.galleryLayout === 'compact') gallery.closest('.project-hero')?.classList.add('project-hero-compact');
    gallery.dataset.carousel = '';
    gallery.innerHTML = carouselMarkup(project.images, { pathPrefix });
  });
}
