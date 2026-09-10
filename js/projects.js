/* ==========================================================================
   projects.js: theme filter for the project list (research.html)

   The filter bar is a set of ordinary anchors, so with JavaScript switched off
   every project stays on the page and the links do no harm. Here they become a
   filter that also honours a theme id in the URL, which is how the mind map
   deep-links into a theme: research.html#adaptive-systems

   There is no "all" button: the page starts unfiltered, clicking a theme narrows
   it, and clicking the same theme again (or the "show every project" link beside
   the count) goes back to the full list.

   To add a project, copy an <article class="rp"> block in research.html and set
   its data-theme to one of the pillar ids in js/mindmap.js. Nothing here needs
   to change.
   ========================================================================== */
(function () {
  'use strict';

  var bar = document.querySelector('[data-project-filter]');
  var list = document.querySelector('[data-project-list]');
  if (!bar || !list) return;

  var links = Array.prototype.slice.call(bar.querySelectorAll('a[data-filter]'));
  var items = Array.prototype.slice.call(list.querySelectorAll('[data-theme]'));
  var countOut = document.querySelector('[data-project-count]');
  var empty = document.querySelector('[data-project-empty]');

  var known = {};
  links.forEach(function (a) { known[a.getAttribute('data-filter')] = a.textContent.trim(); });

  function currentFilter() {
    var hash = (window.location.hash || '').replace('#', '');
    return known[hash] ? hash : null;      /* null means: show everything */
  }

  function apply(filter) {
    var shown = 0;

    items.forEach(function (item) {
      var match = !filter || item.getAttribute('data-theme') === filter;
      item.hidden = !match;
      if (match) shown++;
    });

    links.forEach(function (a) {
      if (a.getAttribute('data-filter') === filter) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });

    if (empty) empty.hidden = shown !== 0;

    if (countOut) {
      if (!filter) {
        countOut.textContent = items.length + ' projects';
      } else {
        countOut.textContent = shown + ' of ' + items.length + ' projects · ';
        var clear = document.createElement('a');
        clear.href = 'research.html';
        clear.setAttribute('data-project-clear', '');
        clear.textContent = 'show every project';
        countOut.appendChild(clear);
      }
    }
  }

  /* Drop the theme from the URL without adding a history entry, then re-apply. */
  function clearFilter() {
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
      apply(null);
    } else {
      window.location.hash = '';
    }
  }

  document.addEventListener('click', function (e) {
    var clear = e.target.closest('[data-project-clear]');
    if (clear) { e.preventDefault(); clearFilter(); return; }

    /* clicking the active theme again clears it, and the hash would not change,
       so no hashchange event would fire and we handle it here */
    var link = e.target.closest('[data-project-filter] a[data-filter]');
    if (link && link.getAttribute('data-filter') === currentFilter()) {
      e.preventDefault();
      clearFilter();
    }
  });

  window.addEventListener('hashchange', function () { apply(currentFilter()); });
  apply(currentFilter());
})();
