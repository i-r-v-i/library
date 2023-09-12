const burger = document.querySelector(".burger");
const navBurgerLinks = document.querySelector(".nav");
const burgerMenuLinks = document.querySelectorAll(".menu-link");
let cardNumber;


function open(el, selector) {
  el?.classList.add(selector);
}

function close(el, selector) {
  el?.classList.remove(selector);
}

function handleClickEscape(ev, fn) {
  if (ev.key === "Escape") {
    fn();
  }
}

function handleClickOut(ev, selector1, selector2, fn) {
  if (!ev.target.closest(selector1) || ev.target.matches(selector2)) {
    fn();
  }
}

function handleBurgerClick() {
  burger.matches(".active") ? closeBurgerMenu() : openBurgerMenu();
}

const returnHandleClickEscapeBurger = (ev) => {
  handleClickEscape(ev, closeBurgerMenu);
};

const returnHandleClickOutBurger = (ev) => {
  handleClickOut(ev, ".menu-open", ".icon-profile", closeBurgerMenu);
};

function closeBurgerMenu() {
  close(burger, "active");
  close(navBurgerLinks, "open");
  document.removeEventListener("keydown", returnHandleClickEscapeBurger);
  document.removeEventListener("click", returnHandleClickOutBurger);
}

function openBurgerMenu() {
  open(burger, "active");
  open(navBurgerLinks, "open");
  document.addEventListener("keydown", returnHandleClickEscapeBurger);
  document.addEventListener("click", returnHandleClickOutBurger);
}

//слушатели

burger.addEventListener("click", handleBurgerClick);

burgerMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeBurgerMenu();
  });
});

// дроп-менюшки
const iconProfile = document.querySelector(".icon-profile");
const dropMenuNoAuth = document.querySelector(".drop-menu_noAuth");
const dropMenuAuth = document.querySelector(".drop-menu_auth");
const dropsMenu = document.querySelectorAll(".drop-menu");

let isAuth = false;
console.log(isAuth);
// function returnHandleClickEscapeDrop (ev) {
//   return handleClickEscape(ev, closeDropMenu);
// };

// function returnHandleClickOutDrop (ev, menu) {
// return handleClickOutDrop(ev, menu)
// }
function handleClickEscapeDrop (ev, dropMenu ) {
  return handleClickEscape(ev, ()=> closeDropMenu(dropMenu));
};

function handleClickOutDrop (ev, dropMenu) {
  if (!iconProfile.contains(ev.target) || dropMenu.contains(ev.target)) {
    closeDropMenu(dropMenu);
  }
};

function openDropMenu(dropMenu) {
  open(dropMenu, "active");
  document.addEventListener("keydown", (ev)=> handleClickEscapeDrop(ev, dropMenu));
  document.addEventListener("click", (ev) => handleClickOutDrop(ev, dropMenu));
}

function closeDropMenu(dropMenu) {
    close(dropMenu, "active");
    document.removeEventListener("keydown", (ev)=> handleClickEscapeDrop(ev, dropMenu));
    document.removeEventListener("click", (ev) => handleClickOutDrop(ev, dropMenu));
  
}

function openAnyDropMenu (isAuth) {
  if(isAuth) {
    openDropMenu(dropMenuAuth);
  } else {
    openDropMenu(dropMenuNoAuth);
  }
}

iconProfile.addEventListener("click", ()=>openAnyDropMenu(isAuth));

// окно логина
const profileForms = document.querySelectorAll(".profile-form");
const profileFormLogin = document.querySelector(".profile-form_type_login");
const profileFormRegister = document.querySelector(".profile-form_type_register");
const profileCloseButton = document.querySelector(".close-profile-button");
const profileButtonsLogin = document.querySelectorAll(".button_login");
const profileButtonsRegister = document.querySelectorAll(".button_register");

function returnHandleClickEscapePopupAuth(ev) {
  return handleClickEscape(ev, closeAuthForm);
}

function returnHandleClickOutPopupAuth(ev) {
  return handleClickOut(ev, closeAuthForm);
}

function returnHandleClickEscapePopupRegister(ev) {
  return handleClickEscape(ev, closeRegisterForm);
}

function returnHandleClickOutPopupRegister(ev) {
  return handleClickOut(ev, closeRegisterForm);
}
function openAuthForm(popup, fn) {
  if (
    profileFormLogin.matches(".profile-form_opened") ||
    profileFormRegister.matches(".profile-form_opened")
  ) {
    closeAuthForm();
    closeRegisterForm();
  }
  open(popup, "profile-form_opened");
  document.addEventListener("keydown", fn);
}
function closeAuthForm() {
  close(profileFormLogin, "profile-form_opened");
  document.removeEventListener("keydown", returnHandleClickEscapePopupAuth);
}
function closeRegisterForm() {
  close(profileFormRegister, "profile-form_opened");
  document.removeEventListener("keydown", returnHandleClickEscapePopupRegister);
}

