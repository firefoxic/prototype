const productList = document.querySelector('.product');
const checkboxList = productList.querySelectorAll('input[type=checkbox]');

function getParent(className, child, source) {
  let current = child;
  let parrent = source;
  while (current !== source) {
    if (current.classList.contains(className)) {
      parrent = current;
    }
    current = current.parentNode;
  }
  return parrent;
}

function getInternetExplorerVersion() {
  let rv = -1;
  const nua = navigator.userAgent;
  const reM = new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})');
  const reT = new RegExp('Trident/.*rv:([0-9]{1,}[.0-9]{0,})');
  if (navigator.appName === 'Microsoft Internet Explorer') {
    if (reM.exec(nua) !== null) {
      rv = parseFloat(RegExp.$1);
    }
  } else if (navigator.appName === 'Netscape') {
    if (reT.exec(nua) !== null) {
      rv = parseFloat(RegExp.$1);
    }
  }
  return rv;
}

function isIE() {
  return getInternetExplorerVersion() !== -1;
}

if (isIE() || !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function createForEach(callback, thisArg) {
    const thisArgument = thisArg || window;
    for (let i = 0; i < this.length; i += 1) {
      callback.call(thisArgument, this[i], i, this);
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
  productItem.addEventListener('mouseenter', handleMouseout);
});

checkboxList.forEach((element) => {
  if (element.disabled) {
    const productItem = getParent('product__item', element, productList);
    productItem.classList.toggle('product__item_disabled');
    productItem.querySelector('.product__desc_kind_spec').classList.add('hidden');
    productItem.querySelector('.product__desc_kind_caption').classList.add('hidden');
  }
});
