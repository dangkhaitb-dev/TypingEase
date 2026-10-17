/* Product screenshots are real app captures. Switching previews changes both image and destination. */
(() => {
 const groups=[...document.querySelectorAll('[data-product-lang]')];
 if(!groups.length)return;
 const syncLanguage=()=>{
  if(groups.length<2)return;
  const lang=document.documentElement.lang==='vi'?'vi':'en';
  for(const group of groups)group.hidden=group.dataset.productLang!==lang;
 };
 syncLanguage();
 if(groups.length>1)new MutationObserver(syncLanguage).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 for(const group of groups){
  const image=group.querySelector('.product-preview-image');
  const link=group.querySelector('.product-preview-link');
  const cta=group.querySelector('[data-preview-cta]');
  const description=group.querySelector('[data-preview-description]');
  const address=group.querySelector('[data-preview-address]');
  group.querySelectorAll('[data-product-view]').forEach(button=>{
   button.addEventListener('click',()=>{
    group.querySelectorAll('[data-product-view]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
    image.src=button.dataset.image;image.alt=button.dataset.description;
    link.href=button.dataset.route;cta.href=button.dataset.route;
    cta.firstChild.textContent=button.dataset.cta+' ';
    description.textContent=button.dataset.description;address.textContent=button.dataset.route;
   });
  });
 }
})();

(() => {
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 const arc=document.querySelector('.product-arc');
 if(arc){
  const cards=[...arc.querySelectorAll('[data-arc-index]')];
  let center=0,hover=false,focused=false,paused=reduce.matches,visible=false,timer;
  let drag=null,suppressClick=false;const stage=arc.querySelector('.product-arc-stage');
  const layout=()=>{
   cards.forEach((card,i)=>{
    let offset=i-center;if(offset>cards.length/2)offset-=cards.length;if(offset< -cards.length/2)offset+=cards.length;
    const a=Math.abs(offset);const values={'offset':offset,'y':a*a*14+'px','z':-a*160+'px','angle':-offset*14+'deg','opacity':a>3?0:1-a*.12,'blur':(a>=2?(a-1)*1.5:0)+'px'};
    for(const [key,value] of Object.entries(values))card.style.setProperty('--arc-'+key,value);
    card.style.zIndex=20-a;card.inert=a>3;card.dataset.arcSlot=offset;
    if(i===center)card.setAttribute('aria-current','true');else card.removeAttribute('aria-current');
   });
  };
  const schedule=()=>{clearTimeout(timer);if(!paused&&!hover&&!focused&&!drag&&visible&&!document.hidden)timer=setTimeout(()=>{center=(center+1)%cards.length;layout();schedule()},3600)};
  const move=delta=>{center=(center+delta+cards.length)%cards.length;layout();schedule()};
  cards.forEach((card,i)=>card.addEventListener('click',event=>{if(suppressClick){event.preventDefault();suppressClick=false;return}if(center!==i){event.preventDefault();center=i;layout();schedule()}}));
  stage.addEventListener('dragstart',event=>event.preventDefault());
  stage.addEventListener('pointerdown',event=>{if(event.button!==0)return;suppressClick=false;drag={id:event.pointerId,x:event.clientX,y:event.clientY,dx:0,active:false};schedule()});
  stage.addEventListener('pointermove',event=>{if(!drag||event.pointerId!==drag.id)return;const dx=event.clientX-drag.x,dy=event.clientY-drag.y;if(!drag.active){if(Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>10){drag=null;schedule();return}if(Math.abs(dx)<10)return;drag.active=true;stage.setPointerCapture(event.pointerId);stage.classList.add('is-dragging')}drag.dx=dx;stage.style.setProperty('--drag-x',dx+'px')});
  const finishDrag=event=>{if(!drag||event.pointerId!==drag.id)return;const {active,dx}=drag;drag=null;stage.classList.remove('is-dragging');stage.style.removeProperty('--drag-x');if(stage.hasPointerCapture(event.pointerId))stage.releasePointerCapture(event.pointerId);if(active){suppressClick=true;if(event.type!=='pointercancel'&&Math.abs(dx)>45)move(dx<0?1:-1)}schedule()};
  stage.addEventListener('pointerup',finishDrag);stage.addEventListener('pointercancel',finishDrag);
  arc.addEventListener('mouseenter',()=>{hover=true;schedule()});arc.addEventListener('mouseleave',()=>{hover=false;schedule()});
  arc.addEventListener('focusin',()=>{focused=true;schedule()});arc.addEventListener('focusout',event=>{focused=arc.contains(event.relatedTarget);schedule()});
  arc.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();move(event.key==='ArrowRight'?1:-1)}});
  document.addEventListener('visibilitychange',schedule);
  reduce.addEventListener('change',()=>{paused=reduce.matches;schedule()});
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule()},{threshold:.15}).observe(arc);
  layout();schedule();
 }
 if(!reduce.matches){
  const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}},{threshold:.08});
  document.querySelectorAll('.product-heading,.product-browser,.product-step,.product-statement-content,.product-detail-card,.product-questions,.product-final,.product-person').forEach(el=>{el.classList.add('product-reveal');observer.observe(el)});
 }
})();
(() => {
 const people=document.querySelector('.product-people');if(!people)return;
 const cards=[...people.querySelectorAll('.product-person')];let index=Math.floor((cards.length-1)/2),drag=null;
 const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
 const step=()=>cards[0].offsetWidth+18;
 const go=(next,instant=false)=>{index=Math.max(0,Math.min(cards.length-1,next));people.scrollTo({left:index*step(),behavior:instant||reduced()?'instant':'smooth'})};
 document.querySelector('[data-people-prev]')?.addEventListener('click',()=>go(Math.round(people.scrollLeft/step())-1));
 document.querySelector('[data-people-next]')?.addEventListener('click',()=>go(Math.round(people.scrollLeft/step())+1));
 people.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){event.preventDefault();go(event.key==='Home'?0:event.key==='End'?cards.length-1:Math.round(people.scrollLeft/step())+(event.key==='ArrowRight'?1:-1))}});
 people.addEventListener('pointerdown',event=>{if(event.pointerType!=='mouse'||event.button!==0)return;drag={id:event.pointerId,x:event.clientX,left:people.scrollLeft};people.setPointerCapture(event.pointerId);people.classList.add('is-dragging')});
 people.addEventListener('pointermove',event=>{if(drag&&event.pointerId===drag.id)people.scrollLeft=drag.left+drag.x-event.clientX});
 const finish=event=>{if(!drag||event.pointerId!==drag.id)return;drag=null;people.classList.remove('is-dragging');if(people.hasPointerCapture(event.pointerId))people.releasePointerCapture(event.pointerId);go(Math.round(people.scrollLeft/step()))};
 people.addEventListener('pointerup',finish);people.addEventListener('pointercancel',finish);
 people.addEventListener('scrollend',()=>{index=Math.round(people.scrollLeft/step())});
 let oldWidth=0;new ResizeObserver(()=>{if(people.clientWidth!==oldWidth){oldWidth=people.clientWidth;go(index,true)}}).observe(people);
 go(index,true);
})();
(() => {
 const steps=document.querySelector('.product-steps');if(!steps)return;
 const move=direction=>steps.scrollBy({left:direction*(steps.querySelector('.product-step').getBoundingClientRect().width+20),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 document.querySelector('[data-step-prev]')?.addEventListener('click',()=>move(-1));
 document.querySelector('[data-step-next]')?.addEventListener('click',()=>move(1));
})();
