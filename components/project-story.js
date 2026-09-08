function storyHotspotsMarkup(hotspots = []) {
  if (!hotspots.length) return '';

  return `
    <div class="story-image-hotspots" aria-label="Choose a Mijing social layer">
      ${hotspots.map(hotspot => `
        <a
          class="story-image-hotspot"
          href="#${hotspot.target}"
          style="--hotspot-x:${hotspot.x}%;--hotspot-y:${hotspot.y}%;--hotspot-width:${hotspot.width}%;--hotspot-height:${hotspot.height}%"
          aria-label="${hotspot.label}: ${hotspot.description}"
        ><span>View ${hotspot.label} layer <b aria-hidden="true">→</b></span></a>`).join('')}
    </div>`;
}

function storyCardMarkup(image, pathPrefix) {
  const hasHotspots = image.hotspots?.length;

  return `
    <figure class="story-card${image.wide ? ' story-card-wide' : ''}${hasHotspots ? ' story-card-interactive' : ''}">
      <div class="story-card-media">
        <img src="${pathPrefix}${image.src}" alt="${image.alt}" loading="lazy" />
        ${storyHotspotsMarkup(image.hotspots)}
      </div>
      <figcaption>
        <p>${image.eyebrow}</p>
        <h4>${image.title}</h4>
        <span>${image.description}</span>
        ${image.interactionHint ? `<small class="story-interaction-hint"><b aria-hidden="true">↗</b>${image.interactionHint}</small>` : ''}
      </figcaption>
    </figure>`;
}

function storyChapterMarkup(chapter, pathPrefix) {
  return `
    <section class="story-chapter" id="mijing-story-${chapter.id}">
      <header class="story-chapter-heading">
        <div><span>${chapter.index}</span><p>${chapter.label}</p></div>
        <div><h3>${chapter.title}</h3><p>${chapter.description}</p></div>
      </header>
      <div class="story-card-grid">
        ${chapter.images.map(image => storyCardMarkup(image, pathPrefix)).join('')}
      </div>
    </section>`;
}

function projectStoryMarkup(story, pathPrefix) {
  return `
    <div class="project-story">
      <header class="project-story-heading">
        <p class="eyebrow">Systematic case study</p>
        <h2>${story.title}</h2>
        <p>${story.intro}</p>
      </header>
      <nav class="story-navigation" aria-label="Mijing case study chapters">
        ${story.chapters.map(chapter => `<a href="#mijing-story-${chapter.id}"><span>${chapter.index}</span>${chapter.label}</a>`).join('')}
      </nav>
      ${story.chapters.map(chapter => storyChapterMarkup(chapter, pathPrefix)).join('')}
    </div>`;
}

export function renderProjectStories(projects, { root = document, pathPrefix = '' } = {}) {
  root.querySelectorAll('[data-project-story]').forEach(container => {
    const project = projects[container.dataset.projectStory];
    if (!project?.caseStudy?.chapters?.length) return;
    container.innerHTML = projectStoryMarkup(project.caseStudy, pathPrefix);
  });
}
