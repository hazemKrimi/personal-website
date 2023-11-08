const form = document.querySelector('form');
const submissionStatus = form.querySelector('#submission-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  fetch(event.target.action, {
    method: event.target.method,
    body: new FormData(event.target),
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        submissionStatus.innerHTML = 'Message sent successfully!';
        submissionStatus.style.display = 'block';
        form.reset();
      }
    })
    .catch((error) => {
      submissionStatus.innerHTML = 'Error sending message!';
      submissionStatus.style.display = 'block';
      console.error(error);
    })
    .finally(() => {
      setTimeout(() => {
        submissionStatus.innerHTML = '';
        submissionStatus.style.display = 'none';
      }, 5000);
    });
});
