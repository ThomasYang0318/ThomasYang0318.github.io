import { carouselMarkup } from './carousel.js';

function externalLinkAttributes(href) {
  return href?.startsWith('http') ? ' target="_blank" rel="noreferrer"' : '';
}

function tagsMarkup(tags) {
  return `<div class="tags">${tags.map(tag => `<span>${tag}</span>`).join('')}</div>`;
}

function otherProjectMarkup(project, pathPrefix) {
  const media = `
    <div class="other-project-media">
      <img${project.image.className ? ` class="${project.image.className}"` : ''} src="${pathPrefix}${project.image.src}" alt="${project.image.alt}" />
    </div>`;
  const body = `
    <div class="other-project-body">
      <span>${project.type}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <b>${project.linkLabel}</b>
    </div>`;

  return project.href
    ? `<a id="project-${project.id}" class="other-project reveal" href="${project.href}"${externalLinkAttributes(project.href)}>${media}${body}</a>`
    : `<div id="project-${project.id}" class="other-project reveal">${media}${body}</div>`;
}

function featuredProjectMarkup(track, pathPrefix) {
  const project = track.featured;
  const mediaClasses = [
    'flagship-media',
    'project-carousel',
    project.placeholder ? 'placeholder-media' : '',
    project.mediaClass || ''
  ].filter(Boolean).join(' ');

  return `
    <article id="project-${project.id}" class="flagship-project${track.reverse ? ' flagship-project-reverse' : ''} reveal">
      <div class="${mediaClasses}" data-carousel aria-label="${project.title} project images">
        ${carouselMarkup(project.images, { href: project.href, pathPrefix })}
      </div>
      <div class="flagship-copy">
        <div class="flagship-meta"><span>Featured project</span><span>${track.name}</span></div>
        <p class="project-type">${project.meta}</p>
        <h3><a href="${pathPrefix}${project.href}">${project.title}</a></h3>
        <p>${project.description}</p>
        ${tagsMarkup(project.tags)}
        <a class="text-link" href="${pathPrefix}${project.href}">${project.linkLabel} <span>→</span></a>
      </div>
    </article>`;
}

function projectTrackMarkup(track, pathPrefix) {
  return `
    <div class="project-track" data-project-track="${track.id}">
      <header class="project-track-heading reveal">
        <span>${track.index}</span>
        <div><p>Core discipline</p><h3>${track.name}</h3></div>
        <p>${track.description}</p>
      </header>
      ${featuredProjectMarkup(track, pathPrefix)}
      <p class="other-projects-label reveal">${track.otherLabel}</p>
      <div class="other-project-grid${track.shortGrid ? ' other-project-grid-short' : ''}">
        ${track.otherProjects.map(project => otherProjectMarkup(project, pathPrefix)).join('')}
      </div>
    </div>`;
}

export function renderProjectTracks(tracks, { root = document, pathPrefix = '' } = {}) {
  const container = root.querySelector('[data-project-tracks]');
  if (!container) return;
  container.innerHTML = tracks.map(track => projectTrackMarkup(track, pathPrefix)).join('');
}

export function renderProjectGalleries(projects, { root = document, pathPrefix = '' } = {}) {
  root.querySelectorAll('[data-project-gallery]').forEach(gallery => {
    const project = projects[gallery.dataset.projectGallery];
    if (!project) return;

    gallery.classList.add('project-carousel', 'project-detail-carousel');
    gallery.dataset.carousel = '';
    gallery.innerHTML = carouselMarkup(project.images, { pathPrefix });
  });
}
