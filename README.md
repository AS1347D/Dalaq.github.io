# Lab of Applied Mechanics and Bioinspired Systems: website

A complete, self-contained website for an academic research group. Plain HTML, CSS,
vanilla JavaScript and SVG: **no build step, no frameworks, no external requests**, so it can
be dropped straight onto GitHub Pages (or any static host) and edited with a text editor.

The centrepiece is an interactive **research ecosystem map** on the home page, generated from a
single data object in `js/mindmap.js`.

---

## 1. Contents

```text
/
├── index.html            Home: hero, interactive research map, pillars, approach, news
├── research.html         Running projects, filterable by research theme
├── people.html           PI, researchers, alumni, PhD and postdoc opportunities
├── impact.html           Coming-soon page: patents, working with industry, funders
├── publications.html     Filterable publication list, plus the doctoral thesis
├── teaching.html         Course list, shared material, supervision
├── resources.html        Open research: codes and datasets
├── lab.html              Facilities, gallery and contact details
├── news.html             Upcoming conferences and events, news, past-event archive
├── 404.html              Friendly not-found page (GitHub Pages serves this automatically)
├── css/
│   └── style.css         All styling, organised into 20 commented sections
├── js/
│   ├── main.js           Navigation, theme toggle, deep links, scroll reveal
│   ├── mindmap.js        The research ecosystem map + the research taxonomy
│   ├── publications.js   The publication list and its filters
│   └── projects.js       Theme filter for the projects page
├── assets/
│   ├── images/           The group head's portrait plus placeholder SVGs to replace
│   ├── icons/            favicon.svg, the cubic stress element (interface icons are inlined in each page)
│   └── files/            Put your CV, lecture notes and other PDFs here
├── .nojekyll             Tells GitHub Pages to serve the files as they are
├── .gitignore            Keeps OS and editor cruft out of the repository
└── README.md             This file
```

---

## 2. Deploying on GitHub Pages

### Option A: project site (`your-name.github.io/lab-website`)

1. Create a new repository on GitHub, e.g. `lab-website`.
2. Upload every file in this folder, keeping the folder structure
   (either drag-and-drop into the GitHub web interface, or use git):

   ```bash
   git init
   git add .
   git commit -m "Lab website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/lab-website.git
   git push -u origin main
   ```

3. On GitHub open **Settings → Pages**.
4. Under *Build and deployment*, set **Source: Deploy from a branch**,
   **Branch: `main`**, **Folder: `/ (root)`**, and press **Save**.
5. Wait a minute, then open `https://YOUR-USERNAME.github.io/lab-website/`.

### Option B: user or organisation site (`your-name.github.io`)

Name the repository exactly `YOUR-USERNAME.github.io` and push the same files. The site appears
at `https://YOUR-USERNAME.github.io/`.

### Custom domain

In **Settings → Pages → Custom domain**, enter your domain and follow the DNS instructions.
GitHub writes a `CNAME` file into the repository; leave it there.

### Notes

* All paths in the site are **relative**, so it works from a subfolder without changes.
* `.nojekyll` stops GitHub from running Jekyll over the files. Keep it.
* There is no build step. What you push is what is served.
* `.gitignore` keeps OS cruft (`.DS_Store`, `Thumbs.db`, `desktop.ini`, editor folders and
  OneDrive conflict copies) out of the repository.

### Previewing locally

Double-click `index.html`. The whole site works straight from disk: no server needed, because
nothing is fetched at runtime and the icon sprite is inlined in each page. If you would rather use
a server (identical to how GitHub Pages behaves), the Live Server extension in VS Code, or:

```bash
python -m http.server 8000
```

### GitHub Pages compatibility checklist

This site was checked against everything Pages cares about:

