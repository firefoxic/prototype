const productList = document.querySelector('.product');
const checkboxList = productList.querySelectorAll('input[type=checkbox]');

function getParent(className, child, source) {
  let current = child;
  if (!current.closest) {
    while (current !== source) {
      if (current.classList.contains(className)) {
        return current;
      }
      current = current.parentNode;
    }
  }
  return current.closest(`.${className}`);
}

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
  elem.addEventListener('focusin', () => {
    const labelFocus = getParent('label__text', elem, productList);
    labelFocus.classList.add('label__text_focused');
    elem.addEventListener('focusout', () => {
      labelFocus.classList.remove('label__text_focused');
    });
  });
});

productList.addEventListener('change', (event) => {
  const productItem = getParent('product__item', event.target, productList);
  productItem.classList.toggle('product__item_checked');
  productItem.querySelector('.product__desc_kind_spec').classList.toggle('hidden');
  productItem.querySelector('.product__desc_kind_caption').classList.toggle('hidden');

  function handleMouseout(evt) {
    productItem.classList.remove('product__item_mouseover');
    productItem.removeEventListener(evt, handleMouseout);
  }
  productItem.classList.add('product__item_mouseover');
  productItem.addEventListener('mouseout', handleMouseout);
});

checkboxList.forEach((element) => {
  if (element.disabled) {
    const productItem = getParent('product__item', element, productList);
    productItem.classList.toggle('product__item_disabled');
    productItem.querySelector('.product__desc_kind_spec').classList.add('hidden');
    productItem.querySelector('.product__desc_kind_caption').classList.add('hidden');
  }
});
