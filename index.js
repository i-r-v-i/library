const burger = document.querySelector('.burger');
const navBurgerLinks = document.querySelector('.nav');
const burgerMenuLinks = document.querySelectorAll('.menu-link');

function open (el, selector) {
  el.classList.add(selector);
}

function close (el, selector) {
  el.classList.remove(selector);
}

function handleClickEscape (ev, fn) {
  if(ev.key==="Escape") {
   fn();
  }
}

function handleClickOut (ev, selector1, selector2, fn) {
  if(!ev.target.closest(selector1) || ev.target.matches(selector2)) {
    fn();
  }
}

function handleBurgerClick () {
  burger.matches('.active') ? closeBurgerMenu() : openBurgerMenu();
 }

const returnHandleClickEscapeBurger = (ev) => {
  handleClickEscape(ev, closeBurgerMenu)
}

const returnHandleClickOutBurger = (ev) => {
  handleClickOut(ev, '.menu-open', '.icon-profile',  closeBurgerMenu)
}

function closeBurgerMenu () {
  close(burger,'active');
  close(navBurgerLinks,'open');
  document.removeEventListener('keydown', returnHandleClickEscapeBurger);
  document.removeEventListener('click', returnHandleClickOutBurger);
}

function openBurgerMenu () {
  open(burger,'active');
  open(navBurgerLinks,'open');
  document.addEventListener('keydown', returnHandleClickEscapeBurger);
  document.addEventListener('click', returnHandleClickOutBurger);
}



//слушатели

burger.addEventListener('click', handleBurgerClick);

burgerMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeBurgerMenu();
  })
})


// дроп-менюшки
const iconProfile = document.querySelector('.icon-profile');
const dropMenuLogin = document.querySelector('.drop-menu_login');

const returnHandleClickEscapeDrop = (ev) => {
  handleClickEscape(ev, closeDropMenu)
}

const returnHandleClickOutDrop = (ev) => {
   if (!iconProfile.contains(ev.target) || dropMenuLogin.contains(ev.target)) {
    closeDropMenu();
  }
}

function openDropMenu () {
  open (dropMenuLogin, 'active');
  document.addEventListener('keydown', returnHandleClickEscapeDrop);
  document.addEventListener('click', returnHandleClickOutDrop);
}

function closeDropMenu () {
  close(dropMenuLogin, 'active');
  document.removeEventListener('keydown', returnHandleClickEscapeDrop);
  document.removeEventListener('click', returnHandleClickOutDrop);
}

iconProfile.addEventListener('click', openDropMenu);


// окно логина
const profileForm = document.querySelector('.profile-form');
const profileFormLogin = document.querySelector('.profile-form_type_login');
const profileCloseButton = document.querySelector('.close-profile-button');
const profileButtonsLogin = document.querySelectorAll('.profile-button_login');
const profileButtonsRegister = document.querySelectorAll('.profile-button_register')

function returnHandleClickEscapePopupAuth (ev) {
  return handleClickEscape(ev,  closeAuthForm)
}

function returnHandleClickOutPopupAuth (ev) {
  return handleClickOut(ev,  closeAuthForm)
}

function openAuthForm () {
  open(profileFormLogin,'profile-form_opened');
  document.addEventListener('keydown', returnHandleClickEscapePopupAuth);
  // document.addEventListener('click', (ev)=>handleOut(ev, '.menu-open', '.icon-profile',  closeAuthForm));

}
function closeAuthForm () {
  close(profileFormLogin,'profile-form_opened');
  document.removeEventListener('keydown', returnHandleClickEscapePopupAuth);
  // document.removeEventListener('click', (ev)=>handleOut(ev,'.menu-open', '.icon-profile', closeBurgerMenu));
}

function closeByClick (evt) {
  if (evt.target.classList.contains("profile-form_opened") || evt.target.classList.contains("close-button")) {
    closeAuthForm();
  }
  }

function openRegisterForm () {
  console.log('2')
}
profileButtonsLogin.forEach((button) => {
  button.addEventListener('click', openAuthForm)
})

profileButtonsRegister.forEach((button) => {
  button.addEventListener('click', openRegisterForm)
})

profileForm.addEventListener("mousedown", closeByClick);



