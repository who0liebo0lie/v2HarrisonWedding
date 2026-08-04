(() => {
  const events = [
    { key: 'whiteParty', label: 'Welcome Party' },
    { key: 'bingo', label: 'Bingo' },
    { key: 'pickleball', label: 'Pickleball' },
    { key: 'wedding', label: 'Wedding' },
  ];

  const form = document.getElementById('rsvp-form');
  const guestCount = document.getElementById('guest-count');
  const guestStack = document.getElementById('guest-stack');
  const guestTemplate = document.getElementById('guest-template');
  const status = document.getElementById('rsvp-status');
  const storedName = (localStorage.getItem('weddingGuestName') || '').trim();

  function eventMarkup(index, eventDef) {
    return `
      <section class="event-box">
        <h3>${eventDef.label}</h3>
        <div class="choice-row">
          <label>
            <input type="radio" name="guest-${index}-${eventDef.key}" value="yes">
            <span class="choice-chip">Yes</span>
          </label>
          <label>
            <input type="radio" name="guest-${index}-${eventDef.key}" value="no" checked>
            <span class="choice-chip">No</span>
          </label>
        </div>
      </section>
    `;
  }

  function applyGuestSummary(details) {
    const guestNum = details.dataset.index;
    const input = details.querySelector('.guest-name-input');
    const label = details.querySelector('.guest-summary-name');
    label.textContent = input.value.trim() || `Guest ${guestNum}`;
  }

  function wireGuestCard(details) {
    const input = details.querySelector('.guest-name-input');
    const bingoRadios = details.querySelectorAll('input[type="radio"][name$="-bingo"]');
    const bingoArea = details.querySelector('.bingo-clue');

    input.addEventListener('input', () => applyGuestSummary(details));

    function refreshBingoArea() {
      const selected = details.querySelector('input[type="radio"][name$="-bingo"]:checked');
      bingoArea.hidden = !(selected && selected.value === 'yes');
    }
    bingoRadios.forEach(radio => radio.addEventListener('change', refreshBingoArea));
    refreshBingoArea();
    applyGuestSummary(details);
  }

  function renderGuests() {
    const count = Number(guestCount.value);
    guestStack.innerHTML = '';
    for (let i = 1; i <= count; i += 1) {
      const fragment = guestTemplate.content.cloneNode(true);
      const details = fragment.querySelector('.guest-card');
      const pill = fragment.querySelector('.guest-pill');
      const nameInput = fragment.querySelector('.guest-name-input');
      const eventGrid = fragment.querySelector('.event-grid');
      const bingoText = fragment.querySelector('.guest-bingo-text');
      const overallYes = fragment.querySelector('.overall-yes');
      const overallNo = fragment.querySelector('.overall-no');

      details.dataset.index = String(i);
      if (i === 1) details.open = true;
      pill.textContent = `Guest ${i}`;
      nameInput.name = `guest-${i}-name`;
      bingoText.name = `guest-${i}-bingoFact`;
      overallYes.name = `guest-${i}-attendance`;
      overallNo.name = `guest-${i}-attendance`;
      eventGrid.innerHTML = events.map(eventDef => eventMarkup(i, eventDef)).join('');

      guestStack.appendChild(fragment);
      const appended = guestStack.lastElementChild;
      if (i === 1 && storedName) {
        appended.querySelector('.guest-name-input').value = storedName;
      }
      wireGuestCard(appended);
    }
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const names = [...form.querySelectorAll('.guest-name-input')].map(input => input.value.trim()).filter(Boolean);
    const friendly = names.length ? names.join(', ') : 'your group';
    status.hidden = false;
    status.innerHTML = `<strong>Thanks!</strong> We saved the design preview for ${friendly}. This version is set up for the updated multi-guest layout and event selections.`;
    status.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  guestCount.addEventListener('change', renderGuests);
  renderGuests();
})();
