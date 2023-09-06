const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.menu-link');

function open (el, selector) {
  el.classList.add(selector);
}

function close (el, selector) {
  el.classList.remove(selector);
}

function closeMenu () {
  close(burger,'active');
  close(nav,'open');
  document.removeEventListener('keydown', handleEscape);
  document.removeEventListener('click', handleOut);
}

function openMenu () {
  open(burger,'active');
  open(nav,'open');
  document.addEventListener('keydown', handleEscape);
  document.addEventListener('click', handleOut);
}

function handleEscape (ev) {
  if(ev.key="Escape") {
    closeMenu();
  }
}
function handleOut (ev) {
  if(!ev.target.closest('.menu-open') || ev.target.matches('.icon-profile')) {
  closeMenu();
  }
}

function handleBurgerClick () {
 burger.matches('.active') ? closeMenu() : openMenu();
}

burger.addEventListener('click', handleBurgerClick);


menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  })
})

console.log('Самооценка: ' + 50 + ' баллов');