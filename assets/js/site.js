
"use strict";
document.addEventListener("DOMContentLoaded",()=>{
  const links=[...document.querySelectorAll('.day-jump a[href^="#day-"]')];
  const cards=[...document.querySelectorAll('.day-card[id^="day-"]')];
  if(!links.length||!cards.length)return;
  const map=new Map(links.map(a=>[a.getAttribute("href").slice(1),a]));
  const observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
    if(!visible.length)return;
    links.forEach(a=>a.classList.remove("active"));
    const active=map.get(visible[0].target.id);
    if(active) active.classList.add("active");
  },{rootMargin:"-25% 0px -60% 0px",threshold:[.1,.25,.5]});
  cards.forEach(c=>observer.observe(c));
});
