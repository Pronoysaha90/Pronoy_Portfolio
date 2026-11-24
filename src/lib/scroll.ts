export function scrollToId(id: string) {
  if (id === 'home' || id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
  }
}
