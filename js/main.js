// ── FOOTER CREDIT (every page, every footer variant) ──
document.addEventListener('DOMContentLoaded', function() {
  function buildCredit() {
    var wrap = document.createElement('span');
    wrap.style.cssText = 'opacity:.6;margin-left:4px';
    wrap.appendChild(document.createTextNode('· Created and designed by '));
    var link = document.createElement('a');
    link.href = 'https://www.instagram.com/jovialjulian_?igsh=YmJucDd4OXN0ZWQ3';
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = '@jovialjulian_';
    link.style.cssText = 'color:inherit;text-decoration:underline';
    wrap.appendChild(link);
    return wrap;
  }
  document.querySelectorAll('.footer-copy').forEach(function(el) {
    el.appendChild(document.createTextNode(' '));
    el.appendChild(buildCredit());
  });
  document.querySelectorAll('footer span').forEach(function(el) {
    if (el.children.length === 0 && el.textContent.indexOf('All Rights Reserved') !== -1) {
      el.appendChild(document.createTextNode(' '));
      el.appendChild(buildCredit());
    }
  });
});

// ── TESTIMONIAL VIDEOS: only one plays at a time ──
document.addEventListener('play', function(e) {
  if (e.target.tagName !== 'VIDEO') return;
  document.querySelectorAll('.tvg video').forEach(function(v) {
    if (v !== e.target) v.pause();
  });
}, true);

// ── MOBILE NAV ──
function toggleMobileNav() {
  const nav = document.querySelector('nav');
  const isOpen = nav.classList.toggle('nav-open');
  document.body.style.overflow = isOpen ? 'hidden' : '';
}
function closeMobileNav() {
  document.querySelector('nav').classList.remove('nav-open');
  document.body.style.overflow = '';
}
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-dd-item, .nav-link').forEach(function(el) {
    el.addEventListener('click', closeMobileNav);
  });
});

// ── COUNTDOWN TIMERS ──
(function(){
  function updateCountdowns(){
    document.querySelectorAll('.lcd[data-date]').forEach(el => {
      const target = new Date(el.dataset.date + 'T00:00:00');
      const now = new Date();
      const diff = target - now;
      if(diff <= 0){ el.textContent = 'Starting now!'; return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      el.textContent = d + 'd ' + h + 'h ' + m + 'm ' + s + 's';
    });
  }
  updateCountdowns();
  setInterval(updateCountdowns, 1000);
})();

// ── FREE DOWNLOAD FORM ──
async function handleFreeDownload(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const msg = document.getElementById('freedownload-msg');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  const emails = [
    'info@connect2nlp.com',
    'julian@connect2nlp.com',
    'simon@connect2nlp.com'
  ];

  try {
    await Promise.all(emails.map(email =>
      fetch('https://formsubmit.co/ajax/' + email, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
    ));
    if(msg){ msg.style.color='var(--gold-bright)'; msg.textContent='Thank you! We will be in touch within 3 days.'; msg.style.display='block'; }
    form.reset();
  } catch(err) {
    if(msg){ msg.style.color='#ff8080'; msg.textContent='Something went wrong. Please try again.'; msg.style.display='block'; }
  }

  btn.textContent = 'Send Me the Guide →';
  btn.disabled = false;
}

// ── ASK A QUESTION MODAL ──
function openAskQuestion() {
  const ov = document.getElementById('askq-overlay');
  if (!ov) return;
  ov.classList.add('open');
  document.body.style.overflow = 'hidden';
  ov.scrollTop = 0;
}
function closeAskQuestion() {
  const ov = document.getElementById('askq-overlay');
  if (!ov) return;
  ov.classList.remove('open');
  document.body.style.overflow = '';
}
async function handleAskQuestionSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const msg = document.getElementById('askq-msg');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  const emails = [
    'info@connect2nlp.com',
    'julian@connect2nlp.com',
    'simon@connect2nlp.com'
  ];

  try {
    await Promise.all(emails.map(email =>
      fetch('https://formsubmit.co/ajax/' + email, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
    ));
    if (msg) { msg.style.color = 'var(--blue2)'; msg.textContent = 'Thank you! We will get back to you within 24 hours.'; msg.style.display = 'block'; }
    form.reset();
    setTimeout(closeAskQuestion, 3000);
  } catch (err) {
    if (msg) { msg.style.color = '#c62828'; msg.textContent = 'Something went wrong. Please try again or email info@connect2nlp.com.'; msg.style.display = 'block'; }
  }

  btn.textContent = 'Send My Question →';
  btn.disabled = false;
}

// ── ENROLMENT FORM MODAL ──
function openEnrol() {
  const ov = document.getElementById('enrol-overlay');
  if (!ov) return;
  ov.classList.add('open');
  document.body.style.overflow = 'hidden';
  ov.scrollTop = 0;
}
function closeEnrol() {
  const ov = document.getElementById('enrol-overlay');
  if (!ov) return;
  ov.classList.remove('open');
  document.body.style.overflow = '';
}
async function handleEnrolSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const msg = document.getElementById('enrol-msg');
  btn.textContent = 'Submitting...';
  btn.disabled = true;

  const emails = [
    'info@connect2nlp.com',
    'julian@connect2nlp.com',
    'simon@connect2nlp.com'
  ];

  try {
    await Promise.all(emails.map(email =>
      fetch('https://formsubmit.co/ajax/' + email, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
    ));
    if (msg) { msg.style.color = 'var(--blue2)'; msg.textContent = 'Thank you! Your enrolment has been received — we will be in touch shortly.'; msg.style.display = 'block'; }
    form.reset();
    setTimeout(closeEnrol, 3500);
  } catch (err) {
    if (msg) { msg.style.color = '#c62828'; msg.textContent = 'Something went wrong. Please try again or email info@connect2nlp.com.'; msg.style.display = 'block'; }
  }

  btn.textContent = 'Submit Enrolment →';
  btn.disabled = false;
}

// ── COUNT-UP ANIMATION ──
(function(){
  const counters = document.querySelectorAll('[data-count]');
  if(!counters.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 3500;
      const start = performance.now();
      function tick(now){
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(ease * target).toLocaleString() + suffix;
        if(progress < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString() + suffix;
      }
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, {threshold: 0.3});
  counters.forEach(el => obs.observe(el));
})();

// ── HERO MYSTERIOUS REVEAL (Training hero tagline) ──
// Same build-up mechanic as the Attendee Stories testimonials (blank,
// then materialises character by character, each fading in from a
// blur) but slower, and auto-looping: once fully revealed it holds for
// 5 seconds, fades out, then reveals again — repeating indefinitely
// rather than waiting for a hover.
(function(){
  const lines = document.querySelectorAll('.hero-word-line');
  if(!lines.length) return;
  const SPEED = 90; // ms between characters — slower than the testimonials' 45ms
  const HOLD = 5000; // ms to hold fully revealed before looping
  const FADE_OUT = 400; // ms fade-out transition

  lines.forEach(line => {
    const textEl = line.querySelector('.hero-glow-text');
    if(!textEl) return;
    const full = textEl.textContent;
    textEl.textContent = '';
    textEl.style.transition = `opacity ${FADE_OUT}ms ease`;

    function cycle(){
      textEl.style.opacity = '1';
      textEl.textContent = '';
      let i = 0;
      const timer = setInterval(() => {
        const span = document.createElement('span');
        span.className = 'tq-ch';
        span.textContent = full[i];
        textEl.appendChild(span);
        i++;
        if(i >= full.length){
          clearInterval(timer);
          setTimeout(() => {
            textEl.style.opacity = '0';
            setTimeout(cycle, FADE_OUT);
          }, HOLD);
        }
      }, SPEED);
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        obs.unobserve(line);
        cycle();
      });
    }, {threshold: 0.3});
    obs.observe(line);
  });
})();

