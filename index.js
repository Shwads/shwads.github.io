'use strict';

/* =====================================================================
   1. QUESTION BANK
   Four flavours. To add questions, append to the END of a list —
   ids are generated from list position, so appending keeps the
   "already asked" tracking intact for anyone mid-game.
   ===================================================================== */

const CATEGORIES = {
  flirty:  'Flirty',
  open:    'Open up',
  closer:  'Closer',
  curious: 'Curious',
};

const QUESTION_BANK = {
  flirty: [
    'What’s something I do that I probably don’t realise is attractive?',
    'Describe my smile to a stranger without using the words “nice” or “pretty”.',
    'What was the exact moment you first thought “oh no, I like this person”?',
    'Which outfit of mine should be banned for being unfair?',
    'If we were in a film, what would the scene be where the music swells?',
    'What’s a compliment you’ve thought about me but never said out loud? Say it now.',
    'What’s the most charming thing I’ve ever done completely by accident?',
    'Plan our perfect date with no budget and no laws of physics. Where do we end up?',
    'How do you like it best when I say your name?',
    'Rate my flirting out of 10 and explain your methodology.',
    'What’s one small detail about me you’d recognise from across a crowded room?',
    'Invent a pickup line just for me. You have to deliver it with eye contact.',
    'Which of my habits do you pretend to find annoying but secretly like?',
    'What song makes you think of me, and which lyric gives it away?',
    'Describe me in three words, then defend the most controversial one.',
    'If you could steal one thing from my wardrobe forever, what would it be?',
    'What’s the best message I’ve ever sent you?',
    'What’s something you’d love us to do together that feels slightly too bold to suggest?',
    'When did you last catch yourself smiling at your phone because of me?',
    'If I were a dessert, which one would I be, and why?',
    'What should our slow-dance song be?',
    'What’s something about the way I talk that you could listen to for hours?',
    'If we had a secret signal across a busy room, what would it be and what would it mean?',
    'What’s your favourite photo of me that I probably hate?',
    'Hold eye contact for ten seconds. Who looked away first, and what were you thinking?',
  ],

  open: [
    'What’s something you’re proud of that you rarely get to talk about?',
    'Which past version of yourself would you most like to give a hug to?',
    'What do you need more of right now that you haven’t asked anyone for?',
    'When do you feel most like yourself?',
    'What’s a fear you’ve outgrown, and one you’re still working on?',
    'What do people often get wrong about you on first impression?',
    'What did you believe about love at fifteen that you’ve since changed your mind on?',
    'Tell me about a moment you felt truly seen by someone.',
    'What small thing can ruin your day, and what small thing can rescue it?',
    'Which compliment do you find hardest to accept?',
    'What’s a dream you quietly let go of? Do you miss it?',
    'What’s a mistake that taught you something you’re now glad to know?',
    'When you’re overwhelmed, what’s the kindest thing someone can do for you?',
    'Which part of your personality took you the longest to like?',
    'What’s a question you wish people asked you more often? Answer it.',
    'What’s something you’ve changed your mind about this year?',
    'What does a really good day look like for you when nobody’s watching?',
    'Who taught you the most about kindness, and how?',
    'What’s a risk you’re really glad you took?',
    'What’s something you’d like to be braver about?',
    'What tiny ritual keeps you grounded?',
    'What’s the most “you” decision you’ve ever made?',
    'What would you tell your younger self about the person sitting across from you?',
    'What memory do you go back to when you need to feel warm and safe?',
    'What’s something about you that’s hard to explain but you’d like me to understand?',
  ],

  closer: [
    'Which of our inside jokes would you fight to protect?',
    'If we started a tradition this year and kept it for a decade, what should it be?',
    'What’s one thing you’ve learned from me?',
    'What moment with me would you happily relive exactly as it was?',
    'We’re writing a shared bucket list. What’s the first item, and the most ridiculous one?',
    'What’s something we’re surprisingly similar in?',
    'What’s something we’re wonderfully different in?',
    'What’s the best thing we’ve ever eaten together?',
    'If we were stranded somewhere for a week, what role would each of us play?',
    'What’s a skill you’d love for us to learn together?',
    'Which of our conversations has stuck with you the longest?',
    'What’s one thing I could do this month that would make you feel appreciated?',
    'If we had a theme song as a duo, what would it be?',
    'What’s a place that means something to you that you want to show me?',
    'Describe a perfect lazy Sunday for the two of us, hour by hour.',
    'What do you think I underestimate about myself?',
    'Tell me a story from your childhood that you’ve never told me.',
    'If we swapped lives for a day, what’s the first thing you’d do as me?',
    'What’s a question you’ve always wanted to ask me but haven’t? Ask it.',
    'What would we be like as neighbours when we’re eighty?',
    'What’s been the most memorable “us” moment of the past year?',
    'What’s a small promise you could make to me that you’d actually keep?',
    'Plan our next adventure in 60 seconds. Go.',
    'What do you think we bring out in each other?',
    'If there were a museum about us, what would be in the first display case?',
  ],

  curious: [
    'If you could master one completely useless skill overnight, what would it be?',
    'What’s a hill you’d die on that nobody else cares about?',
    'Which fictional world would you move to, and what would your job be there?',
    'If your life had a narrator, whose voice would it be?',
    'What’s a smell that instantly takes you somewhere?',
    'You can ask your future self one yes-or-no question. What is it?',
    'What’s the strangest thing you believed as a child?',
    'Which era would you visit for a week, and what would you bring back?',
    'Name something overrated and something criminally underrated.',
    'If you opened a tiny shop, what would it sell and what would it be called?',
    'What’s the most spontaneous thing you’ve ever done?',
    'What would your autobiography be called, and what’s the first line?',
    'You get one question with anyone from history. Who, and what do you ask?',
    'If you were a houseplant, what would your care instructions say?',
    'What’s a rule you live by that you made up yourself?',
    'What’s a tiny luxury that makes you feel rich?',
    'Which emoji best sums up your week, and why?',
    'If you were instantly fluent in any language, which would it be and what would you do first?',
    'What’s a useless fact you know that you’ll never forget?',
    'If you had to teach a class on anything, what would it be?',
    'What’s the best piece of advice you’ve ever ignored?',
    'Which day would you relive purely to eat the food again?',
    'What are you weirdly competitive about?',
    'If your pet (real or imaginary) could talk, what would they complain about?',
    'You have a completely free, completely unplanned 24 hours tomorrow. What happens?',
  ],
};

