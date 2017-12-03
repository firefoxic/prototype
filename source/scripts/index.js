const checkboxList = productList.querySelectorAll('input[type=checkbox]');

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = (callback, thisArg) => {
    const thisArgum = thisArg || window;
    for (let i = 0; i < this.length; i += 1) {
      callback.call(thisArgum, this[i], i, this);
    }
  };
}

checkboxList.forEach((element) => {
  const elem = element;
  if (!Math.round(Math.random())) {
    elem.setAttribute('disabled', '');
  }
});