| Requirement | Status |
| --- | --- |
| `index.html` and `404.html` at the repository root | yes |
| No build step, no server code, no database | yes |
| Every path relative, none starting with `/` | yes, so it works from a subfolder too |
| File names lowercase, no spaces (Pages is case sensitive) | yes |
| `.nojekyll` present, no files starting with `_` | yes |
| No external scripts, stylesheets, fonts or images | none; the page makes zero third-party requests |
| No `fetch`/XHR at runtime | none, so `file://` works as well as `https://` |
| Every internal link resolves to a file that exists | verified |

---

## 3. What is real, and what still needs replacing

Everything factual on the site now comes from the CV: people, funded projects, patents, courses,
publications, facilities and the news items. What remains to be supplied is listed below. To find
the markers in the source:

```bash
grep -rn "REPLACE" .
```

### 3.0 Outstanding items

| Item | Where | Note |
| --- | --- | --- |
| **Photographs of the remaining members** | `people.html` | Five of the twelve members now have photographs. The other seven still point at `assets/images/placeholder-portrait.svg`. Ask each person for a photo and their permission to publish it, drop the file in `assets/images/`, and change the `src` and the `alt`. |
| **Project and lab photographs** | `impact.html`, `index.html`, `lab.html` | `placeholder-wide.svg` and `placeholder-lab.svg` stand in for real images. |
| **Project figures** | `research.html` | Each card has a figure slot waiting for an image from the relevant paper. The paper, suggested figure and filename for every card are in section 3.9. |
| **Which facilities are in-house** | `lab.html` | The equipment and software lists are taken from the CV's skills tables. Confirm what sits in the group's own space and what is accessed through shared KFUPM facilities. |
| **Upcoming events** | `news.html` | Holds ASME IMECE 2026 and BioBIS 2027. Add further entries as dates are confirmed, and move each one into the past-events table once it has happened. |
| **Lecture notes** | `teaching.html` | The shared-notes section shows an empty state with a commented-out template above it; add PDFs as you publish them. Resources now lists Ethicalc. |
| **GitHub organisation** | `resources.html`, footers | The dead `github.com/your-org` links were removed. The `#i-github` SVG symbol is still defined on every page, so re-adding the icon is a one-line change once the organisation exists. |
| **CV PDF** | `assets/files/cv-placeholder.pdf` | Overwrite with the real PDF, keeping the file name. |

### 3.1 Identity and contact (all pages)

| What | Where |
| --- | --- |
| Institution, department, address | footer block in every `*.html`; `lab.html` contact section |
| Email `ahmed.dalaq@kfupm.edu.sa` | already set site-wide; change it if the lab gets its own address |
| Profile links | footer of every page. ORCID `0000-0002-3070-4215`, Scholar, ResearchGate and LinkedIn are set; there is no GitHub link yet |
| Telephone `+966 55 400 7108` | `lab.html` (already set) |
| Social preview image | `<head>` of every page (`og:image`, currently commented out) |

The footer, navigation and `<head>` are repeated in each HTML file. If you change one, apply the
same change to the others (a find-and-replace across the folder does it in one step).

### 3.2 People (`people.html`)

* The page intro and the group head sit in one section, so the team appears without scrolling far. Bio, chips and profile links are populated from the CV.
* One `<article class="person">` block per member, all twelve in a single `.grid--people` grid. Postdocs, doctoral and student researchers are not split into separate sections; the `.person__role` line carries that distinction. Keep the order postdoc → doctoral → MSc → undergraduate.
* Alumni are rows in a table near the bottom (four entries from the CV).
* The two standing opportunities are `#phd` and `#postdoc` in the **Join us** section; both
  buttons open a pre-addressed email to `ahmed.dalaq@kfupm.edu.sa` with the subject filled in.

Member photographs supplied so far: Sabarinathan Palaniyappan, Adarsha Mallick, Abdullah
Alhalabi, Fatma Al Zamel and Mahmoud Hossam. Keep new files lowercase and hyphenated, with no
spaces, since GitHub Pages is case sensitive and spaces become `%20` in the URL. Any aspect ratio
works: the card frame is square and crops with `object-fit: cover`. Keep files under a few
hundred KB.

