/*
 * Lenormand Cards — deck data.
 * Pure data only. No DOM, no reading logic — edit meanings here freely
 * without touching reading.js or app.js.
 *
 * Each card: id (1-36, traditional order), name, meaning (one line),
 * short (1-2 sentence interpretation), long (fuller paragraph),
 * playingCard (traditional "Game of Hope" playing-card correspondence —
 * this varies between published Lenormand decks, so values here are a
 * best-effort starting point only; treat as an optional overlay and
 * correct against your own preferred deck if it matters to you).
 *
 * Lenormand is read upright only — there are no reversed meanings.
 */

const LENORMAND_CARDS = [
  {
    id: 1,
    name: "Rider",
    meaning: "News, a messenger, something approaching",
    short: "News on its way, or someone approaching from outside your immediate circle.",
    long: "The Rider is pure approach: news, a visitor, an event moving toward you. On its own it says almost nothing about content — it only says something is coming. Its neighbours tell you what kind of news, how fast, and from where.",
    playingCard: "9♦"
  },
  {
    id: 2,
    name: "Clover",
    meaning: "Small luck, a brief lucky break",
    short: "A small stroke of luck — real, pleasant, but not lasting.",
    long: "Clover is good fortune in a minor key: a lucky coincidence, a little relief, a window of ease. It softens whatever it touches and rarely carries weight on its own — it's a brief lift rather than a turning point.",
    playingCard: "6♣"
  },
  {
    id: 3,
    name: "Ship",
    meaning: "Travel, distance, movement, trade",
    short: "Movement across distance — travel, trade, or a venture already underway.",
    long: "The Ship is distance in motion: a journey, an import or export, a venture that crosses space to reach you or take you somewhere. It's usually welcome forward motion, though its neighbours will tell you whether the crossing is smooth.",
    playingCard: "10♠"
  },
  {
    id: 4,
    name: "House",
    meaning: "Home, family, domestic security",
    short: "Home and family — the domestic centre of whatever's being asked about.",
    long: "The House is the household itself: family, property, the base a person returns to. It's one of Lenormand's steadiest cards, representing structure and belonging rather than event or feeling.",
    playingCard: "4♥"
  },
  {
    id: 5,
    name: "Tree",
    meaning: "Health, roots, slow growth",
    short: "Health and deep roots — growth measured in years, not days.",
    long: "The Tree represents health, ancestry, and anything growing slowly over time. It has no interest in speed; it asks you to think in seasons rather than moments. In health-focused readings it's central; elsewhere it points to deep-rooted, long-standing matters.",
    playingCard: "7♥"
  },
  {
    id: 6,
    name: "Clouds",
    meaning: "Confusion, doubt, a temporary rough patch",
    short: "A confused or unsettled patch — not permanent, but genuinely unclear right now.",
    long: "Clouds bring doubt, mixed signals, or a passing spell of trouble. Lenormand tradition treats it as changeable by nature — clouds move — so the real question is which direction they're drifting, which its neighbours usually answer.",
    playingCard: "8♣"
  },
  {
    id: 7,
    name: "Snake",
    meaning: "Complication, a rival, an indirect path",
    short: "A complication or a third party making the path less direct than it looks.",
    long: "The Snake is the deck's classic warning: deceit, rivalry, or a detour that isn't obvious at first glance. It doesn't always mean malice — sometimes it just means the straightforward-looking route has a hidden bend in it. Its neighbours usually name what's being complicated.",
    playingCard: "9♠"
  },
  {
    id: 8,
    name: "Coffin",
    meaning: "An ending, illness, a hard stop",
    short: "A definite ending — uncomfortable, but honest about what's actually finished.",
    long: "The Coffin marks a clear close: a job, a phase, a way of doing things, sometimes health. It's rarely about literal death. Lenormand readers treat it as one of the deck's most final cards — what it touches is over, and its neighbours describe what has to end before anything new can start.",
    playingCard: "10♣"
  },
  {
    id: 9,
    name: "Bouquet",
    meaning: "A gift, an invitation, a kind gesture",
    short: "A gift or invitation — warmth extended toward you.",
    long: "The Bouquet softens whatever sits near it: a present, an invitation, a compliment, a moment of beauty or appreciation. It's one of the gentlest cards in the deck and rarely brings anything difficult on its own.",
    playingCard: "9♥"
  },
  {
    id: 10,
    name: "Scythe",
    meaning: "A sudden cut, a quick decisive action",
    short: "Something sudden and sharp — a fast decision or an abrupt change.",
    long: "The Scythe cuts cleanly and quickly: a sudden decision, a sharp change, a risk of accident or injury if it lands badly. Speed is the theme, not gentleness. Treat it as a nudge to act decisively, or a caution to watch your step, depending on its neighbours.",
    playingCard: "Q♣"
  },
  {
    id: 11,
    name: "Whip",
    meaning: "Recurring conflict, repetition, discipline",
    short: "An argument or friction that keeps recurring rather than resolving once.",
    long: "The Whip has a rhythm to it: repeated disagreement, ongoing friction, a conflict that resurfaces instead of settling. It can also point more literally to exercise, routine, or discipline. Its neighbours usually show who the friction is with and what keeps triggering it.",
    playingCard: "J♥"
  },
  {
    id: 12,
    name: "Birds",
    meaning: "Conversation, nervous energy, a pair",
    short: "Talk and a little nervous energy — often two people, or two-way conversation.",
    long: "Birds bring chatter, small talk, and a restless energy that carries real information if you listen for it. They also traditionally represent a pair — two people linked together, or a couple. Anxiety often travels with this card.",
    playingCard: "7♠"
  },
  {
    id: 13,
    name: "Child",
    meaning: "Something new and small, innocence",
    short: "Something new, small, and just starting out — unformed but full of potential.",
    long: "The Child is newness at its earliest stage: a literal child, a fresh idea, a beginning that hasn't developed yet. It carries no guile. Paired with other cards, it often marks the very start of whatever they describe.",
    playingCard: "6♦"
  },
  {
    id: 14,
    name: "Fox",
    meaning: "Skill mixed with distrust, tricky work matters",
    short: "Cleverness that isn't fully trustworthy — often at work, or in a deal worth double-checking.",
    long: "The Fox is capable but not entirely straightforward: a shrewd work situation, self-employment, or a person or arrangement worth a second look before you trust it fully. It rewards healthy scepticism rather than blind confidence.",
    playingCard: "8♠"
  },
  {
    id: 15,
    name: "Bear",
    meaning: "Strength, authority, financial power",
    short: "A powerful figure or force — a boss, protector, or financial muscle.",
    long: "The Bear represents raw strength and authority: a boss, a protective figure, or significant financial power. It can be a strong ally or, turned the wrong way, a source of jealousy or heavy-handed control. Its neighbours decide which.",
    playingCard: "10♥"
  },
  {
    id: 16,
    name: "Stars",
    meaning: "Hope, clarity, guidance",
    short: "Clarity returning — hope and a sense of direction, especially after confusion.",
    long: "The Stars bring guidance and hope, often lifting a reading after a run of Clouds or Mountain. It can point to insight, a plan coming into focus, or simply seeing something clearly for the first time. One of the deck's most reassuring cards.",
    playingCard: "6♠"
  },
  {
    id: 17,
    name: "Stork",
    meaning: "Change, relocation, transformation",
    short: "Change already in motion — a move, a shift, a transition underway.",
    long: "The Stork signals change that's actively happening rather than merely hoped for: a relocation, a new life stage, a transformation in progress. Unlike the Coffin's hard stop, the Stork is continuity taking a new shape.",
    playingCard: "Q♦"
  },
  {
    id: 18,
    name: "Dog",
    meaning: "Loyalty, friendship, a trusted companion",
    short: "A loyal friend — reliable, genuine, and firmly on your side.",
    long: "The Dog is uncomplicated loyalty: a true friend, a faithful partner, or fidelity itself as a live theme in the reading. It's one of the most straightforwardly reassuring cards in the deck.",
    playingCard: "J♦"
  },
  {
    id: 19,
    name: "Tower",
    meaning: "Institutions, authority, isolation",
    short: "Officialdom or isolation — a formal institution, or standing apart from others.",
    long: "The Tower represents large institutions and formal authority — banks, government, hospitals, employers — as well as personal isolation or a sense of standing alone. It can also mean ambition and something solidly built. Context decides the tone.",
    playingCard: "8♦"
  },
  {
    id: 20,
    name: "Garden",
    meaning: "Public life, social gathering, community",
    short: "Public life — social gatherings, community, being visible among others.",
    long: "The Garden is life lived in company: events, community, networking, visibility beyond your own four walls. It's a generally pleasant, fairly neutral card about the social world rather than the private one.",
    playingCard: "Q♠"
  },
  {
    id: 21,
    name: "Mountain",
    meaning: "An obstacle, delay, blockage",
    short: "A blockage or delay — something large and slow to move standing in the way.",
    long: "The Mountain is resistance made solid: an obstacle, a hold-up, something immovable no matter how hard you push. It can also point to distance or something foreign. It usually calls for patience and a different route rather than force.",
    playingCard: "J♠"
  },
  {
    id: 22,
    name: "Crossroad",
    meaning: "A choice, a decision point",
    short: "A genuine decision point — more than one path, and the choice still open.",
    long: "The Crossroad marks real options on the table, a choice not yet made. It doesn't say which way to go, only that a decision exists. Its neighbours often describe what each direction leads toward.",
    playingCard: "J♣"
  },
  {
    id: 23,
    name: "Mice",
    meaning: "Gradual loss, worry, erosion",
    short: "Small, steady loss — something being worn away rather than taken all at once.",
    long: "Mice represent slow erosion: nagging worry, small losses that accumulate, stress wearing down something that was once solid. It's rarely dramatic on its own, which is exactly what makes it worth taking seriously.",
    playingCard: "7♣"
  },
  {
    id: 24,
    name: "Heart",
    meaning: "Love, affection, genuine feeling",
    short: "Real love or affection — the emotional centre of the reading.",
    long: "The Heart is genuine feeling: love, warmth, sincere affection between people. It softens whatever sits near it and often marks the emotional core of the whole spread.",
    playingCard: "Q♥"
  },
  {
    id: 25,
    name: "Ring",
    meaning: "Commitment, contracts, a cycle",
    short: "Commitment made concrete — a contract, partnership, or repeating cycle.",
    long: "The Ring is anything bound and ongoing: marriage, a contract, a partnership, or a cycle coming full circle. Its neighbours reveal what kind of commitment, and whether it's holding steady or under strain.",
    playingCard: "10♦"
  },
  {
    id: 26,
    name: "Book",
    meaning: "Secrets, hidden knowledge, study",
    short: "Something not yet known — a secret, hidden information, or ongoing study.",
    long: "The Book holds what hasn't been revealed: a secret, information not yet disclosed, or knowledge still being gathered through study. It can be neutral (a course, a mystery yet to unfold) or pointed (something being kept from you) — neighbours usually tell you which.",
    playingCard: "5♠"
  },
  {
    id: 27,
    name: "Letter",
    meaning: "Written communication, documents",
    short: "Written word — a letter, email, or document carrying information.",
    long: "The Letter is communication fixed in writing: a message, an email, official correspondence. Unlike the Rider's news in motion, the Letter is the content itself, already set down. Its neighbours describe what it concerns.",
    playingCard: "6♥"
  },
  {
    id: 28,
    name: "Gentleman",
    significator: true,
    meaning: "The male querent or the main male figure — used as a significator",
    short: "Represents a man at the centre of the reading, often chosen as the significator for a male querent.",
    long: "The Gentleman stands for the principal male figure in a reading, or is chosen deliberately as a significator to represent the person having the reading. Cards drawn around him describe his circumstances rather than standing as omens on their own.",
    playingCard: "K♥"
  },
  {
    id: 29,
    name: "Lady",
    significator: true,
    meaning: "The female querent or the main female figure — used as a significator",
    short: "Represents a woman at the centre of the reading, often chosen as the significator for a female querent.",
    long: "The Lady stands for the principal female figure in a reading, or is chosen deliberately as a significator to represent the person having the reading. Cards drawn around her describe her circumstances rather than standing as omens on their own.",
    playingCard: "Q♦"
  },
  {
    id: 30,
    name: "Lily",
    meaning: "Peace, maturity, family harmony",
    short: "Calm and maturity — peace within a family, or harmony that comes with age.",
    long: "The Lily brings the kind of peace that arrives with time and experience: family harmony, a mature relationship, resolution reached slowly rather than in haste. It can carry a quiet undertone of long-term intimacy. Rarely a difficult card.",
    playingCard: "K♠"
  },
  {
    id: 31,
    name: "Sun",
    meaning: "Success, vitality, clarity",
    short: "Success and vitality — one of the clearest positive cards in the deck.",
    long: "The Sun lifts whatever it touches: success, good energy, clarity where there was confusion. It's about as close as Lenormand gets to an unambiguous 'yes, and it's good.'",
    playingCard: "A♦"
  },
  {
    id: 32,
    name: "Moon",
    meaning: "Recognition, reputation, emotion beneath the surface",
    short: "Recognition or reputation — how something is perceived, and what's felt privately.",
    long: "The Moon deals in reputation and the emotional undercurrent beneath a situation — public standing, honour, or a private feeling that matters even if it isn't spoken aloud. Context decides whether the emphasis is on how others see it, or how it's felt.",
    playingCard: "4♣"
  },
  {
    id: 33,
    name: "Key",
    meaning: "Certainty, a solution, an important yes",
    short: "A definite answer — something important, certain, and unlocked.",
    long: "The Key marks certainty: a solution found, an important 'yes,' something significant that's now settled rather than in doubt. It strengthens and underlines whatever card sits beside it.",
    playingCard: "8♥"
  },
  {
    id: 34,
    name: "Fish",
    meaning: "Money, business, abundance",
    short: "Money and business — cash flow, financial dealings, material abundance.",
    long: "The Fish is Lenormand's clearest money card: income, business dealings, the flow of money in or out. It moves easily, for better or worse — money arriving fast can just as easily be moving out fast. Neighbours describe the direction of flow.",
    playingCard: "10♥"
  },
  {
    id: 35,
    name: "Anchor",
    meaning: "Stability, steadfastness, long-term security",
    short: "Stability — something long-term, secure, and steady rather than fleeting.",
    long: "The Anchor represents lasting stability: steady work, a secure foundation, commitment to staying the course. In good company it's deeply reassuring; beside more restrictive cards it can tip into feeling stuck rather than settled.",
    playingCard: "A♣"
  },
  {
    id: 36,
    name: "Cross",
    meaning: "A burden, a difficulty to carry, fate",
    short: "A burden or test — difficult but unavoidable, to be carried rather than sidestepped.",
    long: "The Cross is unavoidable burden: a hardship, a test of endurance, something that must be carried through rather than escaped. Lenormand tradition treats it as honest rather than cruel — what the Cross names, facing directly is the way through.",
    playingCard: "A♠"
  }
];

