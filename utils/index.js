export const $symbol = () => {
  return Math.random().toString().replace(/^0./, '');
};

export const $timer = (time) => {
  return new Promise((r) => {
    setTimeout(() => {
      r();
    }, time);
  });
};

/**
 * 函数防抖
 * @param { Function } func function to wrap
 * @param { number } [wait = 100] time to wait in ms (`100`)
 * @param { boolean } [immediate = false] should execute at the beginning (`false`)
 */
export function debounce(func, wait, immediate) {
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  }

  return function () {
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}

/**
 * 函数节流
 * @param { Function } func function to wrap
 * @param { number } [delay = 100] time to delay in ms (`100`)
 */
export function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    return func.apply(this, args);
  };
}
