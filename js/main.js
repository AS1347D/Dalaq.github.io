/* ==========================================================================
   main.js: site-wide behaviour
   Lab of Applied Mechanics and Bioinspired Systems

   Contents
     1. Theme toggle (light / dark, remembered in localStorage)
     2. Mobile navigation
     3. Sticky header state
     4. Motion preference and smooth deep links
     5. Scroll reveal (progressive enhancement)
     6. Footer year

   Everything here is optional enhancement: with JavaScript disabled the site
   still renders, reads and navigates correctly.
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.remove('no-js');

  /* ---------------------------------------------------------------------
     1. THEME
     The initial theme is applied by a tiny inline script in <head> so the
     page never flashes the wrong colours. Here we only handle the toggle.
     --------------------------------------------------------------------- */
  var STORE_KEY = 'lambs-theme';

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function currentTheme() {
    return root.getAttribute('data-theme') || (systemPrefersDark() ? 'dark' : 'light');
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORE_KEY, theme); } catch (e) { /* private mode */ }
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      btn.setAttribute('aria-pressed', String(theme === 'dark'));
    });
  }

  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
  });
  setTheme(currentTheme());

  /* ---------------------------------------------------------------------
     2. MOBILE NAVIGATION
     --------------------------------------------------------------------- */
  var navToggle = document.querySelector('.nav__toggle');
  var navList = document.getElementById('primary-nav');

  function closeNav() {
    if (!navToggle || !navList) return;
    navList.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      var open = navList.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });

    navList.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navList.classList.contains('is-open')) {
        closeNav();
        navToggle.focus();
      }
    });

    document.addEventListener('click', function (e) {
      if (!navList.classList.contains('is-open')) return;
      if (e.target.closest('.nav')) return;
      closeNav();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 1200) closeNav();
    });
  }

  /* ---------------------------------------------------------------------
     3. STICKY HEADER
     --------------------------------------------------------------------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------------------------------------------------------------------
     4. MOTION PREFERENCE + DEEP LINKS
     A hash that names an element scrolls to it smoothly, unless the visitor
     has asked for reduced motion. Native anchor jumping still works with
     JavaScript off; this only softens it.
     --------------------------------------------------------------------- */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function scrollToHash() {
    if (!window.location.hash || window.location.hash === '#') return;
    var target = null;
    try {
      target = document.querySelector(window.location.hash);
    } catch (e) {
      return; /* not a valid selector, nothing to scroll to */
    }
    if (!target) return;
    window.setTimeout(function () {
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }, 60);
  }
  window.addEventListener('hashchange', scrollToHash);
  scrollToHash();

  /* ---------------------------------------------------------------------
     5. SCROLL REVEAL
     Purely decorative. The elements are only hidden if the inline head
     script added .js-reveal, so every failure path here ends with the
     content visible rather than invisible.
     --------------------------------------------------------------------- */
  var revealables = document.querySelectorAll('.reveal');
  if (revealables.length) {
    var showAll = function () {
      revealables.forEach(function (n) { n.classList.add('is-visible'); });
    };

    if (!('IntersectionObserver' in window) || reduceMotion) {
      showAll();
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
      revealables.forEach(function (n) { io.observe(n); });

      /* Safety net. A background tab, a throttled renderer or a prerender can
         stop the observer firing for an unbounded time; never leave the page
         half invisible because of an animation. */
      window.setTimeout(function () {
        io.disconnect();
        showAll();
      }, 3000);
    }
  }

  /* ---------------------------------------------------------------------
     6. FOOTER YEAR
     --------------------------------------------------------------------- */
  document.querySelectorAll('[data-year]').forEach(function (n) {
    n.textContent = String(new Date().getFullYear());
  });
})();
