(function () {
  var root = document.querySelector('.farm-carousel');
  if (!root) return;

  var viewport = root.querySelector('.farm-carousel__viewport');
  var prev = root.querySelector('.farm-carousel__btn--prev');
  var next = root.querySelector('.farm-carousel__btn--next');
  var slides = root.querySelectorAll('.farm-carousel__slide');
  if (!viewport || !prev || !next || !slides.length) return;

  function slideWidth() {
    return viewport.clientWidth || 1;
  }

  function currentIndex() {
    var w = slideWidth();
    var i = Math.round(viewport.scrollLeft / w);
    return Math.max(0, Math.min(slides.length - 1, i));
  }

  function go(direction) {
    var i = currentIndex() + direction;
    i = Math.max(0, Math.min(slides.length - 1, i));
    var left = slides[i].offsetLeft;
    viewport.scrollTo({ left: left, behavior: 'smooth' });
  }

  prev.addEventListener('click', function () {
    go(-1);
  });
  next.addEventListener('click', function () {
    go(1);
  });
})();
