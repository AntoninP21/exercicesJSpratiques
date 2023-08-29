
const inputElement = document.getElementById('name');

inputElement.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    inputElement.value = '';
  }
});