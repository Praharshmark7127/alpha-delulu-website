/* Alpha Delulu — small helpers: mobile menu + contact form */
(function () {
  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // "What do you need help with?" chips
  var chips = document.querySelectorAll('.chip');
  var need = document.getElementById('ad-need');
  Array.prototype.forEach.call(chips, function (chip) {
    chip.addEventListener('click', function () {
      Array.prototype.forEach.call(chips, function (c) { c.setAttribute('aria-pressed', 'false'); });
      chip.setAttribute('aria-pressed', 'true');
      if (need) need.value = chip.getAttribute('data-need');
    });
  });

  // Contact form: shows the thank-you screen.
  // If you add a real form endpoint in the form's action="", the form sends normally instead.
  var form = document.getElementById('contact-form');
  var thanks = document.getElementById('contact-thanks');
  var again = document.getElementById('contact-again');
  if (form && thanks) {
    form.addEventListener('submit', function (e) {
      if (form.getAttribute('action')) return;
      e.preventDefault();
      form.hidden = true;
      thanks.hidden = false;
      thanks.focus();
    });
  }
  if (again && form && thanks) {
    again.addEventListener('click', function () {
      form.reset();
      if (need) need.value = 'Not sure yet';
      Array.prototype.forEach.call(chips, function (c) {
        c.setAttribute('aria-pressed', c.getAttribute('data-need') === 'Not sure yet' ? 'true' : 'false');
      });
      thanks.hidden = true;
      form.hidden = false;
    });
  }
})();
