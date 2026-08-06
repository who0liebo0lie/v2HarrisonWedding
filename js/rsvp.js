document.addEventListener('DOMContentLoaded', function () {
  var countSelect = document.getElementById('guest-count');
  var stack = document.getElementById('guest-stack');
  var template = document.getElementById('guest-template');
  var form = document.getElementById('rsvp-form');
  var status = document.getElementById('rsvp-status');

  function buildGuestCards(count) {
    stack.innerHTML = '';
    for (var i = 1; i <= count; i++) {
      var node = template.content.cloneNode(true);
      var card = node.querySelector('.guest-card');
      var idx = node.querySelector('.guest-index');
      var nameInput = node.querySelector('.guest-name-input');
      var nameDisplay = node.querySelector('.guest-name-display');

      idx.textContent = 'Guest ' + i + ':';

      /* namespace radio groups per guest so each set behaves independently */
      ['overall-yes', 'overall-no'].forEach(function (cls) {
        var el = node.querySelector('.' + cls);
        if (el) el.name = 'overall-' + i;
      });
      ['wp-yes', 'wp-no'].forEach(function (cls) {
        var el = node.querySelector('.' + cls);
        if (el) el.name = 'wp-' + i;
      });
      ['bingo-yes', 'bingo-no'].forEach(function (cls) {
        var el = node.querySelector('.' + cls);
        if (el) el.name = 'bingo-' + i;
      });
      ['pb-yes', 'pb-no'].forEach(function (cls) {
        var el = node.querySelector('.' + cls);
        if (el) el.name = 'pb-' + i;
      });
      ['wed-yes', 'wed-no'].forEach(function (cls) {
        var el = node.querySelector('.' + cls);
        if (el) el.name = 'wed-' + i;
      });

      nameInput.addEventListener('input', function () {
        nameDisplay.textContent = nameInput.value || 'Guest';
      });

      var bingoYes = node.querySelector('.bingo-yes');
      var bingoClue = node.querySelector('.bingo-clue');
      bingoYes.addEventListener('change', function () { bingoClue.hidden = false; });
      node.querySelector('.bingo-no').addEventListener('change', function () { bingoClue.hidden = true; });

      stack.appendChild(node);
    }
  }

  countSelect.addEventListener('change', function () {
    buildGuestCards(parseInt(countSelect.value, 10));
  });

  buildGuestCards(parseInt(countSelect.value, 10));

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var guests = [];
    document.querySelectorAll('.guest-card').forEach(function (card) {
      var name = card.querySelector('.guest-name-input').value;
      var bingoText = card.querySelector('.guest-bingo-text');
      var bingoOptedIn = card.querySelector('.bingo-yes').checked;
      guests.push({
        name: name,
        attending: card.querySelector('.overall-yes').checked,
        welcomeParty: card.querySelector('.wp-yes').checked,
        bingo: bingoOptedIn,
        bingoFact: bingoOptedIn && bingoText ? bingoText.value : '',
        pickleball: card.querySelector('.pb-yes').checked,
        wedding: card.querySelector('.wed-yes').checked
      });
    });

    var payload = {
      guests: guests,
      note: document.getElementById('household-note').value,
      submittedAt: new Date().toISOString()
    };

    /* Placeholder persistence: writes to localStorage for now. Wire this to your
       live RSVP/invitation-tracking endpoint before launch, and forward any
       bingoFact values into data/bingo-facts.json per BINGO-SETUP.md. */
    var existing = JSON.parse(localStorage.getItem('rsvpResponses') || '[]');
    existing.push(payload);
    localStorage.setItem('rsvpResponses', JSON.stringify(existing));

    status.hidden = false;
    status.textContent = "Thank you! Your RSVP has been recorded on this device for now — we'll connect this to the live guest tracker before the site launches.";
    form.reset();
  });
});
