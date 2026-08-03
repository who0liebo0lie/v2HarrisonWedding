const neighborhoods={
  central:{title:'Central Park',description:'A lush, open-air neighborhood in the heart of the ship. Stroll through gardens, enjoy al fresco dining, live music, and handcrafted cocktails.',image:'assets/neighborhoods/central-park.jpg',venues:[
    {name:'150 Central Park',desc:'Upscale steakhouse with premium cuts and polished service.',type:'Specialty',location:'Deck 8 · Midship',image:'assets/neighborhoods/central-park.jpg'},
    {name:"Jamie’s Italian",desc:'Rustic Italian favorites designed for sharing.',type:'Specialty',location:'Deck 8 · Aft',image:'assets/neighborhoods/central-park.jpg'},
    {name:'Park Café',desc:'Fresh salads, paninis, breakfast bites, and casual lunch.',type:'Included',location:'Deck 8 · Midship',image:'assets/neighborhoods/central-park.jpg'},
    {name:'Chops Grille',desc:'Classic steakhouse favorites with impeccable service.',type:'Specialty',location:'Deck 8 · Aft',image:'assets/neighborhoods/central-park.jpg'}]},
  pool:{title:'Pool Deck',description:'Sun, pools, ocean views, quick bites, and high-energy activities all in one place.',image:'assets/neighborhoods/pool-deck.jpg',venues:[
    {name:'Solarium',desc:'An adults-only retreat with ocean views and quiet spaces.',type:'Included',location:'Deck 15 · Forward',image:'assets/neighborhoods/pool-deck.jpg'},
    {name:'El Loco Fresh',desc:'Tacos, burritos, and easy pool-day fuel.',type:'Included',location:'Deck 15',image:'assets/neighborhoods/pool-deck.jpg'},
    {name:'The Perfect Storm',desc:'Three twisting waterslides for thrill seekers.',type:'Included',location:'Deck 16',image:'assets/neighborhoods/pool-deck.jpg'},
    {name:'Pool Bar',desc:'Frozen cocktails and cold drinks by the water.',type:'Specialty',location:'Deck 15',image:'assets/neighborhoods/pool-deck.jpg'}]},
  entertainment:{title:'Entertainment Place',description:'The heart of the ship’s live performances, ice shows, music, comedy, and evening excitement.',image:'assets/neighborhoods/entertainment.jpg',venues:[
    {name:'Royal Theater',desc:'Broadway-style productions and headline entertainment.',type:'Included',location:'Decks 4–5',image:'assets/neighborhoods/entertainment.jpg'},
    {name:'Studio B',desc:'Ice skating spectaculars and special events.',type:'Included',location:'Deck 4',image:'assets/neighborhoods/entertainment.jpg'},
    {name:'The Attic',desc:'Comedy, music, and late-night entertainment.',type:'Included',location:'Deck 4',image:'assets/neighborhoods/entertainment.jpg'},
    {name:'Casino Royale',desc:'Gaming tables, slots, and nightlife.',type:'Specialty',location:'Deck 4',image:'assets/neighborhoods/entertainment.jpg'}]},
  vitality:{title:'Vitality Spa',description:'Recharge with spa treatments, fitness classes, wellness services, and peaceful spaces.',image:'assets/neighborhoods/vitality-spa.jpg',venues:[
    {name:'Vitality Spa',desc:'Massages, facials, salon services, and restorative treatments.',type:'Specialty',location:'Decks 5–6',image:'assets/neighborhoods/vitality-spa.jpg'},
    {name:'Fitness Center',desc:'Ocean-view equipment and classes for every level.',type:'Included',location:'Deck 6',image:'assets/neighborhoods/vitality-spa.jpg'},
    {name:'Thermal Suite',desc:'A quiet specialty space for deep relaxation.',type:'Specialty',location:'Deck 6',image:'assets/neighborhoods/vitality-spa.jpg'},
    {name:'Vitality Café',desc:'Smoothies and lighter bites after a workout.',type:'Specialty',location:'Deck 6',image:'assets/neighborhoods/vitality-spa.jpg'}]},
  boardwalk:{title:'Boardwalk',description:'A lively family neighborhood with classic fun, casual bites, shows, and ocean views.',image:'assets/neighborhoods/boardwalk.jpg',venues:[
    {name:'AquaTheater',desc:'High-diving, aerial, and aquatic performances.',type:'Included',location:'Deck 6 · Aft',image:'assets/neighborhoods/boardwalk.jpg'},
    {name:'Boardwalk Dog House',desc:'Quick hot dogs and casual bites.',type:'Included',location:'Deck 6',image:'assets/neighborhoods/boardwalk.jpg'},
    {name:'Johnny Rockets',desc:'Burgers, shakes, and retro diner fun.',type:'Specialty',location:'Deck 6',image:'assets/neighborhoods/boardwalk.jpg'},
    {name:'Carousel',desc:'A classic ride for children and adults.',type:'Included',location:'Deck 6',image:'assets/neighborhoods/boardwalk.jpg'}]},
  promenade:{title:'Royal Promenade',description:'The lively indoor boulevard for coffee, pizza, shopping, parades, and people-watching.',image:'assets/neighborhoods/promenade.jpg',venues:[
    {name:'Café Promenade',desc:'Coffee, pastries, sandwiches, and late-night snacks.',type:'Included',location:'Deck 5',image:'assets/neighborhoods/promenade.jpg'},
    {name:'Sorrento’s',desc:'Pizza by the slice throughout the day and evening.',type:'Included',location:'Deck 5',image:'assets/neighborhoods/promenade.jpg'},
    {name:'Rising Tide Bar',desc:'A moving bar connecting the Promenade and Central Park.',type:'Specialty',location:'Decks 5–8',image:'assets/neighborhoods/promenade.jpg'},
    {name:'Shops',desc:'Boutiques, souvenirs, and cruise essentials.',type:'Specialty',location:'Deck 5',image:'assets/neighborhoods/promenade.jpg'}]},
  youth:{title:'Youth Zone',description:'Dedicated spaces for children and teens with games, creative activities, and age-based programming.',image:'assets/neighborhoods/youth-zone.jpg',venues:[
    {name:'Adventure Ocean',desc:'Supervised activities for younger travelers.',type:'Included',location:'Deck 14',image:'assets/neighborhoods/youth-zone.jpg'},
    {name:'The Living Room',desc:'A social space designed for teens.',type:'Included',location:'Deck 15',image:'assets/neighborhoods/youth-zone.jpg'},
    {name:'Arcade',desc:'Video games and interactive entertainment.',type:'Specialty',location:'Deck 15',image:'assets/neighborhoods/youth-zone.jpg'},
    {name:'Science Lab',desc:'Hands-on experiments and creative learning.',type:'Included',location:'Deck 14',image:'assets/neighborhoods/youth-zone.jpg'}]}
};

