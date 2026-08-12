
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.10});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const menu=document.querySelector('.menu'), links=document.querySelector('.links');
if(menu) menu.addEventListener('click',()=>links.classList.toggle('mobile-open'));