// ── CLARIFY REVEAL — blurred text sharpens into focus when scrolled into view ──
(function(){
  const els = document.querySelectorAll('.clarify');
  if(!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      const el = entry.target;
      obs.unobserve(el);
      // Stagger siblings within the same section for a cascading focus effect
      const section = el.closest('section') || document.body;
      const group = [...section.querySelectorAll('.clarify')];
      el.style.transitionDelay = (group.indexOf(el) * 0.22) + 's';
      el.classList.add('clarified');
    });
  }, {threshold: 0.4});
  els.forEach(el => obs.observe(el));
})();

// ── TESTIMONIAL MYSTERIOUS REVEAL (Attendee Stories + other testimonials) ──
// Quote area is blank; hovering the card makes the quote materialise
// character by character, each fading in from a blur. Leaving fades it
// out so it reveals again on every hover. Tap triggers it on touch.
// Quotes are grouped by their shared card so multi-paragraph testimonials
// (e.g. Joshua Small) reveal one paragraph at a time, in sequence, rather
// than all paragraphs typing out in parallel.
(function(){
  const quotes = document.querySelectorAll('.type-quote');
  if(!quotes.length) return;
  const SPEED = 45; // ms between characters — unhurried

  const groups = new Map();
  quotes.forEach(el => {
    const card = el.closest('.tc-card, .biz-testi') || el;
    if(!groups.has(card)) groups.set(card, []);
    groups.get(card).push(el);
  });

  groups.forEach((els, card) => {
    els.forEach(el => {
      // Reserve the full height up front so the card never resizes
      el.style.minHeight = el.offsetHeight + 'px';
      el.dataset.fullText = el.textContent;
      el.textContent = '';
    });
    let timer = null;

    const revealAll = () => {
      clearInterval(timer);
      els.forEach(el => { el.classList.remove('tq-fadeout'); el.textContent = ''; });
      let index = 0;
      const typeNext = () => {
        if(index >= els.length) return;
        const el = els[index];
        const full = el.dataset.fullText;
        let i = 0;
        timer = setInterval(() => {
          const span = document.createElement('span');
          span.className = 'tq-ch';
          span.textContent = full[i];
          el.appendChild(span);
          i++;
          if(i >= full.length){
            clearInterval(timer);
            index++;
            typeNext();
          }
        }, SPEED);
      };
      typeNext();
    };

    const clearAll = () => {
      clearInterval(timer);
      els.forEach(el => el.classList.add('tq-fadeout'));
      setTimeout(() => { els.forEach(el => { el.textContent = ''; el.classList.remove('tq-fadeout'); }); }, 300);
    };

    card.addEventListener('mouseenter', revealAll);
    card.addEventListener('mouseleave', clearAll);
    card.addEventListener('touchstart', revealAll, {passive:true});
  });
})();

// ── PAGE NAVIGATION ──
const YOUTUBE_VIDEO_ID = 'n2rFPclR2xM';
let ytPlayer = null;
let ytReady = false;
let musicAutoplayTried = false;

function playMusicFromStart() {
  if (!ytPlayer || !ytReady) return;
  ytPlayer.seekTo(0, true);
  ytPlayer.playVideo();
}

function tryMusicAutoplay() {
  playMusicFromStart();
}

