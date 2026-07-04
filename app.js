/*
 * Lenormand Cards — UI layer.
 * All DOM rendering and event wiring lives here. This file reads card
 * data from LENORMAND_CARDS (data.js) and calls into LenormandReading
 * (reading.js) for anything to do with shuffling or interpretation —
 * it never duplicates that logic. A future access-control layer should
 * wrap the calls into LenormandReading from this file, not change either
 * of the other two.
 */

// ---- simple SVG glyphs, one per card, drawn with basic shapes only ----

const CARD_ICONS = {
  1: '<path d="M20 78 L45 40 L55 55 L80 22" /><circle cx="80" cy="22" r="6" fill="currentColor" stroke="none"/>',
  2: '<circle cx="38" cy="38" r="16"/><circle cx="62" cy="38" r="16"/><circle cx="50" cy="58" r="16"/><line x1="50" y1="70" x2="50" y2="90"/>',
  3: '<path d="M15 62 L85 62 L72 82 L28 82 Z"/><line x1="50" y1="62" x2="50" y2="18"/><path d="M50 22 L78 40 L50 50 Z"/>',
  4: '<path d="M18 55 L50 24 L82 55 L82 84 L18 84 Z"/><line x1="42" y1="84" x2="42" y2="60" /><line x1="58" y1="84" x2="58" y2="60"/>',
  5: '<circle cx="50" cy="38" r="26"/><line x1="50" y1="60" x2="50" y2="88"/>',
  6: '<ellipse cx="38" cy="48" rx="20" ry="14"/><ellipse cx="62" cy="48" rx="22" ry="16"/><ellipse cx="50" cy="60" rx="26" ry="14"/>',
  7: '<path d="M18 30 C 40 30, 20 55, 42 55 C 64 55, 44 80, 82 78"/>',
  8: '<path d="M38 15 L62 15 L78 45 L78 85 L22 85 L22 45 Z"/>',
  9: '<circle cx="38" cy="32" r="12"/><circle cx="62" cy="32" r="12"/><circle cx="50" cy="46" r="12"/><line x1="50" y1="58" x2="50" y2="88"/>',
  10: '<path d="M70 20 C 40 20, 20 45, 35 68 C 45 82, 65 75, 62 58"/><line x1="35" y1="68" x2="15" y2="90"/>',
  11: '<path d="M22 20 L78 40 L30 55 L74 72 L26 88"/>',
  12: '<path d="M15 55 L35 35 L45 50 L55 30 L65 50 L85 55"/>',
  13: '<circle cx="50" cy="34" r="16"/><path d="M30 88 C 30 62, 70 62, 70 88"/>',
  14: '<path d="M22 75 L35 32 L50 52 L65 32 L78 75 Z"/><circle cx="40" cy="60" r="4" fill="currentColor" stroke="none"/><circle cx="60" cy="60" r="4" fill="currentColor" stroke="none"/>',
  15: '<circle cx="50" cy="55" r="28"/><circle cx="30" cy="28" r="9"/><circle cx="70" cy="28" r="9"/>',
  16: '<path d="M50 15 L58 40 L84 40 L63 55 L71 80 L50 65 L29 80 L37 55 L16 40 L42 40 Z"/>',
  17: '<line x1="50" y1="90" x2="50" y2="55"/><ellipse cx="50" cy="42" rx="16" ry="20"/><path d="M50 32 L70 22"/>',
  18: '<circle cx="50" cy="50" r="14" fill="currentColor" stroke="none"/><circle cx="30" cy="34" r="7" fill="currentColor" stroke="none"/><circle cx="70" cy="34" r="7" fill="currentColor" stroke="none"/><circle cx="24" cy="60" r="7" fill="currentColor" stroke="none"/><circle cx="76" cy="60" r="7" fill="currentColor" stroke="none"/>',
  19: '<path d="M25 88 L25 40 L32 40 L32 30 L42 30 L42 40 L58 40 L58 30 L68 30 L68 40 L75 40 L75 88 Z"/>',
  20: '<circle cx="30" cy="45" r="14"/><line x1="30" y1="59" x2="30" y2="85"/><circle cx="68" cy="38" r="18"/><line x1="68" y1="56" x2="68" y2="85"/>',
  21: '<path d="M10 82 L38 30 L52 52 L66 25 L92 82 Z"/><path d="M60 40 L66 25 L72 40"/>',
  22: '<line x1="20" y1="20" x2="80" y2="80"/><line x1="80" y1="20" x2="20" y2="80"/>',
  23: '<circle cx="45" cy="55" r="16"/><circle cx="65" cy="45" r="6"/><path d="M61 55 C 80 55, 85 70, 90 62"/><circle cx="38" cy="48" r="3" fill="currentColor" stroke="none"/>',
  24: '<path d="M50 85 C 15 60, 20 25, 50 40 C 80 25, 85 60, 50 85 Z"/>',
  25: '<circle cx="50" cy="50" r="26"/><circle cx="50" cy="50" r="13" fill="#1a1138"/>',
  26: '<path d="M50 25 L18 32 L18 78 L50 71 L82 78 L82 32 Z"/><line x1="50" y1="25" x2="50" y2="71"/>',
  27: '<rect x="16" y="28" width="68" height="46" rx="2"/><path d="M16 28 L50 58 L84 28"/>',
  28: '<path d="M30 30 L70 30 L60 45 L40 45 Z"/><rect x="44" y="45" width="12" height="10"/><circle cx="50" cy="20" r="4" fill="currentColor" stroke="none"/>',
  29: '<circle cx="50" cy="30" r="13"/><path d="M32 88 L40 45 L60 45 L68 88 Z"/>',
  30: '<line x1="50" y1="50" x2="50" y2="90"/><path d="M50 50 C 30 50, 22 30, 38 18 C 44 30, 44 44, 50 50 Z"/><path d="M50 50 C 70 50, 78 30, 62 18 C 56 30, 56 44, 50 50 Z"/>',
  31: '<circle cx="50" cy="50" r="18"/><line x1="50" y1="10" x2="50" y2="22"/><line x1="50" y1="78" x2="50" y2="90"/><line x1="10" y1="50" x2="22" y2="50"/><line x1="78" y1="50" x2="90" y2="50"/><line x1="22" y1="22" x2="30" y2="30"/><line x1="70" y1="70" x2="78" y2="78"/><line x1="78" y1="22" x2="70" y2="30"/><line x1="30" y1="70" x2="22" y2="78"/>',
  32: '<path d="M60 15 A 35 35 0 1 0 60 85 A 27 27 0 1 1 60 15 Z" fill="currentColor" stroke="none"/>',
  33: '<circle cx="30" cy="50" r="14"/><circle cx="30" cy="50" r="5" fill="#1a1138"/><line x1="42" y1="50" x2="85" y2="50"/><line x1="70" y1="50" x2="70" y2="62"/><line x1="80" y1="50" x2="80" y2="60"/>',
  34: '<path d="M15 50 C 35 25, 70 25, 88 50 C 70 75, 35 75, 15 50 Z"/><path d="M15 50 L2 38 M15 50 L2 62"/><circle cx="65" cy="45" r="3" fill="currentColor" stroke="none"/>',
  35: '<circle cx="50" cy="22" r="8"/><line x1="50" y1="30" x2="50" y2="85"/><line x1="30" y1="45" x2="70" y2="45"/><path d="M20 55 C 20 78, 38 88, 50 88 C 62 88, 80 78, 80 55"/>',
  36: '<line x1="50" y1="15" x2="50" y2="88"/><line x1="24" y1="38" x2="76" y2="38"/>'
};