### 3.3 Photographs

Replace the placeholder SVGs in `assets/images/` with real files and update the `src` attributes:

| Placeholder | Used for | Suggested size |
| --- | --- | --- |
| `ahmed-dalaq.jpg` | group head portrait (in use) | square; the frame is `aspect-ratio: 1 / 1` |
| `placeholder-portrait.svg` | the seven member cards still without a photo | any aspect ratio; the frame crops to a square |
| `placeholder-wide.svg` | project images | 1600 × 900 px (16:9) |
| `placeholder-lab.svg` | laboratory photographs | 1200 × 900 px (4:3) |
| `placeholder-book.svg` | book covers | 600 × 900 px (2:3) |

Keep the `width`/`height` attributes roughly proportional to the real image so the page does not
jump while loading, and write a meaningful `alt` for anything that carries information (decorative
images keep `alt=""`).

### 3.4 Conferences, events and news (`news.html`)

* **Upcoming**: one `<li class="event">` per entry, nearest first. Currently ASME IMECE 2026 in
  Vancouver, then BioBIS 2027 at KFUPM, where the group head is a Technical Program Chair.
* **News**: one `<li>` per item, newest first: conference service, appointment, grants,
  papers, patent, award and session chairing, plus the standing open positions.
* **Past events**: the 27 conference contributions from the CV, newest first.

The home page carries a digest: the group's headline numbers and the newest news and event items.
Update both, or delete that block on the home page and let it link straight to `news.html`.

### 3.5 Files

`assets/files/` holds one working placeholder PDF so that no link on the site is broken:

* `cv-placeholder.pdf`, linked from `people.html` (twice) as the group head's CV

Overwrite it with the real CV, keeping the file name, and nothing else needs editing. Add
further PDFs here and link them from `teaching.html` or `resources.html`.

### 3.6 Publications (`js/publications.js`)

The array holds the full record transcribed from the CV: **38 peer-reviewed journal articles,
1 book chapter, 27 conference contributions and the PhD thesis, 67 entries**. Every journal
article and the book chapter carries its DOI in `link`, so a DOI line appears under each of them.
Citation counts and the h-index are deliberately not printed on the site. `publications.html`
links to Google Scholar for those instead, so nothing goes stale.

To add a paper, add one object to the array:

```js
{
  year: 2026, type: 'journal',           // journal | conference | book | chapter
  title: 'Title of the paper',
  authors: '<b>Last, F.</b>, Coauthor, A.',   // <b> marks the lab author
  venue: 'Journal Name, 12(3), 45-67',
  themes: ['architected-materials'],      // ids from the taxonomy, see below
  link: 'https://doi.org/...',            // optional
  pdf: 'assets/files/preprint.pdf',       // optional
  code: 'https://github.com/...'          // optional
}
```

The year and theme filters build themselves from the data, so nothing else needs updating.

### 3.7 Research taxonomy and the mind map (`js/mindmap.js`)

The map, the side panel and the theme names used by the publication filter all come from the
`RESEARCH` object at the top of `js/mindmap.js`. Each pillar has:

| Field | Meaning |
| --- | --- |
| `id` | anchor used by `research.html#id` and by the publication filter |
| `mapLabel` | short label drawn in the node, one string per line. **Keep it short** |
| `name` | full name shown in the side panel |
| `tagline` | one line under the title |
| `blurb` | 2–4 sentences |
| `topics` | detailed directions listed as chips in the panel |
| `subs` | up to five short labels drawn as the third layer of the map |

Adding or removing a pillar automatically re-lays out the map (the pillars are spaced evenly
around the centre). If you change a pillar `id`, update the matching `id` on `research.html`, the
footer links and the `themes` values in `js/publications.js`.

### 3.8 Research pages, projects, teaching, resources, facilities

