document.querySelectorAll('nav.main-nav a').forEach(function (link) {
  link.addEventListener('click', function () {
    var toggle = document.getElementById('nav-toggle');
    if (toggle) toggle.checked = false;
  });
});

// Fade-and-slide-in as sections scroll into view (skipped if the browser can't do it)
if ('IntersectionObserver' in window) {
  var items = document.querySelectorAll('.card, .price-card, .blog-card, .step, .faq-item, section h2, .section-lead');
  document.documentElement.classList.add('js');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
}
