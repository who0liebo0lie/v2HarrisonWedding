(() => {
  const gate = document.querySelector('#welcome-gate');
  const form = document.querySelector('#welcome-form');
  const error = document.querySelector('#welcome-error');
  const firstInput = document.querySelector('#first-name');
  const lastInput = document.querySelector('#last-name');
  const params = new URLSearchParams(window.location.search);

  if (!gate || !form) return;

  function closeGate() {
    gate.hidden = true;
    gate.setAttribute('aria-hidden', 'true');
    document.body.classList.add('gate-open');
    document.body.style.overflow = '';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }

  function showGate() {
    gate.hidden = false;
    gate.removeAttribute('aria-hidden');
    document.body.classList.remove('gate-open');
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => firstInput?.focus(), 100);
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const first = firstInput.value.trim();
    const last = lastInput.value.trim();

    if (!first || !last) {
      error.textContent = 'Please enter both your first and last name.';
      (!first ? firstInput : lastInput).focus();
      return;
    }

    error.textContent = '';
    localStorage.setItem('weddingGuestFirstName', first);
    localStorage.setItem('weddingGuestLastName', last);
    localStorage.setItem('weddingGuestName', `${first} ${last}`);
    sessionStorage.setItem('weddingGateSeen', '1');
    closeGate();
  });

  if (params.has('skip') || sessionStorage.getItem('weddingGateSeen') === '1') {
    closeGate();
  } else {
    showGate();
  }
})();