// Flatten into one list of { id, cat, text }
const QUESTIONS = Object.entries(QUESTION_BANK).flatMap(([cat, list]) =>
  list.map((text, i) => ({ id: `${cat}-${i}`, cat, text }))
);
const QUESTIONS_BY_ID = new Map(QUESTIONS.map((q) => [q.id, q]));


/* =====================================================================
   2. THE DECK — no repeats until you reset
   Every id is shuffled once (Fisher–Yates). Drawing removes an id from
   that shuffled list and appends it to `asked`, so nothing repeats and
   `asked` doubles as the history for the Previous button.
   State is kept in sessionStorage so a refresh doesn't reset the game.
   ===================================================================== */

const STORAGE_KEY = 'get-to-know-deck-v1';
const NAME_KEY = 'get-to-know-name-v1';

function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function storageGet(key) {
  try { return sessionStorage.getItem(key); } catch { return null; }
}
function storageSet(key, value) {
  try { sessionStorage.setItem(key, value); } catch { /* private mode etc. — game still works */ }
}

const Deck = {
  remaining: [],                               // ids still to be drawn (pre-shuffled)
  asked: [],                                   // ids already shown, in order — this is the history
  active: new Set(Object.keys(CATEGORIES)),    // which types the chips have switched on

  get total() { return QUESTIONS.length; },

  init() {
    let saved = null;
    try { saved = JSON.parse(storageGet(STORAGE_KEY)); } catch { saved = null; }

    if (saved && Array.isArray(saved.active)) {
      const valid = saved.active.filter((cat) => cat in CATEGORIES);
      if (valid.length) this.active = new Set(valid);
    }

    if (!saved || !Array.isArray(saved.remaining) || !Array.isArray(saved.asked)) {
      this.reset();
      return;
    }
    // Drop ids that no longer exist, and pick up any newly added questions
    this.asked = saved.asked.filter((id) => QUESTIONS_BY_ID.has(id));
    const known = new Set([...saved.remaining, ...this.asked]);
    const added = QUESTIONS.filter((q) => !known.has(q.id)).map((q) => q.id);
    this.remaining = shuffle([
      ...saved.remaining.filter((id) => QUESTIONS_BY_ID.has(id)),
      ...added,
    ]);
    this.save();
  },

  isActive(id) {
    return this.active.has(QUESTIONS_BY_ID.get(id).cat);
  },

  // Walk back from the end of the shuffled list and take the first question
  // whose type is switched on. Because the list was shuffled up front, this
  // is still a uniformly random pick among the allowed questions.
  draw() {
    for (let i = this.remaining.length - 1; i >= 0; i--) {
      if (this.isActive(this.remaining[i])) {
        const [id] = this.remaining.splice(i, 1);
        this.asked.push(id);
        this.save();
        return QUESTIONS_BY_ID.get(id);
      }
    }
    return null;
  },

  leftIn(cat) {
    return this.remaining.filter((id) => QUESTIONS_BY_ID.get(id).cat === cat).length;
  },

  leftInSelection() {
    return this.remaining.filter((id) => this.isActive(id)).length;
  },

  totalInSelection() {
    return QUESTIONS.filter((q) => this.active.has(q.cat)).length;
  },

  // Returns false if the change was refused (at least one type must stay on)
  toggle(cat) {
    if (this.active.has(cat)) {
      if (this.active.size === 1) return false;
      this.active.delete(cat);
    } else {
      this.active.add(cat);
    }
    this.save();
    return true;
  },

  reset() {
    this.remaining = shuffle(QUESTIONS.map((q) => q.id));
    this.asked = [];
    this.save();
  },

  save() {
    storageSet(STORAGE_KEY, JSON.stringify({
      remaining: this.remaining,
      asked: this.asked,
      active: [...this.active],
    }));
  },
};


