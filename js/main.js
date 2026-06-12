// ── PAGE NAVIGATION ──
function goPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active-nav'));
  const pg = document.getElementById(id);
  if (pg) { pg.classList.add('active'); window.scrollTo(0,0); }
  const nl = document.querySelector(`[data-page="${id}"]`);
  if (nl) nl.classList.add('active-nav');
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
  ['c2life','values','presenting','coaching-course','hypnosis',
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