const categoryData={
  dining:{title:'What Are You Hungry For?',intro:'From quick poolside bites to a full dressed-up dinner, Harmony has something for every craving.',tabs:['All Dining','Included','Specialty','Quick Bites','Coffee & Tea','Late Nights'],items:[
    ['Windjammer Marketplace','Endless choices, fresh flavors, and ocean views.','assets/neighborhoods/pool-deck.jpg','Included','Casual','Deck 16'],
    ['Main Dining Room','Multiple courses, polished service, and a perfect night together.','assets/neighborhoods/promenade.jpg','Included','Dinner','Decks 3–5'],
    ['El Loco Fresh','Tacos, burritos, and pool-day fuel.','assets/neighborhoods/pool-deck.jpg','Included','Quick Bites','Pool Deck'],
    ['Café Promenade','Coffee, pastries, sandwiches, and late-night snacks.','assets/neighborhoods/promenade.jpg','Included','Coffee & Tea','Royal Promenade'],
    ['Chops Grille','The celebratory steak dinner with premium cuts and classic sides.','assets/neighborhoods/central-park.jpg','Specialty','Dinner','Central Park'],
    ["Jamie’s Italian",'Rustic Italian favorites designed for sharing.','assets/neighborhoods/central-park.jpg','Specialty','Dinner','Central Park'],
    ['Izumi Hibachi & Sushi','Sushi and hibachi tableside—dinner and a show.','assets/neighborhoods/boardwalk.jpg','Specialty','Dinner','Deck 4'],
    ['Sorrento’s','Pizza by the slice and a dependable late-night favorite.','assets/neighborhoods/promenade.jpg','Included','Late Nights','Royal Promenade']]},
  entertainment:{title:'Ready for a Show?',intro:'Live music, stage productions, comedy, ice shows, and unforgettable performances.',tabs:['All Entertainment','Included','Specialty','Shows','Live Music','Family Entertainment','Nightlife'],items:[
    ['Royal Theater','Broadway-style productions and headline entertainment.','assets/neighborhoods/entertainment.jpg','Included','Shows','Entertainment Place'],
    ['Studio B','Ice skating spectaculars and special events.','assets/neighborhoods/entertainment.jpg','Included','Shows','Entertainment Place'],
    ['AquaTheater','High-diving, aerial, and aquatic performances.','assets/neighborhoods/boardwalk.jpg','Included','Family Entertainment','Boardwalk'],
    ['The Attic','Comedy, music, and late-night fun.','assets/neighborhoods/entertainment.jpg','Included','Nightlife','Entertainment Place'],
    ['Casino Royale','Gaming tables and slots.','assets/neighborhoods/entertainment.jpg','Specialty','Nightlife','Deck 4']]},
  drinks:{title:'What Are We Sipping?',intro:'Cocktails, wine, coffee, and easy places to meet before the next adventure.',tabs:['All Drinks','Included','Specialty','Cocktails','Wine','Coffee & Tea','Late Night'],items:[
    ['Trellis Bar','Cocktails beneath the trees in Central Park.','assets/neighborhoods/central-park.jpg','Specialty','Cocktails','Central Park'],
    ['Rising Tide Bar','A moving bar between the Promenade and Central Park.','assets/neighborhoods/promenade.jpg','Specialty','Cocktails','Royal Promenade'],
    ['Café Promenade','Coffee and tea with pastries and snacks.','assets/neighborhoods/promenade.jpg','Included','Coffee & Tea','Royal Promenade'],
    ['Boleros','Latin music, cocktails, and dancing.','assets/neighborhoods/promenade.jpg','Specialty','Late Night','Royal Promenade']]},
  relaxation:{title:'Time to Unwind',intro:'Pools, spa treatments, quiet corners, and places to recharge.',tabs:['All Relaxation','Included','Specialty','Pools','Spa','Fitness','Quiet Spaces'],items:[
    ['Solarium','An adults-only retreat with pools and ocean views.','assets/neighborhoods/pool-deck.jpg','Included','Quiet Spaces','Pool Deck'],
    ['Vitality Spa','Treatments and wellness for body and mind.','assets/neighborhoods/vitality-spa.jpg','Specialty','Spa','Vitality Spa'],
    ['Fitness Center','Ocean-view equipment and group classes.','assets/neighborhoods/vitality-spa.jpg','Included','Fitness','Vitality Spa'],
    ['Main Pools','Multiple pool areas for sun and swimming.','assets/neighborhoods/pool-deck.jpg','Included','Pools','Pool Deck']]},
  evenings:{title:'After the Sun Sets',intro:'Late-night bites, music, dancing, shows, and places to linger.',tabs:['All Evenings','Included','Specialty','Shows','Music','Dancing','Late Night'],items:[
    ['Royal Theater','A polished evening show.','assets/neighborhoods/entertainment.jpg','Included','Shows','Entertainment Place'],
    ['Boleros','Latin music, dancing, and cocktails.','assets/neighborhoods/promenade.jpg','Specialty','Dancing','Royal Promenade'],
    ['Sorrento’s','Pizza after a show or a long night.','assets/neighborhoods/promenade.jpg','Included','Late Night','Royal Promenade'],
    ['The Attic','Comedy and nightlife.','assets/neighborhoods/entertainment.jpg','Included','Music','Entertainment Place']]},
  explore:{title:'What Will You Discover?',intro:'Browse neighborhoods, activities, views, shops, and unexpected corners of the ship.',tabs:['All Explore','Included','Specialty','Neighborhoods','Activities','Family','Adventure'],items:[
    ['Central Park','A lush open-air neighborhood in the heart of the ship.','assets/neighborhoods/central-park.jpg','Included','Neighborhoods','Deck 8'],
    ['Boardwalk','Big flavor, bold games, and family fun.','assets/neighborhoods/boardwalk.jpg','Included','Family','Deck 6'],
    ['Royal Promenade','Boutiques, bites, and people-watching.','assets/neighborhoods/promenade.jpg','Included','Neighborhoods','Deck 5'],
    ['Perfect Storm','High-energy waterslides.','assets/neighborhoods/pool-deck.jpg','Included','Adventure','Pool Deck'],
    ['Arcade','Video games and interactive entertainment.','assets/neighborhoods/youth-zone.jpg','Specialty','Activities','Youth Zone']]}
};