window.onYouTubeIframeAPIReady = function() {
  ytPlayer = new YT.Player('music-embed-target', {
    videoId: YOUTUBE_VIDEO_ID,
    width: '100%',
    height: '130',
    playerVars: { rel: 0, modestbranding: 1, playsinline: 1 },
    events: {
      onReady: function() {
        ytReady = true;
        // Best-effort autoplay — most browsers block unmuted audio on load with zero interaction,
        // so this quietly does nothing for first-time visitors until they click anywhere.
        tryMusicAutoplay();
      }
    }
  });
};

// A real user gesture anywhere on the page makes a subsequent play() call far more likely to succeed
document.addEventListener('click', () => {
  if (!musicAutoplayTried) { musicAutoplayTried = true; tryMusicAutoplay(); }
}, { once: true });

function toggleMusicWidget() {
  const panel = document.getElementById('music-panel');
  const btn = document.getElementById('music-toggle');
  const opening = panel.style.display !== 'block';
  panel.style.display = opening ? 'block' : 'none';

  // Once clicked, shrink the inviting CTA down to a small discreet icon for the rest of the visit
  if (btn.classList.contains('music-cta')) {
    btn.classList.remove('music-cta');
    btn.classList.add('music-icon');
    btn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>';
  }
}

function goPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active-nav'));
  const pg = document.getElementById(id);
  if (pg) { pg.classList.add('active'); window.scrollTo(0,0); }
  const nl = document.querySelector(`[data-page="${id}"]`);
  if (nl) nl.classList.add('active-nav');

  // Music widget only plays on the Home page — pause and collapse it the instant we navigate away
  const musicPanel = document.getElementById('music-panel');
  if (id !== 'page-home') {
    if (ytPlayer && ytReady) ytPlayer.pauseVideo();
    if (musicPanel) musicPanel.style.display = 'none';
  } else if (ytPlayer && ytReady) {
    // Returning to Home — always restart from the very beginning
    playMusicFromStart();
  }
}

// ── COURSE TABS ──
function showTab(t, btn) {
  document.querySelectorAll('.courses-grid').forEach(g => g.classList.remove('active'));
  document.querySelectorAll('.ctab').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + t).classList.add('active');
  btn.classList.add('active');
}

// ── DEMYSTIFIED ACCORDION ──
function toggleDa(item) { item.classList.toggle('open'); }

// ── TEAM ACCORDION ──
function toggleTeam(item) {
  const open = item.classList.contains('open');
  document.querySelectorAll('.ta-item').forEach(i => i.classList.remove('open'));
  if (!open) item.classList.add('open');
}

// ── FAQ ──
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const open = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!open) item.classList.add('open');
}

// ── FLIP CARDS ──
function flipCard(el) { el.classList.toggle('flipped'); }

