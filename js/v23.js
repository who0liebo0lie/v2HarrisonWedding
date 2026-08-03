const overlay=document.querySelector('#welcome-overlay');
const form=document.querySelector('#welcome-form');
const closeButton=document.querySelector('.welcome-close');
const params=new URLSearchParams(location.search);

if(params.get('skip')==='1'||sessionStorage.getItem('welcomeSeen')) overlay.hidden=true;

function recordVisit(){
  const now=new Date().toISOString();
  const payload={type:'visit',inviteCode:params.get('invite')||localStorage.getItem('inviteCode')||'',guestName:localStorage.getItem('weddingGuestName')||'',page:location.pathname,firstVisit:localStorage.getItem('firstVisit')||now,lastVisit:now};
  if(!localStorage.getItem('firstVisit'))localStorage.setItem('firstVisit',payload.firstVisit);
  localStorage.setItem('lastVisit',payload.lastVisit);
  const endpoint=window.WEDDING_BACKEND_URL||'';
  if(endpoint)fetch(endpoint,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain'},body:JSON.stringify(payload)}).catch(()=>{});
}
function enter(){
  const first=document.querySelector('#welcome-first').value.trim();
  const last=document.querySelector('#welcome-last').value.trim();
  localStorage.setItem('weddingGuestName',`${first} ${last}`.trim());
  localStorage.setItem('inviteCode',params.get('invite')||'');
  sessionStorage.setItem('welcomeSeen','1');
  overlay.hidden=true;
  recordVisit();
}
form.addEventListener('submit',e=>{e.preventDefault();enter()});
closeButton.addEventListener('click',()=>{sessionStorage.setItem('welcomeSeen','1');overlay.hidden=true;recordVisit()});
if(overlay.hidden)recordVisit();
