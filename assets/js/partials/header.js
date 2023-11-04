function loadBurger() {
  navToggler.querySelector(
    burgerOpen ? '#burger' : '#close'
  ).style.display = 'none';
  navToggler.querySelector(
    burgerOpen ? '#close' : '#burger'
  ).style.display = 'block';
  mobileNavigation.style.display = burgerOpen ? 'flex' : 'none';
  mobileNavigation.style.top = burgerOpen
    ? `calc(${header.getBoundingClientRect().y}px + ${
        header.getBoundingClientRect().height
      }px + 0.625rem)`
    : 'initial';
  mobileNavigation.style.left = burgerOpen
    ? `${header.getBoundingClientRect().x}px`
    : 'initial';
}

function updateBurger() {
  burgerOpen = !burgerOpen;
  loadBurger();
}

function resetBurger() {
  burgerOpen = false;
  loadBurger();
}

function resetBurgerWhenWindowResized() {
  if (window.innerWidth > 768) {
    resetBurger();
  }
}

function resetBurgerWhenClickedOutside(event) {
  if (
    mobileNavigation.style.display === 'flex' &&
    event.target !== header &&
    event.target !== mobileNavigation &&
    !mobileNavigation.contains(event.target) &&
    !navToggler.contains(event.target)
  ) {
    resetBurger();
  }
}

const navToggler = document.querySelector('#nav-toggler');
const header = document.querySelector('header');
const mobileNavigation = document.querySelector('nav');
let burgerOpen = false;

window.addEventListener('resize', resetBurgerWhenWindowResized);

document.addEventListener('DOMContentLoaded', loadBurger);

document.addEventListener('click', resetBurgerWhenClickedOutside);

navToggler.addEventListener('click', updateBurger);
