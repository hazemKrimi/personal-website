function loadBurger() {
  fetch(`/icons/${burgerOpen ? 'close' : 'burger'}.svg`)
    .then((response) => response.text())
    .then((svg) => {
      burgerPlaceholder.innerHTML = svg;
      mobileNavigation.style.display = burgerOpen ? 'flex' : 'none';
      mobileNavigation.style.top = burgerOpen
        ? `calc(${header.getBoundingClientRect().y}px + ${
            header.getBoundingClientRect().height
          }px + 0.625rem)`
        : 'initial';
      mobileNavigation.style.left = burgerOpen
        ? `${header.getBoundingClientRect().x}px`
        : 'initial';
    })
    .catch(() => {});
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
    !mobileNavigation.contains(event.target)
  ) {
    resetBurger();
  }
}

const burgerPlaceholder = document.querySelector('#burger');
const header = document.querySelector('header');
const mobileNavigation = document.querySelector('nav');
let burgerOpen = false;

window.addEventListener('resize', resetBurgerWhenWindowResized);

document.addEventListener('DOMContentLoaded', loadBurger);

document.addEventListener('click', resetBurgerWhenClickedOutside);

burgerPlaceholder.addEventListener('click', updateBurger);
