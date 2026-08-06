document.addEventListener('DOMContentLoaded', function () {
  var gate = document.getElementById('welcome-gate');
  var form = document.getElementById('welcome-form');
  var closeBtn = document.getElementById('welcome-close');
  var error = document.getElementById('welcome-error');

  /* Edit GUEST_LIST_ENABLED to true and populate names below to require a real
     guest-list match. Left permissive by default so the page is easy to preview. */
  var GUEST_LIST_ENABLED = false;
  var GUEST_LIST = [
    /* { first: 'Jane', last: 'Doe' }, */
  ];

  function closeGate() {
    gate.style.display = 'none';
    sessionStorage.setItem('hss-guest-verified', '1');
  }

  if (sessionStorage.getItem('hss-guest-verified') === '1') {
    closeGate();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeGate);

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var first = document.getElementById('first-name').value.trim().toLowerCase();
      var last = document.getElementById('last-name').value.trim().toLowerCase();

      if (!first || !last) {
        error.textContent = 'Please enter your first and last name.';
        return;
      }

      if (GUEST_LIST_ENABLED) {
        var match = GUEST_LIST.some(function (g) {
          return g.first.toLowerCase() === first && g.last.toLowerCase() === last;
        });
        if (!match) {
          error.textContent = "We couldn't find that name on the guest list. Please check the spelling or reach out to Julia or Wesley.";
          return;
        }
      }

      error.textContent = '';
      closeGate();
    });
  }
});