// ── GLOSSARY ──
const glossaryTerms = [
  {w:"Accessing Cues",d:"Observable signals such as eye movement, posture, breathing, or gestures that reveal how a person is processing information internally."},
  {w:"\"As-If\" Frame",d:"Behaving as though a desired ability or situation already exists in order to encourage confidence and capability."},
  {w:"Analogue Marking",d:"The process of marking out words or spaces in a text using a verbal or nonverbal cue. This process uses pauses and sentence breaks to highlight particular words."},
  {w:"Anchoring",d:"An NLP method in which a specific trigger becomes connected to a certain emotional or behavioural response."},
  {w:"Associated",d:"Experiencing a memory or situation from your own point of view, as though you are reliving it directly."},
  {w:"Auditory",d:"Relating to hearing and sound."},
  {w:"Backtrack",d:"Reviewing or summarising information that was previously discussed."},
  {w:"Behaviour",d:"Any action or activity that can be externally observed."},
  {w:"Beliefs",d:"General assumptions or convictions a person holds about themselves, others, or the world."},
  {w:"Calibration",d:"Observing and comparing non-verbal behaviour to recognise or measure another person's emotional or mental state."},
  {w:"Chunking",d:"Changing the level of thinking by moving toward broader ideas or toward more specific details."},
  {w:"Complex Equivalence",d:"Assuming that one event or behaviour automatically means something else."},
  {w:"Congruence",d:"A state in which a person's words, emotions, and actions are aligned and consistent."},
  {w:"Conscious",d:"Anything currently within a person's awareness."},
  {w:"Contrastive Analysis",d:"Comparing two experiences or sets of qualities to identify the key differences between them."},
  {w:"Content Reframe",d:"Changing the meaning of a situation by interpreting it from a different perspective."},
  {w:"Context Reframing",d:"Viewing a behaviour or event in another setting where it may be useful or appropriate."},
  {w:"Criteria",d:"The standards, values, or priorities that a person considers important."},
  {w:"Crossover Mirroring",d:"Matching another person's behaviour using a different but corresponding movement."},
  {w:"Deep Structure",d:"The underlying meaning or unconscious information beneath spoken language."},
  {w:"Deletion",d:"Leaving out parts of an experience or information when communicating or thinking."},
  {w:"Digital",d:"Information expressed in clear, separate categories or distinctions."},
  {w:"Dissociated",d:"Viewing an experience from an outside perspective instead of through your own eyes."},
  {w:"Distortion",d:"Misinterpreting reality by changing or reshaping information in the mind."},
  {w:"Downtime",d:"A state in which attention is directed inward toward thoughts, memories, or feelings."},
  {w:"Drivers",d:"The most influential submodalities that create major differences in perception or experience."},
  {w:"Ecology",d:"Considering the broader consequences and impact of change on oneself and others."},
  {w:"Elicitation",d:"Drawing out information, emotions, or states through observation or questioning."},
  {w:"Eye Accessing Cues",d:"Patterns of eye movement that are believed to indicate different types of thinking or recall."},
  {w:"Epistemology",d:"The study of how knowledge is formed and understood."},
  {w:"First Position",d:"Experiencing a situation entirely from your own perspective."},
  {w:"Frame",d:"A mental context or viewpoint that shapes how something is interpreted."},
  {w:"Future Pace",d:"Mentally practising a future situation to strengthen desired responses or behaviours."},
  {w:"Generalisation",d:"Applying one experience or belief broadly to many similar situations."},
  {w:"Gustatory",d:"Relating to the sense of taste."},
  {w:"Incongruence",d:"A mismatch between a person's words, feelings, or behaviour."},
  {w:"Intent",d:"The purpose or desired result behind an action."},
  {w:"Internal Representations",d:"The mental images, sounds, feelings, tastes, smells, and self-talk used in thinking."},
  {w:"Kinesthetic",d:"Related to physical sensations, movement, and feelings."},
  {w:"Law of Requisite Variety",d:"The principle that the most adaptable part of a system has the greatest influence over it."},
  {w:"Leading",d:"Guiding another person's state or behaviour after first establishing rapport."},
  {w:"Lead System",d:"The primary mental process used to access information internally."},
  {w:"Logical Level",d:"A degree of abstraction or specificity in thinking."},
  {w:"Logical Type",d:"A category or class that distinguishes one type of information from another."},
  {w:"Mapping Across",d:"Transferring qualities from one experience to another to alter its meaning or emotional effect."},
  {w:"Matching",d:"Copying aspects of another person's behaviour to build rapport."},
  {w:"Meaning Reframe",d:"Changing the interpretation of an event by assigning it a different meaning."},
  {w:"Meta Model",d:"An NLP language framework used to clarify vague, distorted, or incomplete communication."},
  {w:"Meta Programs",d:"Habitual mental patterns that influence attention, motivation, and decision-making."},
  {w:"Metaphor",d:"A story or symbolic comparison used to communicate ideas indirectly."},
  {w:"Milton Model",d:"A style of intentionally vague and suggestive language designed to encourage unconscious processing."},
  {w:"Mirroring",d:"Reflecting another person's behaviour in a corresponding way to strengthen the connection."},
  {w:"Mismatching",d:"Responding in a way that differs from or contradicts another person's behaviour or communication style."},
  {w:"Modal Operator",d:"Words that express necessity, obligation, possibility, or limitation."},
  {w:"Model",d:"A structured description of a process, behaviour, or skill that can be understood and repeated."},
  {w:"Modelling",d:"Studying and replicating the thought patterns, behaviours, and strategies of successful individuals."},
  {w:"Model of the World",d:"An individual's personal understanding of reality shaped by beliefs, values, and experiences."},
  {w:"Neuro Linguistic Programming",d:"An approach focused on understanding how language, thought, and behaviour interact to influence human experience."},
  {w:"Nominalisation",d:"Turning a process or action into a noun, often making it seem fixed or abstract."},
  {w:"Olfactory",d:"Related to the sense of smell."},
  {w:"Outcome",d:"The result or goal a person wants to achieve."},
  {w:"Overlap",d:"Using one sensory system to help access another sensory experience."},
  {w:"Pacing",d:"Adjusting your behaviour or communication style to match another person to build rapport and understanding."},
  {w:"Parts",d:"Different internal aspects of a person that may have separate goals, emotions, or behaviours."},
  {w:"Parts Integration",d:"An NLP process designed to resolve conflict between different internal parts and create greater harmony."},
  {w:"Perceptual Position",d:"A particular viewpoint from which a person experiences or interprets a situation."},
  {w:"Phonological Ambiguity",d:"Language that sounds the same but can have different meanings depending on interpretation."},
  {w:"Preferred Representational System",d:"The sensory system a person most naturally relies on when thinking or communicating."},
  {w:"Presuppositions",d:"Underlying assumptions that are accepted as true within communication or behaviour."},
  {w:"Presuppositions of NLP",d:"Core guiding assumptions in NLP intended to support effective communication, learning, and change."},
  {w:"Primary Representational System",d:"The main sensory system a person typically uses to organise and process experiences."},
  {w:"Punctuation Ambiguity",d:"A sentence or phrase that can be interpreted differently because of unclear pauses or structure."},
  {w:"Quotes",d:"Statements or expressions repeated exactly as originally spoken or written."},
  {w:"Rapport",d:"A state of mutual trust, connection, and responsiveness between people."},
  {w:"Reframing",d:"Changing the interpretation of an experience in order to alter its meaning or emotional impact."},
  {w:"Representation",d:"The way experiences are mentally stored through images, sounds, feelings, tastes, smells, or language."},
  {w:"Representational System",d:"A sensory-based method people use to perceive, process, and communicate experiences."},
  {w:"Resources",d:"Internal qualities, skills, emotions, or abilities that help a person achieve desired outcomes."},
  {w:"Resourceful State",d:"A mental or emotional condition in which a person has access to useful abilities and positive responses."},
  {w:"Second Position",d:"Experiencing a situation from another person's perspective to understand their viewpoint."},
  {w:"Sensory Acuity",d:"The ability to notice and interpret subtle changes in another person's behaviour or responses."},
  {w:"Sensory-Based Description",d:"Communication based on direct observable sensory information rather than assumptions or interpretations."},
  {w:"State",d:"A person's overall mental, emotional, and physical condition at a particular moment."},
  {w:"Strategy",d:"A sequence of internal and external processes used to achieve a specific result or behaviour."},
  {w:"Submodalities",d:"The smaller qualities within sensory experiences, such as brightness, volume, distance, or intensity."},
  {w:"Surface Structure",d:"The actual words or language used to express thoughts and experiences."},
  {w:"Synesthesia",d:"A linked mental process in which one sensory or emotional experience automatically triggers another."},
  {w:"Syntactic Ambiguity",d:"Language that is structured in a way that allows more than one interpretation."},
  {w:"Third Position",d:"Viewing a situation as an objective observer rather than from a personal perspective."},
  {w:"Time Line",d:"The mental arrangement of memories, present experiences, and future expectations."},
  {w:"Time Line Therapy™",d:"A process developed by Tad James to help individuals release negative emotions and limiting decisions connected to past experiences."},
  {w:"Trance",d:"An altered state of awareness often involving focused attention and reduced external awareness."},
  {w:"Unconscious",d:"Mental processes and information that exist outside conscious awareness."},
  {w:"Unconscious Mind",d:"The part of the mind that operates below conscious awareness and influences behaviour."},
  {w:"Universal Quantifiers",d:"Words that make broad, absolute statements such as 'always,' 'never,' or 'everyone.'"},
  {w:"Uptime",d:"A state in which attention is focused mainly on the external environment."},
  {w:"Values",d:"Core principles or qualities that a person considers meaningful or important."},
  {w:"Vestibular System",d:"The sensory system responsible for balance and spatial orientation."},
  {w:"Visual",d:"Relating to sight and visual perception."},
  {w:"Visual Squash",d:"An NLP integration process intended to resolve internal conflicts between different parts of oneself."},
  {w:"Well-Formedness",d:"The process of shaping goals or outcomes so they are clear, achievable, and realistic."}
];