/* =====================================================================
   3. THE BOUQUET — built as SVG so every stem and bloom can animate
   ===================================================================== */

const SVG_NS = 'http://www.w3.org/2000/svg';

function svgEl(tag, attrs = {}, parent) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
  if (parent) parent.appendChild(node);
  return node;
}

const FLOWERS = [
  { x: 120, y: 50,  type: 'rose',  color: '#F29BBE' },
  { x: 76,  y: 76,  type: 'daisy' },
  { x: 164, y: 72,  type: 'tulip', color: '#F6B940' },
  { x: 100, y: 108, type: 'tulip', color: '#C3B1EC' },
  { x: 146, y: 112, type: 'rose',  color: '#FF8FB1' },
  { x: 56,  y: 122, type: 'tulip', color: '#FF8FB1' },
  { x: 186, y: 120, type: 'daisy' },
  { x: 122, y: 136, type: 'daisy' },
];

function drawRose(g, color) {
  svgEl('circle', { r: 16, fill: color }, g);
  svgEl('circle', { r: 11, fill: 'rgba(43,21,48,0.16)' }, g);
  svgEl('circle', { r: 7, fill: color }, g);
  svgEl('path', {
    d: 'M-2,1 a3,3 0 1,1 4,-3 a6,6 0 1,1 -9,6 a10,10 0 1,1 14,-11',
    fill: 'none', stroke: 'rgba(43,21,48,0.35)', 'stroke-width': 1.4, 'stroke-linecap': 'round',
  }, g);
}

function drawDaisy(g) {
  for (let i = 0; i < 10; i++) {
    svgEl('ellipse', { cx: 0, cy: -11, rx: 4.5, ry: 10, fill: '#FFF3F7', transform: `rotate(${i * 36})` }, g);
  }
  svgEl('circle', { r: 5.5, fill: '#F6B940' }, g);
}

function drawTulip(g, color) {
  svgEl('path', {
    d: 'M-11,4 C-14,-10 -9,-20 -6,-22 L-1,-13 L4,-22 C9,-18 14,-8 11,4 C7,11 -7,11 -11,4Z',
    fill: color,
  }, g);
  svgEl('path', { d: 'M-4,6 C-6,-6 -2,-16 0,-18 C2,-16 6,-6 4,6Z', fill: 'rgba(255,255,255,0.22)' }, g);
}

