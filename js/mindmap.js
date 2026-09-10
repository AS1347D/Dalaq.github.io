/* ==========================================================================
   mindmap.js: the interactive research ecosystem
   Lab of Applied Mechanics and Bioinspired Systems
   --------------------------------------------------------------------------
   The whole visualisation is generated from the RESEARCH object below.
   To change the map you only edit that object: nothing else in this file
   needs to be touched.

     id        used for the URL anchor on research.html (research.html#id)
     mapLabel  the short label drawn inside the node (one string per line)
     name      full name used in the side panel
     tagline   one line shown under the title in the panel
     blurb     2–4 sentences describing the theme
     topics    the detailed research directions listed in the panel
     subs      up to 5 short labels drawn as the third layer of the map

   The map has three layers:  Lab  ->  Research pillars  ->  Selected areas
   plus a dashed "biomimetics" ring that threads through every pillar, and a
   small satellite node for research ethics.
   ========================================================================== */
(function () {
  'use strict';

  /* =====================================================================
     RESEARCH TAXONOMY: REPLACE / EXTEND AS THE LAB EVOLVES
     ===================================================================== */
  var RESEARCH = {
    center: {
      id: 'core',
      mapLabel: ['Applied Mechanics', '& Bioinspired', 'Systems'],
      name: 'Applied Mechanics & Bioinspired Systems',
      tagline: 'Six pillars, one shared method.',
      blurb: 'We ask how form produces function: in tissue, in a folded sheet, in an interlocked assembly, in a printed lattice. Mechanics is the common language, nature is the reference library, and computation is the instrument. Select any branch of the map to see how that question is being pursued.',
      topics: []
    },

    pillars: [
      {
        id: 'bioinspired-mechanics',
        mapLabel: ['Bioinspired', 'Mechanics'],
        name: 'Bioinspired Mechanics & Living Systems',
        tagline: 'How living matter carries load, moves, heals and adapts.',
        blurb: 'We treat biological systems as mechanical systems: tissue that closes a wound, a skeleton that breathes, a structure that grows into its loading. The aim is predictive modelling rather than description, so that biology becomes a source of design rules instead of metaphors.',
        topics: [
          'Mechanics and modelling of wound healing',
          'Mechanics and dynamics of avian breathing systems',
          'Growth, remodelling and adaptation',
          'Biological architectures as design templates',
          'Contact and interfacial mechanics in biology'
        ],
        subs: ['Wound healing', 'Avian breathing', 'Growth & adaptation', 'Bio-architectures']
      },
      {
        id: 'architected-materials',
        mapLabel: ['Architected', 'Materials'],
        name: 'Architected Materials & Structures',
        tagline: 'Properties that come from geometry, not chemistry.',
        blurb: 'Interlocking blocks, folded sheets, segmented shells: materials whose stiffness, strength, damage tolerance and failure mode are set by their architecture. The same geometric reasoning links protective systems, tessellated assemblies and deployable surfaces.',
        topics: [
          'Topologically interlocked materials',
          'Origami mechanics and folded assemblies',
          'Armour and protective systems',
          'Tessellation, topology and geometric mechanics',
          'Fundamental contact mechanics'
        ],
        subs: ['Interlocked materials', 'Origami mechanics', 'Protective systems', 'Contact mechanics']
      },
      {
        id: 'adaptive-systems',
        mapLabel: ['Adaptive &', 'Intelligent', 'Systems'],
        name: 'Adaptive & Intelligent Systems',
        tagline: 'Structures that sense, actuate, deploy and reconfigure.',
        blurb: 'Once architecture is programmable, a structure can change shape on demand. We develop origami-based actuation and robotics, deployable and morphing assemblies, adaptive facades and wearable structures. Geometry, material response and control are designed together.',
        topics: [
          'Origami-based robotic systems',
          'Origami actuation and dynamics',
          'Deployable and morphing structures',
          'Adaptive facades and responsive envelopes',
          'Wearable structures, smart materials and sensing'
        ],
        subs: ['Origami robotics', 'Origami actuation', 'Adaptive facades', 'Wearable structures']
      },
      {
        id: 'computational-mechanics',
        mapLabel: ['Computational', 'Mechanics'],
        name: 'Computational Mechanics & Design',
        tagline: 'Simulation and optimisation as instruments of discovery.',
        blurb: 'Finite and discrete element models, nonlinear and contact dynamics, topology optimisation and data-driven design form the shared toolbox of the lab. Models are built to expose mechanisms and to search design spaces no intuition can cover. Every model stays answerable to experiment.',
        topics: [
          'Finite element modelling',
          'Discrete element modelling',
          'Topology optimisation',
          'Nonlinear, contact and multibody dynamics',
          'Data-driven and inverse design'
        ],
        subs: ['Finite elements', 'Discrete elements', 'Topology optimisation', 'Inverse design']
      },
      {
        id: 'manufacturing-sustainability',
        mapLabel: ['Manufacturing &', 'Sustainability'],
        name: 'Manufacturing & Sustainable Materials',
        tagline: 'From a designed geometry to a material that can be made, and remade.',
        blurb: 'An architected design is only useful if it can be manufactured. We work on additive manufacturing, recycled and circular feedstocks and process–structure–property relations, treating sustainability as a design constraint present from the first sketch rather than an afterthought.',
        topics: [
          'Additive manufacturing of architected media',
          'Recycled and circular materials',
          'Sustainable composites and biomaterials',
          'Process–structure–property relations',
          'Scalable and low-waste fabrication'
        ],
        subs: ['Additive manufacturing', 'Recycled materials', 'Process–structure', 'Scalable fabrication']
      },
      {
        id: 'biomedical-systems',
        mapLabel: ['Biomedical &', 'Human-Centred'],
        name: 'Biomedical & Human-Centred Systems',
        tagline: 'Mechanics translated into care.',
        blurb: 'Bone implants, prostheses, wound-healing patches, antimicrobial surfaces and assistive devices: research aimed at the point where mechanics meets the human body. Physiological loading, biological response and the realities of clinical use drive every design decision.',
        topics: [
          'Bone implants and orthopaedic mechanics',
          'Prosthesis design and fabrication',
          'Wound-healing patches',
          'Antimicrobial and biofunctional surfaces',
          'Biomaterials and assistive devices'
        ],
        subs: ['Bone implants', 'Prosthetics', 'Healing patches', 'Antimicrobial surfaces']
      }
    ],

    /* A deliberately small satellite: present in the ecosystem, not a pillar. */
    ethics: {
      id: 'ethics',
      mapLabel: ['Research Ethics'],
      name: 'Research Ethics & Responsible Innovation',
      tagline: 'Present in every project, without being a pillar of its own.',
      blurb: 'Ethical reflection is part of the engineering process here, not a compliance step at the end. The lab publishes on responsible innovation in bioinspired and biomedical engineering: what we owe the people who use human-centred devices, what we owe the environment when we design new materials, and how biological knowledge should be borrowed.',
      topics: [
        'Responsible innovation in bioinspired design',
        'Ethics of human-centred and biomedical devices',
        'Sustainability and end-of-life responsibility',
        'Research integrity and open science'
      ]
    },

    /* The connective theme, drawn as a ring rather than a branch. */
    ring: {
      label: 'Biomimetics',
      name: 'Biomimetics & bioinspired design',
      tagline: 'The method shared by every pillar.',
      blurb: 'Biomimetics is not one more topic on the list: it is the method that runs through all of them. Biological structures are read as engineering solutions, abstracted into geometry and mechanics, and re-expressed in materials, machines and devices. That is why the ring touches every pillar rather than hanging off one of them.'
    }
  };

  window.LAB_RESEARCH = RESEARCH; /* other scripts/pages may reuse the taxonomy */

  var wrap = document.querySelector('[data-mindmap]');
  var panelHost = document.querySelector('[data-mindmap-panel]');
  if (!wrap || !panelHost) return;

  var SVGNS = 'http://www.w3.org/2000/svg';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --------------------------------------------------------------- utils */
  function el(tag, attrs, kids) {
    var node = document.createElementNS(SVGNS, tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (attrs[k] !== null && attrs[k] !== undefined) node.setAttribute(k, attrs[k]);
      });
    }
    (kids || []).forEach(function (kid) { node.appendChild(kid); });
    return node;
  }
  function n(v) { return Math.round(v * 10) / 10; }
  function polar(cx, cy, r, deg) {
    var a = deg * Math.PI / 180;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  }
  function widthOf(lines, fs, pad) {
    var longest = lines.reduce(function (m, l) { return Math.max(m, l.length); }, 0);
    return Math.round(longest * fs * 0.525 + pad);
  }
  /* tree connector: down the spine, round the corner, straight into the node */
  function elbow(spineX, y, endX) {
    var r = 14;
    return 'M' + n(spineX) + ',' + n(y - r) +
           ' C' + n(spineX) + ',' + n(y - r / 3) + ' ' + n(spineX + r / 3) + ',' + n(y) + ' ' + n(spineX + r) + ',' + n(y) +
           ' L' + n(endX) + ',' + n(y);
  }
  /* gentle S-curve between two points */
  function bow(x1, y1, x2, y2, bend) {
    var dx = x2 - x1, dy = y2 - y1;
    var len = Math.sqrt(dx * dx + dy * dy) || 1;
    var px = -dy / len, py = dx / len;
    return 'M' + n(x1) + ',' + n(y1) +
           ' C' + n(x1 + dx * 0.35 + px * bend) + ',' + n(y1 + dy * 0.35 + py * bend) +
           ' ' + n(x1 + dx * 0.65 + px * bend) + ',' + n(y1 + dy * 0.65 + py * bend) +
           ' ' + n(x2) + ',' + n(y2);
  }

  /* --------------------------------------------------------- node factory */
  function capsule(opts) {
    /* opts: x, y, lines, fs, lineHeight, padX, className, label, focusable */
    var w = opts.w || widthOf(opts.lines, opts.fs, opts.padX);
    var h = opts.lines.length * opts.lineHeight + opts.padY;
    var first = -((opts.lines.length - 1) / 2) * opts.lineHeight + opts.fs * 0.34;

    var text = el('text', {
      class: 'mm-node__label' + (opts.small ? ' mm-node__label--sm' : ''),
      x: n(opts.x), y: n(opts.y), 'text-anchor': 'middle'
    });
    opts.lines.forEach(function (line, i) {
      var tspan = el('tspan', { x: n(opts.x), dy: i === 0 ? n(first) : n(opts.lineHeight) });
      tspan.textContent = line;
      text.appendChild(tspan);
    });

    var inner = el('g', { class: 'mm-node__group' }, [
      el('rect', {
        class: 'mm-node__halo',
        x: n(opts.x - w / 2 - 7), y: n(opts.y - h / 2 - 7),
        width: n(w + 14), height: n(h + 14), rx: n(Math.min((h + 14) / 2, 18))
      }),
      el('rect', {
        class: 'mm-node__shape',
        x: n(opts.x - w / 2), y: n(opts.y - h / 2),
        width: n(w), height: n(h), rx: n(Math.min(h / 2, 14))
      }),
      text
    ]);

    var attrs = { class: 'mm-node ' + opts.className, 'data-node': opts.id };
    if (opts.focusable) {
      attrs.tabindex = '0';
      attrs.role = 'button';
      attrs['aria-label'] = opts.label;
    } else {
      attrs['aria-hidden'] = 'true';
    }
    var g = el('g', attrs);
    if (opts.focusable) {
      var t = el('title'); t.textContent = opts.label; g.appendChild(t);
    }
    g.appendChild(inner);
    return { g: g, w: w, h: h };
  }

  function centerNode(opts) {
    var first = -((opts.lines.length - 1) / 2) * opts.lineHeight + opts.fs * 0.34;
    var text = el('text', { class: 'mm-node__label', x: n(opts.x), y: n(opts.y), 'text-anchor': 'middle' });
    opts.lines.forEach(function (line, i) {
      var tspan = el('tspan', { x: n(opts.x), dy: i === 0 ? n(first) : n(opts.lineHeight) });
      tspan.textContent = line;
      text.appendChild(tspan);
    });
    var inner = el('g', { class: 'mm-node__group' }, [
      el('circle', { class: 'mm-node__halo', cx: n(opts.x), cy: n(opts.y), r: n(opts.r + 9) }),
      el('circle', { class: 'mm-node__shape', cx: n(opts.x), cy: n(opts.y), r: n(opts.r) }),
      text
    ]);
    var g = el('g', {
      class: 'mm-node mm-node--center', 'data-node': opts.id,
      tabindex: '0', role: 'button', 'aria-label': opts.label
    });
    var t = el('title'); t.textContent = opts.label; g.appendChild(t);
    g.appendChild(inner);
    return { g: g, r: opts.r };
  }

  /* ------------------------------------------------- third-layer callout */
  /* A small block listing the research areas of one pillar. It is docked to
     whichever corner of the canvas is furthest from that pillar, so it never
     collides with the map however long the labels are. */
  function areaCallout(pillar, pos, VW, VH) {
    var PAD = 12, W = 196;
    var rowH = 17, headH = 20;
    var H = headH + pillar.subs.length * rowH + 12;

    var corners = [
      { x: PAD + W / 2, y: PAD + H / 2 },
      { x: VW - PAD - W / 2, y: PAD + H / 2 },
      { x: PAD + W / 2, y: VH - PAD - H / 2 },
      { x: VW - PAD - W / 2, y: VH - PAD - H / 2 }
    ];
    /* the nearest corner keeps the leader short and the association obvious */
    var best = corners[0], bestD = Infinity;
    corners.forEach(function (c) {
      var d = (c.x - pos.x) * (c.x - pos.x) + (c.y - pos.y) * (c.y - pos.y);
      if (d < bestD) { bestD = d; best = c; }
    });

    var left = best.x - W / 2, topY = best.y - H / 2;
    var g = el('g', { class: 'mm-sub', 'data-sub': pillar.id, 'aria-hidden': 'true' });

    /* leader line from the pillar to the nearest edge of the block */
    var anchor = {
      x: Math.max(left, Math.min(pos.x, left + W)),
      y: pos.y < best.y ? topY : topY + H
    };
    g.appendChild(el('path', {
      class: 'mm-edge mm-edge--sub', d: bow(pos.x, pos.y, anchor.x, anchor.y, 8)
    }));

    g.appendChild(el('rect', {
      class: 'mm-callout__box', x: n(left), y: n(topY),
      width: W, height: n(H), rx: 6
    }));

    var head = el('text', { class: 'mm-callout__head', x: n(left + 14), y: n(topY + 14) });
    head.textContent = 'Selected areas';
    g.appendChild(head);

    pillar.subs.forEach(function (label, k) {
      var y = topY + headH + rowH * k + 12;
      g.appendChild(el('path', {
        class: 'mm-callout__bullet',
        d: 'M' + n(left + 15) + ',' + n(y - 4) + ' l3.5,3.5 -3.5,3.5 -3.5,-3.5 z'
      }));
      var row = el('text', { class: 'mm-callout__row', x: n(left + 26), y: n(y) });
      row.textContent = label;
      g.appendChild(row);
    });

    return g;
  }

  /* ------------------------------------------------------------- layouts */
  function buildRadial() {
    /* Geometry of the radial map. The viewBox is deliberately small so that
       the label text stays legible when the SVG is scaled into its column. */
    var VW = 700, VH = 560, cx = 350, cy = 280, R = 176, CR = 68;
    var svg = el('svg', {
      class: 'mindmap', viewBox: '0 0 ' + VW + ' ' + VH,
      role: 'group', 'aria-label': 'Interactive map of the research ecosystem'
    });

    var gEdges = el('g', { class: 'mm-edges' });
    var gRing = el('g', { class: 'mm-rings', 'aria-hidden': 'true' });
    var gSubs = el('g', { class: 'mm-subs', 'aria-hidden': 'true' });
    var gNodes = el('g', { class: 'mm-nodes' });

    /* biomimetics ring + its label */
    gRing.appendChild(el('circle', { class: 'mm-ring', cx: cx, cy: cy, r: R }));
    gRing.appendChild(el('line', { class: 'mm-ring', x1: n(cx - R - 4), y1: cy, x2: n(cx - R - 16), y2: cy, 'stroke-dasharray': 'none' }));
    var ringLabel = el('text', { class: 'mm-ring-label', x: n(cx - R - 22), y: n(cy + 3.5), 'text-anchor': 'end' });
    ringLabel.textContent = RESEARCH.ring.label;
    gRing.appendChild(ringLabel);

    /* pillars around the centre */
    var step = 360 / RESEARCH.pillars.length;
    RESEARCH.pillars.forEach(function (p, i) {
      var deg = -90 + i * step;
      var pos = polar(cx, cy, R, deg);
      var bend = (i % 2 === 0 ? 1 : -1) * 12;

      gEdges.appendChild(el('path', {
        class: 'mm-edge', 'data-edge': p.id,
        d: bow(cx, cy, pos.x, pos.y, bend)
      }));

      var node = capsule({
        id: p.id, x: pos.x, y: pos.y, lines: p.mapLabel,
        fs: 13, lineHeight: 15.5, padX: 34, padY: 18,
        className: 'mm-node--pillar', label: p.name + '. ' + p.tagline, focusable: true
      });
      gNodes.appendChild(node.g);

      /* third layer: the selected research areas, docked in the corner of the
         canvas furthest from the pillar and joined to it by a leader line.
         A corner block always fits, whatever the labels say. */
      gSubs.appendChild(areaCallout(p, pos, VW, VH));
    });

    /* ethics satellite: outside the ring, in the gap between two pillars */
    var ePos = { x: cx + 230, y: cy };
    gEdges.appendChild(el('path', {
      class: 'mm-edge mm-edge--ethics', 'data-edge': 'ethics',
      d: bow(cx, cy, ePos.x, ePos.y, -14)
    }));
    gNodes.appendChild(capsule({
      id: 'ethics', x: ePos.x, y: ePos.y, lines: RESEARCH.ethics.mapLabel,
      fs: 10.5, lineHeight: 13, padX: 26, padY: 16,
      className: 'mm-node--ethics', label: RESEARCH.ethics.name + '. ' + RESEARCH.ethics.tagline,
      focusable: true, small: true
    }).g);

    /* the centre, drawn last so it sits above the edges */
    gNodes.appendChild(centerNode({
      id: 'core', x: cx, y: cy, r: CR, lines: RESEARCH.center.mapLabel,
      fs: 12.5, lineHeight: 15, label: RESEARCH.center.name
    }).g);

    svg.appendChild(gRing);
    svg.appendChild(gEdges);
    svg.appendChild(gSubs);
    svg.appendChild(gNodes);
    return svg;
  }

  /* Narrow screens get a left-spined tree instead of the radial map: the same
     three layers, but readable in one column. */
  function buildStacked() {
    var VW = 340;          /* small viewBox => large, legible text when scaled */
    var rootLeft = 18;     /* left edge of the root node                        */
    var branchLeft = 74;   /* left edge of every branch node                    */
    var spine = 44;        /* the vertical trunk, tucked under the root         */
    var top = 48, first = 128, step = 64;

    var pillars = RESEARCH.pillars.length;
    var ethicsY = first + pillars * step + 6;
    var VH = ethicsY + 44;

    var svg = el('svg', {
      class: 'mindmap', viewBox: '0 0 ' + VW + ' ' + VH,
      role: 'group', 'aria-label': 'Interactive map of the research ecosystem'
    });
    var gEdges = el('g', { class: 'mm-edges' });
    var gNodes = el('g', { class: 'mm-nodes' });

    var rootW = widthOf(RESEARCH.center.mapLabel, 12.5, 34);
    var rootH = RESEARCH.center.mapLabel.length * 15 + 18;

    /* the trunk */
    gEdges.appendChild(el('path', {
      class: 'mm-edge',
      d: 'M' + spine + ',' + n(top + rootH / 2) + ' L' + spine + ',' + n(ethicsY)
    }));

    RESEARCH.pillars.forEach(function (p, i) {
      var y = first + i * step;
      var w = widthOf(p.mapLabel, 12.5, 30);
      gEdges.appendChild(el('path', {
        class: 'mm-edge', 'data-edge': p.id, d: elbow(spine, y, branchLeft)
      }));
      gNodes.appendChild(capsule({
        id: p.id, x: branchLeft + w / 2, y: y, w: w, lines: p.mapLabel,
        fs: 12.5, lineHeight: 15, padX: 30, padY: 16,
        className: 'mm-node--pillar', label: p.name + '. ' + p.tagline, focusable: true
      }).g);
    });

    var eW = widthOf(RESEARCH.ethics.mapLabel, 10.5, 26);
    gEdges.appendChild(el('path', {
      class: 'mm-edge mm-edge--ethics', 'data-edge': 'ethics',
      d: elbow(spine, ethicsY, branchLeft)
    }));
    gNodes.appendChild(capsule({
      id: 'ethics', x: branchLeft + eW / 2, y: ethicsY, w: eW, lines: RESEARCH.ethics.mapLabel,
      fs: 10.5, lineHeight: 13, padX: 26, padY: 14,
      className: 'mm-node--ethics', label: RESEARCH.ethics.name, focusable: true, small: true
    }).g);

    gNodes.appendChild(capsule({
      id: 'core', x: rootLeft + rootW / 2, y: top, w: rootW, lines: RESEARCH.center.mapLabel,
      fs: 12.5, lineHeight: 15, padX: 34, padY: 18,
      className: 'mm-node--center', label: RESEARCH.center.name, focusable: true
    }).g);

    svg.appendChild(gEdges);
    svg.appendChild(gNodes);
    return svg;
  }

  /* ---------------------------------------------------------- side panel */
  function lookup(id) {
    if (id === 'core' || !id) return RESEARCH.center;
    if (id === 'ethics') return RESEARCH.ethics;
    var found = null;
    RESEARCH.pillars.forEach(function (p) { if (p.id === id) found = p; });
    return found || RESEARCH.center;
  }

  function renderPanel(id) {
    var data = lookup(id);
    var isCore = data === RESEARCH.center;
    var isEthics = data === RESEARCH.ethics;

    panelHost.setAttribute('data-kind', isEthics ? 'ethics' : (isCore ? 'core' : 'pillar'));

    var eyebrow = isCore ? 'Research ecosystem' : (isEthics ? 'Across the lab' : 'Research pillar');
    var html = '' +
      '<p class="mm-panel__eyebrow">' + eyebrow + '</p>' +
      '<h3 class="mm-panel__title">' + data.name + '</h3>' +
      '<p class="mm-panel__body"><em>' + data.tagline + '</em></p>' +
      '<p class="mm-panel__body">' + data.blurb + '</p>';

    if (data.topics && data.topics.length) {
      html += '<ul class="chips mm-panel__topics">';
      data.topics.forEach(function (t) {
        html += '<li class="chip' + (isEthics ? ' chip--alt' : '') + '">' + t + '</li>';
      });
      html += '</ul>';
    }

    html += '<div class="mm-panel__foot">';
    if (isCore) {
      html += '<a class="link-arrow" href="research.html">All running projects</a>' +
              '<span class="small muted">Select a node to explore</span>';
    } else {
      html += '<a class="link-arrow" href="research.html#' + data.id + '">Projects in this area</a>' +
              '<a class="small muted" href="publications.html?theme=' + data.id + '">Related publications</a>';
    }
    html += '</div>';

    panelHost.innerHTML = html;
  }

  /* ------------------------------------------------------- interactions */
  var svgEl = null;
  var selected = null;
  var mode = null;

  function clearVisualState() {
    if (!svgEl) return;
    svgEl.querySelectorAll('.mm-node.is-active').forEach(function (x) { x.classList.remove('is-active'); });
    svgEl.querySelectorAll('.mm-edge.is-active').forEach(function (x) { x.classList.remove('is-active'); });
    svgEl.querySelectorAll('.mm-sub.is-shown').forEach(function (x) { x.classList.remove('is-shown'); });
  }

  function highlight(id, withSubs) {
    clearVisualState();
    if (!id || id === 'core') {
      svgEl.classList.remove('has-selection');
      return;
    }
    svgEl.classList.add('has-selection');
    var node = svgEl.querySelector('.mm-node[data-node="' + id + '"]');
    if (node) node.classList.add('is-active');
    svgEl.querySelectorAll('.mm-edge[data-edge="' + id + '"]').forEach(function (e) { e.classList.add('is-active'); });
    if (withSubs) {
      var subs = svgEl.querySelector('.mm-sub[data-sub="' + id + '"]');
      if (subs) subs.classList.add('is-shown');
    }
  }

  function preview(id) { highlight(id, false); renderPanel(id); }
  function restore() { highlight(selected, true); renderPanel(selected || 'core'); }

  function applySelection() {
    svgEl.querySelectorAll('.mm-node[aria-pressed]').forEach(function (x) {
      x.setAttribute('aria-pressed', String(x.getAttribute('data-node') === selected));
    });
    restore();
  }

  function select(id) {
    selected = (selected === id) ? null : id;   /* clicking again closes it */
    applySelection();
  }

  function bindNodes() {
    var nodes = Array.prototype.slice.call(svgEl.querySelectorAll('.mm-node[role="button"]'));

    nodes.forEach(function (node, index) {
      var id = node.getAttribute('data-node');
      node.setAttribute('aria-pressed', String(selected === id));

      node.addEventListener('pointerenter', function () { preview(id); });
      node.addEventListener('pointerleave', restore);
      node.addEventListener('focus', function () { preview(id); });
      node.addEventListener('blur', restore);

      node.addEventListener('click', function () { select(id); });

      node.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          select(id);
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          nodes[(index + 1) % nodes.length].focus();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          nodes[(index - 1 + nodes.length) % nodes.length].focus();
        } else if (e.key === 'Escape') {
          selected = null;
          applySelection();
        }
      });
    });
  }

  /* ------------------------------------------------------------- render */
  function render() {
    var next = wrap.clientWidth < 560 ? 'stacked' : 'radial';
    if (next === mode) return;
    mode = next;

    var old = wrap.querySelector('svg.mindmap');
    if (old) old.remove();
    var fallback = wrap.querySelector('.mindmap-fallback');
    if (fallback) fallback.remove();

    svgEl = (mode === 'radial') ? buildRadial() : buildStacked();
    wrap.insertBefore(svgEl, wrap.firstChild);
    bindNodes();
    restore();
  }

  render();
  renderPanel(selected || 'core');

  var resizeTimer;
  window.addEventListener('resize', function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(render, reduceMotion ? 0 : 160);
  });

  /* Allow other page elements (e.g. the pillar cards) to drive the map:
     <button data-mindmap-focus="architected-materials"> */
  document.querySelectorAll('[data-mindmap-focus]').forEach(function (trigger) {
    trigger.addEventListener('mouseenter', function () { preview(trigger.getAttribute('data-mindmap-focus')); });
    trigger.addEventListener('mouseleave', restore);
  });
})();
