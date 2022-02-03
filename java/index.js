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