let activeAlpha = 'All';
let searchQuery = '';

function renderGlossary() {
  const grid = document.getElementById('glossaryGrid');
  if (!grid) return;
  let terms = glossaryTerms;
  if (activeAlpha !== 'All') terms = terms.filter(t => t.w[0].toUpperCase() === activeAlpha);
  if (searchQuery) terms = terms.filter(t => t.w.toLowerCase().includes(searchQuery) || t.d.toLowerCase().includes(searchQuery));
  document.getElementById('glossaryCount').textContent = `Showing ${terms.length} of ${glossaryTerms.length} terms`;
  if (!terms.length) { grid.innerHTML = '<div class="no-results">No terms found. Try a different search.</div>'; return; }
  grid.innerHTML = terms.map(t => {
    const letter = t.w.replace(/"/g,'')[0].toUpperCase();
    const cat = getCat(letter);
    return `<div class="g-term" onclick="this.classList.toggle('open')">
      <div class="g-term-header">
        <div class="g-term-letter">${letter}</div>
        <div class="g-term-word">${t.w}</div>
        <div class="g-term-icon">+</div>
      </div>
      <div class="g-term-body">
        <div class="g-term-def">${t.d}</div>
        <span class="g-term-tag">${cat}</span>
      </div>
    </div>`;
  }).join('');
}

function getCat(l) {
  const map = {A:'Foundation',B:'Behaviour',C:'Communication',D:'Perception',E:'Learning',F:'Positioning',G:'Language',I:'States',K:'Sensory',L:'Principles',M:'Modelling',N:'Core NLP',O:'Outcomes',P:'Rapport & Process',Q:'Language',R:'Representation',S:'States & Strategy',T:'Time & Trance',U:'Language',V:'Sensory',W:'Goals'};
  return map[l] || 'NLP Concept';
}

function filterAlpha(letter, btn) {
  activeAlpha = letter;
  document.querySelectorAll('.alpha-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGlossary();
}

function searchGlossary(val) {
  searchQuery = val.toLowerCase();
  activeAlpha = 'All';
  document.querySelectorAll('.alpha-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.alpha-btn').classList.add('active');
  renderGlossary();
}

// Init on load
window.addEventListener('DOMContentLoaded', () => {
  goPage('page-home');
  renderGlossary();
});

// ── LOCATIONS ──
function showLocation(code, btn) {
  document.querySelectorAll('.loc-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.loc-ctab').forEach(b => b.classList.remove('active'));
  const sec = document.getElementById('loc-' + code);
  if (sec) sec.classList.add('active');
  if (btn) btn.classList.add('active');
  // sync overview cards
  document.querySelectorAll('.loc-ov-card').forEach(c => c.classList.remove('active-loc'));
  const map = {za:0,uk:1,us:2,pr:3};
  const cards = document.querySelectorAll('.loc-ov-card');
  if (cards[map[code]]) cards[map[code]].classList.add('active-loc');
}

function showLocationCard(code, card) {
  showLocation(code, null);
  document.querySelectorAll('.loc-ov-card').forEach(c => c.classList.remove('active-loc'));
  card.classList.add('active-loc');
  // sync hero tabs
  const tabMap = {za:0, uk:1, us:2, pr:3};
  const tabs = document.querySelectorAll('.loc-ctab');
  tabs.forEach(t => t.classList.remove('active'));
  if (tabs[tabMap[code]]) tabs[tabMap[code]].classList.add('active');
  // scroll to top of loc sections
  const sec = document.getElementById('loc-' + code);
  if (sec) sec.scrollIntoView({behavior:'smooth', block:'start'});
}

// ── VALUES CARD FLIP ── (one at a time)
function flipValCard(card) {
  const isFlipped = card.classList.contains('flipped');
  document.querySelectorAll('.val-card').forEach(c => c.classList.remove('flipped'));
  if (!isFlipped) card.classList.add('flipped');
}

// ── NLP PAGE ──
// Override goPage to handle NLP nav link
const _origGoPage = goPage;

// ── TEAM CARD GRID (new layout) ──
function toggleTeamCard(card) {
  const isOpen = card.classList.contains('tc-open');
  document.querySelectorAll('.team-card').forEach(c => c.classList.remove('tc-open'));
  if (!isOpen) card.classList.add('tc-open');
}


// ── RESULTS PAGE TABS ──
function showResultsTab(tab) {
  ['approach','creating','say'].forEach(t => {
    const panel = document.getElementById('rpanel-' + t);
    const btn = document.getElementById('rtab-' + t);
    if (!panel || !btn) return;
    if (t === tab) {
      panel.style.display = 'block';
      btn.style.border = '1.5px solid var(--gold-bright)';
      btn.style.background = 'rgba(240,200,64,.12)';
      btn.style.color = 'var(--gold-bright)';
    } else {
      panel.style.display = 'none';
      btn.style.border = '1.5px solid rgba(255,255,255,.2)';
      btn.style.background = 'rgba(255,255,255,.06)';
      btn.style.color = 'rgba(220,240,255,.7)';
    }
  });
}


// ── COURSE ACCORDION ──
function toggleCourse(id) {
  const body = document.getElementById(id + '-body');
  const arrow = document.getElementById(id + '-arrow');
  if (!body) return;
  const isOpen = body.style.display === 'block';
  // Close all first
  ['demystified','c2life','communication','values','presenting','coaching','hypnosis',
   'practitioner','master','trainers','mastertrainer'].forEach(cid => {
    const b = document.getElementById(cid + '-body');
    const a = document.getElementById(cid + '-arrow');
    if (b) b.style.display = 'none';
    if (a) a.style.transform = 'rotate(0deg)';
  });
  // Open clicked if it was closed
  if (!isOpen) {
    body.style.display = 'block';
    if (arrow) arrow.style.transform = 'rotate(180deg)';
  }
}

// ── TEAM PORTRAIT CARDS ──
const trainerData = {
  simon: {
    photo: 'images/img-3.png',
    name: 'Simon Gledhill',
    role: 'Master Coach and Master Trainer, Founder',
    loc: 'Cape Town, South Africa and Global',
    quote: '"Life is a continuous movie, one where you are the lead. I help others craft their story and create a sequel aligned with their deepest aspirations."',
    bio: 'Simon Gledhill is a founding member of IFNLP and Connect2 NLP. His transformative path began in 1990 during his tenure as an Account Director for SITEL, where influenced by his manager Una McLoughlin, his outlook on what is possible shifted profoundly. As Head of Global Telebusiness for a management consultancy, he applied his expertise in CRM to effect positive change with individuals and businesses globally. His mission is to leave a positive mark on the world with his renowned "Give-A-Damn" ethos.',
    email: 'simon@connect2nlp.com', phone: '+27 83 704 4810', phoneRaw: '+27837044810',
    certs: ['IFNLP Founding Member','NLP Master Trainer','Master Coach','ABNLP Certified','Time Line Therapy','Hypnosis Certified'],
    passions: ['Corporate Transformation','Give-A-Damn Ethos','International Consulting']
  },
  angela: {
    photo: 'images/img-5.png',
    name: 'Angela Lightfoot Redondo',
    role: 'Certified Trainer of NLP, Hypnosis and Timeline',
    loc: 'Puerto Rico, USA',
    quote: '"My mission is to sow seeds of happiness that yield abundant fruit in the lives of individuals and organisations alike."',
    bio: 'Angela Lightfoot Redondo is a seasoned professional with over two decades of experience in coaching and development.\n\nShe is on a mission to foster deep, connected relationships and guide individuals on a transformative journey of self-discovery. Rooted in empathy, passion, and joy, Angela is a compassionate Happiness Life Coach dedicated to helping her clients experience strength, courage, and boldness in embracing life with body, mind, and spirit.\n\nHer unique Transformation Destination Experience program creates a safe and supportive space for exploring challenges, challenging thinking patterns, and addressing negative emotions. Angela skillfully incorporates Equine Assisted Learning and Therapy, using horses to provide authentic reflections of participants\' experiences, which promotes powerful self-awareness and personal growth.\n\nAs a Certified Trainer of NLP, Hypnosis, and Timeline Techniques, Angela empowers individuals to unlock their unique, authentic potential. Her diverse skill set includes leadership mastery, results coaching, and certifications in happiness coaching, mindfulness, and wellness. A martial artist and accomplished equestrian, Angela is deeply committed to giving back to the community, with a special focus on youth development.\n\nHonored to collaborate with respected Puerto Rican companies such as Dragon Fly Global DMC, Retention Strategies Puerto Rico, and Carabali Rainforest Adventure Park, Angela is dedicated to sowing seeds of happiness that yield abundant fruit in the lives of individuals and organizations alike.',
    email: 'angela@connect2nlp.com', phone: '+1 352 362 8969', phoneRaw: '+13523628969',
    certs: ['Certified Trainer of NLP','Certified Trainer of Hypnosis','Timeline Techniques Trainer','EAL/T Practitioner','Happiness Coaching'],
    passions: ['Equine Assisted Learning','Youth Development','Martial Arts','Wellness']
  },
  julian: {
    photo: 'images/julian-bio-2.png',
    name: 'Julian Van Reenen',
    role: 'NLP Trainer, Master Coach and Public Speaker',
    loc: 'Cape Town, South Africa',
    quote: '"People are often capable of far more than they have been conditioned to believe. By actively focusing on what serves — and equally what doesn\'t serve — one\'s well-being and growth, meaningful change isn\'t just possible. IT IS INEVITABLE."',
    bio: 'Julian Van Reenen doesn\'t just teach NLP, he embraces it. With a warm, grounded energy and a genuine belief in human potential, Julian has spent over a decade helping people understand the one thing that changes everything: the way they think.\n\nHe embarked on this path in 2011 when he first encountered Neuro-Linguistic Programming and recognised its extraordinary capacity to shift how people communicate, behave and relate to themselves. Within a year he had qualified as an NLP Practitioner and shortly after certified as a Master Practitioner. He went on to assist and facilitate transformational trainings across South Africa and the USA, earning his NLP Trainer certification in Las Vegas in 2017 with Dr Tad James, a milestone that marked the beginning of a new chapter of service, teaching and impact.\n\nWhat sets Julian apart is the depth of his presence. He brings the same authenticity to a training room as he does to a conversation over coffee, direct, kind, authentic and entirely without pretence. His participants don\'t just learn concepts, they experience shifts. He has a rare ability to meet people exactly where they are, then guide them somewhere they never imagined they could go.\n\nThrough NLP, mindset development and emotional intelligence tools, he helps youth build the inner clarity and confidence to move forward on their own terms.\n\nBeyond the training room, Julian is a man of rich texture. He finds equal joy in classical music, particularly the cello, which he also studied extensively during his twenties. He has a huge passion for plants and believes that a full life, one of growth, connection, beauty and presence, is itself the greatest case study in what NLP makes possible.',
    email: 'julian@connect2nlp.com', phone: '+27 72 303 4857', phoneRaw: '+27723034857',
    certs: ['NLP Trainer (Las Vegas 2017)','NLP Master Practitioner','Master Coach','Youth Development','Public Speaking'],
    passions: ['Classical Music','Youth Empowerment','Nature and Plants','Work-Life Balance']
  },
  rachelle: {
    photo: 'images/img-9.png',
    name: 'Rachèlle Venter',
    role: 'NLP Master Practitioner, Gauteng',
    loc: 'Gauteng, South Africa',
    quote: '"Meaningful transformation begins with small shifts in perspective, conscious communication and the willingness to grow through life\'s challenges."',
    bio: 'Rachèlle is an NLP Master Practitioner with a deep passion for personal growth, human connection and emotional resilience. Shaped through motherhood, entrepreneurship and continuous self-discovery, she brings a grounded and authentic approach to personal development. She has explored NLP, Reiki, reflexology, photography, Early Childhood Development, wellness and business management and supports others through lived experience and genuine passion for people.',
    email: 'rachelle@connect2nlp.com', phone: '+27 83 630 3604', phoneRaw: '+27836303604',
    certs: ['NLP Master Practitioner','Reiki Practitioner','Early Childhood Development','Reflexology','Business Management'],
    passions: ['Human Connection','Emotional Resilience','Photography','Wellness']
  }
};

let activeTrainer = null;
let activeTrainerTeam = null;

function openTrainerTeam(id) {
  if (activeTrainerTeam === id) { closeTrainerTeam(); return; }
  activeTrainerTeam = id;
  const d = trainerData[id];
  const firstName = d.name.split(' ')[0];
  const emailSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>';
  const phoneSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
  const waSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>';
  const waMsg = encodeURIComponent(`Hello ${firstName}, I found you on the Connect2 NLP website and would like to book a call with you. Please contact me at your earliest convenience. Thank you`);
  const waLink = `https://wa.me/${d.phoneRaw.replace(/\D/g,'')}?text=${waMsg}`;
  document.getElementById('tpc-t-photo').src = d.photo;
  document.getElementById('tpc-t-photo').alt = d.name;
  document.getElementById('tpc-t-name').textContent = d.name;
  document.getElementById('tpc-t-role').textContent = d.role;
  document.getElementById('tpc-t-loc').textContent = d.loc;
  document.getElementById('tpc-t-quote').textContent = d.quote;
  document.getElementById('tpc-t-bio').textContent = d.bio;
  document.getElementById('tpc-t-contacts').innerHTML =
    `<a href="${waLink}" target="_blank" class="tc-contact-btn" style="background:linear-gradient(135deg,#25d366,#128c5e);color:#fff;border-color:#25d366;font-weight:600;font-size:12px;padding:10px 18px">${waSvg} Book a Call with ${firstName}</a>
     <a href="mailto:${d.email}" class="tc-contact-btn tc-contact-email">${emailSvg}${d.email}</a>
     <a href="tel:${d.phoneRaw}" class="tc-contact-btn tc-contact-phone">${phoneSvg}${d.phone}</a>`;
  document.getElementById('tpc-t-certs').innerHTML = d.certs.map(c => `<span class="tc-cert">${c}</span>`).join('');
  document.getElementById('tpc-t-passions').innerHTML = d.passions.map(p => `<span class="tc-passion">${p}</span>`).join('');
  const panel = document.getElementById('tpc-panel-team');
  panel.style.display = 'block';
  setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
}

function closeTrainerTeam() {
  activeTrainerTeam = null;
  document.getElementById('tpc-panel-team').style.display = 'none';
}

function openTrainer(id) {
  if (activeTrainer === id) { closeTrainer(); return; }
  activeTrainer = id;
  const d = trainerData[id];
  const firstName = d.name.split(' ')[0];
  const emailSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>';
  const phoneSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
  const waSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>';
  const waMsg = encodeURIComponent(`Hello ${firstName}, I found you on the Connect2 NLP website and would like to book a call with you. Please contact me at your earliest convenience. Thank you`);
  const waLink = `https://wa.me/${d.phoneRaw.replace(/\D/g,'')}?text=${waMsg}`;
  document.getElementById('tpc-p-photo').src = d.photo;
  document.getElementById('tpc-p-photo').alt = d.name;
  document.getElementById('tpc-p-name').textContent = d.name;
  document.getElementById('tpc-p-role').textContent = d.role;
  document.getElementById('tpc-p-loc').textContent = d.loc;
  document.getElementById('tpc-p-quote').textContent = d.quote;
  document.getElementById('tpc-p-bio').textContent = d.bio;
  document.getElementById('tpc-p-contacts').innerHTML =
    `<a href="${waLink}" target="_blank" class="tc-contact-btn" style="background:linear-gradient(135deg,#25d366,#128c5e);color:#fff;border-color:#25d366;font-weight:600;font-size:12px;padding:10px 18px">${waSvg} Book a Call with ${firstName}</a>
     <a href="mailto:${d.email}" class="tc-contact-btn tc-contact-email">${emailSvg}${d.email}</a>
     <a href="tel:${d.phoneRaw}" class="tc-contact-btn tc-contact-phone">${phoneSvg}${d.phone}</a>`;
  document.getElementById('tpc-p-certs').innerHTML = d.certs.map(c => `<span class="tc-cert">${c}</span>`).join('');
  document.getElementById('tpc-p-passions').innerHTML = d.passions.map(p => `<span class="tc-passion">${p}</span>`).join('');
  const panel = document.getElementById('tpc-panel');
  panel.style.display = 'block';
  setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
}

function closeTrainer() {
  activeTrainer = null;
  document.getElementById('tpc-panel').style.display = 'none';
}

// ── READ MORE PERKS ──
function toggleJpMore() {
  const content = document.getElementById('jp-more');
  const btn = document.getElementById('jp-more-btn');
  const label = document.getElementById('jp-more-label');
  const isOpen = content.style.display === 'block';
  content.style.display = isOpen ? 'none' : 'block';
  label.textContent = isOpen ? 'Read More' : 'Read Less';
  btn.classList.toggle('open', !isOpen);
}

// ── COURSE FINDER ──
const finderAnswers = {};

const finderRecommendations = {
  certification: {
    title: 'NLP Practitioner Certification',
    desc: 'Our internationally accredited Practitioner programme is the ideal starting point for anyone serious about mastering NLP and gaining a recognised qualification.'
  },
  advanced: {
    title: 'NLP Master Practitioner',
    desc: 'Build on your existing NLP foundation with advanced techniques, deeper models and the skills to facilitate powerful change in yourself and others.'
  },
  trainer: {
    title: 'Trainers Training',
    desc: 'Designed for certified NLP Practitioners ready to step into the training room. Gain the skills and accreditation to teach NLP to others.'
  },
  coaching: {
    title: 'C2 Coaching Course',
    desc: 'A practical, hands-on programme developing real coaching competence. Ideal for professionals who want to integrate coaching into their work or practice.'
  },
  communication: {
    title: 'C2 Communication',
    desc: 'Master the art of communication beyond words. This short course is perfect for professionals wanting to improve relationships, influence and impact.'
  },
  personal: {
    title: 'C2 Your Life',
    desc: 'A powerful introduction to NLP techniques for personal change. If you are new to NLP and want to experience its impact first, this is your starting point.'
  },
  corporate: {
    title: 'Corporate & Team NLP',
    desc: 'Tailored NLP programmes for teams and organisations. We work with your specific goals to design a training experience that delivers measurable results.'
  }
};

function finderGetRecommendation() {
  const a1 = finderAnswers[1] || '';
  const a2 = finderAnswers[2] || '';
  const a3 = finderAnswers[3] || '';
  if (a1.includes('team') || a1.includes('organisation')) return 'corporate';
  if (a3.includes('teach others') || a1.includes('coach or trainer')) return 'trainer';
  if (a3.includes('advance') || a3.includes('some training')) return 'advanced';
  if (a2.includes('certification')) return 'certification';
  if (a2.includes('coaching') || a2.includes('leadership')) return 'coaching';
  if (a2.includes('communication')) return 'communication';
  return 'personal';
}

function finderShowStep(n) {
  document.querySelectorAll('.finder-step').forEach(s => s.classList.remove('active'));
  const step = document.getElementById('fstep-' + n);
  if (step) step.classList.add('active');
  const progress = n === 'result' ? 100 : (n / 3) * 100;
  document.getElementById('finder-bar').style.width = progress + '%';
}

function finderNext(step, answer) {
  finderAnswers[step] = answer;
  document.querySelectorAll('#fstep-' + step + ' .finder-opt').forEach(b => b.classList.remove('selected'));
  event.target.classList.add('selected');
  setTimeout(() => {
    if (step < 3) {
      finderShowStep(step + 1);
    } else {
      const rec = finderGetRecommendation();
      document.getElementById('finder-rec-title').textContent = finderRecommendations[rec].title;
      document.getElementById('finder-rec-desc').textContent = finderRecommendations[rec].desc;
      finderShowStep('result');
    }
  }, 220);
}

function finderBack(toStep) {
  finderShowStep(toStep);
}

function finderSubmit() {
  const fname = document.getElementById('finder-fname').value.trim();
  const lname = document.getElementById('finder-lname').value.trim();
  const email = document.getElementById('finder-email').value.trim();
  const phone = document.getElementById('finder-phone').value.trim();
  if (!fname || !lname || !email || !phone) {
    alert('Please fill in your name, email and phone number.');
    return;
  }
  document.getElementById('finder-success').style.display = 'block';
  document.querySelector('#fstep-result .btn-join').style.display = 'none';
  document.getElementById('finder-back-btn').style.display = 'none';

  const waMsg = encodeURIComponent(`Hello, my name is ${fname} ${lname}. I completed the course finder on the Connect2 NLP website and would like to book a call to discuss my recommended pathway. My email is ${email} and phone number is ${phone}. Thank you`);
  window.open(`https://wa.me/27723034857?text=${waMsg}`, '_blank');
}

