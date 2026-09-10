Icons
=====
favicon.svg      the browser tab icon: the compact lab mark, a cubic stress
                 element, an isometric cube with one normal traction arrow
                 out of each visible face. Self-contained SVG, no external
                 reference. Scales to any size; the geometry and how to
                 recolour it are documented in the file.

All interface icons (mail, GitHub, ORCID, Google Scholar, ResearchGate,
LinkedIn, menu, theme toggle, ...) live in an inline <svg> sprite near the top
of every HTML page, under the comment "ICON SPRITE". They are inlined rather
than loaded from a file so the pages also render correctly when opened straight
from disk. To add an icon, add one <symbol id="i-name"> to that block in each
page and use it with:

    <svg class="icon" aria-hidden="true"><use href="#i-name"></use></svg>

The header carries the full lockup: the same cube plus a sigma under a double
bar, the notation for a second-order tensor. It is an inline <svg class=
"brand__mark"> in each page, coloured from css/style.css, so it follows the
header band. The two marks share the same path data; if you change one,
change the other.
