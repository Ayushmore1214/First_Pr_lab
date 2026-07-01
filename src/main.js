(function () {
  'use strict';

  // theme
  const THEME_KEY = 'fpl-theme';
  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = t === 'dark' ? '☀' : '☾';
    try { localStorage.setItem(THEME_KEY, t); } catch (_) {}
  }
  (function initTheme() {
    let stored;
    try { stored = localStorage.getItem(THEME_KEY); } catch (_) {}
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(stored || (dark ? 'dark' : 'light'));
  }());
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const cur = document.documentElement.getAttribute('data-theme');
      setTheme(cur === 'dark' ? 'light' : 'dark');
    });
  }

  // search + filter
  const searchEl    = document.getElementById('search');
  const countEl     = document.getElementById('search-count');
  const emptyEl     = document.getElementById('empty-state');
  const emptyQEl    = document.getElementById('empty-query');
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const cards       = document.querySelectorAll('.card');

  let query  = '';
  let active = 'all';

  function run() {
    const q = query.toLowerCase().trim();
    let visible = 0;

    cards.forEach(function (card) {
      const catMatch = active === 'all' || card.dataset.cat === active;
      const textMatch = !q || card.textContent.toLowerCase().includes(q);
      if (catMatch && textMatch) {
        card.classList.remove('hidden');
        visible++;
      } else {
        card.classList.add('hidden');
      }
    });

    if (countEl) countEl.textContent = q ? visible + ' result' + (visible !== 1 ? 's' : '') : '';
    if (emptyEl) {
      if (visible === 0) {
        emptyEl.removeAttribute('hidden');
        if (emptyQEl) emptyQEl.textContent = q || active;
      } else {
        emptyEl.setAttribute('hidden', '');
      }
    }
  }

  if (searchEl) {
    searchEl.addEventListener('input', function () {
      query = searchEl.value;
      run();
    });
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      active = btn.dataset.cat;
      run();
    });
  });

  // press / to focus search
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== searchEl) {
      e.preventDefault();
      if (searchEl) searchEl.focus();
    }
    if (e.key === 'Escape' && document.activeElement === searchEl) {
      searchEl.value = '';
      query = '';
      run();
      searchEl.blur();
    }
  });

}());

// contributor wall
(function loadContributors() {
  var wall = document.getElementById('contributors-wall');
  var section = document.getElementById('contributors-section');
  if (!wall || !section) return;

  fetch('https://api.github.com/repos/Ayushmore1214/FirstCommit/contributors')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!Array.isArray(data) || data.length === 0) return;
      data.forEach(function (c) {
        var a = document.createElement('a');
        a.href = c.html_url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.title = c.login;
        a.className = 'contributor-avatar';
        var img = document.createElement('img');
        img.src = c.avatar_url + '&s=92';
        img.alt = c.login;
        img.width = 46;
        img.height = 46;
        a.appendChild(img);
        wall.appendChild(a);
      });
      section.removeAttribute('hidden');
    })
    .catch(function () {});
}());
