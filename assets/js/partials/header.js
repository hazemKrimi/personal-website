function loadBurger() {
  const headerInitialLeftPosition = header.getBoundingClientRect().x;

  navToggler.querySelector(burgerOpen ? '#burger' : '#close').style.display =
    'none';
  navToggler.querySelector(burgerOpen ? '#close' : '#burger').style.display =
    'block';
  header.style.position = burgerOpen ? 'fixed' : 'initial';
  header.style.top = burgerOpen ? '0px' : 'initial';
  header.style.left = burgerOpen ? `${headerInitialLeftPosition}px` : 'initial';
  mobileNavigation.style.display = burgerOpen ? 'flex' : 'none';
  mobileNavigation.style.top = burgerOpen
    ? `calc(${header.getBoundingClientRect().y}px + ${
        header.getBoundingClientRect().height
      }px)`
    : 'initial';
  mobileNavigation.style.left = burgerOpen
    ? `${headerInitialLeftPosition}px`
    : 'initial';
  document.querySelector('main').style.marginTop = burgerOpen
    ? `calc(${header.getBoundingClientRect().height}px + 3rem)`
    : '0px';
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
  if (window.innerWidth > 1024) {
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

document.addEventListener('DOMContentLoaded', resetBurger);

document.addEventListener('click', resetBurgerWhenClickedOutside);

navToggler.addEventListener('click', updateBurger);