function cardIconSVG(id) {
  const paths = CARD_ICONS[id] || "";
  return `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" style="color:var(--gold2)">${paths}</svg>`;
}

// ---- playing-card overlay (off by default, toggleable) ----

let showPlayingCards = false;

function playingCardToggle(onChange) {
  const row = document.createElement("label");
  row.className = "toggle-row";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = showPlayingCards;
  checkbox.addEventListener("change", () => {
    showPlayingCards = checkbox.checked;
    onChange();
  });
  const text = document.createElement("span");
  text.textContent = "Show playing-card correspondence";
  row.append(checkbox, text);
  return row;
}

// ---- shared card tile rendering ----

function buildCardTile(card, label) {
  const tile = document.createElement("div");
  tile.className = "card-tile";
  tile.innerHTML = `
    ${label ? `<span class="card-label">${label}</span>` : ""}
    <div class="card-face">${cardIconSVG(card.id)}</div>
    <span class="card-number">No. ${card.id}</span>
    <span class="card-name">${card.name}</span>
    <p class="card-meaning">${card.meaning}</p>
    ${showPlayingCards && card.playingCard ? `<span class="playing-card-badge">${card.playingCard}</span>` : ""}
  `;
  return tile;
}

function seedControl(onDraw) {
  const details = document.createElement("details");
  details.style.marginTop = "1rem";
  const summary = document.createElement("summary");
  summary.textContent = "Advanced: draw with a specific seed (for QA or repeating a reading)";
  const wrap = document.createElement("div");
  wrap.style.display = "flex";
  wrap.style.gap = "0.5rem";
  wrap.style.marginTop = "0.6rem";
  wrap.style.flexWrap = "wrap";
  const input = document.createElement("input");
  input.className = "search-input";
  input.style.margin = "0";
  input.placeholder = "e.g. my-seed-123";
  const button = document.createElement("button");
  button.type = "button";
  button.className = "plain-button";
  button.textContent = "Draw with seed";
  button.addEventListener("click", () => onDraw(input.value.trim() || undefined));
  wrap.append(input, button);
  details.append(summary, wrap);
  return details;
}

