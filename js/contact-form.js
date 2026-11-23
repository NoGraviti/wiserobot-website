// Sends the contact form to the WiseRobot n8n webhook (which emails hello@wiserobot.co.uk).
(function () {
  var form = document.querySelector('.contact-form');
  if (!form) return;
  var button = form.querySelector('button[type="submit"]');
  var status = document.createElement('p');
  status.setAttribute('role', 'status');
  form.appendChild(status);

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var data = {};
    new FormData(form).forEach(function (value, key) { data[key] = value; });
    button.disabled = true;
    status.textContent = 'Sending...';

    fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(function (response) {
      if (!response.ok) throw new Error('Request failed');
      form.innerHTML = '<h2>Thanks, we have your message.</h2><p>We will get back to you within one working day.</p>';
    }).catch(function () {
      button.disabled = false;
      status.textContent = 'Sorry, something went wrong sending your message. Please try again in a moment.';
    });
  });
})();
