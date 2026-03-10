// FAQ accordion
document.querySelectorAll('.faq-item').forEach(function(item) {
  item.querySelector('.faq-q').addEventListener('click', function() {
    item.classList.toggle('open');
  });
});

// Scroll reveal
var revealEls = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.style.opacity  = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  revealEls.forEach(function(el) {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity .65s ease, transform .65s ease';
    var d = el.getAttribute('data-reveal-delay');
    if (d) el.style.transitionDelay = d + 'ms';
    io.observe(el);
  });
}