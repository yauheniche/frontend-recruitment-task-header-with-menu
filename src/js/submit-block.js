const form = document.querySelector('.search-form');

form.addEventListener('submit', (e) => {
  return e.preventDefault ? e.preventDefault() : (e.returnValue = false);
})
