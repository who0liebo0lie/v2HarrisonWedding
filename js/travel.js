document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.faq-item');

  function closeAll() {
    items.forEach(function (i) { i.classList.remove('open'); });
  }

  items.forEach(function (item) {
    var q = item.querySelector('.faq-q');
    q.addEventListener('click', function (e) {
      e.stopPropagation();
      var wasOpen = item.classList.contains('open');
      closeAll();
      if (!wasOpen) item.classList.add('open');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.faq-item')) closeAll();
  });
});