function buildBouquet(svg) {
  const base = { x: 120, y: 215 };

  // Back paper (behind the stems)
  svgEl('polygon', { class: 'wrap', points: '30,104 210,104 132,236 108,236', fill: '#4E2B58' }, svg);

  // Stems
  const stems = svgEl('g', {}, svg);
  FLOWERS.forEach((f, i) => {
    const bend = f.x < base.x ? -8 : 8;
    const stem = svgEl('path', {
      class: 'stem',
      d: `M${base.x},${base.y} Q${(base.x + f.x) / 2 + bend},${(base.y + f.y) / 2} ${f.x},${f.y + 8}`,
      fill: 'none', stroke: '#8CC39A', 'stroke-width': 3, 'stroke-linecap': 'round', pathLength: 1,
    }, stems);
    stem.style.setProperty('--d', `${0.3 + i * 0.07}s`);
  });

  // Leaves
  const leaves = [
    { x: 86, y: 146, r: -50 }, { x: 156, y: 144, r: 50 },
    { x: 68, y: 104, r: -30 }, { x: 174, y: 98, r: 35 },
  ];
  leaves.forEach((l, i) => {
    const pos = svgEl('g', { transform: `translate(${l.x},${l.y}) rotate(${l.r})` }, svg);
    const leaf = svgEl('ellipse', { class: 'bloom', rx: 6, ry: 15, fill: '#6FAA80' }, pos);
    leaf.style.setProperty('--d', `${0.8 + i * 0.08}s`);
  });

  // Flowers: position > sway > bloom, so the two animations don't fight over transform
  FLOWERS.forEach((f, i) => {
    const pos = svgEl('g', { transform: `translate(${f.x},${f.y})` }, svg);
    const sway = svgEl('g', { class: 'sway' }, pos);
    const bloom = svgEl('g', { class: 'bloom' }, sway);
    const delay = `${0.9 + i * 0.13}s`;
    sway.style.setProperty('--d', delay);
    bloom.style.setProperty('--d', delay);
    if (f.type === 'rose') drawRose(bloom, f.color);
    else if (f.type === 'tulip') drawTulip(bloom, f.color);
    else drawDaisy(bloom);
  });

  // Front cone + bow
  const front = svgEl('g', { class: 'wrap' }, svg);
  svgEl('polygon', { points: '58,148 182,148 128,254 112,254', fill: '#C3B1EC' }, front);
  svgEl('polygon', { points: '58,148 120,148 120,254 112,254', fill: 'rgba(43,21,48,0.12)' }, front);
  svgEl('ellipse', { cx: 106, cy: 200, rx: 13, ry: 7, fill: '#F29BBE', transform: 'rotate(-20 106 200)' }, front);
  svgEl('ellipse', { cx: 134, cy: 200, rx: 13, ry: 7, fill: '#F29BBE', transform: 'rotate(20 134 200)' }, front);
  svgEl('path', { d: 'M117,203 L110,226 M123,203 L130,226', stroke: '#F29BBE', 'stroke-width': 4, 'stroke-linecap': 'round' }, front);
  svgEl('circle', { cx: 120, cy: 201, r: 5, fill: '#D96A97' }, front);
}


/* =====================================================================
   4. CONFETTI — petals, dots and little hearts on a canvas
   ===================================================================== */

