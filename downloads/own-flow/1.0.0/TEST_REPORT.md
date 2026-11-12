# OWN / FLOW v1.0.0 · Validation report

Date: 2026-11-01. This report records executed checks and their limits; it is not a claim of universal compatibility.

## Automated checks

22 tests passed, 0 failed. Run `npm test` from the extracted package root. The suite uses Node's built-in test runner and the exact shipped engine, parser, replay validator and benchmark worker. Logs are in `test-output.txt`; full-match samples are in `full-matches.json`.

Coverage:

1. Built-in tactic validation and graph connectivity.
2. Expression precedence, associativity and approved math functions.
3. Arbitrary code / inaccessible inputs / excessive expressions rejected.
4. Algorithm contract, finite outputs and vector bounds.
5. Invalid tactic ranges, graph edges and subsystem members rejected.
6. Same initial seed/configuration yields identical state.
7. JSON checkpoint yields bit-identical subsequent engine state.
8. Cloned tactics do not share per-agent memory or queues.
9. No sensing/communication means unknown ball state.
10. Packet delays and stochastic erasures affect actual delivery.
11. Control components sum to the desired command; speed/position bounds hold.
12. Custom controller produces a different actual football trajectory.
13. Gains, communication and compensation change actual motion.
14. All compensator variants stay finite under delay/loss stress.
15. Goal, touchline, goal kick and offside transitions execute.
16. Three full-length matches complete with side swap and bounded buffers.
17. Ball-only payload excludes teammate state and preserves original evidence source.
18. Malformed nested checkpoint state is rejected.
19. Replay statistics/configurations/predictions remain frozen; compact JSON round-trip validates.
20. Three benchmark scenarios execute matched branches with replayable initial checkpoints.
21. Forked experiments retain the first checkpoint's RNG state and record subsequent states.
22. Finished checkpoints produce a clear experiment error instead of empty metrics.

## Long matches

Each match ran 27,000 physical steps to 900 physical seconds / 90 simulated match minutes. Wall time is accelerated test execution, not the presentation playback speed.

| Seed | Score Blue–Coral | Pass attempts | Shots | Saves | Final phase |
|---|---|---|---|---|---|
| 361 | 1–2 | 60 / 62 | 14 / 6 | 0 / 4 | finished |
| 727 | 6–0 | 79 / 78 | 22 / 9 | 2 / 5 | finished |
| 2026 | 5–4 | 134 / 118 | 31 / 22 | 2 / 13 | finished |

These are synthetic simulation outcomes, not validated distributions of professional football results. History stays at 360 frames and sampled metric storage at 600 entries. A 180-second default replay exported as approximately 19.9 MiB of compact JSON and revalidated with 360 frames; the UI limit is 32 MiB.

## Browser interaction and visual review

Executed in the managed Chrome browser, with the site's actual UI and module workers:

- Main match runs, pauses and advances; broadcast/tactical camera and zoom respond.
- Turf, goal geometry, independently moving ball and human silhouettes are present in the compatibility renderer.
- Formation/communication editing: clearing the communication graph produced 11 disconnected components; mesh restoration restored connectivity.
- Created an overlapping subsystem and saved a versioned tactic; loaded it on the opposing team and began self-play.
- Exported and re-imported an actual match checkpoint; clock/score returned and the match remained paused until Play.
- Imported the final FlowController example through the actual file input, validated it and deployed it to the chosen 11 players. Invalid inaccessible inputs were rejected and deployment disabled.
- Edited the individual formation gain and switched the actual compensator to low-pass.
- Ran a real three-seed 45-second paired benchmark, viewed its computed metric table and downloaded result JSON.
- Captured replay, scrubbed its timeline, exported and re-imported the actual file. Live Play/step/speed/checkpoint controls are disabled while inspecting replay.
- Selected 30 match minutes and a 3× clock; the UI correctly showed 10 real minutes at 1×.
- English and Chinese navigation, input labels, errors and principal content reviewed.
- At a 375 px content viewport, all 8 major pages had `scrollWidth == clientWidth`; no page-level horizontal overflow was observed. Internal large tables intentionally scroll.

The browser rejected WebGL contexts. Compatibility rendering was exercised successfully, and it reports its backend as Canvas 3D. Hardware WebGL presentation, real-device GPU throughput, iOS/Safari/Android behavior, touch accuracy and sustained battery/thermal behavior were not measured. Browser frame-rate readings are observations of this environment, not performance guarantees.

## Deployment package checks

The deliverable is a static Pages Direct Upload package with `index.html` at ZIP root, local ES module imports, local Three.js dependencies, source files, examples, configuration headers and this documentation. It has no CDN/API dependency, secrets, backend, build requirement or dynamic Pages Functions.

Package validation checks JavaScript syntax, existence of static import targets, ZIP CRC and path safety, asset count and per-file size against the documented Pages drag-and-drop limits (1,000 files, 25 MiB per file). A SHA-256 manifest is included for maintainers. Cloudflare documentation was consulted at <https://developers.cloudflare.com/pages/get-started/direct-upload/>.

No Cloudflare account was used and no remote deployment was performed. DNS, custom domains, account-level configuration, edge responses and external user devices are outside this execution's verification scope. `_headers` is a Cloudflare configuration file; local browser preview does not prove Cloudflare has applied its headers.

## Scientific and product scope

Local control, observers, communication, stored state and numerical outcomes are implemented. The football policy and dynamics are simplified; motions are procedural, not licensed professional animation assets. Algorithm upload accepts a bounded expression contract, not arbitrary executable programs or automatic natural-language-to-controller synthesis. Hidden-state classification is an uncalibrated heuristic. Full-match stability, statistical power for research conclusions and real-athlete calibration are not claimed.
