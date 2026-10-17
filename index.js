<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>Let’s get to know each other</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💐</text></svg>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&family=Yeseva+One&display=swap" rel="stylesheet">
  <style>
    :root {
      --night: #2B1530;
      --rose: #F29BBE;
      --marigold: #F6B940;
      --sage: #8CC39A;
      --lilac: #C3B1EC;
      --petal: #FFF3F7;
      --muted: #D9C3D6;
      --display: 'Yeseva One', Georgia, 'Times New Roman', serif;
      --body: 'Outfit', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    }

    * { box-sizing: border-box; }
    html, body { margin: 0; }

    body {
      min-height: 100vh;
      min-height: 100dvh;
      background-color: var(--night);
      /* one soft pool of lamplight behind the bouquet */
      background-image: radial-gradient(ellipse 55% 40% at 50% 24%, rgba(242, 155, 190, 0.16), transparent 70%);
      color: var(--petal);
      font-family: var(--body);
      font-size: 1.0625rem;
      line-height: 1.55;
      padding-top: env(safe-area-inset-top, 0px);
      padding-bottom: env(safe-area-inset-bottom, 0px);
    }

    #confetti {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 50;
    }

    main {
      max-width: 40rem;
      margin: 0 auto;
      padding: clamp(1.5rem, 5vw, 3rem) 1.25rem 3rem;
      min-height: 100vh;
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .screen { text-align: center; }
    [hidden] { display: none !important; }

    .sr-only {
      position: absolute;
      width: 1px; height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      white-space: nowrap;
    }

    /* ---------- Buttons ---------- */
    .btn {
      font: inherit;
      font-weight: 600;
      font-size: 1.05rem;
      border-radius: 999px;
      padding: 0.85rem 1.6rem;
      border: 2px solid transparent;
      cursor: pointer;
      transition: transform 0.15s ease, background-color 0.15s ease, border-color 0.15s ease;
    }
    .btn:active { transform: scale(0.97); }
    .btn:focus-visible { outline: 3px solid var(--lilac); outline-offset: 3px; }

    .btn-primary { background: var(--marigold); color: var(--night); }
    .btn-primary:hover { background: #FFC95E; }

    .btn-quiet {
      background: transparent;
      color: var(--petal);
      border-color: rgba(255, 243, 247, 0.35);
      font-size: 0.95rem;
      padding: 0.6rem 1.2rem;
    }
    .btn-quiet:hover { border-color: var(--petal); }

    /* ---------- Name screen ---------- */
    .hello {
      font-family: var(--display);
      font-weight: 400;
      font-size: clamp(2.6rem, 9vw, 4.2rem);
      line-height: 1.05;
      margin: 0 0 0.35em;
    }
    .hello-sub { color: var(--muted); margin: 0 0 2rem; }

    .name-form {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.75rem;
    }
    .name-form input {
      flex: 1 1 14rem;
      max-width: 20rem;
      font: inherit;
      font-size: 1.15rem;
      padding: 0.85rem 1.2rem;
      border-radius: 999px;
      border: 2px solid rgba(255, 243, 247, 0.25);
      background: rgba(255, 243, 247, 0.06);
      color: var(--petal);
    }
    .name-form input::placeholder { color: rgba(255, 243, 247, 0.5); }
    .name-form input:focus {
      outline: none;
      border-color: var(--rose);
      box-shadow: 0 0 0 4px rgba(242, 155, 190, 0.25);
    }
    .error {
      flex-basis: 100%;
      min-height: 1.5em;
      margin: 0.25rem 0 0;
      color: var(--marigold);
      font-size: 0.95rem;
    }
    .shake { animation: shake 0.4s ease; }
    .is-leaving { animation: leave 0.45s ease forwards; }

    /* ---------- Bouquet ---------- */
    .bouquet {
      display: block;
      width: min(16rem, 62vw);
      height: auto;
      margin: 0 auto -1.5rem;
      overflow: visible;
    }
    .wrap { opacity: 0; }
    .stem { stroke-dasharray: 1; stroke-dashoffset: 1; }
    .sway, .bloom { transform-box: fill-box; transform-origin: center; }
    .bloom { transform: scale(0); }

    .is-active .wrap { animation: rise 0.6s ease-out forwards; }
    .is-active .stem { animation: draw 0.9s ease-out var(--d) forwards; }
    .is-active .bloom { animation: bloom 0.7s cubic-bezier(.34, 1.56, .64, 1) var(--d) forwards; }
    .is-active .sway { animation: sway 4.5s ease-in-out calc(var(--d) + 0.7s) infinite; }

    /* ---------- Banner ---------- */
    .banner {
      position: relative;
      z-index: 2;
      display: inline-block;
      max-width: 100%;
      padding: 0.75rem clamp(2rem, 8vw, 3.25rem) 0.85rem;
      background: var(--rose);
      color: var(--night);
      clip-path: polygon(0 0, 100% 0, calc(100% - 1.1rem) 50%, 100% 100%, 0 100%, 1.1rem 50%);
      transform: scaleX(0);
    }
    .is-active .banner { animation: unroll 0.7s cubic-bezier(.2, .8, .2, 1) 1.1s forwards; }

    .banner h1 { margin: 0; font-weight: 400; }
    .banner h1 > span { display: block; opacity: 0; }
    .is-active .banner h1 > span { animation: fade 0.6s ease 1.55s forwards; }
    .is-active .banner h1 > .compliment { animation-delay: 1.8s; }

    .welcome {
      font-family: var(--display);
      font-size: clamp(1.9rem, 7vw, 3.1rem);
      line-height: 1.1;
      overflow-wrap: anywhere;
    }
    .compliment {
      font-weight: 600;
      font-size: clamp(1rem, 3.4vw, 1.2rem);
      margin-top: 0.2rem;
    }

    /* ---------- Question area ---------- */
    .play { opacity: 0; transform: translateY(12px); }
    .is-active .play { animation: fade-up 0.8s ease 2.5s forwards; }

    .play h2 {
      font-family: var(--display);
      font-weight: 400;
      font-size: clamp(1.35rem, 4.5vw, 1.7rem);
      margin: 2.25rem 0 1rem;
    }

    .q-card {
      --accent: var(--lilac);
      max-width: 32rem;
      margin: 1.75rem auto 0;
      padding: 1.5rem 1.5rem 1.85rem;
      border-radius: 1.25rem;
      background: var(--petal);
      color: var(--night);
      text-align: left;
      box-shadow: 0 0.6rem 0 -0.1rem var(--accent);
    }
    .q-card[data-cat="flirty"]  { --accent: var(--rose); }
    .q-card[data-cat="open"]    { --accent: var(--lilac); }
    .q-card[data-cat="closer"]  { --accent: var(--sage); }
    .q-card[data-cat="curious"] { --accent: var(--marigold); }
    .q-card[data-cat="note"]    { --accent: rgba(255, 243, 247, 0.4); }

    .q-tag {
      display: inline-block;
      font-size: 0.85rem;
      font-weight: 600;
      padding: 0.2rem 0.75rem;
      border-radius: 999px;
      background: var(--accent);
      color: var(--night);
      margin-bottom: 0.9rem;
    }
    .q-text {
      font-family: var(--display);
      font-size: clamp(1.3rem, 4.6vw, 1.65rem);
      line-height: 1.32;
      margin: 0;
    }
    .q-card.deal       { animation: deal 0.55s cubic-bezier(.2, .8, .2, 1); }
    .q-card.from-left  { animation: from-left 0.35s ease-out; }
    .q-card.from-right { animation: from-right 0.35s ease-out; }

    /* ---------- Filter chips ---------- */
    .chips {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
    }
    .chip {
      --accent: var(--lilac);
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font: inherit;
      font-size: 0.95rem;
      font-weight: 600;
      padding: 0.45rem 0.6rem 0.45rem 1rem;
      border-radius: 999px;
      border: 2px solid rgba(255, 243, 247, 0.3);
      background: transparent;
      color: var(--muted);
      cursor: pointer;
      transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
    }
    .chip[data-cat="flirty"]  { --accent: var(--rose); }
    .chip[data-cat="open"]    { --accent: var(--lilac); }
    .chip[data-cat="closer"]  { --accent: var(--sage); }
    .chip[data-cat="curious"] { --accent: var(--marigold); }
    .chip:hover { border-color: var(--accent); }
    .chip:focus-visible { outline: 3px solid var(--lilac); outline-offset: 3px; }
    .chip[aria-pressed="true"] {
      background: var(--accent);
      border-color: var(--accent);
      color: var(--night);
    }
    .chip-count {
      min-width: 1.6rem;
      padding: 0.05rem 0.4rem;
      border-radius: 999px;
      font-size: 0.8rem;
      background: rgba(255, 243, 247, 0.12);
    }
    .chip[aria-pressed="true"] .chip-count { background: rgba(43, 21, 48, 0.15); }
    .chip.nope { animation: shake 0.4s ease; }
    .chip-hint {
      min-height: 1.4em;
      margin: 0.4rem 0 0.6rem;
      color: var(--marigold);
      font-size: 0.9rem;
    }

    /* ---------- History ---------- */
    .history {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      max-width: 32rem;
      margin: 1.4rem auto 0;
    }
    .history-pos { color: var(--muted); font-size: 0.95rem; }
    .btn-quiet:disabled { opacity: 0.35; cursor: not-allowed; }
    .btn-quiet:disabled:hover { border-color: rgba(255, 243, 247, 0.35); }

    .footer-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 0.75rem 1.25rem;
      margin-top: 2rem;
    }
    .progress { margin: 0; color: var(--muted); font-size: 0.95rem; }

    /* ---------- Keyframes ---------- */
    @keyframes draw    { to { stroke-dashoffset: 0; } }
    @keyframes bloom   { from { transform: scale(0) rotate(-40deg); } to { transform: scale(1) rotate(0); } }
    @keyframes sway    { 0%, 100% { transform: rotate(-4deg); } 50% { transform: rotate(4deg); } }
    @keyframes rise    { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
    @keyframes unroll  { to { transform: scaleX(1); } }
    @keyframes fade    { to { opacity: 1; } }
    @keyframes fade-up { to { opacity: 1; transform: none; } }
    @keyframes leave   { to { opacity: 0; transform: translateY(-16px) scale(0.98); } }
    @keyframes deal {
      from { opacity: 0; transform: perspective(800px) rotateX(-65deg) translateY(-18px); }
      to   { opacity: 1; transform: none; }
    }
    @keyframes from-left  { from { opacity: 0; transform: translateX(-28px); } to { opacity: 1; transform: none; } }
    @keyframes from-right { from { opacity: 0; transform: translateX(28px); }  to { opacity: 1; transform: none; } }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-8px); }
      75% { transform: translateX(8px); }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.001ms !important;
        animation-delay: 0s !important;
        animation-iteration-count: 1 !important;
        transition: none !important;
      }
    }
  </style>
