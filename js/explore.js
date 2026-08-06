(() => {
  const neighborhoods = {
    central: {
      title: 'Central Park',
      desc: 'A lush, open-air neighborhood in the heart of the ship. Stroll through gardens, enjoy al fresco dining, live music, and an atmosphere that feels tucked away from the rest of the ship.',
      image: 'assets/neighborhoods/central-park.jpg',
      venues: [
        { tag: 'Specialty Dining', name: '150 Central Park', desc: 'Upscale steakhouse with a quieter, date-night feel.' },
        { tag: 'Included', name: 'Park Café', desc: 'Fresh breakfast and lunch bites, including the famous roast-beef sandwich.' },
        { tag: 'Drinks', name: 'Trellis Bar', desc: 'Cocktails beneath the trees in the middle of the neighborhood.' },
        { tag: 'Specialty Dining', name: 'Chops Grille', desc: 'Classic steakhouse for celebratory dinners.' },
      ],
    },
    pool: {
      title: 'Pool Deck',
      desc: 'Sunshine, waterslides, whirlpools, the Solarium, and easy grab-and-go food make the Pool Deck the all-day energy center for sea days.',
      image: 'assets/v29/solarium.svg',
      venues: [
        { tag: 'Included', name: 'El Loco Fresh', desc: 'Tacos, burritos, and pool-day fuel without leaving the deck.' },
        { tag: 'Included', name: 'Solarium Bistro', desc: 'Casual bites with a calmer adults-only atmosphere nearby.' },
        { tag: 'Activity', name: 'Perfect Storm', desc: 'Thrill slides for anyone chasing a rush between meals.' },
        { tag: 'Drinks', name: 'Pool Bars', desc: 'Frozen drinks, cocktails, and something cold in hand.' },
      ],
    },
    entertainment: {
      title: 'Entertainment Place',
      desc: 'This neighborhood is built for shows, applause, and nighttime fun — from the main theater to comedy and big-production entertainment.',
      image: 'assets/neighborhoods/entertainment.jpg',
      venues: [
        { tag: 'Shows', name: 'Royal Theater', desc: 'Big production shows and headline entertainment.' },
        { tag: 'Shows', name: 'Studio B', desc: 'Ice-skating spectaculars and family-friendly performances.' },
        { tag: 'Nightlife', name: 'Comedy Live', desc: 'Stand-up and adult-leaning late-night laughs.' },
        { tag: 'Music', name: 'Jazz on 4', desc: 'A more intimate music stop when you want a moodier evening.' },
      ],
    },
    spa: {
      title: 'Vitality Spa',
      desc: 'A quieter zone for treatments, salon time, workouts, and a quick reset whenever you want your day to feel a little more restorative.',
      image: 'assets/v29/fitness.svg',
      venues: [
        { tag: 'Specialty', name: 'Vitality Spa', desc: 'Massages, facials, and spa treatments.' },
        { tag: 'Included', name: 'Fitness Center', desc: 'Ocean-view workouts and exercise classes.' },
        { tag: 'Included', name: 'Jogging Track', desc: 'Fresh-air movement without leaving the ship.' },
        { tag: 'Included', name: 'Vitality Café', desc: 'Light smoothies and juice-bar style snacks.' },
      ],
    },
    boardwalk: {
      title: 'Boardwalk',
      desc: 'Playful, lively, and great for groups — the Boardwalk is full of energy, family favorites, and the AquaTheater at the stern.',
      image: 'assets/neighborhoods/boardwalk.jpg',
      venues: [
        { tag: 'Shows', name: 'AquaTheater', desc: 'Dive shows and wow-factor evening performances.' },
        { tag: 'Included', name: 'Boardwalk Dog House', desc: 'Quick hot dogs and sausages for casual lunches.' },
        { tag: 'Specialty Dining', name: 'Johnny Rockets', desc: 'Classic diner burgers, fries, and shakes.' },
        { tag: 'Family', name: 'Carousel', desc: 'A nostalgic stop that feels fun at any age.' },
      ],
    },
    promenade: {
      title: 'Royal Promenade',
      desc: 'This indoor boulevard is where coffee stops, pizza runs, people-watching, and late-night ship energy all meet in one place.',
      image: 'assets/neighborhoods/promenade.jpg',
      venues: [
        { tag: 'Included', name: 'Café Promenade', desc: 'Coffee, pastries, sandwiches, and the late-night reliable.' },
        { tag: 'Included', name: 'Sorrento’s', desc: 'Pizza that somehow gets even better after a show.' },
        { tag: 'Drinks', name: 'Schooner Bar', desc: 'Cocktails and piano-bar energy.' },
        { tag: 'Explore', name: 'Shops & Boutiques', desc: 'The easiest place to browse and wander between plans.' },
      ],
    },
    youth: {
      title: 'Youth Zone',
      desc: 'Dedicated spaces for kids, tweens, and teens, with activities, games, and hangout areas designed to keep younger guests happy.',
      image: 'assets/neighborhoods/youth-zone.jpg',
      venues: [
        { tag: 'Family', name: 'Adventure Ocean', desc: 'Kids programming and supervised activities.' },
        { tag: 'Family', name: 'Teen Spaces', desc: 'Hangouts tailored to older kids and teens.' },
        { tag: 'Activity', name: 'Arcade', desc: 'Easy entertainment whenever the mood strikes.' },
        { tag: 'Family', name: 'Family Activities', desc: 'Games and drop-in fun that keep everyone moving.' },
      ],
    },
  };

  const categories = {
    Dining: {
      heading: 'What Are You Hungry For?',
      intro: 'From quick poolside bites to a full dressed-up dinner, Harmony has something for every craving.',
      filters: ['All Dining', 'Included', 'Specialty', 'Quick Bites', 'Coffee & Treats', 'Late Night'],
      items: [
        { name: 'Windjammer Marketplace', sentence: 'The answer when everyone wants something different. Build a plate, go back for seconds, and enjoy the ocean views.', neighborhood: 'Deck 16', label: 'Included · Casual · Great for groups', filterTags: ['Included'], section: 'Included Dining', image: 'assets/rebuilt/windjammer.jpg', neighborhoodKey: 'pool' },
        { name: 'Main Dining Room', sentence: 'Your classic cruise dinner moment — multiple courses, polished service, and everyone gathered around the table.', neighborhood: 'Decks 3–5', label: 'Included · Dinner · Assigned or flexible seating', filterTags: ['Included'], section: 'Included Dining', image: 'assets/rebuilt/main_dining.jpg', neighborhoodKey: 'entertainment' },
        { name: 'El Loco Fresh', sentence: 'Tacos, burritos, and pool-day fuel without changing out of your swimsuit.', neighborhood: 'Pool Deck', label: 'Included · Quick Bite', filterTags: ['Included', 'Quick Bites'], section: 'Included Dining', image: 'assets/rebuilt/el_loco.jpg', neighborhoodKey: 'pool' },
        { name: 'Café Promenade', sentence: 'Coffee, pastries, sandwiches, and the reliable late-night snack stop you’ll probably visit more than once.', neighborhood: 'Royal Promenade', label: 'Included · Coffee & Treats · Open extended hours', filterTags: ['Included', 'Coffee & Treats', 'Late Night'], section: 'Included Dining', image: 'assets/rebuilt/cafe_promenade.jpg', neighborhoodKey: 'promenade' },
        { name: 'Chops Grille', sentence: 'The celebratory steak dinner: premium cuts, classic sides, and an excellent excuse to dress up.', neighborhood: 'Central Park', label: 'Specialty Dining · Reservations recommended', filterTags: ['Specialty'], section: 'Specialty Dining', image: 'assets/rebuilt/chops.jpg', neighborhoodKey: 'central' },
        { name: 'Giovanni’s Italian Kitchen', sentence: 'Hand-tossed pizza, rich pasta, and family-style Italian food designed for sharing.', neighborhood: 'Boardwalk', label: 'Specialty Dining · Italian · Reservations recommended', filterTags: ['Specialty'], section: 'Specialty Dining', image: 'assets/rebuilt/giovannis.jpg', neighborhoodKey: 'boardwalk' },
        { name: 'Izumi Hibachi & Sushi', sentence: 'Dinner and a show, especially when the hibachi chef starts cooking tableside.', neighborhood: 'Boardwalk', label: 'Specialty Dining · Asian · Reservations recommended', filterTags: ['Specialty'], section: 'Specialty Dining', image: 'assets/rebuilt/izumi.jpg', neighborhoodKey: 'boardwalk' },
        { name: 'Samba Grill Brazilian Steakhouse', sentence: 'Come hungry — slow-roasted meats arrive tableside until you finally admit defeat.', neighborhood: 'Boardwalk', label: 'Specialty Dining · Brazilian steakhouse · Reservations recommended', filterTags: ['Specialty'], section: 'Specialty Dining', image: 'assets/rebuilt/samba.jpg', neighborhoodKey: 'boardwalk' },
        { name: 'Sorrento’s', sentence: 'Because somehow pizza tastes even better after a show, a party, or a very long day in the sun.', neighborhood: 'Royal Promenade', label: 'Included · Late-night favorite', filterTags: ['Included', 'Late Night'], section: 'Included Dining', image: 'assets/rebuilt/main_dining.jpg', neighborhoodKey: 'promenade' },
        { name: 'Park Café', sentence: 'Fresh salads, paninis, breakfast bites, and the famous roast-beef sandwich tucked inside Central Park.', neighborhood: 'Central Park', label: 'Included · Breakfast and lunch', filterTags: ['Included', 'Quick Bites'], section: 'Quick Bites & Treats', image: 'assets/rebuilt/cafe_promenade.jpg', neighborhoodKey: 'central' },
        { name: 'Boardwalk Dog House', sentence: 'An easy casual stop when you want something fast between activities.', neighborhood: 'Boardwalk', label: 'Included · Quick Bites', filterTags: ['Included', 'Quick Bites'], section: 'Quick Bites & Treats', image: 'assets/rebuilt/el_loco.jpg', neighborhoodKey: 'boardwalk' },
        { name: 'Solarium Bistro', sentence: 'A calmer choice for lighter breakfast and lunch moments near the adults-only retreat.', neighborhood: 'Pool Deck', label: 'Included · Quick Bites', filterTags: ['Included', 'Quick Bites'], section: 'Quick Bites & Treats', image: 'assets/rebuilt/windjammer.jpg', neighborhoodKey: 'pool' },
        { name: '150 Central Park', sentence: 'A refined specialty-dining experience made for a memorable night in Central Park.', neighborhood: 'Central Park', label: 'Specialty Dining · Reservations recommended', filterTags: ['Specialty'], section: 'Specialty Dining', image: 'assets/rebuilt/chops.jpg', neighborhoodKey: 'central' },
        { name: 'Jamie’s Italian', sentence: 'Rustic Italian favorites, rich pasta, and a relaxed dinner that is easy to share.', neighborhood: 'Central Park', label: 'Specialty Dining · Reservations recommended', filterTags: ['Specialty'], section: 'Specialty Dining', image: 'assets/rebuilt/giovannis.jpg', neighborhoodKey: 'central' },
        { name: 'Wonderland', sentence: 'Creative, theatrical dishes turn dinner into one of the ship’s most imaginative experiences.', neighborhood: 'Royal Promenade', label: 'Specialty Dining · Reservations recommended', filterTags: ['Specialty'], section: 'Specialty Dining', image: 'assets/rebuilt/izumi.jpg', neighborhoodKey: 'promenade' },
        { name: 'Sabor', sentence: 'Bold Mexican-inspired flavors, shareable plates, and a lively dinner atmosphere.', neighborhood: 'Boardwalk', label: 'Specialty Dining · Reservations recommended', filterTags: ['Specialty'], section: 'Specialty Dining', image: 'assets/rebuilt/el_loco.jpg', neighborhoodKey: 'boardwalk' },
        { name: 'Johnny Rockets', sentence: 'Burgers, fries, shakes, and classic diner energy right on the Boardwalk.', neighborhood: 'Boardwalk', label: 'Specialty Dining · Casual', filterTags: ['Specialty', 'Quick Bites'], section: 'Specialty Dining', image: 'assets/rebuilt/chops.jpg', neighborhoodKey: 'boardwalk' },
        { name: 'Mini Bites', sentence: 'A quick pool-deck stop for small plates when you want something easy between activities.', neighborhood: 'Pool Deck', label: 'Included · Quick Bites', filterTags: ['Included', 'Quick Bites'], section: 'Quick Bites & Treats', image: 'assets/rebuilt/el_loco.jpg', neighborhoodKey: 'pool' },
        { name: 'Vitality Café', sentence: 'Smoothies, lighter bites, and an easy post-workout refresh.', neighborhood: 'Vitality Spa', label: 'Quick Bites · Some items extra cost', filterTags: ['Quick Bites', 'Coffee & Treats'], section: 'Quick Bites & Treats', image: 'assets/rebuilt/cafe_promenade.jpg', neighborhoodKey: 'spa' },
        { name: 'Starbucks', sentence: 'Your familiar coffee order when vacation still requires your exact morning routine.', neighborhood: 'Boardwalk', label: 'Extra Cost · Coffee & Treats', filterTags: ['Coffee & Treats'], section: 'Cafés & Treats', image: 'assets/rebuilt/cafe_promenade.jpg', neighborhoodKey: 'boardwalk' },
        { name: 'Coastal Kitchen', sentence: 'A polished suite-guest dining option with a calmer setting and elevated menus.', neighborhood: 'Deck 17', label: 'Eligibility required · Reservations recommended', filterTags: ['Specialty'], section: 'Specialty Dining', image: 'assets/rebuilt/main_dining.jpg', neighborhoodKey: 'central' },
      ],
    },
    Entertainment: {
      heading: 'What Should We Watch?',
      intro: 'Big productions, ice shows, family fun, and music moments all have a home on Harmony.',
      filters: ['All Entertainment', 'Included', 'Specialty / Extra Cost', 'Shows', 'Live Music', 'Family Entertainment', 'Nightlife'],
      items: [
        { name: 'Royal Theater', sentence: 'The main stage for large production shows and headline entertainment.', neighborhood: 'Entertainment Place', label: 'Included · Shows', filterTags: ['Included', 'Shows'], section: 'Shows', image: 'assets/neighborhoods/entertainment.jpg', neighborhoodKey: 'entertainment' },
        { name: 'Studio B', sentence: 'Ice-skating spectacles that feel like a full event all by themselves.', neighborhood: 'Entertainment Place', label: 'Included · Shows', filterTags: ['Included', 'Shows'], section: 'Shows', image: 'assets/neighborhoods/entertainment.jpg', neighborhoodKey: 'entertainment' },
        { name: 'AquaTheater', sentence: 'The outdoor dive show venue with one of the ship’s most memorable nighttime experiences.', neighborhood: 'Boardwalk', label: 'Included · Shows', filterTags: ['Included', 'Shows'], section: 'Shows', image: 'assets/neighborhoods/boardwalk.jpg', neighborhoodKey: 'boardwalk' },
        { name: 'Comedy Live', sentence: 'For guests who want laughs later in the evening.', neighborhood: 'Entertainment Place', label: 'Included · Nightlife', filterTags: ['Included', 'Nightlife'], section: 'Nightlife', image: 'assets/neighborhoods/entertainment.jpg', neighborhoodKey: 'entertainment' },
      ],
    },
    Drinks: {
      heading: 'Where Should We Grab a Drink?',
      intro: 'From coffee runs to cocktails at sunset, there’s a drink stop for every mood.',
      filters: ['All Drinks', 'Included', 'Specialty', 'Cocktails', 'Wine', 'Coffee & Tea', 'Late Night'],
      items: [
        { name: 'Trellis Bar', sentence: 'A charming Central Park stop for cocktails beneath the trees.', neighborhood: 'Central Park', label: 'Specialty · Cocktails', filterTags: ['Specialty', 'Cocktails'], section: 'Cocktails', image: 'assets/neighborhoods/central-park.jpg', neighborhoodKey: 'central' },
        { name: 'Schooner Bar', sentence: 'A classic cruise favorite with lounge seating and a social feel.', neighborhood: 'Royal Promenade', label: 'Specialty · Cocktails', filterTags: ['Specialty', 'Cocktails', 'Late Night'], section: 'Cocktails', image: 'assets/neighborhoods/promenade.jpg', neighborhoodKey: 'promenade' },
        { name: 'Café Promenade', sentence: 'Coffee, tea, pastries, and a dependable caffeine reset.', neighborhood: 'Royal Promenade', label: 'Included · Coffee & Tea', filterTags: ['Included', 'Coffee & Tea'], section: 'Coffee & Tea', image: 'assets/rebuilt/cafe_promenade.jpg', neighborhoodKey: 'promenade' },
        { name: 'Pool Bars', sentence: 'Frozen drinks and sunshine in a cup.', neighborhood: 'Pool Deck', label: 'Specialty · Cocktails', filterTags: ['Specialty', 'Cocktails'], section: 'Cocktails', image: 'assets/v29/solarium.svg', neighborhoodKey: 'pool' },
      ],
    },
    Relaxation: {
      heading: 'Ready to Relax?',
      intro: 'Quiet spaces, spa moments, and slower ship corners for when you want a reset.',
      filters: ['All Relaxation', 'Included', 'Specialty', 'Pools', 'Spa', 'Fitness', 'Quiet Spaces'],
      items: [
        { name: 'Vitality Spa', sentence: 'Massages, facials, and a full “turn my brain off” moment.', neighborhood: 'Vitality Spa', label: 'Specialty · Spa', filterTags: ['Specialty', 'Spa'], section: 'Spa', image: 'assets/neighborhoods/vitality-spa.jpg', neighborhoodKey: 'spa' },
        { name: 'Fitness Center', sentence: 'Ocean-view workouts for anyone who likes to balance vacation with movement.', neighborhood: 'Vitality Spa', label: 'Included · Fitness', filterTags: ['Included', 'Fitness'], section: 'Fitness', image: 'assets/neighborhoods/vitality-spa.jpg', neighborhoodKey: 'spa' },
        { name: 'Solarium', sentence: 'Adults-only calm with pools, loungers, and a slower pace.', neighborhood: 'Pool Deck', label: 'Included · Pools · Quiet Spaces', filterTags: ['Included', 'Pools', 'Quiet Spaces'], section: 'Quiet Spaces', image: 'assets/v29/solarium.svg', neighborhoodKey: 'pool' },
        { name: 'Central Park Seating', sentence: 'A peaceful corner to walk, sit, or let the ship feel surprisingly still.', neighborhood: 'Central Park', label: 'Included · Quiet Spaces', filterTags: ['Included', 'Quiet Spaces'], section: 'Quiet Spaces', image: 'assets/neighborhoods/central-park.jpg', neighborhoodKey: 'central' },
      ],
    },
    Evenings: {
      heading: 'What’s the Evening Plan?',
      intro: 'Think shows, music, cocktails, and wherever the night naturally goes next.',
      filters: ['All Evenings', 'Included', 'Specialty', 'Shows', 'Music', 'Dancing', 'Late Night'],
      items: [
        { name: 'Royal Theater', sentence: 'A classic evening anchor for anyone wanting a full production show.', neighborhood: 'Entertainment Place', label: 'Included · Shows', filterTags: ['Included', 'Shows'], section: 'Shows', image: 'assets/neighborhoods/entertainment.jpg', neighborhoodKey: 'entertainment' },
        { name: 'AquaTheater', sentence: 'An after-dark favorite with ocean air and dramatic performances.', neighborhood: 'Boardwalk', label: 'Included · Shows', filterTags: ['Included', 'Shows'], section: 'Shows', image: 'assets/neighborhoods/boardwalk.jpg', neighborhoodKey: 'boardwalk' },
        { name: 'Live Music Lounges', sentence: 'The easy answer when you want a drink, a seat, and a soundtrack.', neighborhood: 'Royal Promenade', label: 'Included · Music', filterTags: ['Included', 'Music'], section: 'Music', image: 'assets/neighborhoods/promenade.jpg', neighborhoodKey: 'promenade' },
        { name: 'Late-Night Pizza Run', sentence: 'A low-pressure plan that somehow becomes everyone’s favorite plan.', neighborhood: 'Royal Promenade', label: 'Included · Late Night', filterTags: ['Included', 'Late Night'], section: 'Late Night', image: 'assets/rebuilt/main_dining.jpg', neighborhoodKey: 'promenade' },
      ],
    },
    Explore: {
      heading: 'Where Should We Wander?',
      intro: 'Use this as your shipwide shortcut to neighborhoods, activities, and easy things to try when you want to roam.',
      filters: ['All Explore', 'Included', 'Specialty', 'Neighborhoods', 'Activities', 'Family', 'Adventure'],
      items: [
        { name: 'Central Park', sentence: 'A garden neighborhood with dining, cocktails, and one of the prettiest walks on the ship.', neighborhood: 'Central Park', label: 'Included · Neighborhoods', filterTags: ['Included', 'Neighborhoods'], section: 'Neighborhoods', image: 'assets/neighborhoods/central-park.jpg', neighborhoodKey: 'central' },
        { name: 'Boardwalk', sentence: 'Classic cruise fun, family energy, and the AquaTheater all in one place.', neighborhood: 'Boardwalk', label: 'Included · Family', filterTags: ['Included', 'Family'], section: 'Neighborhoods', image: 'assets/neighborhoods/boardwalk.jpg', neighborhoodKey: 'boardwalk' },
        { name: 'Royal Promenade', sentence: 'Great for wandering, snacking, shopping, and seeing what you bump into next.', neighborhood: 'Royal Promenade', label: 'Included · Activities', filterTags: ['Included', 'Activities'], section: 'Activities', image: 'assets/neighborhoods/promenade.jpg', neighborhoodKey: 'promenade' },
        { name: 'Perfect Storm', sentence: 'For anyone in the group who hears “waterslide” and immediately says yes.', neighborhood: 'Pool Deck', label: 'Included · Adventure', filterTags: ['Included', 'Adventure'], section: 'Adventure', image: 'assets/v29/solarium.svg', neighborhoodKey: 'pool' },
      ],
    },
  };

  const titleEl = document.getElementById('guide-title');
  const descEl = document.getElementById('guide-desc');
  const imageEl = document.getElementById('guide-image');
  const venuesEl = document.getElementById('guide-venues');
  const neighborhoodButtons = [...document.querySelectorAll('.neighborhood-btn')];

  const backdrop = document.getElementById('category-backdrop');
  const modal = document.getElementById('category-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalIntro = document.getElementById('modal-intro');
  const filterTabs = document.getElementById('filter-tabs');
  const modalBody = document.getElementById('modal-body');

  let currentNeighborhood = 'central';
  let currentCategory = null;
  let currentFilter = null;
  let showAllDining = false;
  let previousFocus = null;

  function renderNeighborhood(key) {
    const data = neighborhoods[key];
    if (!data) return;
    currentNeighborhood = key;
    titleEl.textContent = data.title;
    descEl.textContent = data.desc;
    imageEl.src = data.image;
    imageEl.alt = `${data.title} on Harmony of the Seas`;
    venuesEl.innerHTML = data.venues.map(item => `
      <article class="venue-card">
        <span class="tag">${item.tag}</span>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </article>
    `).join('');
    neighborhoodButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.neighborhood === key));
  }

  function niceCategoryKey(filter) {
    return filter === 'All Dining' ? 'All Dining' : filter;
  }

  function filteredItems(categoryConfig) {
    const allItems = categoryConfig.items;
    if (!currentFilter || currentFilter.startsWith('All')) return allItems;
    return allItems.filter(item => item.filterTags.includes(currentFilter));
  }

  function buildCard(item) {
    return `
      <article class="modal-card">
        <img src="${item.image}" alt="${item.name}">
        <div class="card-copy">
          <h4>${item.name}</h4>
          <p>${item.sentence}</p>
          <div class="meta"><strong>${item.label}</strong><br>${item.neighborhood}</div>
          ${item.neighborhoodKey ? `<div style="margin-top:12px"><button class="link-pill" type="button" data-goto="${item.neighborhoodKey}">View this neighborhood</button></div>` : ''}
        </div>
      </article>`;
  }

  function renderModalSections(items, categoryConfig) {
    const grouped = {};
    items.forEach(item => {
      grouped[item.section] ||= [];
      grouped[item.section].push(item);
    });

    const sectionOrder = Object.keys(grouped);
    modalBody.innerHTML = sectionOrder.map(sectionName => `
      <section class="modal-section">
        <h3>${sectionName}</h3>
        <div class="modal-grid">
          ${grouped[sectionName].map(buildCard).join('')}
        </div>
      </section>
    `).join('');

    if (currentCategory === 'Dining' && (!currentFilter || currentFilter === 'All Dining')) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'show-all-btn';
      btn.textContent = showAllDining ? 'Show the featured dining cards' : 'Show every dining option';
      btn.addEventListener('click', () => {
        showAllDining = !showAllDining;
        renderModal();
      });
      modalBody.appendChild(btn);
    }
  }

  function renderModal() {
    const categoryConfig = categories[currentCategory];
    modalTitle.textContent = categoryConfig.heading;
    modalIntro.textContent = categoryConfig.intro;

    filterTabs.innerHTML = categoryConfig.filters.map(filter => `
      <button type="button" class="filter-tab ${filter === currentFilter ? 'active' : ''}" data-filter="${filter}">${filter}</button>
    `).join('');

    let items = filteredItems(categoryConfig);
    if (currentCategory === 'Dining' && (!currentFilter || currentFilter === 'All Dining') && !showAllDining) {
      items = items.slice(0, 8);
    }
    renderModalSections(items, categoryConfig);

    filterTabs.querySelectorAll('.filter-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        currentFilter = btn.dataset.filter;
        showAllDining = false;
        renderModal();
      });
    });

    modalBody.querySelectorAll('[data-goto]').forEach(btn => {
      btn.addEventListener('click', () => {
        closeModal();
        renderNeighborhood(btn.dataset.goto);
        document.querySelector('.ship-zone').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function trapFocus(event) {
    if (!backdrop.classList.contains('open') || event.key !== 'Tab') return;
    const focusables = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      last.focus();
      event.preventDefault();
    } else if (!event.shiftKey && document.activeElement === last) {
      first.focus();
      event.preventDefault();
    }
  }

  function openModal(categoryName) {
    previousFocus = document.activeElement;
    currentCategory = categoryName;
    currentFilter = categories[categoryName].filters[0];
    showAllDining = false;
    renderModal();
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    setTimeout(() => modalClose.focus(), 20);
  }

  function closeModal() {
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    modalBody.scrollTop = 0;
    if (previousFocus) previousFocus.focus();
  }

  neighborhoodButtons.forEach(btn => {
    btn.addEventListener('click', () => renderNeighborhood(btn.dataset.neighborhood));
  });

  document.querySelectorAll('.category-tile').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.category));
  });

  modalClose.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) closeModal();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && backdrop.classList.contains('open')) closeModal();
    trapFocus(event);
  });

  renderNeighborhood('central');
})();
