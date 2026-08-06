(() => {
  const gate = document.getElementById('welcome-gate');
  const form = document.getElementById('welcome-form');
  const closeBtn = document.getElementById('welcome-close');
  const error = document.getElementById('welcome-error');
  const first = document.getElementById('first-name');
  const last = document.getElementById('last-name');

  const storedName = localStorage.getItem('weddingGuestName');
  const entered = localStorage.getItem('weddingGateDismissed') === 'true';

  if (storedName) {
    const pieces = storedName.split(/\s+/);
    first.value = pieces.shift() || '';
    last.value = pieces.join(' ');
  }
  if (entered) gate.hidden = true;

  function saveAndClose() {
    const name = `${first.value.trim()} ${last.value.trim()}`.replace(/\s+/g, ' ').trim();
    localStorage.setItem('weddingGuestName', name);
    localStorage.setItem('weddingGateDismissed', 'true');
    gate.hidden = true;
  }

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!first.value.trim() || !last.value.trim()) {
      error.textContent = 'Please enter your first and last name to continue.';
      return;
    }
    error.textContent = '';
    saveAndClose();
  });

  closeBtn?.addEventListener('click', () => {
    if (first.value.trim() || last.value.trim()) saveAndClose();
    else gate.hidden = true;
  });
})();
