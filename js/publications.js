/* ==========================================================================
   publications.js: filterable publication list
   Lab of Applied Mechanics and Bioinspired Systems

   SOURCE OF THIS LIST
   Transcribed from the curriculum vitae of Ahmed S. Dalaq: 38 peer-reviewed
   journal articles, 1 book chapter and 27 conference contributions, plus the
   PhD thesis. Every journal article and the book chapter carry the DOI given
   in the CV. An asterisk in the CV marks corresponding authorship.

   Reported metrics at the time of transcription: h-index 20, 1,671 citations
   (Google Scholar, September 2026).

   HOW TO ADD A PUBLICATION
     year     number
     type     'journal' | 'conference' | 'chapter' | 'book' | 'thesis' | 'preprint'
     title    string
     authors  string  (wrap the lab author in <b> to make it stand out)
     venue    journal / conference / publisher
     themes   array of research-pillar ids, see js/mindmap.js
              'bioinspired-mechanics' | 'architected-materials' |
              'adaptive-systems'      | 'computational-mechanics' |
              'manufacturing-sustainability' | 'biomedical-systems' | 'ethics'
     link     DOI or publisher URL   (optional)
     pdf      relative path to a PDF (optional)
     code     repository URL         (optional)
   ========================================================================== */
(function () {
  'use strict';

  var PUBLICATIONS = [

    /* ---------------------------------------------- journal articles ---- */
    {
      year: 2026, type: 'journal',
      title: 'An origami-inspired unit cell composed of intersecting Kresling springs',
      authors: '<b>Dalaq, A. S.</b>, Alsheghri, A., Palaniyappan, S., Tauheed, M., Abu Al-Rub, R. K., Al-Ketan, O., Daqaq, M. F.',
      venue: 'Engineering Structures, 366, 123454',
      themes: ['adaptive-systems', 'architected-materials'],
      link: 'https://doi.org/10.1016/j.engstruct.2026.123454'
    },
    {
      year: 2026, type: 'journal',
      title: 'Color-coded triage for the ethical matrix: a post-processing framework for structured and progressive ethical deliberation',
      authors: '<b>Dalaq, A. S.</b>',
      venue: 'Journal of Agricultural and Environmental Ethics, 39, 22',
      themes: ['ethics'],
      link: 'https://doi.org/10.1007/s10806-026-09986-4'
    },
    {
      year: 2026, type: 'journal',
      title: 'Functional graded PEEK cellular lattice as a bone implant',
      authors: 'Palaniyappan, S., Sivakumar, N. K., Alsheghri, A., <b>Dalaq, A. S.</b>',
      venue: 'Journal of Bionic Engineering, 23, 1751–1769',
      themes: ['biomedical-systems', 'architected-materials'],
      link: 'https://doi.org/10.1007/s42235-026-00894-x'
    },
    {
      year: 2026, type: 'journal',
      title: 'A hydrodynamics quantification of tortuosity and residence time of TPMS based bone scaffold',
      authors: 'Alkhalil, B. S., <b>Dalaq, A. S.</b>',
      venue: 'Journal of Undergraduate Research International, 2, 36–44',
      themes: ['biomedical-systems', 'computational-mechanics'],
      link: 'https://doi.org/10.64589/juri/218963'
    },
    {
      year: 2026, type: 'journal',
      title: 'Shape-changing structures for natural ventilation: a feasibility study of passive ventilation enhancement via origami-driven stack effect',
      authors: 'Zueter, A. F., Khazaaleh, S., <b>Dalaq, A. S.</b>, Daqaq, M. F.',
      venue: 'Energy and Buildings, 359, 117292',
      themes: ['adaptive-systems', 'manufacturing-sustainability'],
      link: 'https://doi.org/10.1016/j.enbuild.2026.117292'
    },
    {
      year: 2026, type: 'journal',
      title: 'On the origins of toughness in Corymbia calophylla (Marri tree) nuts',
      authors: 'Awad, W. M., <b>Dalaq, A. S.</b>, Al-Handawi, M. B., Getsadze, R., Al-Ketan, O., Weston, J., Daqaq, M. F., Naumov, P.',
      venue: 'Advanced Science, 13, e15273',
      themes: ['bioinspired-mechanics', 'architected-materials'],
      link: 'https://doi.org/10.1002/advs.202515273'
    },
    {
      year: 2026, type: 'journal',
      title: 'A spatial healing metric for wound healing modeling',
      authors: 'Ekici, E., <b>Dalaq, A. S.</b>',
      venue: 'Biomechanics and Modeling in Mechanobiology, 25, 21',
      themes: ['biomedical-systems', 'computational-mechanics'],
      link: 'https://doi.org/10.1007/s10237-025-02029-3'
    },
    {
      year: 2026, type: 'journal',
      title: 'Direct pellet extrusion of calcined seashell particle reinforced polylactic acid composite',
      authors: 'Kothandaraman, L., Balasubramanian, N. K., Sivakumar, N. K., Palaniyappan, S., <b>Dalaq, A. S.</b>',
      venue: 'Polymer Composites, 47, 10178–10192',
      themes: ['manufacturing-sustainability'],
      link: 'https://doi.org/10.1002/pc.70883'
    },
    {
      year: 2026, type: 'journal',
      title: 'A peanut-hull-PLA based 3D printing filament with antimicrobial effect',
      authors: 'Palaniyappan, S., Sivakumar, N. K., <b>Dalaq, A. S.</b>',
      venue: 'Journal of Manufacturing Processes, 160, 242–253',
      themes: ['manufacturing-sustainability', 'biomedical-systems'],
      link: 'https://doi.org/10.1016/j.jmapro.2026.01.064'
    },
    {
      year: 2025, type: 'journal',
      title: 'Strength, stability, and interlocking efficacy in topologically interlocked materials based on tetrahedra and octahedra',
      authors: '<b>Dalaq, A. S.</b>, Mirkhalaf, M., Barthelat, F.',
      venue: 'International Journal of Solids and Structures, 321, 113575',
      themes: ['architected-materials', 'computational-mechanics'],
      link: 'https://doi.org/10.1016/j.ijsolstr.2025.113575'
    },
    {
      year: 2025, type: 'journal',
      title: 'Bone-inspired lattice structures for biomedical applications: design, pore network analysis, and mechanical performance',
      authors: 'Tauheed, M., Alsheghri, A., <b>Dalaq, A. S.</b>, Abu Al-Rub, R. K.',
      venue: 'Results in Engineering, 27, 105697',
      themes: ['biomedical-systems', 'architected-materials'],
      link: 'https://doi.org/10.1016/j.rineng.2025.105697'
    },
    {
      year: 2025, type: 'journal',
      title: 'Revolutionizing the future of smart materials: a review of 4D printing, design, optimization, and machine learning integration',
      authors: 'Azher, K., Nazir, A., Farooq, M. U., Haq, M. R. U., Ali, Z., <b>Dalaq, A. S.</b>, Abubakar, A. A., Hussain, S., Syed, M. N., Ullah, A., Laghari, R. A., Khan, S.',
      venue: 'Advanced Materials Technologies, 10, 2401369',
      themes: ['adaptive-systems', 'manufacturing-sustainability'],
      link: 'https://doi.org/10.1002/admt.202401369'
    },
    {
      year: 2025, type: 'journal',
      title: 'Material extrusion techniques for biomedical applications: biomaterials and their performance: a review',
      authors: 'Kothandaraman, L., Balasubramanian, N. K., Palaniyappan, S., <b>Dalaq, A. S.</b>, Bodaghi, M.',
      venue: 'Materials Today Communications, 49, 113707',
      themes: ['biomedical-systems', 'manufacturing-sustainability'],
      link: 'https://doi.org/10.1016/j.mtcomm.2025.113707'
    },
    {
      year: 2024, type: 'journal',
      title: 'Energy-harvesting tile incorporating an origami coupling mechanism',
      authors: 'Khazaaleh, S., <b>Dalaq, A. S.</b>, Daqaq, M. F.',
      venue: 'Philosophical Transactions of the Royal Society A, 382, 20240015',
      themes: ['adaptive-systems'],
      link: 'https://doi.org/10.1098/rsta.2024.0015'
    },
    {
      year: 2024, type: 'journal',
      title: 'Ferroelastic ionic organic crystals that self-heal to 95%',
      authors: 'Al-Handawi, M. B., Commins, P., <b>Dalaq, A. S.</b>, Polavaram, S., Didier, P., Karothu, D. P., Daqaq, M. F., Li, L., Naumov, P.',
      venue: 'Nature Communications, 15, 8095',
      themes: ['bioinspired-mechanics'],
      link: 'https://doi.org/10.1038/s41467-024-51625-x'
    },
    {
      year: 2024, type: 'journal',
      title: 'Measurement of the local static mechanical pressure of earplugs',
      authors: 'Melo, L. G. C., <b>Dalaq, A. S.</b>, Sgard, F., Doutres, O., Legroux, L., Wagnac, E.',
      venue: 'International Journal of Mechanical Sciences, 275, 109327',
      themes: ['biomedical-systems'],
      link: 'https://doi.org/10.1016/j.ijmecsci.2024.109327'
    },
    {
      year: 2024, type: 'journal',
      title: 'An origami-inspired energy absorber',
      authors: 'Khazaaleh, S., <b>Dalaq, A. S.</b>, Daqaq, M. F.',
      venue: 'Smart Materials and Structures, 33, 045029',
      themes: ['adaptive-systems', 'architected-materials'],
      link: 'https://doi.org/10.1088/1361-665X/ad3361'
    },
    {
      year: 2024, type: 'journal',
      title: 'The Kresling origami spring: a review and assessment',
      authors: 'Masana, R., <b>Dalaq, A. S.</b>, Khazaaleh, S., Daqaq, M. F.',
      venue: 'Smart Materials and Structures, 33, 043002',
      themes: ['adaptive-systems'],
      link: 'https://doi.org/10.1088/1361-665X/ad2f6f'
    },
    {
      year: 2024, type: 'journal',
      title: 'AI-based shape optimization of galloping micro-power generators: exploring the benefits of curved surfaces',
      authors: 'Alhussein, H., <b>Dalaq, A. S.</b>, Daqaq, M. F.',
      venue: 'Scientific Reports, 14, 1552',
      themes: ['computational-mechanics', 'adaptive-systems'],
      link: 'https://doi.org/10.1038/s41598-024-51979-8'
    },
    {
      year: 2024, type: 'journal',
      title: 'Origami-based haptic syringe for local anesthesia simulator',
      authors: 'Iiyoshi, K., Khazaaleh, S., <b>Dalaq, A. S.</b>, Daqaq, M. F., Korres, G., Eid, M.',
      venue: 'IEEE Transactions on Haptics, 17, 39–44',
      themes: ['adaptive-systems', 'biomedical-systems'],
      link: 'https://doi.org/10.1109/TOH.2024.3353924'
    },
    {
      year: 2024, type: 'journal',
      title: 'Origami-inspired haptics: a literature review',
      authors: 'Iiyoshi, K., Lee, J. H., <b>Dalaq, A. S.</b>, Khazaaleh, S., Daqaq, M. F., Korres, G., Eid, M.',
      venue: 'IEEE Access, 12, 33309–33327',
      themes: ['adaptive-systems'],
      link: 'https://doi.org/10.1109/ACCESS.2024.3371480'
    },
    {
      year: 2023, type: 'journal',
      title: 'An origami-inspired design of highly efficient cellular cushion materials',
      authors: '<b>Dalaq, A. S.</b>, Khazaaleh, S., Daqaq, M. F.',
      venue: 'Applied Materials Today, 32, 101835',
      themes: ['adaptive-systems', 'architected-materials'],
      link: 'https://doi.org/10.1016/j.apmt.2023.101835'
    },
    {
      year: 2023, type: 'journal',
      title: 'Pressure induced by roll-down foam earplugs on earcanal',
      authors: '<b>Dalaq, A. S.</b>, Melo, L. G. C., Sgard, F., Doutres, O., Wagnac, E.',
      venue: 'International Journal of Mechanical Sciences, 241, 107970',
      themes: ['biomedical-systems', 'computational-mechanics'],
      link: 'https://doi.org/10.1016/j.ijmecsci.2022.107970'
    },
    {
      year: 2022, type: 'journal',
      title: 'Experimentally-validated computational modeling and characterization of the quasi-static behavior of functional 3D-printed origami-inspired springs',
      authors: '<b>Dalaq, A. S.</b>, Daqaq, M. F.',
      venue: 'Materials &amp; Design, 216, 110541',
      themes: ['adaptive-systems', 'computational-mechanics'],
      link: 'https://doi.org/10.1016/j.matdes.2022.110541'
    },
    {
      year: 2021, type: 'journal',
      title: 'Young martlets: exploring the world of academia and beyond',
      authors: 'Yin, Z., Chen, B., Cao, X. E., Ying, B., Quan, H., Wang, C., Ye, Y., Mi, X., Yan, C., Ding, Y., Zhang, S., Bahmani, A., <b>Dalaq, A. S.</b>, et al.',
      venue: 'Matter, 4, 1434–1436',
      themes: ['ethics'],
      link: 'https://doi.org/10.1016/j.matt.2021.04.012'
    },
    {
      year: 2020, type: 'journal',
      title: 'Manipulating the geometry of architectured beams for maximum toughness and strength',
      authors: '<b>Dalaq, A. S.</b>, Barthelat, F.',
      venue: 'Materials &amp; Design, 194, 108889',
      themes: ['architected-materials', 'bioinspired-mechanics'],
      link: 'https://doi.org/10.1016/j.matdes.2020.108889'
    },
    {
      year: 2020, type: 'journal',
      title: 'Three-dimensional laser engraving for fabrication of tough glass-based bioinspired materials',
      authors: '<b>Dalaq, A. S.</b>, Barthelat, F.',
      venue: 'JOM, 72, 1487–1497',
      themes: ['architected-materials', 'manufacturing-sustainability'],
      link: 'https://doi.org/10.1007/s11837-019-04001-w'
    },
    {
      year: 2019, type: 'journal',
      title: 'Strength and stability in architectured spine-like segmented structures',
      authors: '<b>Dalaq, A. S.</b>, Barthelat, F.',
      venue: 'International Journal of Solids and Structures, 171, 146–157',
      themes: ['architected-materials', 'bioinspired-mechanics'],
      link: 'https://doi.org/10.1016/j.ijsolstr.2019.04.012'
    },
    {
      year: 2016, type: 'journal',
      title: 'Mechanical properties of 3D printed interpenetrating phase composites with novel architectured 3D solid-sheet reinforcements',
      authors: '<b>Dalaq, A. S.</b>, Abueidda, D. W., Abu Al-Rub, R. K.',
      venue: 'Composites Part A: Applied Science and Manufacturing, 84, 266–280',
      themes: ['architected-materials', 'manufacturing-sustainability'],
      link: 'https://doi.org/10.1016/j.compositesa.2016.02.009'
    },
    {
      year: 2016, type: 'journal',
      title: 'Finite element prediction of effective elastic properties of interpenetrating phase composites with architectured 3D sheet reinforcements',
      authors: '<b>Dalaq, A. S.</b>, Abueidda, D. W., Abu Al-Rub, R. K., Jasiuk, I. M.',
      venue: 'International Journal of Solids and Structures, 83, 169–182',
      themes: ['architected-materials', 'computational-mechanics'],
      link: 'https://doi.org/10.1016/j.ijsolstr.2016.01.011'
    },
    {
      year: 2016, type: 'journal',
      title: 'Effective conductivities and elastic moduli of novel foams with triply periodic minimal surfaces',
      authors: 'Abueidda, D. W., Abu Al-Rub, R. K., <b>Dalaq, A. S.</b>, Lee, D.-W., Khan, K. A., Jasiuk, I.',
      venue: 'Mechanics of Materials, 95, 102–115',
      themes: ['architected-materials', 'computational-mechanics'],
      link: 'https://doi.org/10.1016/j.mechmat.2016.01.004'
    },
    {
      year: 2016, type: 'journal',
      title: 'Processing and property investigation of high-density carbon nanostructured papers with superior conductive and mechanical properties',
      authors: 'Younes, H., Abu Al-Rub, R. K., Rahman, M. M., <b>Dalaq, A. S.</b>, Al Ghaferi, A., Shah, T.',
      venue: 'Diamond and Related Materials, 68, 109–117',
      themes: ['manufacturing-sustainability'],
      link: 'https://doi.org/10.1016/j.diamond.2016.06.016'
    },
    {
      year: 2015, type: 'journal',
      title: 'Invariants of mesoscale thermal conductivity and resistivity tensors in random checkerboards',
      authors: '<b>Dalaq, A. S.</b>, Ranganathan, S. I.',
      venue: 'Engineering Computations, 32, 1601–1618',
      themes: ['computational-mechanics'],
      link: 'https://doi.org/10.1108/EC-08-2014-0162'
    },
    {
      year: 2015, type: 'journal',
      title: 'Electrical conductivity of 3D periodic architectured interpenetrating phase composites with carbon nanostructured-epoxy reinforcements',
      authors: 'Abueidda, D. W., Abu Al-Rub, R. K., <b>Dalaq, A. S.</b>, Younes, H. A., Al Ghaferi, A. A., Shah, T. K.',
      venue: 'Composites Science and Technology, 118, 127–134',
      themes: ['architected-materials', 'computational-mechanics'],
      link: 'https://doi.org/10.1016/j.compscitech.2015.08.021'
    },
    {
      year: 2015, type: 'journal',
      title: 'Micromechanical finite element predictions of a reduced coefficient of thermal expansion for 3D periodic architectured interpenetrating phase composites',
      authors: 'Abueidda, D. W., <b>Dalaq, A. S.</b>, Abu Al-Rub, R. K., Jasiuk, I.',
      venue: 'Composite Structures, 133, 85–97',
      themes: ['architected-materials', 'computational-mechanics'],
      link: 'https://doi.org/10.1016/j.compstruct.2015.06.082'
    },
    {
      year: 2015, type: 'journal',
      title: 'Finite element predictions of effective multifunctional properties of interpenetrating phase composites with novel triply periodic solid shell architectured reinforcements',
      authors: 'Abueidda, D. W., <b>Dalaq, A. S.</b>, Abu Al-Rub, R. K., Younes, H. A.',
      venue: 'International Journal of Mechanical Sciences, 92, 80–89',
      themes: ['architected-materials', 'computational-mechanics'],
      link: 'https://doi.org/10.1016/j.ijmecsci.2014.12.004'
    },
    {
      year: 2014, type: 'journal',
      title: 'On the performance of air-lift pumps: from analytical models to large eddy simulation',
      authors: 'Wahba, E. M., Gadalla, M. A., Abueidda, D. W., <b>Dalaq, A. S.</b>, Hafiz, H., Elawadi, K., Issa, R.',
      venue: 'Journal of Fluids Engineering, 136, 111301',
      themes: ['computational-mechanics'],
      link: 'https://doi.org/10.1115/1.4027473'
    },
    {
      year: 2013, type: 'journal',
      title: 'Scaling function in conductivity of planar random checkerboards',
      authors: '<b>Dalaq, A. S.</b>, Ranganathan, S. I., Ostoja-Starzewski, M.',
      venue: 'Computational Materials Science, 79, 252–261',
      themes: ['computational-mechanics'],
      link: 'https://doi.org/10.1016/j.commatsci.2013.05.006'
    },

    /* ------------------------------------------------- book chapter ----- */
    {
      year: 2015, type: 'chapter',
      title: 'Thermo-electro-mechanical properties of interpenetrating phase composites with periodic architectured reinforcements',
      authors: 'Abu Al-Rub, R. K., Abueidda, D. W., <b>Dalaq, A. S.</b>',
      venue: 'in: Advanced Structured Materials, vol. 64, Springer, Cham, pp. 1–18',
      themes: ['architected-materials', 'computational-mechanics'],
      link: 'https://doi.org/10.1007/978-3-319-19440-0_1'
    },

    /* -------------------------------------------------------- thesis ---- */
    {
      year: 2020, type: 'thesis',
      title: 'Analytical, computational and experimental investigations of architectured beams and panels',
      authors: '<b>Dalaq, A. S.</b>',
      venue: 'PhD thesis, McGill University, Montreal, Canada',
      themes: ['architected-materials', 'computational-mechanics']
    },

    /* ------------------------------------------ conference contributions */
    {
      year: 2025, type: 'conference',
      title: 'Nonfolding origami lattice for energy dissipation and strength',
      authors: '<b>Dalaq, A. S.</b>, Alsheghri, A., Al-Ketan, O.',
      venue: '12th European Solid Mechanics Conference, Lyon, France',
      themes: ['adaptive-systems', 'architected-materials']
    },
    {
      year: 2025, type: 'conference',
      title: 'Nonfolding origami lattice for energy dissipation and strength (submitted)',
      authors: 'Al-Handawi, M. B., Commins, P., <b>Dalaq, A. S.</b>, Polavaram, S., Didier, P., Karothu, D. P., Daqaq, M. F., Li, L., Naumov, P.',
      venue: 'International Chemical Congress of Pacific Basin Societies (Pacifichem), Honolulu, HI, USA',
      themes: ['adaptive-systems', 'architected-materials']
    },
    {
      year: 2025, type: 'conference',
      title: 'Polychromatic ferroelastic crystals that heal up to 95% (submitted)',
      authors: 'Al-Handawi, M. B., Commins, P., <b>Dalaq, A. S.</b>, Polavaram, S., Didier, P., Karothu, D. P., Daqaq, M. F., Li, L., Naumov, P.',
      venue: 'Pacifichem co-organizer symposium proposal',
      themes: ['bioinspired-mechanics']
    },
    {
      year: 2025, type: 'conference',
      title: 'Design and 3D printing of bone-inspired lattice structures: pore size and structural performance (accepted)',
      authors: 'Tauheed, M., Alsheghri, A., <b>Dalaq, A. S.</b>, Abu Al-Rub, R. K.',
      venue: '30th Congress of the European Society of Biomechanics, Zürich, Switzerland',
      themes: ['biomedical-systems', 'architected-materials']
    },
    {
      year: 2024, type: 'conference',
      title: 'Interlocking efficacy in topologically interlocked materials',
      authors: '<b>Dalaq, A. S.</b>, Mirkhalaf, M., Barthelat, F.',
      venue: 'SMN 2024, Sharjah, UAE',
      themes: ['architected-materials']
    },
    {
      year: 2024, type: 'conference',
      title: 'Virtual and experimental physical comfort testers for earplugs',
      authors: 'Sgard, F., Poissenot-Arrigoni, B., Melo, L. G. C., <b>Dalaq, A. S.</b>, Wagnac, E., Doutres, O.',
      venue: 'INTER-NOISE and NOISE-CON Congress and Conference Proceedings, 270, 551–562',
      themes: ['biomedical-systems']
    },
    {
      year: 2024, type: 'conference',
      title: 'A static analysis of compression and torsion of Kresling origami springs',
      authors: 'Joseph, K. K., Daqaq, M. F., <b>Dalaq, A. S.</b>',
      venue: '10th World Congress on Mechanical, Chemical, and Material Engineering (MCM)',
      themes: ['adaptive-systems', 'computational-mechanics'],
      link: 'https://doi.org/10.11159/icmie24.127'
    },
    {
      year: 2023, type: 'conference',
      title: 'AI-based shape optimization of galloping micro-power generators: exploring the benefits of curved surfaces',
      authors: 'Alhussein, H., <b>Dalaq, A. S.</b>, Daqaq, M. F.',
      venue: 'PowerMEMS 2023, Abu Dhabi, UAE',
      themes: ['computational-mechanics', 'adaptive-systems']
    },
    {
      year: 2023, type: 'conference',
      title: 'An origami-inspired energy converter',
      authors: '<b>Dalaq, A. S.</b>, Khazaaleh, S., Daqaq, M. F.',
      venue: 'Third International Nonlinear Dynamics Conference (NODYCON), Rome, Italy',
      themes: ['adaptive-systems']
    },
    {
      year: 2023, type: 'conference',
      title: 'An origami-inspired energy converter',
      authors: 'Khazaaleh, S., <b>Dalaq, A. S.</b>, Daqaq, M. F.',
      venue: 'Third International Nonlinear Dynamics Conference (NODYCON), Rome, Italy',
      themes: ['adaptive-systems']
    },
    {
      year: 2023, type: 'conference',
      title: 'Design of origami-inspired energy conversion device for impact mitigation and energy harvesting applications',
      authors: 'Khazaaleh, S., <b>Dalaq, A. S.</b>, Daqaq, M. F.',
      venue: 'International Conference on Structural Nonlinear Dynamics and Diagnosis (CSNDD), Morocco',
      themes: ['adaptive-systems']
    },
    {
      year: 2023, type: 'conference',
      title: 'Experimental investigation of the static mechanical pressure induced by roll-down foam earplugs',
      authors: 'Melo, L. G. C., <b>Dalaq, A. S.</b>, Sgard, F., Doutres, O., Wagnac, E.',
      venue: 'Canadian Acoustics, 51, 116–117',
      themes: ['biomedical-systems']
    },
    {
      year: 2022, type: 'conference',
      title: 'Energy absorbing cushions based on origami principles',
      authors: '<b>Dalaq, A. S.</b>, Daqaq, M. F.',
      venue: '11th European Solid Mechanics Conference, Galway, Ireland',
      themes: ['adaptive-systems', 'architected-materials']
    },
    {
      year: 2022, type: 'conference',
      title: 'Mesure de la pression mécanique statique des bouchons d’oreille en mousse malléable sur des conduits auditifs artificiels',
      authors: 'Melo, L. G. C., <b>Dalaq, A. S.</b>, Doutres, O., Wagnac, E., Sgard, F.',
      venue: '16e Congrès Français d’Acoustique, Marseille, France',
      themes: ['biomedical-systems']
    },
    {
      year: 2022, type: 'conference',
      title: 'Energy harvesting body optimization with machine learning',
      authors: 'Laws, P., <b>Dalaq, A. S.</b>, Alhussein, H., Daqaq, M. F.',
      venue: '11th European Solid Mechanics Conference, Galway, Ireland',
      themes: ['computational-mechanics', 'adaptive-systems']
    },
    {
      year: 2021, type: 'conference',
      title: 'Computational modeling and design characterization of 3D-printed origami-inspired springs',
      authors: '<b>Dalaq, A. S.</b>, Masana, R., Daqaq, M. F.',
      venue: 'ASME Conference on Smart Materials, Adaptive Structures and Intelligent Systems (SMASIS)',
      themes: ['adaptive-systems', 'computational-mechanics']
    },
    {
      year: 2019, type: 'conference',
      title: 'Manipulating the architecture of beams for high toughness and strength',
      authors: '<b>Dalaq, A. S.</b>, Barthelat, F.',
      venue: 'Canadian Society for Mechanical Engineering International Congress (CSME-CFDSC), London, Ontario, Canada',
      themes: ['architected-materials']
    },
    {
      year: 2018, type: 'conference',
      title: 'Deformation and failure of bioinspired segmented architectured beams and plates',
      authors: '<b>Dalaq, A. S.</b>, Barthelat, F.',
      venue: 'The Minerals, Metals &amp; Materials Society (TMS) Annual Meeting, Arizona, USA',
      themes: ['architected-materials', 'bioinspired-mechanics']
    },
    {
      year: 2015, type: 'conference',
      title: 'Micromechanical computational evaluation of triply periodic minimal sheet reinforcements for creating architectured composite materials',
      authors: '<b>Dalaq, A. S.</b>, Abueidda, D. W., Abu Al-Rub, R. K.',
      venue: 'Graduate Student Research Conference (GSRC), UAE',
      themes: ['architected-materials', 'computational-mechanics']
    },
    {
      year: 2015, type: 'conference',
      title: 'A full exploration of novel triply periodic minimal surface architectures as a material reinforcement',
      authors: '<b>Dalaq, A. S.</b>, Abueidda, D. W., Abu Al-Rub, R. K.',
      venue: 'ASME',
      themes: ['architected-materials']
    },
    {
      year: 2015, type: 'conference',
      title: 'An assessment of ocean wave, thermal and salinity energy potential in the junction of the Arabian Gulf and the Gulf of Oman',
      authors: 'Bassett, J., Shahin, M., <b>Dalaq, A. S.</b>, Suwwan, D. H.',
      venue: 'IEEE 15th International Conference on Environment and Electrical Engineering (EEEIC)',
      themes: ['manufacturing-sustainability']
    },
    {
      year: 2015, type: 'conference',
      title: 'Fabrication and design of high-density carbon nanostructured papers with superior conductive properties',
      authors: 'Younes, H., Abu Al-Rub, R. K., Rahman, M. M., <b>Dalaq, A. S.</b>, Al Ghaferi, A.',
      venue: '10th Annual TechConnect World Innovation Conference and Expo, USA',
      themes: ['manufacturing-sustainability']
    },
    {
      year: 2015, type: 'conference',
      title: 'Thermal and electrical properties of interpenetrating phase composites with novel 3D triply periodic solid sheet inclusions',
      authors: 'Abueidda, D. W., <b>Dalaq, A. S.</b>, Abu Al-Rub, R. K.',
      venue: 'ASME',
      themes: ['architected-materials', 'computational-mechanics']
    },
    {
      year: 2015, type: 'conference',
      title: 'Conductivity of interpenetrating phase composites based on triply periodic minimal surface architectures',
      authors: 'Abueidda, D. W., <b>Dalaq, A. S.</b>, Abu Al-Rub, R. K.',
      venue: 'Graduate Student Research Conference (GSRC), UAE',
      themes: ['architected-materials', 'computational-mechanics']
    },
    {
      year: 2014, type: 'conference',
      title: 'Finite element prediction of effective elastic properties of micro/nano-architectured interpenetrating phase composites',
      authors: '<b>Dalaq, A. S.</b>, Abueidda, D. W., Abu Al-Rub, R. K.',
      venue: 'ASME International Mechanical Engineering Congress and Exposition (IMECE)',
      themes: ['architected-materials', 'computational-mechanics']
    },
    {
      year: 2014, type: 'conference',
      title: 'Three-dimensional architectured interpenetrating polymer phase composites with superior thermal conductivity',
      authors: 'Abueidda, D. W., <b>Dalaq, A. S.</b>, Abu Al-Rub, R. K.',
      venue: 'ASME International Mechanical Engineering Congress and Exposition (IMECE)',
      themes: ['architected-materials', 'computational-mechanics']
    },
    {
      year: 2013, type: 'conference',
      title: 'Invariants of mesoscale thermal conductivity and resistivity tensors in planar random checkerboards',
      authors: 'Ranganathan, S. I., <b>Dalaq, A. S.</b>, Ostoja-Starzewski, M.',
      venue: 'SES 50th Annual Technical Meeting and ASME-AMD Annual Summer Meeting, Brown University, Providence, RI, USA',
      themes: ['computational-mechanics']
    }
  ];

  var TYPE_LABELS = {
    journal: 'Journal',
    conference: 'Conference',
    chapter: 'Chapter',
    book: 'Book',
    thesis: 'Thesis',
    preprint: 'Preprint'
  };

  var TYPE_FILTER_LABELS = {
    journal: 'Journal articles',
    conference: 'Conference papers',
    chapter: 'Book chapters',
    book: 'Books',
    thesis: 'Theses',
    preprint: 'Preprints'
  };

  var host = document.querySelector('[data-pub-list]');
  if (!host) return;

  var themeSelect = document.getElementById('filter-theme');
  var yearSelect = document.getElementById('filter-year');
  var typeSelect = document.getElementById('filter-type');
  var searchInput = document.getElementById('filter-search');
  var countOut = document.querySelector('[data-pub-count]');

  /* Theme names match the taxonomy in js/mindmap.js. */
  var THEME_NAMES = {
    'bioinspired-mechanics': 'Bioinspired Mechanics & Living Systems',
    'architected-materials': 'Architected Materials & Structures',
    'adaptive-systems': 'Adaptive & Intelligent Systems',
    'computational-mechanics': 'Computational Mechanics & Design',
    'manufacturing-sustainability': 'Manufacturing & Sustainable Materials',
    'biomedical-systems': 'Biomedical & Human-Centred Systems',
    'ethics': 'Research Ethics & Responsible Innovation'
  };

  /* ---------------------------------------------------- populate filters */
  function fillSelect(select, values, labeller) {
    if (!select) return;
    values.forEach(function (v) {
      var opt = document.createElement('option');
      opt.value = v;
      opt.textContent = labeller ? labeller(v) : v;
      select.appendChild(opt);
    });
  }

  var years = PUBLICATIONS.map(function (p) { return p.year; })
    .filter(function (v, i, a) { return a.indexOf(v) === i; })
    .sort(function (a, b) { return b - a; });

  var typesPresent = Object.keys(TYPE_LABELS).filter(function (t) {
    return PUBLICATIONS.some(function (p) { return p.type === t; });
  });

  fillSelect(yearSelect, years);
  fillSelect(themeSelect, Object.keys(THEME_NAMES), function (k) { return THEME_NAMES[k]; });
  fillSelect(typeSelect, typesPresent, function (k) { return TYPE_FILTER_LABELS[k]; });

  /* Deep link support: publications.html?theme=architected-materials */
  var params = new URLSearchParams(window.location.search);
  if (params.get('theme') && themeSelect && THEME_NAMES[params.get('theme')]) {
    themeSelect.value = params.get('theme');
  }
  if (params.get('type') && typeSelect && TYPE_LABELS[params.get('type')]) {
    typeSelect.value = params.get('type');
  }

  /* ------------------------------------------------------------ rendering */
  function escapeText(s) {
    return String(s).replace(/&(?!amp;|lt;|gt;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function itemHTML(pub) {
    var links = [];
    if (pub.link) links.push('<a href="' + pub.link + '" target="_blank" rel="noopener">DOI / publisher</a>');
    if (pub.pdf) links.push('<a href="' + pub.pdf + '">PDF</a>');
    if (pub.code) links.push('<a href="' + pub.code + '" target="_blank" rel="noopener">Code</a>');

    var themeChips = (pub.themes || []).map(function (t) {
      return '<span class="chip' + (t === 'ethics' ? ' chip--alt' : '') + '">' + (THEME_NAMES[t] || t) + '</span>';
    }).join('');

    return '' +
      '<li class="pub-item">' +
        '<div class="pub-item__type">' + (TYPE_LABELS[pub.type] || pub.type) + '</div>' +
        '<div>' +
          '<h3 class="pub-item__title">' + escapeText(pub.title) + '</h3>' +
          '<p class="pub-item__authors">' + pub.authors + '</p>' +
          '<p class="pub-item__venue">' + pub.venue + '</p>' +
          '<div class="pub-item__foot">' +
            (links.length ? '<span>' + links.join(' &middot; ') + '</span>' : '') +
            '<span class="chips">' + themeChips + '</span>' +
          '</div>' +
        '</div>' +
      '</li>';
  }

  function matches(pub) {
    if (themeSelect && themeSelect.value && (pub.themes || []).indexOf(themeSelect.value) === -1) return false;
    if (yearSelect && yearSelect.value && String(pub.year) !== yearSelect.value) return false;
    if (typeSelect && typeSelect.value && pub.type !== typeSelect.value) return false;
    if (searchInput && searchInput.value.trim()) {
      var q = searchInput.value.trim().toLowerCase();
      var hay = (pub.title + ' ' + pub.authors + ' ' + pub.venue).toLowerCase();
      if (hay.indexOf(q) === -1) return false;
    }
    return true;
  }

  function render() {
    var visible = PUBLICATIONS.filter(matches).sort(function (a, b) { return b.year - a.year; });

    if (countOut) {
      countOut.textContent = visible.length + ' of ' + PUBLICATIONS.length + ' shown';
    }

    if (!visible.length) {
      host.innerHTML = '<p class="empty-state">No publications match these filters. ' +
        '<button class="btn btn--sm" data-pub-reset type="button">Clear filters</button></p>';
      bindReset();
      return;
    }

    var html = '';
    var currentYear = null;
    visible.forEach(function (pub) {
      if (pub.year !== currentYear) {
        if (currentYear !== null) html += '</ul>';
        currentYear = pub.year;
        html += '<h2 class="pub-year">' + currentYear + '</h2><ul class="pub-list">';
      }
      html += itemHTML(pub);
    });
    html += '</ul>';
    host.innerHTML = html;
  }

  function bindReset() {
    document.querySelectorAll('[data-pub-reset]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (themeSelect) themeSelect.value = '';
        if (yearSelect) yearSelect.value = '';
        if (typeSelect) typeSelect.value = '';
        if (searchInput) searchInput.value = '';
        render();
      });
    });
  }

  [themeSelect, yearSelect, typeSelect].forEach(function (control) {
    if (control) control.addEventListener('change', render);
  });
  if (searchInput) {
    var t;
    searchInput.addEventListener('input', function () {
      window.clearTimeout(t);
      t = window.setTimeout(render, 140);
    });
  }
  bindReset();
  render();
})();
