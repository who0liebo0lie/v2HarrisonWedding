document.addEventListener('DOMContentLoaded', function () {

  var neighborhoods = {
    pool: {
      title: 'Pool Deck',
      image: 'assets/neighborhoods/pool-deck.jpg',
      desc: 'Sun, splash, and endless lounge chairs. Pool Deck is the heart of daytime fun on board, with multiple pools, whirlpools, and poolside bites.',
      tiles: [
        { icon: '🏊', title: 'Main Pool', text: 'Two full-size pools plus whirlpools.' },
        { icon: '🍹', title: 'Swim-up bar', text: 'Frozen drinks without leaving the water.' },
        { icon: '🎵', title: 'Live DJ sets', text: 'Poolside music most afternoons.' }
      ]
    },
    central: {
      title: 'Central Park',
      image: 'assets/neighborhoods/central-park.jpg',
      desc: 'A lush, open-air neighborhood in the heart of the ship. Stroll through gardens, enjoy al fresco dining, live music, and handcrafted cocktails.',
      tiles: [
        { icon: '🌳', title: 'Living gardens', text: 'Over 12,000 real plants and trees.' },
        { icon: '🍷', title: 'Wine bar', text: 'Vintages by the glass under the open sky.' },
        { icon: '🎨', title: 'Art walk', text: 'Rotating gallery pieces along the path.' }
      ]
    },
    entertainment: {
      title: 'Entertainment Place',
      image: 'assets/neighborhoods/entertainment.jpg',
      desc: 'Big shows, bigger energy. Ice skating, an aqua theater, and Broadway-caliber performances every night of the cruise.',
      tiles: [
        { icon: '🎭', title: 'AquaTheater', text: 'High-dive and acrobatic shows.' },
        { icon: '⛸️', title: 'Ice rink', text: 'Live skating shows and open sessions.' },
        { icon: '🎬', title: 'Broadway shows', text: 'Full production musicals nightly.' }
      ]
    },
    spa: {
      title: 'Vitality Spa',
      image: 'assets/neighborhoods/vitality-spa.jpg',
      desc: 'A quiet retreat above it all. Treatments, saunas, and a fitness center with ocean views.',
      tiles: [
        { icon: '💆', title: 'Spa treatments', text: 'Massages, facials, and more.' },
        { icon: '🧖', title: 'Thermal suite', text: 'Saunas and steam rooms.' },
        { icon: '🏋️', title: 'Fitness center', text: 'Full gym with ocean-view cardio.' }
      ]
    },
    boardwalk: {
      title: 'Boardwalk',
      image: 'assets/neighborhoods/boardwalk.jpg',
      desc: 'Old-school seaside charm — carousel rides, an arcade, and a carousel of casual eats.',
      tiles: [
        { icon: '🎠', title: 'Carousel', text: 'A hand-carved carousel, free to ride.' },
        { icon: '🎮', title: 'Arcade', text: 'Classic and modern games.' },
        { icon: '🌭', title: 'Johnny Rockets', text: 'Classic American diner fare.' }
      ]
    },
    promenade: {
      title: 'Royal Promenade',
      image: 'assets/neighborhoods/promenade.jpg',
      desc: 'The ship\'s main street — shopping, parades, and people-watching from morning to night.',
      tiles: [
        { icon: '🛍️', title: 'Shops', text: 'Duty-free shopping and boutiques.' },
        { icon: '🎉', title: 'Parades', text: 'Surprise on-board celebrations.' },
        { icon: '☕', title: 'Café Promenade', text: 'Coffee and pastries around the clock.' }
      ]
    },
    youth: {
      title: 'Youth Zone',
      image: 'assets/neighborhoods/youth-zone.jpg',
      desc: 'Dedicated spaces for younger guests to play, make friends, and burn energy.',
      tiles: [
        { icon: '🧩', title: 'Adventure Ocean', text: 'Age-grouped activity programs.' },
        { icon: '🎳', title: 'Game zones', text: 'Interactive games and play areas.' },
        { icon: '🎈', title: 'Teen lounge', text: 'A dedicated hangout for teens.' }
      ]
    }
  };

  var buttons = document.querySelectorAll('.neighborhood-btn');
  var title = document.getElementById('guide-title');
  var desc = document.getElementById('guide-desc');
  var image = document.getElementById('guide-image');
  var tiles = document.getElementById('guide-tiles');

  function renderNeighborhood(key) {
    var n = neighborhoods[key];
    if (!n) return;
    title.textContent = n.title;
    desc.textContent = n.desc;
    image.src = n.image;
    image.alt = n.title + ' on Harmony of the Seas';
    tiles.innerHTML = '';
    n.tiles.forEach(function (t) {
      var div = document.createElement('div');
      div.className = 'highlight-tile';
      div.innerHTML = '<span class="h-icon">' + t.icon + '</span><b>' + t.title + '</b>' + t.text;
      tiles.appendChild(div);
    });
    buttons.forEach(function (b) { b.classList.toggle('active', b.dataset.neighborhood === key); });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () { renderNeighborhood(btn.dataset.neighborhood); });
  });

  renderNeighborhood('central');

  /* ---------- category modal ---------- */

  var categories = {
    dining: {
      title: 'Dining',
      intro: 'From quick poolside bites to a full dressed-up dinner, Harmony has something for every craving.',
      included: ['Windjammer Marketplace', 'Main Dining Room', 'El Loco Fresh', 'Café Promenade', 'Room service (standard menu)'],
      notincluded: ['Chops Grille (specialty)', "Giovanni's Italian Kitchen (specialty)", 'Izumi Hibachi & Sushi (specialty)', 'Samba Grill (specialty)']
    },
    entertainment: {
      title: 'Entertainment',
      intro: 'Broadway shows, ice skating, and aqua theater performances — most are included in your cruise fare.',
      included: ['Broadway-style musicals', 'Ice skating shows', 'AquaTheater shows', 'Comedy club (early shows)'],
      notincluded: ['Reserved premium seating', 'Late-night adult comedy shows (some sailings)']
    },
    drinks: {
      title: 'Drinks',
      intro: 'Handcrafted cocktails, wine, and mocktails across the ship.',
      included: ['Coffee, tea, and tap water', 'Standard juices at breakfast'],
      notincluded: ['Alcoholic beverages', 'Specialty coffee drinks', 'Bottled water and soda (unless on a beverage package)']
    },
    relaxation: {
      title: 'Relaxation',
      intro: 'Quiet corners of the ship for slowing down.',
      included: ['Pool deck loungers', 'Solarium access', 'Fitness center'],
      notincluded: ['Spa treatments', 'Thermal suite day pass', 'Cabana rentals']
    },
    evenings: {
      title: 'Evenings',
      intro: 'When the sun goes down, the ship lights up.',
      included: ['Live music in the Royal Promenade', 'Nightly entertainment schedule'],
      notincluded: ['Nightclub cover charges (select events)', 'Late-night specialty dining']
    },
    explore: {
      title: 'Explore',
      intro: 'Active and adventurous things to do on board.',
      included: ['Rock climbing wall', 'Mini golf', 'Sports court'],
      notincluded: ['FlowRider surf simulator (limited free sessions, additional sessions may have a wait)', 'Escape room (fee applies)']
    }
  };

  var backdrop = document.getElementById('category-backdrop');
  var modalTitle = document.getElementById('modal-title');
  var modalIntro = document.getElementById('modal-intro');
  var includedList = document.getElementById('included-items');
  var notincludedList = document.getElementById('notincluded-items');
  var tabBtns = document.querySelectorAll('.modal-tab-btn');
  var tabPanels = document.querySelectorAll('.modal-tab-panel');

  function openCategory(key) {
    var c = categories[key];
    if (!c) return;
    modalTitle.textContent = c.title;
    modalIntro.textContent = c.intro;
    includedList.innerHTML = c.included.map(function (i) { return '<li>' + i + '</li>'; }).join('');
    notincludedList.innerHTML = c.notincluded.map(function (i) { return '<li>' + i + '</li>'; }).join('');
    tabBtns.forEach(function (b, idx) { b.classList.toggle('active', idx === 0); });
    tabPanels.forEach(function (p, idx) { p.classList.toggle('active', idx === 0); });
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
  }

  function closeCategory() {
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
  }

  document.querySelectorAll('.category-tile').forEach(function (tile) {
    tile.addEventListener('click', function () { openCategory(tile.dataset.category); });
  });

  document.getElementById('modal-close').addEventListener('click', closeCategory);
  backdrop.addEventListener('click', function (e) { if (e.target === backdrop) closeCategory(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeCategory(); });

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      tabPanels.forEach(function (p) { p.classList.remove('active'); });
      btn.classList.add('active');
      document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
  });

});
