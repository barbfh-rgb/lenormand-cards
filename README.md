# Lenormand Cards

A 36-card Lenormand oracle reading app. Vanilla HTML/CSS/JS, no build step, installable as a PWA, works fully offline once loaded.

## Files

- `data.js` — deck data only (all 36 cards + neighbour combination rules + optional playing-card correspondence). Edit meanings here.
- `reading.js` — reading logic only (seeded shuffle, spreads, Grand Tableau houses + mirroring). No DOM.
- `app.js` — UI rendering and routing. Calls into `reading.js`, never duplicates its logic.
- `index.html` / `about.html` — pages.
- `styles.css` — brand styles: dark cosmic gradient background, twinkling star field, gold (#c9a84c/#e8c96a) accents, Cinzel Decorative + Cinzel + Cormorant Garamond — matches witch-oracle / tarot-reader / Kipper Cards.
- `manifest.json`, `service-worker.js`, `icons/` — PWA install + offline support.

## Deploy

GitHub Pages, main branch, root. `start_url` and `scope` in `manifest.json` are both `/`, which requires a **custom domain deploy** (not a `/repo-name/` path) — if the custom domain isn't live yet, the app will 404 on install until the CNAME is added.

## Adding a combination rule

In `data.js`, add a key to `LENORMAND_COMBINATIONS` as `"lowerId_higherId": "text"`. Pairs not listed fall back to an auto-generated line built from each card's own meaning, so nothing is ever left blank.

## Playing-card correspondence

The `playingCard` field on each card follows the traditional "Game of Hope" correspondence, but this varies between published Lenormand decks — treat it as a starting point and correct it against your preferred source if it matters to your practice. It's off by default in the UI (toggle: "Show playing-card correspondence").

## Grand Tableau: houses and mirroring

- **Houses**: each of the 36 grid positions carries a fixed theme based on which numbered card would occupy it in unshuffled order (position 4 is always "House"-themed, etc.), independent of which card is actually shuffled there. `reading.js` computes this as `houseNumber`/`houseCard`/`houseText` per tile.
- **Mirroring**: the card diametrically opposite the significator across the centre of the grid. Always computed, but hidden by default — shown via the "Advanced: show mirrored card" toggle on the Tableau page.

## Access control (future)

Not built in v1. If gating is added later, wrap calls into `LenormandReading` (e.g. `drawDaily`, `drawThreeCard`) from `app.js` with a check — the reading logic itself shouldn't need to change.
