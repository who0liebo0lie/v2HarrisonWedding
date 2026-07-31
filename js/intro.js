(() => {
  const intro = document.querySelector('.intro');
  if (!intro) return;
  window.scrollTo(0,0);
  document.documentElement.style.overflow='hidden';
  const audio = document.querySelector('#intro-audio');
  const sound = document.querySelector('.sound');
  let playing=false;
  sound?.addEventListener('click', async () => {
    try {
      if (!playing){ await audio.play(); playing=true; sound.textContent='Sound off'; }
      else { audio.pause(); playing=false; sound.textContent='Sound on'; }
    } catch(e){ sound.textContent='Tap again for sound'; }
  });
  const finish=()=>{ intro.classList.add('done'); document.documentElement.style.overflow=''; audio?.pause(); setTimeout(()=>intro.remove(),900); };
  document.querySelector('.skip')?.addEventListener('click',finish);
  setTimeout(finish,22000);
  for(let i=0;i<34;i++){
    const s=document.createElement('i');
    s.style.left=(3+Math.random()*94)+'%'; s.style.top=(4+Math.random()*90)+'%';
    s.style.animationDelay=(Math.random()*4)+'s'; s.style.animationDuration=(3.5+Math.random()*4)+'s';
    s.style.width=s.style.height=(5+Math.random()*10)+'px';
    document.querySelector('.sparkles')?.appendChild(s);
  }
})();
