const checkboxList = productList.querySelectorAll('input[type=checkbox]');

checkboxList.forEach((element) => {
  const elem = element;
  if (!Math.round(Math.random())) {
    elem.setAttribute('disabled', '');
  }
});

