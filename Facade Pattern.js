-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
#FACADE PATTERN
//hiding your complex DOM API code within an easier to use API
//eg of addEvent used by jQuery to support multiple browsers.
function addEvent(el, ev, fn) {
  if (el.addEventListener) {
    el.addEventListener(ev, fn, false);
  } else if (el.attachEvent) {
    el.attachEvent("on" + ev, fn);
  } else {
    el["on" + ev]  = fn;
  }
}
