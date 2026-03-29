(function () {
  var root = document.querySelector('.farm-carousel');
  if (!root) return;

  var viewport = root.querySelector('.farm-carousel__viewport');
  var prev = root.querySelector('.farm-carousel__btn--prev');
  var next = root.querySelector('.farm-carousel__btn--next');
  if (!viewport || !prev || !next) return;

  function slideWidth() {
    return viewport.clientWidth || 1;
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
})();