// ---- routes ----

const routes = {
  "": renderHome,
  home: renderHome,
  daily: renderDaily,
  "three-card": renderThreeCard,
  significator: renderSignificator,
  tableau: renderTableau,
  deck: renderDeck
};

function renderHome(root) {
  const panel = document.createElement("section");
  panel.className = "panel";
  panel.innerHTML = `
    <div class="section-heading">
      <span class="diamond" aria-hidden="true"></span>
      <div>
        <h2>Choose a spread</h2>
        <p>Lenormand is read in combination, not in isolation — every spread below shows each card alongside its neighbours.</p>
      </div>
    </div>
  `;
  const grid = document.createElement("div");
  grid.className = "spread-grid";

  const choices = [
    { href: "#/daily", title: "Daily card", desc: "One card for today, drawn the same way all day." },
    { href: "#/three-card", title: "Situation · Action · Outcome", desc: "A simple three-card read for a specific question." },
    { href: "#/significator", title: "Significator cross", desc: "Pick Gentleman or Lady as yourself, draw four cards around you." },
    { href: "#/tableau", title: "Grand Tableau", desc: "The full 36-card layout, read by house, corner, nearness and mirroring." },
    { href: "#/deck", title: "Browse the deck", desc: "All 36 cards with their meanings, short and long." }
  ];

  choices.forEach((choice) => {
    const a = document.createElement("a");
    a.className = "spread-choice";
    a.href = choice.href;
    a.innerHTML = `<h3>${choice.title}</h3><p>${choice.desc}</p>`;
    grid.append(a);
  });

  panel.append(grid);
  root.append(panel);
}

function renderDaily(root) {
  const panel = document.createElement("section");
  panel.className = "panel";
  panel.innerHTML = `
    <div class="section-heading">
      <span class="diamond" aria-hidden="true"></span>
      <div>
        <h2>Daily card</h2>
        <p>Today's card is the same however many times you check — it's drawn from today's date, not from chance each time.</p>
      </div>
    </div>
  `;
  const result = document.createElement("div");

  function show(seed) {
    result.replaceChildren();
    const reading = LenormandReading.drawDaily(seed);
    const tile = buildCardTile(reading.card);
    result.append(tile);
    const long = document.createElement("p");
    long.textContent = reading.card.long;
    long.style.marginTop = "1rem";
    result.append(long);
  }

  show();
  panel.append(playingCardToggle(() => show()), result, seedControl(show));
  root.append(panel);
}

function renderThreeCard(root) {
  const panel = document.createElement("section");
  panel.className = "panel";
  panel.innerHTML = `
    <div class="section-heading">
      <span class="diamond" aria-hidden="true"></span>
      <div>
        <h2>Situation · Action · Outcome</h2>
        <p>Three cards, read in sequence. The combination lines connect each card to the one beside it.</p>
      </div>
    </div>
    <button class="primary-button" type="button">Draw three cards</button>
  `;
  const result = document.createElement("div");
  result.style.marginTop = "1rem";

  function show(seed) {
    const reading = LenormandReading.drawThreeCard(seed);
    result.replaceChildren();
    const cardsWrap = document.createElement("div");
    cardsWrap.className = "spread-cards";
    reading.cards.forEach(({ label, card }) => cardsWrap.append(buildCardTile(card, label)));
    const combos = document.createElement("ul");
    combos.className = "combination-list";
    reading.combinations.forEach((combo) => {
      const li = document.createElement("li");
      li.textContent = combo.text;
      combos.append(li);
    });
    result.append(cardsWrap, combos);
  }

  panel.querySelector("button").addEventListener("click", () => show());
  panel.append(playingCardToggle(() => show()), result, seedControl(show));
  root.append(panel);
}

