const criteria = {
  ' Требования к верстке': 10,
  '`header`, `main`, `footer`': 2,
  'Шесть элементов `section` (по количеству секций)': 2,
  'Только один заголовок `h1`': 2,
  'Пять заголовков `h2`': 2,
  'Один элемент `nav` (панель навигации в хедере)': 2,
  'Два списка ul > li > a (панель навигации, ссылки на соцсети в футере)': 2,
  'Семь кнопок `button`': 2,
  'Два инпута `input`': 2,
  'Блок `header': 8,
  'Секция `Welcome`': 4,
  'Секция `About`': 6,
  'Секция `Favorites`': 8,
  'Секция `CoffeShop`': 6,
  'Секция `Contacts`': 6,
  'Секция `LibraryCard`': 8,
  'Блок `footer`': 8,
  'Для построения сетки используются флексы или гриды': 2,
  'При уменьшении масштаба страницы браузера вся вёрстка (контент и фоны) размещается по центру, а не сдвигается в сторону. Фон за рамками страницы может быть черным, белым или любого оттенка серого.': 2,
  'Иконки добавлены в формате .svg.': 2,
  'Изображения добавлены в формате .jpg (.jpeg) или .png': 2,
  'Есть favicon': 2,
  'Плавная прокрутка по якорям': 2,
  'В футере название ссылки Username заменено и ведет на GitHub студента': 2,
  'В футере ссылка The Rolling Scopes School ведет на страницу курса https://rs.school/js-stage0/': 2,
  'Интерактивность элементов согласно макету.': 2,
  'Обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияет на соседние элементы': 2
}

const sum = (obj) => {
   const arr = Object.values(obj);
return arr.reduce(function (currentSum, currentNumber) {
   return currentSum + currentNumber
 }, 0)
}
console.log('Самооценка: ' + 45 + ' баллов');

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
 if(!ev.target.closest('.menu-open')) {
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