</head>
<body>
  <canvas id="confetti" aria-hidden="true"></canvas>

  <main>
    <!-- Step 1: name -->
    <section id="screen-name" class="screen">
      <h1 class="hello">Hello there</h1>
      <p class="hello-sub">Tell me your name and we’ll begin.</p>
      <form id="name-form" class="name-form" novalidate onsubmit="return false">
        <label for="name-input" class="sr-only">Your name</label>
        <input id="name-input" type="text" maxlength="40" autocomplete="given-name" placeholder="Your name">
        <button type="submit" class="btn btn-primary">Let’s play</button>
        <p id="name-error" class="error" role="alert"></p>
      </form>
    </section>

    <!-- Steps 2–6: welcome + questions -->
    <section id="screen-game" class="screen" hidden>
      <svg id="bouquet" class="bouquet" viewBox="0 0 240 260" role="img" aria-label="A bouquet of flowers"></svg>

      <div class="banner">
        <h1>
          <span class="welcome">Welcome <span id="player-name"></span></span>
          <span class="compliment">You Look Beautiful Today!</span>
        </h1>
      </div>

      <div class="play">
        <h2>Let’s get to know each other better</h2>

        <div id="chips" class="chips" role="group" aria-label="Question types"></div>
        <p id="chip-hint" class="chip-hint" aria-live="polite"></p>

        <button id="next-btn" class="btn btn-primary" type="button">Click for a random question</button>

        <div id="question-card" class="q-card" aria-live="polite" hidden>
          <span id="q-tag" class="q-tag"></span>
          <p id="q-text" class="q-text"></p>
        </div>

        <div id="history" class="history" hidden>
          <button id="prev-btn" class="btn btn-quiet" type="button">Previous</button>
          <span id="history-pos" class="history-pos"></span>
          <button id="fwd-btn" class="btn btn-quiet" type="button">Next</button>
        </div>

        <div class="footer-row">
          <p id="progress" class="progress"></p>
          <button id="reset-btn" class="btn btn-quiet" type="button">Reset questions</button>
        </div>
      </div>
    </section>
  </main>

  <script src="index.js"></script>
  <script>
    // If index.js didn't load (wrong folder, renamed file, previewing this file alone), say so
    if (!window.GAME_READY) {
      document.getElementById('name-error').textContent =
        'The game couldn’t start because index.js didn’t load. Keep index.js in the same folder as this page, named exactly “index.js”.';
    }
  </script>
</body>
</html>
