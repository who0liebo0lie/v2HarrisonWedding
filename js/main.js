document.addEventListener("DOMContentLoaded",()=>{
  const toggle=document.querySelector(".menu-toggle");
  const menu=document.querySelector(".site-menu");
  toggle?.addEventListener("click",()=>{const open=menu.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
  const page=document.body.dataset.page;
  document.querySelector(`.site-menu [data-page="${page}"]`)?.classList.add("active");
  document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items=document.querySelectorAll(".reveal");
  if(reduced||!("IntersectionObserver" in window)){items.forEach(el=>el.classList.add("is-visible"));}
  else{
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}}),{threshold:.16});
    items.forEach(el=>observer.observe(el));
  }
});

document.addEventListener("DOMContentLoaded",()=>{
  const body=document.body;
  const intro=document.querySelector(".landing-sequence");
  if ("scrollRestoration" in history) history.scrollRestoration="manual";
  window.scrollTo(0,0);
  if(!intro)return;
  const gate=document.querySelector("[data-sound-gate]");
  const audio=document.querySelector("[data-intro-audio]");
  let timer;
  const finish=()=>{
    intro.classList.add("sequence-done");
    body.classList.add("intro-complete");
    body.style.overflow="";
    window.scrollTo(0,0);
    if(audio){audio.pause();audio.currentTime=0;}
  };
  const start=(withSound)=>{
    window.scrollTo(0,0);
    gate?.classList.add("is-dismissed");
    intro.classList.remove("is-paused");
    if(withSound&&audio){audio.volume=.68;audio.play().catch(()=>{});}
    timer=window.setTimeout(finish,21400);
  };
  document.querySelector("[data-start-sound]")?.addEventListener("click",()=>start(true));
  document.querySelector("[data-start-silent]")?.addEventListener("click",()=>start(false));
  document.querySelector("[data-skip-intro]")?.addEventListener("click",()=>{
    window.clearTimeout(timer);
    gate?.classList.add("is-dismissed");
    intro.classList.add("is-skipped");
    window.setTimeout(finish,350);
  });
});
