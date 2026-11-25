// One Line, No Deadline Met — writes one single-line excuse for a missed
// deadline to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: no network, no randomness, no clock. Node 22, stdlib only.
//
// Candidates considered (judge brief, in order: 1. really an excuse for a
// missed deadline; 2. a real joke with a turn/surprise; 3. one sentence that
// reads cleanly aloud, punch at the end; 4. sounds like something a person
// would actually say when cornered; 5. fresh angle, no dog-ate-it retread):
//
// A. "I didn't miss the deadline — I sent the finished file to the wrong
//    group chat, and now twelve strangers think I'm very punctual."
//    Concrete detail (wrong group chat, twelve strangers), surprise turn,
//    punch lands on "very punctual". Human, fresh.
// B. "I outsourced the deadline to my future self, and he ghosted me — so
//    now I'm apologising for a man who doesn't even exist yet."
//    Fresh, funny turn, but "future self" is a known trope and the excuse
//    itself is vaguer than A's (nothing was actually delivered anywhere).
// C. "I did the work, saved it as final_FINAL_v2_REAL, and then spent the
//    whole morning opening every version except the right one."
//    Extremely human and specific, but the ending is a sigh, not a punch;
//    the joke lands softer than A's.
// D. "The file was done, the upload bar hit 99%, and my wifi chose that
//    exact second to achieve enlightenment and leave this world."
//    Vivid twist, but "wifi died" is a stock excuse family — the judge's
//    criterion 5 punishes it even with a fresh coat of paint.
// E. "I set three alarms, two reminders, and a sticky note, and my brain
//    treated all of them as decorative suggestions."
//    Relatable and human, but "alarms didn't work" is stock, and the excuse
//    is about forgetting rather than a concrete mishap.
//
// Pick: A. It is the only candidate that is a concrete, specific mishap
// (the work exists, it went to the wrong people), with a real surprise turn
// and a punchline that lands on the last two words.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I didn't miss the deadline — I sent the finished file to the wrong group chat, and now twelve strangers think I'm very punctual.";

// Gate, enforced in code: UTF-8 text, 1-200 characters, exactly one line.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry fails the gate: ${ENTRY.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
