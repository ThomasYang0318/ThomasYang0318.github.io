export function carouselMarkup(images, { href = '', pathPrefix = '' } = {}) {
  const slides = images.map((image, index) => {
    const imageMarkup = `<img src="${pathPrefix}${image.src}" alt="${image.alt}" />`;
    const content = href ? `<a href="${pathPrefix}${href}">${imageMarkup}</a>` : imageMarkup;
    return `<div class="carousel-slide${index === 0 ? ' is-active' : ''}">${content}</div>`;
  }).join('');

  return `
    <div class="carousel-track">${slides}</div>
    <button class="carousel-button carousel-prev" type="button" aria-label="Previous image">‹</button>
    <button class="carousel-button carousel-next" type="button" aria-label="Next image">›</button>
    <div class="carousel-status" aria-live="polite"><span data-carousel-current>1</span> / <span data-carousel-total>${images.length}</span></div>
  `;
}

export function initCarousels(root = document) {
  root.querySelectorAll('[data-carousel]').forEach(carousel => {
    if (carousel.dataset.carouselReady === 'true') return;

    const slides = [...carousel.querySelectorAll('.carousel-slide')];
    if (!slides.length) return;

    const previous = carousel.querySelector('.carousel-prev');
    const next = carousel.querySelector('.carousel-next');
    const currentLabel = carousel.querySelector('[data-carousel-current]');
    const totalLabel = carousel.querySelector('[data-carousel-total]');
    let current = Math.max(0, slides.findIndex(slide => slide.classList.contains('is-active')));

    const showSlide = index => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === current;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', String(!active));
      });
      if (currentLabel) currentLabel.textContent = String(current + 1);
    };

    carousel.dataset.carouselReady = 'true';
    if (totalLabel) totalLabel.textContent = String(slides.length);

    if (slides.length <= 1) {
      carousel.classList.add('is-single');
      slides[0].setAttribute('aria-hidden', 'false');
      return;
    }

    carousel.tabIndex = 0;
    previous?.addEventListener('click', () => showSlide(current - 1));
    next?.addEventListener('click', () => showSlide(current + 1));
    carousel.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        showSlide(current - 1);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        showSlide(current + 1);
      }
    });
    showSlide(current);
  });
}
