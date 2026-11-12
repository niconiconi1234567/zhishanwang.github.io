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