const Confetti = (() => {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  const COLORS = ['#F29BBE', '#F6B940', '#8CC39A', '#C3B1EC', '#FFF3F7', '#FF8FB1'];
  let particles = [];
  let running = false;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', resize);
  resize();

  const rand = (min, max) => min + Math.random() * (max - min);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  function makeParticle(x, y, vx, vy) {
    const r = Math.random();
    return {
      x, y, vx, vy,
      size: rand(6, 12),
      color: pick(COLORS),
      shape: r < 0.5 ? 'petal' : r < 0.8 ? 'dot' : 'heart',
      rot: rand(0, Math.PI * 2),
      spin: rand(-0.15, 0.15),
      tilt: rand(0, Math.PI * 2),
      tiltSpeed: rand(0.05, 0.12),
    };
  }

  // A cone-shaped burst from a point
  function burst(x, y, count = 80, angle = -Math.PI / 2, spread = Math.PI * 0.8) {
    for (let i = 0; i < count; i++) {
      const a = angle + rand(-spread / 2, spread / 2);
      const speed = rand(6, 14);
      particles.push(makeParticle(x, y, Math.cos(a) * speed, Math.sin(a) * speed));
    }
    start();
  }

  // Gentle fall from the top of the screen
  function rain(count = 60) {
    for (let i = 0; i < count; i++) {
      particles.push(makeParticle(rand(0, window.innerWidth), rand(-window.innerHeight * 0.6, -20), rand(-1, 1), rand(1, 3)));
    }
    start();
  }

  function drawHeart(s) {
    ctx.beginPath();
    ctx.moveTo(0, s * 0.3);
    ctx.bezierCurveTo(-s, -s * 0.3, -s * 0.4, -s, 0, -s * 0.45);
    ctx.bezierCurveTo(s * 0.4, -s, s, -s * 0.3, 0, s * 0.3);
    ctx.fill();
  }

  function frame() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (const p of particles) {
      p.vx *= 0.985;
      p.vy = Math.min(p.vy * 0.985 + 0.16, 4.2); // capped fall speed = floaty petals
      p.tilt += p.tiltSpeed;
      p.x += p.vx + Math.sin(p.tilt) * 0.7;
      p.y += p.vy;
      p.rot += p.spin;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.scale(1, Math.cos(p.tilt)); // the flip that makes it flutter
      ctx.fillStyle = p.color;
      if (p.shape === 'petal') {
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.45, p.size, 0, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'dot') {
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.4, 0, Math.PI * 2);
        ctx.fill();
      } else {
        drawHeart(p.size);
      }
      ctx.restore();
    }

    particles = particles.filter((p) => p.y < window.innerHeight + 40);

    if (particles.length) {
      requestAnimationFrame(frame);
    } else {
      running = false;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }

  function start() {
    if (running) return;
    running = true;
    requestAnimationFrame(frame);
  }

  return { burst, rain };
})();


/* =====================================================================
   5. WIRING IT ALL UP
   ===================================================================== */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const screenName = document.getElementById('screen-name');
const screenGame = document.getElementById('screen-game');
const nameForm   = document.getElementById('name-form');
const nameInput  = document.getElementById('name-input');
const nameError  = document.getElementById('name-error');
const playerName = document.getElementById('player-name');
const bouquet    = document.getElementById('bouquet');
const chipsEl    = document.getElementById('chips');
const chipHint   = document.getElementById('chip-hint');
const nextBtn    = document.getElementById('next-btn');
const resetBtn   = document.getElementById('reset-btn');
const card       = document.getElementById('question-card');
const cardTag    = document.getElementById('q-tag');
const cardText   = document.getElementById('q-text');
const historyRow = document.getElementById('history');
const prevBtn    = document.getElementById('prev-btn');
const fwdBtn     = document.getElementById('fwd-btn');
const historyPos = document.getElementById('history-pos');
const progress   = document.getElementById('progress');

// Which entry of Deck.asked is on the card right now.
// null means the card is showing a note (reset, all done) rather than a question.
let cursor = null;

function restartAnimation(el, className) {
  el.classList.remove('deal', 'from-left', 'from-right', 'nope', 'shake');
  void el.offsetWidth; // force reflow so the same animation can play again
  el.classList.add(className);
}

function celebrate() {
  if (reduceMotion) return;
  const rect = bouquet.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height * 0.35;
  Confetti.burst(cx, cy, 90, -Math.PI / 2, Math.PI * 1.1);                                 // from the flowers
  Confetti.burst(0, window.innerHeight, 50, -Math.PI / 3, Math.PI / 4);                    // bottom-left cannon
  Confetti.burst(window.innerWidth, window.innerHeight, 50, -2 * Math.PI / 3, Math.PI / 4); // bottom-right cannon
  setTimeout(() => Confetti.rain(70), 350);
}

/* ---------- Filter chips ---------- */

function buildChips() {
  for (const [cat, label] of Object.entries(CATEGORIES)) {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip';
    chip.dataset.cat = cat;

    const name = document.createElement('span');
    name.textContent = label;
    const count = document.createElement('span');
    count.className = 'chip-count';

    chip.append(name, count);
    chip.addEventListener('click', () => {
      if (!Deck.toggle(cat)) {
        restartAnimation(chip, 'nope');
        chipHint.textContent = 'Keep at least one type switched on.';
        return;
      }
      chipHint.textContent = '';
      updateUI();
    });
    chipsEl.appendChild(chip);
  }
}

/* ---------- Rendering ---------- */

