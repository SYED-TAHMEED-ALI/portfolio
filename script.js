const root=document.documentElement;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let paused=reduced.matches;
const motion=document.querySelector('#motion');
function setMotion(){root.classList.toggle('paused',paused);motion.setAttribute('aria-pressed',String(paused));motion.setAttribute('aria-label',paused?'Resume animations':'Pause animations');motion.textContent=paused?'▶':'Ⅱ';}
setMotion();motion.addEventListener('click',()=>{paused=!paused;setMotion()});
reduced.addEventListener('change',e=>{paused=e.matches;setMotion()});
if('IntersectionObserver' in window){root.classList.add('js');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}
const skills=[['C','code'],['Python','code'],['C#','code'],['HTML','code'],['CSS','code'],['JavaScript','code'],['Assembly','code'],['MySQL (Basic)','code'],['Figma','design'],['Canva','design'],['Prototyping','design'],['QA basics','design'],['MS Excel','tools'],['MS Word','tools'],['PowerPoint','tools'],['Google Sheets','tools'],['Data entry','tools']];
function renderSkills(category){const list=document.querySelector('#skill-list');list.replaceChildren();const selected=skills.filter(s=>category==='all'||s[1]===category);selected.forEach(([name],i)=>{const el=document.createElement('span');el.className='skill';el.textContent=name;el.style.animationDelay=`${i*20}ms`;list.append(el)});document.querySelector('#skill-count').textContent=`${selected.length} skills · ${category==='all'?'Across development, design and productivity':category==='code'?'Development':category==='design'?'Design & QA':'Productivity'}`}
renderSkills('all');document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});renderSkills(button.dataset.filter)}));
let ticking=false;window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{const total=root.scrollHeight-innerHeight;document.querySelector('#progress').style.width=(total>0?scrollY/total*100:0)+'%';ticking=false});ticking=true}},{passive:true});
const stage=document.querySelector('.portrait-stage'),portrait=document.querySelector('.portrait-frame');stage.addEventListener('pointermove',e=>{if(paused||e.pointerType!=='mouse')return;const r=stage.getBoundingClientRect();portrait.style.transform=`rotate(5deg) rotateY(${(e.clientX-r.left-r.width/2)/35}deg) rotateX(${-(e.clientY-r.top-r.height/2)/45}deg)`});stage.addEventListener('pointerleave',()=>{portrait.style.transform=''});
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('syedtahmeedali12@gmail.com');status.textContent='Email copied. Let’s connect!'}catch{status.textContent='Copy this address: syedtahmeedali12@gmail.com'}});document.querySelector('#year').textContent=new Date().getFullYear();

(()=>{
 const intro=document.querySelector('#launch-intro');if(!intro)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;let seen=false;try{seen=sessionStorage.getItem('ta-launch-seen')==='1'}catch{}
 const finish=()=>{intro.classList.add('is-leaving');setTimeout(()=>intro.remove(),740)};
 if(reduced||seen){intro.remove();return}try{sessionStorage.setItem('ta-launch-seen','1')}catch{}
 const timer=setTimeout(finish,2650);intro.querySelector('[data-skip-intro]')?.addEventListener('click',()=>{clearTimeout(timer);finish()});
})();
(()=>{
 const glow=document.querySelector('#cursor-glow');if(!glow||matchMedia('(pointer: coarse)').matches||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 let frame=0;window.addEventListener('pointermove',e=>{if(frame)return;frame=requestAnimationFrame(()=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';frame=0})},{passive:true});
})();
