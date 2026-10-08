import { projectLookup, projectTracks } from './data/projects.js?v=20261008-8';
import { skillGroups } from './data/skills.js?v=20261008-4';
import { initCarousels } from './components/carousel.js?v=20260827-12';
import { renderFeatureTours } from './components/feature-tour.js?v=20260827-12';
import { renderGenericProjectDetail } from './components/project-detail.js?v=20260827-12';
import { renderProjectStories } from './components/project-story.js?v=20260827-12';
import { renderProjectGalleries, renderProjectTracks } from './components/projects.js?v=20260827-12';
import { initNavigation, initRevealAnimations, initThemeToggle, restoreHashTarget, updateCopyrightYear } from './components/site.js?v=20260908-1';
import { initSkillProjectChooser, renderSkillGroups } from './components/skills.js?v=20260827-12';
import { renderProjectVideos, renderVideoEmbeds } from './components/videos.js?v=20260827-12';

const pathPrefix = document.body.classList.contains('project-page') ? '../' : '';

initThemeToggle();
renderProjectTracks(projectTracks, { pathPrefix });
renderGenericProjectDetail(projectLookup);
renderProjectGalleries(projectLookup, { pathPrefix });
renderProjectStories(projectLookup, { pathPrefix });
renderFeatureTours(projectLookup, { pathPrefix });
renderProjectVideos(projectLookup, { pathPrefix });
renderVideoEmbeds();
renderSkillGroups(skillGroups);
initSkillProjectChooser(projectLookup);
initNavigation();
initCarousels();
initRevealAnimations();
updateCopyrightYear();
restoreHashTarget();
