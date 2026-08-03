(()=>{
  const host=document.getElementById('site-header');
  if(!host)return;
  const active=document.body.dataset.page||'';
  const links=[['home','index.html?skip=1','Home'],['story','our-story.html','Our Story'],['adventure','adventure.html','The Adventure'],['explore','explore.html','Explore'],['travel','travel.html','Travel'],['rsvp','rsvp.html','RSVP']];
  host.innerHTML=`<header class="shared-header"><a class="shared-brand" href="index.html?skip=1" aria-label="Harrison Set Sail home"><span>HARRISON</span><em>Set Sail</em><b aria-hidden="true">⚓</b></a><nav aria-label="Main navigation">${links.map(([key,href,label])=>`<a ${key===active?'class="active" aria-current="page"':''} href="${href}">${label}</a>`).join('')}</nav></header>`;
})();