These are ordinary HTML. Each repeated element is a self-contained block you can duplicate:

* `research.html`: one `<article class="rp">` per project (set its `data-theme`). Eight are
  funded grants and one is Ethicalc, the group's ethical-matrix software. Grant amounts and
  internal project numbers are deliberately not shown, because they are not usually public.
  The Computational mechanics filter currently matches no project and shows the empty state;
  that is deliberate rather than a bug.
* `news.html`: one `<li class="event">` per event, one `<li>` per news item.
* `impact.html`: one `<article class="venture">` per patent. The page is deliberately a
  coming-soon state until results reach a product, a licence or a deployment; the flagship
  project cards it used to carry were removed because they duplicated `research.html`.
* `teaching.html`: a plain `<ul class="detail-list">`, one `<li>` per course. Student ratings
  are deliberately not shown, because they are internal evaluation data.
* `resources.html`: one repo-row per repository, currently Ethicalc; a commented template sits in the source.
* `lab.html`: one `<article class="card facility">` per facility, one `<figure>` per photograph.

### 3.9 Project figures (`research.html`)

Each project card has a slot for a figure from the relevant paper (template in the source above
the project list, styles in `css/style.css` section 21). Figures are not lifted from publisher
PDFs: most of these papers were published under copyright transfer, so use your own source
files, which are also higher resolution. Most publishers let authors reuse their own figures
on a personal or institutional site with a citation, which the caption provides.

