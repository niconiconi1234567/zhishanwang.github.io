# v1.4.0 — Mission Control & Task Evidence

2026-11-11. Added per-agent mission state policies, ordered editable local guards, role preferences, recovery hysteresis, observed-readiness cover handoffs and explicit free-ball collection. Mission references feed the actual velocity controller while preserving nominal formation coupling. Public stoppages suspend active duties.

Added possession-stage conditioned motion identification, separate control and task metrics, fixed ownership-window deadlines, physical-tick event snapshots, printable HTML reports and JSON evidence. Task policy interventions now run from matched checkpoints and report task rates alongside control effort and football outcomes. Evidence and diagnostics retain the limits established by Football research v4; observed gaps are not labelled as certified structural conflicts.

Repaired mathematical scripts and missing derivative glyphs, grouped full indices, improved mobile equation overflow, and typeset both initial and redrawn control diagrams. Engine version advances to 1.4.0 with legacy checkpoint import. See maintenance/TEST_REPORT.md and MISSION_METHODS.md.

# v1.3.0 — Network Studio

2026-11-11. Added a synchronized pitch/node workspace with physical, formation-error and centroid-estimate coordinates. Selected agents share focus across the pitch, control views and diagnostics. Actual controller-time relationship and state-message inputs carry direction, timestamps, observed offsets and contributions. Read-only traces reconstruct the final command and observer update.

Added independent per-agent motion regression, chronological holdout with a gap, no-neighbor and constant-velocity baselines, excitation/rank diagnostics and signed fitted associations. Added matched known-network and synchronized-motion validation examples, reproducible JSON evidence and live gain tuning with epoch-separated observations. Numerical workers collect fixed 5 Hz physical samples across playback speeds. Existing physical dynamics and checkpoint/replay engine version remain 1.2.0.

83 automated tests passed. The recorded v1.2.0 and v1.3.0 simulations have identical physical checkpoints after sixty seconds for seeds 361 and 458, after removing the new diagnostic trace. The browser-exported numerical report reproduces within 1e-9 absolute/relative tolerance. See maintenance/TEST_REPORT.md.

# v1.2.0 — Distributed Control Ground

2026-11-02. Added a working 11-player control-design ground, editable signal wiring and graph topology, measured reference/actual field trajectories, sampled transfer functions, internal poles, network modes and reproducible paired controller or ability comparisons. P, PID, first-order LADRC and constrained MPC execute independent controller instances. The local controller can also be applied to real match role tracking and evaluated using a team-specific ablation.

Added five sourced classic tactical studies with original squads, mean-matched homogeneous rosters, a 5-3-2 libero formation and visible-lane passing policies. Added age-aware directed communication analysis and football outcome comparisons. Both renderers received authored turf and stands, articulated movement, individual proportions and experiment overlays.

The match engine writes version 1.2.0 and imports the v1.0.0 checkpoint/replay format. See maintenance/TEST_REPORT.md for checks, examples and remaining hardware verification.

# v1.1.0 — Match, control structure and interpretable analysis

Date: 2026-11-01

- Renamed Match Experience to Match / 赛场 and expanded the match-stage layout.
- Added explicit whole-pitch, ball and selected-player camera focus; quality presets; distance-based gait and event-based kick/save poses; shared non-extrapolating presentation interpolation.
- Refined canvas pitch/ball/player shading and WebGL lighting, jersey detail, shadow quality and camera composition. Camera focus in local-agent mode cannot reveal the hidden ball.
- Added interactive team-system diagrams in both Tactics and Control, with coach/configuration coordinator, subsystems, 11 local loops and actual configured communication links.
- Replaced the sequential control tiles with a genuine negative-feedback diagram, executable block order, distributed observer and mode-specific compensator feedback.
- Added analyst-only graph spectrum, estimator bias/disagreement decomposition, relational residual, execution gap, adjacency visualization and per-agent diagnostics.
- Replaced raw-looking command/experiment displays with component bars, velocity comparisons, paired-result cards, explicit trade-offs, readable physical-time plots and exact hover samples.
- Added selectable individual/mean paired curves, improved small-difference precision, clearer units and interval interpretation.
- Bundled a licensed mathematical font and native HTML/SVG superscript/subscript layout. No external font/CDN dependency.
- Added nine mathematical and rendering-state regression tests; all 31 tests pass.

Simulation behavior and serialized engine version are intentionally unchanged. This release does not publish or modify the existing Cloudflare deployment.