function closeByClick(evt) {
  if (
    evt.target.classList.contains("profile-form_opened") ||
    evt.target.classList.contains("close-button")
  ) {
    closeRegisterForm();
    closeAuthForm();
  }
}

profileButtonsLogin.forEach((button) => {
  button.addEventListener("click", () =>
    openAuthForm(profileFormLogin, returnHandleClickEscapePopupAuth)
  );
});

profileButtonsRegister.forEach((button) => {
  button.addEventListener("click", () =>
    openAuthForm(profileFormRegister, returnHandleClickEscapePopupRegister)
  );
});

profileForms.forEach((popup) => {
  popup.addEventListener("mousedown", closeByClick);
});


const registerButton = document.querySelector(".register-submit");
const formRegister = document.forms["form-register"];
const inputRegisterFormList = formRegister.querySelectorAll(".profile-form__input");


function getInputValues(form) {
  const user = {};
  form.forEach((input) => (user[input.name] = input.value));
  return user;
}

function putToLStorage (key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

const iconProfileText = document.querySelector('.icon-profile__text');

function changeIconProfile() {
  iconProfile.style.backgroundImage = 'none';
  iconProfile.style.backgroundColor= '#fff';
  iconProfileText.style.display= 'block';
  }


function isnotUsersInLS() {
  console.log('Здесь еще никто не зарегистрирован. Будь первым!')
}

function getDataFromLS() {
  
  const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log(storedUser);
  // storedUser ? storedUser :  isnotUsersInLS();
  return storedUser;
}

const nameUser = getDataFromLS();
console.log(nameUser);

function getFirstLetters () {
    if(nameUser) {
      const name = nameUser['first-name'][0].toUpperCase();
      const last = nameUser['last-name'][0].toUpperCase();
      return name+last;
    }
    
}

function returnNameUser (userName) {
   if(userName) {
return `${userName['first-name']} ${userName['last-name']}`;
   }
  
}

function showUserName () {
  const letters = getFirstLetters();
  iconProfileText.textContent = letters;
  iconProfileText.setAttribute('title', returnNameUser(nameUser));
}

const dropMenuTitle = document.querySelector('#title-card-number');

function getRandomNumber (size) {
  let result = [];
  let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  for (let n = 0; n < size; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  return result.join('');
}

function showUserCardNumber(cardNumber) {
  if(cardNumber) {
    dropMenuTitle.textContent = cardNumber;
    dropMenuTitle.style.fontSize = '10px';
  dropMenuTitle.style.color = '#BB945F'
}
}

function registerUser() {
    const newUser = getInputValues(inputRegisterFormList);
    putToLStorage("user", newUser);
    cardNumber = getRandomNumber(9);
    putToLStorage('card', cardNumber);  
}

function isUserAuth (isUser) {
  if(isUser && cardNumber) {
    setButtonActive(loginSubmitButton);
    changeIconProfile ();
    getFirstLetters();
    showUserName();
    // const cardNumber = getRandomNumber(9);
    showUserCardNumber(cardNumber);
    isAuth = true;
  } else {
    isAuth = false;
    isNotRegistered();
  
  }
}

function handleFormRegisterSubmit(event) {
  event.preventDefault();
  registerUser();
  isUserAuth('true');
  formRegister.reset();
  closeRegisterForm();
}

formRegister.addEventListener("submit", handleFormRegisterSubmit);


//login
const formLogin = document.forms['form-login'];
const inputLoginFormList = formLogin.querySelectorAll(".profile-form__input");
const loginSubmitButton = formLogin.querySelector('.login-submit');


function setButtonDisaibled (button) {
  button.classList.add('button_disabled');
  button.disaibled = 'true';
}
function setButtonActive (button) {
  button.classList.remove('button_disabled');
  button.disaibled = 'false';
}


function errorLogin () {
  inputLoginFormList.forEach((input) => {
    input.style.borderColor = 'red';
    setButtonDisaibled(loginSubmitButton);
  })
}

function isNotRegistered () {
  errorLogin();
  console.log('Пользователь с такими данными в базе не найден. Зарегистрируйтесь в системе')
}


function isUserRegistered (userData) {
  const {login, password} = userData;
   if(nameUser && nameUser.email === login && nameUser.password === password) {
    console.log('yeees');
    console.log(nameUser.email, login, nameUser.password, password);
      return true;
   } else {
    console.log('nooooo');
    return false;
   }

}

function getLoginData() {
const userAuth = getInputValues(inputLoginFormList);
return userAuth;
}


function handleFormLoginSubmit(event) {
  event.preventDefault();
  const userData = getLoginData();
 
  isUserAuth(isUserRegistered(userData));
  closeAuthForm();
  
}



formLogin.addEventListener('submit', handleFormLoginSubmit);

//myprofile
