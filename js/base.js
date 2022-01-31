// changing style for active pages
(function navLinkStatus() {
  console.log(window.location.pathname.replace(/\//g, ''))
  const url = window.location.pathname.replace(/\//g, '');
  const navLinks = document.querySelectorAll('.navlink')

  switch (url) {
    case 'index.html':
      navLinks.forEach(navLink => {
        navLink.classList.remove('navlink-bold');
      });   
      break;

    case 'trade-exchange.html':
      navLinks.forEach(navLink => {
        if(navLink.textContent == 'Trade' || navLink.textContent == 'Exchange') {
          navLink.classList.add('navlink-bold');
        }
      });
      break;

    case 'trade-liquidity.html':
      navLinks.forEach(navLink => {
        if(navLink.textContent == 'Trade' || navLink.textContent == 'Liquidity') {
          navLink.classList.add('navlink-bold');
        }
      });
      break;
  
    default:
      break;
  }
})();



//menu sticky menu
(function semiStickyMenu() {
  const nav = document.querySelector('nav');
 
  window.addEventListener('wheel', (event) => {
    let directionScroll = event.deltaY

    if (directionScroll >= 0) {
      nav.classList.add('nav-position-hide');
      nav.classList.remove('nav-position-show');
    } else {
      nav.classList.remove('nav-position-hide');
      nav.classList.add('nav-position-show');
    }
  });
})();


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