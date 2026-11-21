/** Controller: contact form validation, the floating contact button, and the certificate viewer. */
import { $$, byId } from '../utils/dom.js';

function initContactForm() {
  const form = byId('contactForm');
  if (!form) return;
  const toast = new bootstrap.Toast(byId('sentToast'));
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.classList.add('was-validated'); return; }
    // TODO: send the request to an email service or backend here.
    form.reset();
    form.classList.remove('was-validated');
    toast.show();
  });
}

function initFloatingButton() {
  const fab = byId('fab');
  const button = byId('fabBtn');
  const menu = byId('fabMenu');
  if (!fab || !button || !menu) return;
  const setOpen = open => {
    fab.classList.toggle('open', open);
    button.setAttribute('aria-expanded', open);
    menu.setAttribute('aria-hidden', !open);
    $$('a', menu).forEach(a => { a.tabIndex = open ? 0 : -1; });
  };
  button.addEventListener('click', () => setOpen(!fab.classList.contains('open')));
  document.addEventListener('click', e => { if (!fab.contains(e.target)) setOpen(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
}

/** Fill the shared Bootstrap modal with whichever certificate was clicked. */
function initCertificateViewer() {
  const modal = byId('certModal');
  if (!modal) return;
  modal.addEventListener('show.bs.modal', e => {
    const trigger = e.relatedTarget;
    const img = byId('certModalImg');
    img.src = trigger.dataset.cert;
    img.alt = trigger.dataset.certTitle;
    byId('certModalTitle').textContent = trigger.closest('.cert-card').querySelector('h4').textContent;
  });
}

export function initContact() {
  initContactForm();
  initFloatingButton();
  initCertificateViewer();
}
