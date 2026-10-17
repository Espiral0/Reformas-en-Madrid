// Envía los formularios de presupuesto a /api/presupuesto y muestra el resultado en línea
const ERROR_CLASSES = ['ring-2', 'ring-error/40'];

document.querySelectorAll<HTMLFormElement>('form[data-lead-form]').forEach((form) => {
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const status = form.querySelector<HTMLElement>('[data-form-status]')!;
  const buttonHtml = button.innerHTML;

  function showStatus(message: string, ok: boolean) {
    status.textContent = message;
    status.className = `rounded-lg px-space-md py-3 font-body-sm text-body-sm ${
      ok ? 'bg-secondary-container text-on-secondary-fixed-variant' : 'bg-error-container text-on-error-container'
    }`;
  }

  function clearFieldErrors() {
    form.querySelectorAll('[data-field-error]').forEach((el) => el.remove());
    form.querySelectorAll('[aria-invalid]').forEach((el) => {
      el.removeAttribute('aria-invalid');
      (el.closest('[data-field]') ?? el).classList.remove(...ERROR_CLASSES);
    });
  }

  function showFieldErrors(errors: Record<string, string>) {
    for (const [name, message] of Object.entries(errors)) {
      const input = form.elements.namedItem(name);
      if (!(input instanceof HTMLElement)) continue;
      input.setAttribute('aria-invalid', 'true');
      const wrapper = input.closest<HTMLElement>('[data-field]') ?? input;
      wrapper.classList.add(...ERROR_CLASSES);
      const p = document.createElement('p');
      p.dataset.fieldError = '';
      p.className = 'mt-1 font-caption text-caption text-error';
      p.textContent = message;
      wrapper.closest('div:not([data-field])')?.append(p);
    }
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearFieldErrors();
    status.className = 'hidden';
    button.disabled = true;
    button.classList.add('opacity-70');
    button.textContent = 'Enviando…';

    try {
      const res = await fetch('/api/presupuesto', { method: 'POST', body: new FormData(form) });
      const result = await res.json().catch(() => ({}));
      if (res.ok && result.ok) {
        form.reset();
        showStatus(form.dataset.success ?? '¡Solicitud enviada!', true);
      } else {
        if (result.errors) showFieldErrors(result.errors);
        showStatus(result.message ?? 'No hemos podido enviar tu solicitud. Inténtalo de nuevo.', false);
      }
    } catch {
      showStatus('Error de conexión. Comprueba tu internet o llámanos al 644 73 40 50.', false);
    } finally {
      button.disabled = false;
      button.classList.remove('opacity-70');
      button.innerHTML = buttonHtml;
    }
  });
});
