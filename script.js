const search=document.getElementById('search');const cards=[...document.querySelectorAll('.card')];const buttons=[...document.querySelectorAll('[data-filter]')];const count=document.getElementById('count');const empty=document.getElementById('empty');let filter='todos';function apply(){const q=search.value.toLowerCase().trim();let n=0;cards.forEach(card=>{const okCat=filter==='todos'||card.dataset.category===filter;const okSearch=card.dataset.name.includes(q);const show=okCat&&okSearch;card.style.display=show?'':'none';if(show)n++});count.textContent=n+' produto'+(n===1?'':'s');empty.hidden=n>0}buttons.forEach(btn=>btn.addEventListener('click',()=>{buttons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');filter=btn.dataset.filter;apply()}));search.addEventListener('input',apply);apply();
search.setAttribute('autocomplete','off');
search.setAttribute('spellcheck','false');

search.addEventListener('keydown', event => {
  if(event.key === 'Escape'){
    search.value = '';
    apply();
    search.blur();
  }
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const catalog = document.getElementById('catalogo');
    if (window.innerWidth <= 900 && catalog) {
      setTimeout(() => catalog.scrollIntoView({behavior:'smooth', block:'start'}), 80);
    }
  });
});

window.addEventListener('pageshow', () => {
  apply();
});
