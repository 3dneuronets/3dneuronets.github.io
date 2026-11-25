/* 3D NeuroNets — Service previews (no dependencies)
   Edit summary, highlights and slug below to update a preview.
   The GitHub URL goes directly to the corresponding README.md.
*/
(() => {
  'use strict';

  const githubBase = 'https://github.com/3dneuronets/Portfolio/blob/main/';
  const services = [
    {
      title: 'Multi-Electrode Arrays (MEA)',
      category: 'Neural Data Analysis',
      lead: 'From multichannel recordings to functional network insights.',
      summary: 'We develop tailored MEA and HD-MEA analysis workflows for brain organoids, neuronal cultures, and retinal circuits. Quantitative electrophysiological profiling helps research teams characterize network development, identify treatment-related changes, and compare experimental conditions.',
      highlights: ['Spike detection and neuronal firing profiles', 'Bursting, synchrony, and functional connectivity', 'High-density spatial activity and wave analysis'],
      slug: 'Data-Analysis/multi-electrode-arrays/README.md'
    },
    {
      title: 'Whole-Cell Patch Clamp',
      category: 'Neural Data Analysis',
      lead: 'Turn intracellular recordings into quantitative neuronal profiles.',
      summary: 'Customized current-clamp and voltage-clamp analysis quantifies intrinsic membrane properties, neuronal excitability, and synaptic activity. We help researchers compare conditions, automate feature extraction, and generate measurements that can inform biophysical neuron models.',
      highlights: ['Passive properties and action-potential features', 'Firing–current relationships and adaptation', 'Spontaneous and evoked synaptic event analysis'],
      slug: 'Data-Analysis/whole-cell-patch-clamp/README.md'
    },
    {
      title: 'In Vivo Recordings',
      category: 'Neural Data Analysis',
      lead: 'Extract meaningful patterns from complex brain recordings.',
      summary: 'We develop analysis workflows for EEG, LFP, and intracranial spike recordings, from extended time series to event-aligned population activity. Our methods support neural event detection, oscillatory characterization, nonlinear analysis, and candidate biomarker investigation.',
      highlights: ['Long-duration recordings and event detection', 'Spike trains, oscillations, and population activity'],
      slug: 'Data-Analysis/in-vivo-recordings/README.md'
    },
    {
      title: 'Functional & Anatomical Networks',
      category: 'Neural Data Analysis',
      lead: 'Reconstruct and characterize the architecture of neural circuits.',
      summary: 'Our workflows transform spike trains, adjacency matrices, and anatomical reconstructions into quantitative network representations. We investigate inferred functional interactions and measured structural connectivity separately, then use graph and spatial analyses to characterize circuit organization.',
      highlights: ['Functional connectivity and directed dependence', 'Graph topology and population-specific statistics', 'Connectomics processing and model-ready constraints'],
      slug: 'Data-Analysis/functional-anatomical-networks/README.md'
    },
    {
      title: 'Rodent Thalamocortical Models',
      category: 'Data-Driven Modeling',
      lead: 'Reconstruct complex, experimentally informed brain circuits.',
      summary: 'We develop and customize thalamocortical network models by combining neuronal morphologies, electrophysiology, synaptic mechanisms, and anatomical connectivity. Detailed NetPyNE/NEURON simulations enable exploration of cortical–thalamic interactions and evaluation of network responses.',
      highlights: ['Data-driven circuit and connectivity reconstruction', 'Multicompartment biophysics and synaptic physiology', 'Large-scale simulation and experimental comparison'],
      slug: 'Data-Driven-Models/rat-thalamocortical-model/README.md'
    },
    {
      title: 'Rodent Hippocampal Models',
      category: 'Data-Driven Modeling',
      lead: 'From hippocampal electrophysiology to network dynamics.',
      summary: 'Customized spiking neuronal networks help investigate how cellular properties, synaptic coupling, and spatial connectivity shape hippocampal activity. Our approaches characterize spontaneous firing, synchronized bursting, and the emergence of propagating activity patterns.',
      highlights: ['Experimentally informed network development', 'Firing statistics and synchronization analysis', 'Spatial activity patterns and neural-wave detection'],
      slug: 'Data-Driven-Models/rat-hippocampus-model/README.md'
    },
    {
      title: 'Epilepsy Modeling',
      category: 'Data-Driven Modeling',
      lead: 'Understand seizure mechanisms, investigate prediction, and test control.',
      summary: 'We combine conductance-based neuronal networks, nonlinear dynamics, electrophysiological comparisons, and machine learning to study seizure-like transitions. Simulation studies support investigations of candidate biomarkers, pathological synchronization, and targeted interventions.',
      highlights: ['Spontaneous seizure-like dynamics and model calibration', 'Neuronal silence and candidate predictive biomarkers', 'Simulation-based stimulation and suppression strategies'],
      slug: 'Data-Driven-Models/model-to-study-epilepsy/README.md'
    },
    {
      title: 'Aging & Neural Dynamics',
      category: 'Data-Driven Modeling',
      lead: 'Investigate age-related changes in neuronal function.',
      summary: 'We connect electrophysiological measurements with computational modeling approaches to explore changes in excitability, synaptic interactions, and collective neural activity during aging. Analytical and modeling workflows can be tailored to the available datasets and research hypotheses.',
      highlights: ['Age-related electrophysiological comparisons', 'Cellular and synaptic parameter exploration', 'Network-level hypothesis testing'],
      slug: 'Data-Driven-Models/model-to-study-aging/README.md'
    },
    {
      title: 'Ion Channel Models',
      category: 'Data-Driven Modeling',
      lead: 'Connect ionic mechanisms to neuronal and network behavior.',
      summary: 'We develop customizable conductance-based neuron models to explore how ionic currents shape membrane excitability, adaptation, firing transitions, and population activity. Channel-parameter sweeps help identify the mechanisms associated with distinct dynamical regimes.',
      highlights: ['Custom ionic mechanisms and membrane models', 'Electrophysiological parameterization and conductance maps', 'Bistability, bursting, and network synchronization'],
      slug: 'Data-Driven-Models/ionic-channels-model/README.md'
    },
    {
      title: 'Human Temporal Cortex Models',
      category: 'Data-Driven Modeling',
      lead: 'From human connectomics to biophysically detailed cortical models.',
      summary: 'Our developing H01-informed human cortical L2/3 framework combines neuronal spatial organization, population-specific connectivity, detailed cell models, and synaptic mechanisms. NetPyNE, NEURON, and CoreNEURON support customization and computational investigation of human microcircuit dynamics.',
      highlights: ['Human anatomical and connectivity data integration', 'Detailed PYR, SST, PV, and VIP neuronal populations', 'Custom network experiments and CPU/GPU-oriented workflows'],
      slug: 'Data-Driven-Models/human-cortical-model/README.md'
    },
    {
      title: 'tACS & TMS Modeling',
      category: 'Data-Driven Modeling',
      lead: 'Explore cellular and circuit responses to stimulation.',
      summary: 'Our biophysical modeling approaches support studies of neuronal responses to prescribed extracellular electric fields and stimulation protocols, including tACS- and TMS-oriented investigations. Custom simulations can examine morphology-dependent effects and the resulting network dynamics.',
      highlights: ['Single-cell, morphology-dependent stimulation', 'Thalamocortical and human cortical network responses', 'Stimulation parameter exploration and synchronization'],
      slug: 'Data-Driven-Models/extracellular-stimulation-tacs-tms/README.md'
    }
  ];

  const normalize = text => text.replace(/\s+/g, ' ').trim().toLocaleLowerCase('en');
  const lookup = new Map(services.map(service => [normalize(service.title), service]));
  const cards = Array.from(document.querySelectorAll('#portfolio-main .pf-cap'));
  if (!cards.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'pf-service-overlay';
  overlay.hidden = true;
  overlay.innerHTML = `
    <div class="pf-service-dialog" role="dialog" aria-modal="true" aria-labelledby="pf-service-title" aria-describedby="pf-service-summary" tabindex="-1">
      <button class="pf-service-close" type="button" aria-label="Close service preview">&times;</button>
      <p class="pf-service-eyebrow" id="pf-service-category"></p>
      <h2 id="pf-service-title"></h2>
      <p class="pf-service-lead" id="pf-service-lead"></p>
      <p class="pf-service-summary" id="pf-service-summary"></p>
      <p class="pf-service-list-label">Key capabilities</p>
      <ul class="pf-service-highlights" id="pf-service-highlights"></ul>
      <div class="pf-service-actions">
        <a class="pf-service-github" id="pf-service-github" target="_blank" rel="noopener noreferrer">View service on GitHub <span aria-hidden="true">↗</span></a>
        <button class="pf-service-dismiss" type="button">Back to services</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  const dialog = overlay.querySelector('.pf-service-dialog');
  const closeButton = overlay.querySelector('.pf-service-close');
  const dismissButton = overlay.querySelector('.pf-service-dismiss');
  const github = overlay.querySelector('#pf-service-github');
  const highlights = overlay.querySelector('#pf-service-highlights');
  let activeTrigger = null;
  let previousOverflow = '';

  function openPreview(service, trigger) {
    activeTrigger = trigger;
    overlay.querySelector('#pf-service-category').textContent = service.category + ' / Service overview';
    overlay.querySelector('#pf-service-title').textContent = service.title;
    overlay.querySelector('#pf-service-lead').textContent = service.lead;
    overlay.querySelector('#pf-service-summary').textContent = service.summary;
    highlights.replaceChildren();
    service.highlights.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      highlights.appendChild(li);
    });
    github.href = githubBase + service.slug;
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    overlay.hidden = false;
    requestAnimationFrame(() => overlay.classList.add('pf-service-visible'));
    closeButton.focus();
  }

  function closePreview() {
    if (overlay.hidden) return;
    overlay.classList.remove('pf-service-visible');
    overlay.hidden = true;
    document.body.style.overflow = previousOverflow;
    if (activeTrigger && activeTrigger.isConnected) activeTrigger.focus();
    activeTrigger = null;
  }

  cards.forEach(card => {
    const heading = card.querySelector('h3');
    if (!heading) return;
    const service = lookup.get(normalize(heading.textContent));
    if (!service) return;

    card.classList.add('pf-preview-ready');
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-haspopup', 'dialog');
    card.setAttribute('aria-label', 'Preview ' + service.title);

    const cue = document.createElement('span');
    cue.className = 'pf-preview-cue';
    cue.setAttribute('aria-hidden', 'true');
    cue.textContent = 'Explore service  ↗';
    card.appendChild(cue);

    card.addEventListener('click', event => {
      if (event.target.closest('a, button')) return;
      openPreview(service, card);
    });
    card.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      if (event.target !== card) return;
      event.preventDefault();
      openPreview(service, card);
    });
  });

  closeButton.addEventListener('click', closePreview);
  dismissButton.addEventListener('click', closePreview);
  overlay.addEventListener('click', event => {
    if (event.target === overlay) closePreview();
  });
  document.addEventListener('keydown', event => {
    if (overlay.hidden) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closePreview();
    }
    if (event.key === 'Tab') {
      const focusables = Array.from(dialog.querySelectorAll('a[href], button:not([disabled])'));
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
})();
