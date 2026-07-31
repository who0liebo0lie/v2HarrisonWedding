document.addEventListener("DOMContentLoaded",()=>{
  const toggle=document.querySelector(".menu-toggle");
  const menu=document.querySelector(".site-menu");
  toggle?.addEventListener("click",()=>{const open=menu.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
  const page=document.body.dataset.page;
  document.querySelector(`.site-menu [data-page="${page}"]`)?.classList.add("active");
  document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items=document.querySelectorAll(".reveal");
  if(reduced||!("IntersectionObserver" in window)){items.forEach(el=>el.classList.add("is-visible"));return;}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}}),{threshold:.16});
  items.forEach(el=>observer.observe(el));
  const sky=document.querySelector(".cinematic-sky");
  if(sky){window.addEventListener("scroll",()=>{const y=Math.min(window.scrollY,700);sky.style.transform=`scale(1.01) translateY(${y*.09}px)`;},{passive:true});}
});