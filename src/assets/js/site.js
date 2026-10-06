// Mobile menu
(function(){
  var menu=document.getElementById('menu'),open=document.getElementById('menu-open'),close=document.getElementById('menu-close');
  if(!menu||!open) return;
  function show(){menu.hidden=false;open.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';(close||menu).focus();}
  function hide(){menu.hidden=true;open.setAttribute('aria-expanded','false');document.body.style.overflow='';open.focus();}
  open.addEventListener('click',show);
  if(close) close.addEventListener('click',hide);
  menu.addEventListener('click',function(e){ if(e.target.closest('a')) { menu.hidden=true; document.body.style.overflow=''; open.setAttribute('aria-expanded','false'); } });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape' && !menu.hidden) hide(); });
})();
