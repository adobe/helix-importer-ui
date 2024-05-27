export default function headerParser(el, window) {
  el.querySelectorAll('ol,ul').forEach((l) => {
    if (!l.parentElement.closest('ol,ul')) {
      l.before(document.createElement('hr'));
      l.after(document.createElement('hr'));
    }
  });
  return el;
}