function renderSignificator(root) {
  const panel = document.createElement("section");
  panel.className = "panel";
  panel.innerHTML = `
    <div class="section-heading">
      <span class="diamond" aria-hidden="true"></span>
      <div>
        <h2>Significator cross</h2>
        <p>Choose the card that represents you, then draw four cards around it — above, below, left and right.</p>
      </div>
    </div>
    <div class="significator-picker">
      <button class="plain-button" type="button" data-sig="28" aria-pressed="true">Gentleman</button>
      <button class="plain-button" type="button" data-sig="29" aria-pressed="false">Lady</button>
    </div>
    <button class="primary-button" type="button">Draw around me</button>
  `;
  let significatorId = 28;
  const sigButtons = Array.from(panel.querySelectorAll("[data-sig]"));
  sigButtons.forEach((button) => {
    button.addEventListener("click", () => {
      significatorId = Number(button.dataset.sig);
      sigButtons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
    });
  });

  const result = document.createElement("div");
  result.style.marginTop = "1rem";

  function show(seed) {
    const reading = LenormandReading.drawSignificatorSpread(seed, significatorId);
    result.replaceChildren();

    const layout = document.createElement("div");
    layout.className = "significator-layout";
    const slotMap = { Above: "slot-above", Below: "slot-below", Left: "slot-left", Right: "slot-right" };
    const centerSlot = document.createElement("div");
    centerSlot.className = "slot-center";
    centerSlot.append(buildCardTile(reading.significator, "You"));
    layout.append(centerSlot);
    reading.surrounding.forEach((entry) => {
      const slot = document.createElement("div");
      slot.className = slotMap[entry.position];
      slot.append(buildCardTile(entry.card, entry.position));
      layout.append(slot);
    });

    const combos = document.createElement("ul");
    combos.className = "combination-list";
    reading.surrounding.forEach((entry) => {
      const li = document.createElement("li");
      li.textContent = `${entry.position}: ${entry.combination}`;
      combos.append(li);
    });

    result.append(layout, combos);
  }

  show();
  panel.querySelector(".primary-button").addEventListener("click", () => show());
  panel.append(playingCardToggle(() => show()), result, seedControl(show));
  root.append(panel);
}

