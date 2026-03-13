fetch("nav.html").then(r => r.text()).then(html => {
  document.getElementById("nav-placeholder").outerHTML = html;
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === window.location.pathname.split("/").pop()) {
      a.classList.add("active");
    }
  });
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', e => {
        if (!nav.classList.contains('nav-open')) return;
        e.preventDefault();
        const href = link.getAttribute('href');
        nav.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        setTimeout(() => { window.location.href = href; }, 350);
      });
    });
  }
});
