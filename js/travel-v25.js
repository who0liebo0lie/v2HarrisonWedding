(()=>{
const buttons=[...document.querySelectorAll('.faq-overlay button')];
const answer=document.querySelector('#faq-answer');
const text=answer?.querySelector('p');
const close=answer?.querySelector('button');
let active=null;
function hide(){if(active)active.setAttribute('aria-expanded','false');active=null;if(answer)answer.hidden=true;}
buttons.forEach((button,i)=>{
 button.id=`faq-question-${i+1}`;
 button.setAttribute('aria-controls','faq-answer');
 button.addEventListener('click',e=>{e.stopPropagation();if(active===button){hide();return;}hide();active=button;button.setAttribute('aria-expanded','true');text.textContent=button.dataset.answer;answer.hidden=false;});
});
close?.addEventListener('click',hide);
answer?.addEventListener('click',e=>e.stopPropagation());
document.addEventListener('click',e=>{if(!e.target.closest('.faq-overlay')&&!e.target.closest('#faq-answer'))hide();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')hide();});
})();
