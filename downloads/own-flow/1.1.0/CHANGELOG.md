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