/*
 * Combination rules table.
 * Key: two card ids joined as "min_max" (order-independent).
 * Value: a short plain-English combination line.
 * Add new pairs by following the same "a_b" key pattern — ids only,
 * smaller id first. Not every pair needs an entry; reading.js falls
 * back to a generated line built from each card's own meaning when
 * a pair isn't listed here.
 */
const LENORMAND_COMBINATIONS = {
  "1_27": "Rider + Letter: news arriving in writing — a message on its way.",
  "1_3": "Rider + Ship: news about travel, or news arriving from a distance.",
  "1_4": "Rider + House: news concerning home or family.",
  "1_6": "Rider + Clouds: unsettling or unclear news — wait for more detail.",
  "1_8": "Rider + Coffin: news of an ending, or news that closes a matter.",
  "1_28": "Rider + Gentleman: news concerning, or brought by, a man.",
  "1_29": "Rider + Lady: news concerning, or brought by, a woman.",
  "3_27": "Ship + Letter: news arriving from a distance.",
  "3_4": "Ship + House: a move, or business affecting the home.",
  "3_34": "Ship + Fish: a business venture with money attached.",
  "3_35": "Ship + Anchor: a journey that leads to something settled and secure.",
  "3_21": "Ship + Mountain: a journey delayed, or travel to somewhere distant.",
  "3_36": "Ship + Cross: a difficult journey, undertaken out of necessity.",
  "4_24": "House + Heart: love within the home — a happy household.",
  "4_23": "House + Mice: money worries or small losses affecting the home.",
  "4_7": "House + Snake: complication or tension within the family.",
  "4_17": "House + Stork: a house move, or change within the household.",
  "4_28": "House + Gentleman: a man's home life, or a man central to domestic matters.",
  "4_29": "House + Lady: a woman's home life, or a woman central to domestic matters.",
  "7_28": "Snake + Gentleman: a man acting indirectly, or a complication involving a man.",
  "7_29": "Snake + Lady: a woman acting indirectly, or a complication involving a woman.",
  "7_24": "Snake + Heart: love complicated by a rival or a third party.",
  "7_14": "Snake + Fox: two forms of deception overlapping — proceed carefully.",
  "8_24": "Coffin + Heart: the end of a relationship, or a painful emotional close.",
  "8_4": "Coffin + House: an ending connected to home — moving on from a place.",
  "8_5": "Coffin + Tree: a health matter reaching a serious or final point.",
  "8_25": "Coffin + Ring: the end of a commitment or agreement.",
  "8_28": "Coffin + Gentleman: an ending concerning a man, or a man facing a hard close.",
  "8_29": "Coffin + Lady: an ending concerning a woman, or a woman facing a hard close.",
  "9_24": "Bouquet + Heart: a heartfelt gift or a loving gesture.",
  "9_28": "Bouquet + Gentleman: a gift or invitation from a man.",
  "9_29": "Bouquet + Lady: a gift or invitation from a woman.",
  "9_27": "Bouquet + Letter: an invitation arriving in writing.",
  "10_24": "Scythe + Heart: a sudden, sharp change in a relationship.",
  "10_25": "Scythe + Ring: a commitment ending abruptly, or a fast decision to commit.",
  "10_4": "Scythe + House: a sudden change affecting the home.",
  "10_5": "Scythe + Tree: a sudden health scare, worth taking seriously.",
  "11_24": "Whip + Heart: recurring arguments within a relationship.",
  "11_4": "Whip + House: ongoing friction within the household.",
  "11_28": "Whip + Gentleman: conflict with, or caused by, a man.",
  "11_29": "Whip + Lady: conflict with, or caused by, a woman.",
  "12_24": "Birds + Heart: nervous energy around a relationship — talk more than certainty.",
  "12_27": "Birds + Letter: messages exchanged back and forth.",
  "12_28": "Birds + Gentleman: conversation or anxious energy involving a man.",
  "12_29": "Birds + Lady: conversation or anxious energy involving a woman.",
  "13_4": "Child + House: a new addition to the household, literal or otherwise.",
  "13_29": "Child + Lady: a woman connected to a child, or new beginnings for her.",
  "13_28": "Child + Gentleman: a man connected to a child, or new beginnings for him.",
  "13_25": "Child + Ring: a new commitment still in its early, unformed stage.",
  "14_28": "Fox + Gentleman: a man not being entirely straightforward, especially at work.",
  "14_29": "Fox + Lady: a woman not being entirely straightforward, especially at work.",
  "14_26": "Fox + Book: hidden trickery — something being concealed at work.",
  "15_28": "Bear + Gentleman: a powerful or protective man, possibly a boss.",
  "15_29": "Bear + Lady: a powerful or protective woman, possibly a boss.",
  "15_34": "Bear + Fish: financial strength, or power over money.",
  "16_26": "Stars + Book: insight gained through study — clarity after research.",
  "16_29": "Stars + Lady: hope and clear guidance for a woman.",
  "16_28": "Stars + Gentleman: hope and clear guidance for a man.",
  "16_31": "Stars + Sun: a strongly positive combination — hope followed by real success.",
  "17_4": "Stork + House: a house move, or a change in the household.",
  "17_29": "Stork + Lady: a significant change or transition for a woman.",
  "17_28": "Stork + Gentleman: a significant change or transition for a man.",
  "18_28": "Dog + Gentleman: a loyal male friend or trustworthy male companion.",
  "18_29": "Dog + Lady: a loyal female friend or trustworthy female companion.",
  "19_27": "Tower + Letter: official or formal correspondence.",
  "19_28": "Tower + Gentleman: a man connected to institutions, authority, or isolation.",
  "19_29": "Tower + Lady: a woman connected to institutions, authority, or isolation.",
  "20_24": "Garden + Heart: a happy social gathering, or love found in public life.",
  "20_28": "Garden + Gentleman: a man active in social or public life.",
  "20_29": "Garden + Lady: a woman active in social or public life.",
  "21_28": "Mountain + Gentleman: an obstacle involving a man, or a man standing in the way.",
  "21_29": "Mountain + Lady: an obstacle involving a woman, or a woman standing in the way.",
  "21_27": "Mountain + Letter: delayed news or correspondence.",
  "22_28": "Crossroad + Gentleman: a decision facing a man.",
  "22_29": "Crossroad + Lady: a decision facing a woman.",
  "23_34": "Mice + Fish: money slowly draining away.",
  "23_4": "Mice + House: small worries or losses affecting the home.",
  "23_24": "Mice + Heart: worry quietly wearing down a relationship.",
  "24_25": "Heart + Ring: a loving relationship moving toward commitment.",
  "24_28": "Heart + Gentleman: genuine feeling for, or from, a man.",
  "24_29": "Heart + Lady: genuine feeling for, or from, a woman.",
  "24_27": "Heart + Letter: a loving message, or feelings expressed in writing.",
  "24_31": "Heart + Sun: a joyful, thriving relationship.",
  "25_28": "Ring + Gentleman: a commitment or agreement involving a man.",
  "25_29": "Ring + Lady: a commitment or agreement involving a woman.",
  "25_36": "Ring + Cross: a difficult commitment, or a bond that carries a burden.",
  "26_28": "Book + Gentleman: a secret kept by, or concerning, a man.",
  "26_29": "Book + Lady: a secret kept by, or concerning, a woman.",
  "26_27": "Book + Letter: hidden information revealed in writing.",
  "27_3": "Letter + Ship: written news arriving from far away.",
  "27_4": "Letter + House: correspondence concerning the home.",
  "27_34": "Letter + Fish: written news about money or business.",
  "27_28": "Letter + Gentleman: a written message from, or concerning, a man.",
  "27_29": "Letter + Lady: a written message from, or concerning, a woman.",
  "27_24": "Letter + Heart: a heartfelt letter or loving message.",
  "28_29": "Gentleman + Lady: a relationship between the two — read their other neighbours to see how it's going.",
  "24_7": "Heart + Snake: love complicated by a rival or a third party.",
  "28_7": "Gentleman + Snake: a man behaving in an indirect or untrustworthy way.",
  "29_7": "Lady + Snake: a woman behaving in an indirect or untrustworthy way.",
  "28_8": "Gentleman + Coffin: an ending affecting a man, or a man facing a hard close.",
  "29_8": "Lady + Coffin: an ending affecting a woman, or a woman facing a hard close.",
  "28_30": "Gentleman + Lily: a mature, settled man, or peace within his family.",
  "29_30": "Lady + Lily: a mature, settled woman, or peace within her family.",
  "24_30": "Heart + Lily: a calm, long-standing love, settled rather than new.",
  "28_31": "Gentleman + Sun: success and vitality for a man.",
  "29_31": "Lady + Sun: success and vitality for a woman.",
  "31_34": "Sun + Fish: financial success — money flowing in easily.",
  "28_32": "Gentleman + Moon: recognition or reputation concerning a man.",
  "29_32": "Lady + Moon: recognition or reputation concerning a woman.",
  "16_32": "Stars + Moon: emotional clarity and honoured feeling.",
  "4_33": "Key + House: a settled, certain outcome concerning the home.",
  "28_33": "Gentleman + Key: a definite, important answer concerning a man.",
  "29_33": "Lady + Key: a definite, important answer concerning a woman.",
  "33_34": "Key + Fish: a certain, unlocked financial gain.",
  "28_34": "Fish + Gentleman: money or business connected to a man.",
  "29_34": "Fish + Lady: money or business connected to a woman.",
  "34_35": "Fish + Anchor: steady, reliable income.",
  "28_35": "Anchor + Gentleman: long-term stability for a man, particularly at work.",
  "29_35": "Anchor + Lady: long-term stability for a woman, particularly at work.",
  "19_35": "Anchor + Tower: stable, secure employment within an institution.",
  "28_36": "Cross + Gentleman: a burden or hard test for a man to carry.",
  "29_36": "Cross + Lady: a burden or hard test for a woman to carry.",
  "4_36": "Cross + House: a difficulty weighing on the home.",
  "5_36": "Cross + Tree: a heavy health matter to carry with patience."
};