function renderTableau(root) {
  const panel = document.createElement("section");
  panel.className = "panel";
  panel.innerHTML = `
    <div class="section-heading">
      <span class="diamond" aria-hidden="true"></span>
      <div>
        <h2>Grand Tableau</h2>
        <p>All 36 cards laid out at once, read by house, by the four corners, and by nearness to your significator.</p>
      </div>
    </div>
    <div class="tableau-controls">
      <button class="plain-button" type="button" data-sig="28" aria-pressed="true">Gentleman</button>
      <button class="plain-button" type="button" data-sig="29" aria-pressed="false">Lady</button>
      <button class="primary-button" type="button">Lay the tableau</button>
    </div>
    <label class="toggle-row">
      <input type="checkbox" id="mirror-toggle">
      <span>Advanced: show mirrored card (opposite the significator)</span>
    </label>
  `;
  let significatorId = 28;
  let showMirror = false;
  const sigButtons = Array.from(panel.querySelectorAll("[data-sig]"));
  sigButtons.forEach((button) => {
    button.addEventListener("click", () => {
      significatorId = Number(button.dataset.sig);
      sigButtons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
    });
  });

  const result = document.createElement("div");
  result.style.marginTop = "1rem";

  function show(seed) {
    const reading = LenormandReading.drawGrandTableau(seed, significatorId);
    result.replaceChildren();

    const grid = document.createElement("div");
    grid.className = "tableau-grid";
    reading.grid.forEach((tile) => {
      const el = document.createElement("div");
      el.className = "tableau-tile";
      if (tile.proximity === "significator") el.classList.add("is-significator");
      else if (tile.proximity === "near") el.classList.add("is-near");
      if (tile.corner) el.classList.add("is-corner");
      if (showMirror && reading.mirror.tile && tile.index === reading.mirror.tile.index) {
        el.classList.add("is-near");
      }
      el.innerHTML = `
        <span class="tile-number">${tile.card.id}</span>
        <span class="tile-name">${tile.card.name}</span>
      `;
      grid.append(el);
    });

    const detail = document.createElement("div");
    detail.className = "tableau-detail";

    const quadrantP = document.createElement("p");
    quadrantP.innerHTML = `<strong>Your quadrant:</strong> ${reading.quadrant.meaning}`;

    const nearP = document.createElement("p");
    const nearNames = reading.nearCards.map((t) => t.card.name).join(", ");
    nearP.innerHTML = `<strong>Near you (immediate influence):</strong> ${nearNames || "none"}.`;

    const houseP = document.createElement("p");
    houseP.innerHTML = `<strong>Your own house:</strong> ${reading.significator.name} sits in house ${reading.grid.find((t) => t.proximity === "significator").houseNumber} — ${reading.grid.find((t) => t.proximity === "significator").houseText}`;

    const cornersList = document.createElement("ul");
    cornersList.className = "combination-list";
    reading.corners.forEach((tile) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${tile.corner.label} — ${tile.card.name}:</strong> ${tile.corner.meaning}`;
      cornersList.append(li);
    });

    detail.append(quadrantP, nearP, houseP, cornersList);

    if (showMirror) {
      const mirrorBox = document.createElement("div");
      mirrorBox.className = "mirror-box";
      mirrorBox.textContent = reading.mirror.text;
      detail.append(mirrorBox);
    }

    result.append(grid, detail);
  }

  panel.querySelector("#mirror-toggle").addEventListener("change", (e) => {
    showMirror = e.target.checked;
    show();
  });

  panel.querySelector(".primary-button").addEventListener("click", () => show());
  panel.append(result, seedControl(show));
  root.append(panel);
}

function renderDeck(root) {
  const panel = document.createElement("section");
  panel.className = "panel";
  panel.innerHTML = `
    <div class="section-heading">
      <span class="diamond" aria-hidden="true"></span>
      <div>
        <h2>The deck</h2>
        <p>All 36 Lenormand cards. Lenormand is read upright only — there are no reversed meanings.</p>
      </div>
    </div>
  `;
  const search = document.createElement("input");
  search.className = "search-input";
  search.type = "search";
  search.placeholder = "Search by name";
  const grid = document.createElement("div");
  grid.className = "deck-grid";
  const detailBox = document.createElement("div");
  detailBox.className = "card-preview panel";
  detailBox.hidden = true;

  function renderGrid(filterText) {
    grid.replaceChildren();
    const term = filterText.trim().toLowerCase();
    LENORMAND_CARDS.filter((card) => !term || card.name.toLowerCase().includes(term)).forEach((card) => {
      const tile = buildCardTile(card);
      tile.style.cursor = "pointer";
      tile.addEventListener("click", () => {
        detailBox.hidden = false;
        detailBox.innerHTML = `
          <h3>No. ${card.id} — ${card.name}</h3>
          <p><strong>${card.meaning}</strong></p>
          <p>${card.short}</p>
          <p>${card.long}</p>
          ${showPlayingCards && card.playingCard ? `<span class="playing-card-badge">${card.playingCard}</span>` : ""}
        `;
        detailBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
      grid.append(tile);
    });
  }

  search.addEventListener("input", () => renderGrid(search.value));
  renderGrid("");

  panel.append(playingCardToggle(() => renderGrid(search.value)), search, grid);
  root.append(panel, detailBox);
}

// ---- router ----

function currentRouteName() {
  return (location.hash || "").replace(/^#\/?/, "");
}

function renderRoute() {
  const root = document.querySelector("#app-root");
  root.replaceChildren();
  const name = currentRouteName();
  const render = routes[name] || renderHome;
  render(root);

  document.querySelectorAll(".main-nav a").forEach((link) => {
    const linkRoute = link.getAttribute("href").replace(/^#\/?/, "");
    link.classList.toggle("is-active", linkRoute === name || (linkRoute === "home" && name === ""));
  });
}

// ---- twinkling star background ----

function buildSky() {
  const sky = document.querySelector("#sky");
  if (!sky) return;
  const f = document.createDocumentFragment();
  for (let i = 0; i < 120; i++) {
    const s = document.createElement("div");
    s.className = "s";
    const sz = Math.random() * 2 + 0.4;
    Object.assign(s.style, {
      width: sz + "px",
      height: sz + "px",
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      "--d": Math.random() * 5 + 2 + "s",
      "--dl": Math.random() * 7 + "s"
    });
    f.appendChild(s);
  }
  sky.appendChild(f);
}

window.addEventListener("hashchange", renderRoute);
window.addEventListener("DOMContentLoaded", () => {
  buildSky();
  renderRoute();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js");
  });
}
