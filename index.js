const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.menu-link');

function open (el, selector) {
  el.classList.add(selector);
}

function close (el, selector) {
  el.classList.remove(selector);
}

function closeBurgerMenu () {
  close(burger,'active');
  close(nav,'open');
  document.removeEventListener('keydown', (ev)=>handleEscape(ev,  closeBurgerMenu));
  document.removeEventListener('click', (ev)=>handleOut(ev,'.menu-open', '.icon-profile', closeBurgerMenu));
}

function openBurgerMenu () {
  open(burger,'active');
  open(nav,'open');
  document.addEventListener('keydown', (ev)=> handleEscape(ev, closeBurgerMenu));
  document.addEventListener('click', (ev)=>handleOut(ev, '.menu-open', '.icon-profile', closeBurgerMenu));
}

function handleEscape (ev, fn) {
  if(ev.key==="Escape") {
   fn();
  }
}
const returnHandleEscape = (ev) => {
  handleEscape(ev, closeDropMenu)
}


function handleOut (ev, selector1, selector2, fn) {
  if(!ev.target.closest(selector1) || ev.target.matches(selector2)) {
    console.log(ev.target);
    fn();
  }
}

const returnHandleOut = (ev) => {
  handleOut(ev, '.icon-profile', '.burger', closeDropMenu)
}

function handleBurgerClick () {
 burger.matches('.active') ? closeBurgerMenu() : openBurgerMenu();
}

burger.addEventListener('click', handleBurgerClick);


menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeBurgerMenu();
  })
})

// дроп-менюшки

const iconProfile = document.querySelector('.icon-profile');
const dropMenuLogin = document.querySelector('.drop-menu_login');


function openDropMenu () {
  open (dropMenuLogin, 'active');
  document.addEventListener('keydown', returnHandleEscape);
  document.addEventListener('click', returnHandleOut);
}

function closeDropMenu () {
  close(dropMenuLogin, 'active');
  document.removeEventListener('keydown', returnHandleEscape);
  document.removeEventListener('click', returnHandleOut);
}

iconProfile.addEventListener('click', openDropMenu);


// окно регистрации



console.log('Самооценка: ' + 50 + ' баллов');