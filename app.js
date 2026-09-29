'use strict';
const items = [...document.querySelectorAll('.gallery-item')];
const filters = [...document.querySelectorAll('.filter')];
let visibleItems = [...items];
let photoIndex = 0;
let photoTrigger = null;
const dialog = document.querySelector('#photo-dialog');
function showPhoto(index) {
  photoIndex = (index + visibleItems.length) % visibleItems.length;
  const item = visibleItems[photoIndex];
  const source = item.querySelector('img');
  const large = document.querySelector('#large-photo');
  large.src = source.src;
  large.alt = source.alt;
  document.querySelector('#photo-caption').textContent = item.dataset.caption;
  document.querySelector('#photo-position').textContent = `${photoIndex + 1} / ${visibleItems.length}`;
}
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => { const active = filter === button; filter.classList.toggle('active', active); filter.setAttribute('aria-pressed', String(active)); });
  items.forEach(item => { item.hidden = button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter; });
  visibleItems = items.filter(item => !item.hidden);
  document.querySelector('#gallery-count').textContent = `${visibleItems.length} rides`;
}));
items.forEach(item => item.addEventListener('click', () => {
  photoTrigger = item;
  showPhoto(visibleItems.indexOf(item));
  dialog.showModal();
  document.body.classList.add('modal-open');
}));
document.querySelector('#close-photo').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); photoTrigger?.focus({preventScroll:true}); });
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
document.querySelector('#previous-photo').addEventListener('click', () => showPhoto(photoIndex - 1));
document.querySelector('#next-photo').addEventListener('click', () => showPhoto(photoIndex + 1));
dialog.addEventListener('keydown', event => { if(event.key === 'ArrowLeft') {event.preventDefault();showPhoto(photoIndex - 1);} if(event.key === 'ArrowRight') {event.preventDefault();showPhoto(photoIndex + 1);} });
const form = document.querySelector('#project-form');
const preview = document.querySelector('#message-preview');
let message = '';
function clearPreview() { preview.hidden = true; message = ''; document.querySelector('#copy-status').textContent = ''; }
form.addEventListener('input', clearPreview);
document.querySelectorAll('.select-service').forEach(link => link.addEventListener('click', () => {
  [...form.elements.service].find(input => input.value === link.dataset.service).checked = true;
  clearPreview();
}));
form.addEventListener('submit', event => {
  event.preventDefault();
  const vehicleInput = document.querySelector('#vehicle');
  const vehicle = vehicleInput.value.trim();
  if(!vehicle) {vehicleInput.setCustomValidity('Please enter your vehicle.');vehicleInput.reportValidity();return;}
  vehicleInput.setCustomValidity('');
  const data = new FormData(form);
  const idea = String(data.get('idea') || '').trim();
  message = `Hi DB! I'd like to ask about ${String(data.get('service')).toLowerCase()} for my ${vehicle}.${idea ? ` ${idea}` : ''} Could you let me know the options, pricing, and appointment availability?`;
  document.querySelector('#message-text').textContent = message;
  document.querySelector('#sms-link').href = `sms:+18645562700?body=${encodeURIComponent(message)}`;
  preview.hidden = false;
  preview.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest'});
});
document.querySelector('#vehicle').addEventListener('input', event => event.target.setCustomValidity(''));
document.querySelector('#copy-message').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try { await navigator.clipboard.writeText(message); status.textContent = 'Message copied. Paste it into your texting app when you’re ready.'; }
  catch { status.textContent = 'Select and copy the message above, or call the shop directly.'; const range = document.createRange(); range.selectNodeContents(document.querySelector('#message-text')); const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range); }
});
document.querySelector('#year').textContent = new Date().getFullYear();
let heroIndex = 0;
document.querySelector('#next-ride').addEventListener('click', () => {
  heroIndex = (heroIndex + 1) % items.length;
  const source = items[heroIndex].querySelector('img');
  const hero = document.querySelector('#hero-car');
  hero.src = source.src;
  hero.alt = source.alt;
  document.querySelector('#hero-car-name').textContent = items[heroIndex].querySelector('b').textContent;
  document.querySelector('#hero-number').textContent = `${String(heroIndex + 1).padStart(2,'0')} / 06`;
});
