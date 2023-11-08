document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(new FormData(event.target));
});
