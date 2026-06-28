/**
 * DevOps Glossary — main.js
 * Handles: dark mode toggle, search filtering, category filtering
 * No build step, no dependencies, just plain JavaScript.
 */

(function () {
  'use strict';

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];

  // --- Theme ---
  const THEME_KEY = 'devops-glossary-theme';

  function getStoredTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (_) { return null; }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = $('#theme-toggle .theme-icon');
    if (icon) icon.textContent = theme === 'dark' ? '☀' : '☾';
    try { localStorage.setItem(THEME_KEY, theme); } catch (_) { /* noop */ }
  }

  function initTheme() {
    const stored = getStoredTheme();
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(stored || (prefersDark ? 'dark' : 'light'));
  }

  const themeToggle = $('#theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  initTheme();

  // --- Search + Filter ---
  const searchInput = $('#search-input');
  const searchCount = $('#search-count');
  const emptyState = $('#empty-state');
  const clearSearchBtn = $('#clear-search');
  const termCountEl = $('#term-count');
  const cards = $$('.term-card');

  let currentFilter = 'all';
  let currentQuery = '';

  function normalize(str) {
    return str.toLowerCase().replace(/\s+/g, ' ').trim();
  }

  function applyFilters() {
    let visible = 0;

    cards.forEach((card) => {
      const category = card.dataset.category || '';
      const text = normalize(card.textContent);
      const matchesFilter = currentFilter === 'all' || category === currentFilter;
      const matchesQuery = !currentQuery || text.includes(normalize(currentQuery));

      if (matchesFilter && matchesQuery) {
        card.classList.remove('hidden');
        card.removeAttribute('hidden');
        visible++;
      } else {
        card.classList.add('hidden');
        card.setAttribute('hidden', '');
      }
    });

    if (searchCount) {
      searchCount.textContent = currentQuery
        ? `${visible} result${visible !== 1 ? 's' : ''}`
        : '';
    }

    if (emptyState) {
      if (visible === 0) {
        emptyState.removeAttribute('hidden');
      } else {
        emptyState.setAttribute('hidden', '');
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentQuery = e.target.value;
      applyFilters();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        currentQuery = '';
        applyFilters();
        searchInput.focus();
      }
    });
  }

  // --- Category Filter Buttons ---
  const filterButtons = $$('.filter-btn');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter || 'all';
      applyFilters();
    });
  });

  // --- Term Count ---
  if (termCountEl) {
    termCountEl.textContent = cards.length;
  }

  // --- Keyboard: press / to focus search ---
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      if (searchInput) searchInput.focus();
    }
    if (e.key === 'Escape' && document.activeElement === searchInput) {
      if (searchInput) {
        searchInput.value = '';
        currentQuery = '';
        applyFilters();
        searchInput.blur();
      }
    }
  });

})();