const title=document.querySelector('#neighborhood-title');
const description=document.querySelector('#neighborhood-description');
const image=document.querySelector('#neighborhood-image');
const venueHeading=document.querySelector('#venue-heading');
const venueCards=document.querySelector('#venue-cards');

function renderNeighborhood(key){
  const n=neighborhoods[key];
  title.textContent=n.title;description.textContent=n.description;image.src=n.image;image.alt=`${n.title} neighborhood`;venueHeading.textContent=`Venues in ${n.title}`;
  venueCards.innerHTML=n.venues.map(v=>`<article class="venue-card"><img src="${v.image}" alt=""><div class="body"><span class="tag ${v.type==='Included'?'included':''}">${v.type}</span><h4>${v.name}</h4><p>${v.desc}</p><small>${v.location}${v.type==='Specialty'?' · Reservations may be recommended':''}</small></div></article>`).join('');
  document.querySelectorAll('[data-neighborhood]').forEach(b=>b.classList.toggle('active',b.dataset.neighborhood===key));
}
document.querySelectorAll('[data-neighborhood]').forEach(button=>button.addEventListener('click',()=>renderNeighborhood(button.dataset.neighborhood)));
renderNeighborhood('central');

const dialog=document.querySelector('#directory-dialog');
const directoryTitle=document.querySelector('#directory-title');
const directoryIntro=document.querySelector('#directory-intro');
const tabs=document.querySelector('#directory-tabs');
const grid=document.querySelector('#directory-grid');
let currentCategory='dining';

