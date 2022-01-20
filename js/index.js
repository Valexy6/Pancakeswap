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
  - cambio iniziali con selettore lingua
*/



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