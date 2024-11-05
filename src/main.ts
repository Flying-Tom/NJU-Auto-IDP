import { GM_info } from '$';

import { academic_handler } from './handlers/academic';

(function () {
  'use strict';
  (function () {
    const match_idx: string = GM_info.script.matches
      .map(rule => rule.replace(/\.|\*|\/|\?/g, match => ({ ".": "\\.", "*": ".*", "/": "\\/", "?": "\\?" }[match]) || ''))
      .map(rule => new RegExp(rule))
      .map((regExp, index) => regExp.test(window.location.href) ? index : null)
      .filter(index => index != null).join().toString();

    interface Istragety { [key: string]: () => void };

    const strategy_load: Istragety = {


      "0": academic_handler, // ieee 自动登录
      "1": academic_handler, // acm 自动登录
      "2": academic_handler, // sciencedirect 自动登录
    }

    const strategy_instant: Istragety = {

    }

    if (match_idx in strategy_instant) {
      const strategy_instant_func = strategy_instant[match_idx];
      strategy_instant_func();
    } else if (match_idx in strategy_load) {
      const strategy_load_func = strategy_load[match_idx];
      if (document.readyState == "complete") {
        strategy_load_func();
      } else {
        window.addEventListener("load", strategy_load_func);
      }
    }

  })();

})();