function normalizeTab(tab){return tab.replace(/^All\s+/,'');}
function renderDirectory(filter){
  const d=categoryData[currentCategory];
  const allLabel=d.tabs[0];
  const items=filter===allLabel?d.items:d.items.filter(item=>item[3]===filter||item[4]===filter);
  grid.innerHTML=items.map(item=>`<article><img src="${item[2]}" alt=""><div><h3>${item[0]}</h3><p>${item[1]}</p><p class="directory-meta"><strong>${item[3]}</strong><span>• ${item[4]}</span><span>• ${item[5]}</span></p>${item[3]==='Specialty'?'<p class="directory-meta"><span>Reservations may be recommended</span></p>':''}</div></article>`).join('');
  tabs.querySelectorAll('button').forEach(btn=>{const active=btn.textContent===filter;btn.classList.toggle('active',active);btn.setAttribute('aria-selected',active?'true':'false')});
}
function openDirectory(key){
  currentCategory=key;const d=categoryData[key];directoryTitle.textContent=d.title;directoryIntro.textContent=d.intro;
  tabs.innerHTML=d.tabs.map((tab,i)=>`<button type="button" role="tab" aria-selected="${i===0?'true':'false'}" class="${i===0?'active':''}">${tab}</button>`).join('');
  tabs.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>renderDirectory(button.textContent)));
  renderDirectory(d.tabs[0]);dialog.showModal();document.body.classList.add('modal-open');
}
document.querySelectorAll('[data-directory]').forEach(button=>button.addEventListener('click',()=>openDirectory(button.dataset.directory)));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()});
