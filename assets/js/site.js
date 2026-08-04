
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('.site-nav');
  if (button && nav) button.addEventListener('click', () => nav.classList.toggle('open'));
});
