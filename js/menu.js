/* Menú hamburguesa accesible + link activo según la sección visible */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('menu-principal');
  if (!toggle || !nav) return;

  const header = document.querySelector('.site-header');

  const setOpen = (open) => {
    if (header) header.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    nav.classList.toggle('is-open', open);
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Cerrar con Escape (y devolver el foco al botón)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  // Cerrar al elegir un link
  nav.querySelectorAll('a[href^="#"]').forEach((a) =>
    a.addEventListener('click', () => setOpen(false))
  );

  // Al pasar a desktop, resetear el estado
  window.matchMedia('(min-width: 64em)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });

  // Link activo según scroll
  const links = [...nav.querySelectorAll('.site-nav__link')];
  const byId = new Map(links.map((l) => [l.getAttribute('href').slice(1), l]));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((l) => l.removeAttribute('aria-current'));
        const l = byId.get(en.target.id);
        if (l) l.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    byId.forEach((_, id) => {
      const s = document.getElementById(id);
      if (s) io.observe(s);
    });
  }
})();
