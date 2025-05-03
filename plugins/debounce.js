/**
 * 自定义指令 - 插件防抖
 * v.debounce:arg.modifiers="func"
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('debounce', {
    mounted(el, binding) {
      let { value, arg, modifiers } = binding;
      let $func = value; // function to wrap
      let $wait = arg || 100; // time to wait in ms (`100`)
      let $immediate = modifiers.begin || false; // should execute at the beginning (`false`)

      const debounce = (func, wait, immediate) => {
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
      };

      el.onclick = debounce($func, $wait, $immediate);
    },
    unmounted(el) {},
  });
});
