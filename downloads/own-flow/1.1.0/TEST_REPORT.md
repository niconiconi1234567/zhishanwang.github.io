# OWN / FLOW v1.1.0 — Validation report

Executed: 2026-11-01. Application v1.1.0; unchanged compatible engine/checkpoint version v1.0.0.

## Automated tests

**31 passed, 0 failed, 0 skipped.** Final full-suite duration: 20.704 seconds in the test runtime. Command: `node --test maintenance/*.test.mjs` (also `npm test`). The exact output is `test-output.txt`.

The retained 22 tests cover tactic/algorithm validation, bounded expression grammar, inaccessible inputs, deterministic trajectories, bit-identical checkpoint continuation, independent per-agent memory, local information isolation, packet delay/loss, exact command decomposition, physical bounds, actual custom-controller effects, compensation/network changes, restart rules, complete matches, replay validation and paired benchmark reproducibility.

Nine added tests cover:

1. Laplacian spectra against exact path, complete and disconnected graph examples.
2. Common estimator bias versus disagreement, including the squared-error identity.
3. Translation-invariant relational residual versus absolute target tracking error.
4. Diagnostics do not mutate the engine or checkpoint.
5. Paired difference signs, percentage calculation, Student-t interval and zero baseline handling.
6. Shortest-angle interpolation, no extrapolation, pause and teleport behavior.
7. Agent-local camera focus does not reveal a hidden ball.
8. Distance-driven gait and the actual kick-event envelope.
9. Render sampling freezes on pause and resets after replay rewind.

## Full-match regression

Each seed completed 27,000 physical steps: 900 physical seconds / 90 match minutes. Detailed outcomes and runtime measurements are in `full-matches.json`.

| Seed | Score Blue–Coral | Pass attempts | Shots | Saves | Phase |
|---|---|---|---|---|---|
| 361 | 1–2 | 60 / 62 | 14 / 6 | 0 / 4 | finished |
| 727 | 6–0 | 79 / 78 | 22 / 9 | 2 / 5 | finished |
| 2026 | 5–4 | 134 / 118 | 31 / 22 | 2 / 13 | finished |

These deterministic results agree with the prior release. Byte comparisons confirmed that engine.js, algorithm.js, sim-worker.js, benchmark-worker.js, replay.js and storage.js remain unchanged from the v1.0.0 ZIP. The new visual/analyst modules do not alter gameplay or serialization.

## Browser checks executed for this release

Managed Chrome, actual UI and module workers, desktop viewport approximately 1348 × 926:

- Match / 赛场 naming, expanded pitch, pause, player-follow focus, zoom and quality selection.
- Compatibility pitch rendering, shading, player/ball visibility and camera composition visually inspected.
- Team architecture appears in Tactics and Control with 11 agent cards and configured links. Clicking agent #03 opened that player's individual loop.
- Reference, summing junction, controller, compensator, algorithm, actuator, plant, sensing feedback, observer and neighbor messages render as SVG with readable symbols.
- Switching compensation to damping displayed the velocity-feedback branch; bounded integral displayed the error-feedback branch. Low-pass does not show these unused inputs.
- Multi-agent cards, estimate scatter, bias/disagreement decomposition, adjacency matrix and all 11 per-agent diagnostics populated from the actual state.
- Seven command-component bars and the actual/command velocity graphic displayed real values.
- Chinese and English labels and mathematical superscripts/subscripts inspected. The local font contains 1,313 glyphs; required Latin, Greek and main mathematical symbols passed glyph checks.
- A real three-seed 45-second formation experiment compared enabled/removed custom control. It exposed small rounded-to-zero differences; display precision was corrected.
- A real three-seed 45-second tactical self-play experiment compared enabled/removed custom control. Observed mean target residual was A 6.213 m / B 6.434 m; mean squared command A 14.607 / B 15.327 m²/s². This is a UI smoke experiment with the retained test tactic and Anticipatory support controller, not a reusable research benchmark or general ranking.
- Switching to Pair 2 changed the curve selector. Pointer inspection returned a real sample: t = 20.50 s, A 7.374 m, B 10.331 m.
- Result cards show relative changes, paired intervals and scenario-limited interpretation. Charts display physical time and units.
- No application-origin warning/error was present in the final inspected browser logs; unrelated browser-extension metadata messages were excluded.

## Responsive checks

A same-origin 375 px iframe was used to exercise the actual responsive application; browser scrollbar leaves 360 px body content width. This is layout testing, not physical-phone certification.

All eight main pages were navigated and measured: Match, Tactics Studio, Control Laboratory, Agent Perspective, Diagnostics, Tactical Library, Algorithm Studio and Research Benchmark. Each had body scrollWidth = clientWidth = 360 px.

Additional checks:

- Tactics architecture rendered 11 nodes inside a 920 px internally scrolling diagram; the page stayed within its viewport.
- Multi-agent analysis populated all four KPI cards without page overflow.
- Diagnostics displayed seven command bars on the narrow layout.
- A populated 30-second, three-seed benchmark revealed internal clipping in two-column result cards. Cards were changed to one column on narrow screens. Final verification: all four cards had clientWidth = scrollWidth = 304 px, both charts existed, and the body remained 360 px wide. Screenshot inspection confirmed readable values and intervals.

The temporary iframe test page is excluded from the release ZIP.

## Static/package verification

- 18 application/test JavaScript files passed Node syntax checks.
- All 18 local static module import references resolved.
- One local WOFF mathematical font and its license are included; no external font dependency.
- No old “Match Experience” label remains in app.js.
- Root-level index.html, local dependencies, examples, source, documentation and security headers are packaged without an enclosing directory.
- Package creation verifies every archived byte against the tested source, ZIP CRC, safe paths and a fresh SHA-256 manifest.
- The package is for static Pages upload, with no build step, server, API key or remote model requirement.

## Explicit limits

The browser cannot create a WebGL context. Canvas rendering and interaction were exercised. The modified WebGL branch passed syntax/resource checks, but real GPU lighting, shadow quality, sustained frame rate and Safari/iOS/Android visual behavior remain unverified. The cloud-browser frame rate is not a hardware performance measurement.

No deployment to the user's Cloudflare account was performed. DNS, custom domain configuration and Cloudflare's application of _headers were not re-tested by uploading this release.

Players/poses remain procedural, not motion-capture assets. Football rules and the bounded algorithm language retain the prior simplified scope. Three paired samples are an exploratory diagnostic; confidence intervals, graph spectra and low residuals do not certify universal algorithm quality or full-match nonlinear stability.