function updateUI() {
  // Chips: on/off state and how many of each type are left
  for (const chip of chipsEl.children) {
    const cat = chip.dataset.cat;
    const on = Deck.active.has(cat);
    const left = Deck.leftIn(cat);
    chip.setAttribute('aria-pressed', String(on));
    chip.querySelector('.chip-count').textContent = left;
    chip.setAttribute('aria-label', `${CATEGORIES[cat]}, ${left} left`);
  }

  // Progress line
  const allOn = Deck.active.size === Object.keys(CATEGORIES).length;
  const left = allOn ? Deck.remaining.length : Deck.leftInSelection();
  const total = allOn ? Deck.total : Deck.totalInSelection();
  progress.textContent = allOn
    ? `${left} of ${total} questions left`
    : `${left} of ${total} left in your picks`;

  // History controls
  const asked = Deck.asked.length;
  historyRow.hidden = asked === 0;
  prevBtn.disabled = asked === 0 || cursor === 0;
  fwdBtn.disabled = cursor === null || cursor >= asked - 1;
  historyPos.textContent = cursor === null
    ? `${asked} asked so far`
    : `Question ${cursor + 1} of ${asked}`;
}

function renderCard({ tag, cat, text }, animation = 'deal') {
  card.hidden = false;
  card.dataset.cat = cat;
  cardTag.textContent = tag;
  cardText.textContent = text;
  restartAnimation(card, animation);
}

function showAsked(index, animation) {
  cursor = index;
  const q = QUESTIONS_BY_ID.get(Deck.asked[index]);
  renderCard({ tag: CATEGORIES[q.cat], cat: q.cat, text: q.text }, animation);
  updateUI();
}

function showNote(tag, text) {
  cursor = null;
  renderCard({ tag, cat: 'note', text });
  updateUI();
}

/* ---------- Actions ---------- */

function showNextQuestion() {
  if (Deck.draw()) {
    showAsked(Deck.asked.length - 1, 'deal');
    return;
  }
  if (Deck.remaining.length === 0) {
    showNote('All done', `That’s all ${Deck.total} questions. Reset to shuffle them back in.`);
    if (!reduceMotion) Confetti.rain(50);
  } else {
    showNote('Picks finished', 'You’ve played every question in the types you picked. Switch on another type above, or reset to start fresh.');
  }
}

function showPrevious() {
  if (Deck.asked.length === 0) return;
  const index = cursor === null ? Deck.asked.length - 1 : cursor - 1;
  if (index < 0) return;
  showAsked(index, 'from-left');
}

function showForward() {
  if (cursor === null || cursor >= Deck.asked.length - 1) return;
  showAsked(cursor + 1, 'from-right');
}

function resetQuestions() {
  Deck.reset();
  showNote('Fresh deck', `All ${Deck.total} questions are back in. Click for a random question to start again.`);
}

function startWelcome(name) {
  playerName.textContent = name; // textContent, so a name can never inject HTML
  document.title = `Welcome ${name}`;

  const reveal = () => {
    screenName.hidden = true;
    screenGame.hidden = false;
    requestAnimationFrame(() => screenGame.classList.add('is-active'));
    setTimeout(celebrate, reduceMotion ? 0 : 1500);
    setTimeout(() => nextBtn.focus({ preventScroll: true }), reduceMotion ? 0 : 3000);
  };

  if (reduceMotion) {
    reveal();
  } else {
    screenName.classList.add('is-leaving');
    setTimeout(reveal, 450);
  }
}

nameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value.replace(/\s+/g, ' ').trim();

  if (!name) {
    nameError.textContent = 'Type your name to start.';
    restartAnimation(nameInput, 'shake');
    nameInput.focus();
    return;
  }

  nameError.textContent = '';
  storageSet(NAME_KEY, name);
  startWelcome(name);
});

nextBtn.addEventListener('click', showNextQuestion);
resetBtn.addEventListener('click', resetQuestions);
prevBtn.addEventListener('click', showPrevious);
fwdBtn.addEventListener('click', showForward);

// Left/right arrow keys step through history once the game is showing
document.addEventListener('keydown', (event) => {
  if (screenGame.hidden || event.target.matches('input, textarea')) return;
  if (event.key === 'ArrowLeft') showPrevious();
  if (event.key === 'ArrowRight') showForward();
});

// Boot
buildBouquet(bouquet);
Deck.init();
buildChips();
updateUI();
nameInput.value = storageGet(NAME_KEY) || '';
nameInput.focus();

// Lets index.html confirm this file actually loaded
window.GAME_READY = true;
