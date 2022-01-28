/* funzioni da implementare:
  - funzionamento dark mode switcher
    - cambio colore e icone switcher
    - scroll bar in dark mode
    - background bianchi in dark mode
    - testi in dark purple in white
    - background win millions
    - background in earn section
    - bacground e testi in used by

  V - tabella dinamica in earn section
  - modal per setting
  - modal per connect wallet
  V - cambio iniziali con selettore lingua
  V - sticky menu
*/

//menu sticky menu
(function semiStickyMenu() {
  const nav = document.querySelector('nav');
 
  window.addEventListener('wheel', (event) => {
    let directionScroll = event.deltaY

    if (directionScroll >= 0) {
      scrolling = false;
      nav.classList.add('nav-position-hide');
      nav.classList.remove('nav-position-show');
    } else {
      scrolling = false;
      nav.classList.remove('nav-position-hide');
      nav.classList.add('nav-position-show');
    }
  });
})();

//switching table
setInterval(dataSwitcher, 6000);

function dataSwitcher() {
  const earnTableTitle = document.querySelector('#earn-table-title')
  const grid1 = document.querySelector('#grid-data1');
  const grid2 = document.querySelector('#grid-data2');
  
  if(grid1.className === 'earn-data-grid earn-table-hide') {
    earnTableTitle.textContent = 'Farms';
  } else {
    earnTableTitle.textContent = 'Syrup Pools';
  }

  grid1.classList.toggle('earn-table-show');
  grid1.classList.toggle('earn-table-hide');
  grid2.classList.toggle('earn-table-show');
  grid2.classList.toggle('earn-table-hide');
}

const switchIcon = document.querySelector('#switch-icon');
switchIcon.addEventListener('click', dataSwitcher);

// initials language selector footer
(function langSelectorInitials() {
  const initials = document.querySelector('.lang-sel-typo');
  const langBtn = document.querySelectorAll('button[name=lang]');
    
  langBtn.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      initials.innerHTML = item.dataset.langInitials.toUpperCase();
    })
  })
})();