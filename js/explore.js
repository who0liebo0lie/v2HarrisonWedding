(() => {
  const data={
    'Pool Deck':['Sunshine, swimming, and open-air fun high above the ocean.',['Main Pool','Solarium','Perfect Storm waterslides','Pool bars']],
    'Central Park':['A lush, open-air neighborhood in the heart of the ship, with gardens, dining, and evening music.',['150 Central Park','Chops Grille','Jamie’s Italian','Trellis Bar']],
    'Entertainment Place':['The ship’s energetic show district for live performances and unforgettable nights.',['Royal Theater','Studio B ice rink','Comedy club','Casino Royale']],
    'Boardwalk':['A playful open-air neighborhood with family attractions, casual dining, and the AquaTheater.',['AquaTheater','Boardwalk Dog House','Carousel','Johnny Rockets']],
    'Royal Promenade':['A lively indoor boulevard for cafés, shopping, music, parades, and people-watching.',['Café Promenade','Schooner Bar','Sorrento’s','Shopping']],
    'Youth Zone':['Dedicated spaces for kids and teens to play, create, and make new friends.',['Adventure Ocean','Teen spaces','Arcade','Family activities']],
    'Vitality Spa':['A peaceful retreat for treatments, fitness, and quiet time.',['Vitality Spa','Fitness Center','Salon','Wellness classes']]
  };
  const modal=document.querySelector('#neighborhood-modal');
  const title=document.querySelector('#neighborhood-title'); const copy=document.querySelector('#neighborhood-copy'); const venues=document.querySelector('#neighborhood-venues');
  document.querySelectorAll('.neighborhood').forEach(b=>b.addEventListener('click',()=>{const n=b.dataset.neighborhood;title.textContent=n;copy.textContent=data[n][0];venues.innerHTML=data[n][1].map(x=>`<li>${x}</li>`).join('');modal.classList.add('open')}));
  modal.querySelector('.modal-close').onclick=()=>modal.classList.remove('open'); modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};
  const stage=document.querySelector('#ship-interactive'), img=stage.querySelector('img'); let scale=1,rx=0,ry=0,down=false,x0=0,y0=0;
  const draw=()=>img.style.transform=`scale(${scale}) rotateX(${ry}deg) rotateY(${rx}deg)`;
  stage.addEventListener('wheel',e=>{e.preventDefault();scale=Math.max(1,Math.min(2.4,scale+(e.deltaY<0?.12:-.12)));draw()},{passive:false});
  stage.addEventListener('pointerdown',e=>{down=true;x0=e.clientX;y0=e.clientY;stage.setPointerCapture(e.pointerId)}); stage.addEventListener('pointermove',e=>{if(!down)return;rx=Math.max(-18,Math.min(18,rx+(e.clientX-x0)*.08));ry=Math.max(-10,Math.min(10,ry-(e.clientY-y0)*.05));x0=e.clientX;y0=e.clientY;draw()}); stage.addEventListener('pointerup',()=>down=false); stage.addEventListener('pointercancel',()=>down=false);
})();
