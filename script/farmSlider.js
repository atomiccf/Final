(function () {
  const root = document.querySelector('.farm-carousel');
  if (!root) return;

  const viewport = root.querySelector('.farm-carousel__viewport');
  const prev = root.querySelector('.farm-carousel__btn--prev');
  const next = root.querySelector('.farm-carousel__btn--next');
  if (!viewport || !prev || !next) return;

  const slides = viewport.querySelectorAll('.farm-carousel__slide');
  if (!slides.length) return;

  function slideWidth() {
    return viewport.clientWidth || 1;
  }

  /** Pixel widths so scrollWidth exceeds clientWidth (flex % + max-content breaks horizontal scroll). */
  function layoutSlides() {
    const w = slideWidth();
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.flex = '0 0 ' + w + 'px';
      slides[i].style.minWidth = w + 'px';
      slides[i].style.maxWidth = w + 'px';
    }
  }

  function go(direction) {
    viewport.scrollBy({ left: direction * slideWidth(), behavior: 'smooth' });
  }

  prev.addEventListener('click', function () {
    go(-1);
  });
  next.addEventListener('click', function () {
    go(1);
  });

  layoutSlides();
  window.addEventListener('resize', layoutSlides);

  if (typeof ResizeObserver !== 'undefined') {
    const resizeObserver = new ResizeObserver(layoutSlides);
    resizeObserver.observe(viewport);
  }

  window.addEventListener('load', layoutSlides);
})();