| Card | Best source paper | Suggested figure | File |
| --- | --- | --- | --- |
| Artificial lung for direct air carbon capture | none published yet | a render or schematic of the parabronchial flow path, or a prototype photo | `rp-lung.jpg` |
| Mechanics of segmented materials | Dalaq, Mirkhalaf & Barthelat, *Int. J. Solids Struct.* 321 (2025) 113575, [doi](https://doi.org/10.1016/j.ijsolstr.2025.113575) | the tetrahedra / octahedra interlocked assembly | `rp-segmented.jpg` |
| Bioinspired segmented structures | Dalaq & Barthelat, *Int. J. Solids Struct.* 171 (2019) 146–157, [doi](https://doi.org/10.1016/j.ijsolstr.2019.04.012) | the spine-like segmented beam | `rp-bioinspired-segmented.jpg` |
| Origami cartridges for biotic monitoring | Dalaq & Daqaq, *Materials & Design* 216 (2022) 110541, [doi](https://doi.org/10.1016/j.matdes.2022.110541) | a 3D-printed Kresling spring, folded and deployed | `rp-cartridge.jpg` |
| Kresling origami adapter | Dalaq et al., *Engineering Structures* 366 (2026) 123454, [doi](https://doi.org/10.1016/j.engstruct.2026.123454) | the intersecting-Kresling unit cell | `rp-kresling-adapter.jpg` |
| Low-loss flexible 3D-printed dielectrics | nearest: Palaniyappan, Sivakumar & Dalaq, *J. Manuf. Processes* 160 (2026) 242–253, [doi](https://doi.org/10.1016/j.jmapro.2026.01.064) | a printed specimen or filament | `rp-dielectric.jpg` |
| Transtibial prosthetic design | nearest: Palaniyappan et al., *J. Bionic Eng.* 23 (2026) 1751–1769, [doi](https://doi.org/10.1007/s42235-026-00894-x) | a limb scan or generative-design result | `rp-prosthetic.jpg` |
| Sensitivity mapping of the ear canal | Dalaq et al., *Int. J. Mech. Sci.* 241 (2023) 107970, [doi](https://doi.org/10.1016/j.ijmecsci.2022.107970) | the earplug and ear-canal contact pressure map | `rp-earcanal.jpg` |

Landscape images around 1200 × 750 px work best; the frame is 16:10 and the whole figure is
shown, so other shapes simply gain white margins.

---

## 4. Design system

**Colour.** One blue ramp, used from end to end. The header, hero and footer sit on deep navy
(`--dark`), the body sits on pale blue, and azure carries every active state. Six shades of the same
ramp (navy, azure, steel, cyan-teal, indigo, slate) tints the six research pillars and nothing else.
Every text colour clears WCAG AA against its background in both themes.

All of it lives in custom properties at the top of `css/style.css`:

```css
--accent:      #1668c8;   /* azure, primary                       */
--accent-2:    #0d7285;   /* cyan, ethics and secondary marks      */
--dark:        #0c1a2b;   /* the navy band: header, hero, footer  */
--dark-accent: #5aa9f5;   /* the bright blue used on that band    */
--h1 … --h6               /* the six pillar shades                */
```

Change those and the whole site follows. Keep `--accent-ink` a shade darker than `--accent` for
text on light ground, and mirror any change inside the two dark-theme blocks below. Section 16 of
the stylesheet ("the dark band") holds everything that sits on navy.

**Type.** A modern grotesque: `Inter` and `SF Pro Text` are used when the visitor already has
them, otherwise the operating system UI face (Segoe UI Variable, San Francisco, Roboto). No web
font is downloaded, so the page still makes zero third-party requests. To load Inter properly for
every visitor, add one Google Fonts `<link>` to each page head, which is the only change needed.

**Shape.** Rounded surfaces: cards, panels and media sit on their own 10px-radius block with a
light border, a soft shadow and a 3px lift on hover; buttons, inputs and tags use a 7px radius.
Section 19 of the stylesheet ("modern refresh") holds all of it and overrides the earlier flat,
hairline-ruled treatment, so reverting is a matter of deleting that one block.

**Marks.** The lab mark is a cubic stress element: an isometric cube shaded light / mid / dark
with one normal traction arrow out of each visible face. The header carries the full lockup,
the cube plus a sigma under a double bar (the notation for a second-order tensor), in the inline
`.brand__mark` SVG on every page, coloured from `css/style.css`. The browser tab icon is the
compact form, the cube alone without the sigma, in `assets/icons/favicon.svg`; at 16 px the
notation would not survive. The two share the same geometry, so edit them together.

**Motif.** The octagon: the truncated square tiling behind the hero, and the node-and-edge
geometry of the mind map. The mind map's centre node is the one deliberate circle.

---

## 5. Accessibility and behaviour

* Semantic landmarks (`header`, `nav`, `main`, `footer`), headings in order, one `h1` per page.
* Skip link, visible focus rings, and a keyboard-operable mind map
  (Tab to a node, Enter/Space to select, arrow keys to move, Escape to clear).
* The navigation menu closes on Escape, on outside click and after following a link.
* The side panel of the map is an `aria-live` region, so screen readers hear the description
  change when a node is selected.
* Colour contrast meets WCAG AA in both themes; the theme follows the operating system until the
  visitor chooses otherwise, and the choice is remembered.
* `prefers-reduced-motion` disables animation, scroll-smoothing and the reveal effect.
* Without JavaScript: every page still renders and navigates; the mind map falls back to a list of
  links, and the publication list points to Google Scholar.
* The scroll-reveal effect fails visible, never invisible. Elements are only hidden once the inline
  head script confirms JavaScript is running and `IntersectionObserver` exists, and a 3-second
  safety net in `js/main.js` reveals everything if the observer is throttled (background tab,
  prerender) and never fires.

---

## 6. Housekeeping

* Update the news list on `index.html` a few times a year. It is the clearest signal that a lab
  site is alive.
* `<span data-year>` in the footer fills in the current year automatically.
* `grep -rn "REPLACE" .` lists what is still outstanding, see section 3.0. The remaining markers are photographs and files.
  `<head>` so links shared on social platforms show a preview.

---

## 7. Licence

The code and design of this site are yours to use and adapt. Add a licence file if you plan to let
others reuse it, and remember that photographs, figures and text remain subject to the rights of
whoever produced them.
