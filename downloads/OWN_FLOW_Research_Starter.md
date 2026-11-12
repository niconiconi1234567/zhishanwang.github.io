# OWN / FLOW — Research starter

Updated 12 November 2026 · Current application release: 1.5.0

OWN FLOW is the continuing software platform of the OWN1 football and distributed-control research thread. It lets a reader move between a visible team, local control, observed interaction and mission execution. The browser simulation supports exploratory research and teaching; results should be reported with their model and conditions.

## Public releases

| Release | Main addition | Public URL |
| --- | --- | --- |
| 1.0.0 | Shared match, local feedback, evidence, bounded algorithms and paired experiments | https://own-football-flow1.pages.dev/ |
| 1.1.0 | Interpretable control structure, diagnostics and clearer comparisons | https://own-football-flow1p1.pages.dev/ |
| 1.2.0 | Control Ground, wiring, P/PID/LADRC/MPC, poles and paired tests | https://own-football-flow1p2.pages.dev/ |
| 1.3.0 | Network Studio, motion regression and identifiability diagnostics | https://own1flowversion1p3.pages.dev/ |
| 1.4.0 | Mission policies, fixed task windows, snapshots and reports | https://own-football-flow1p4.pages.dev/ |
| 1.5.0 | Editable mission automata, runtime highlights, stage readiness and ball-task priority | https://own-football-flow1p5.pages.dev/ |

The additional deployment https://own-football-flow2.pages.dev/ displays application **1.1.0**, as checked on 12 November 2026. Its hostname is not a v2.0 release label. Application 1.1 retains engine 1.0.0; application 1.3 retains engine 1.2.0. Record both labels when applicable.

## A first experiment for each audience

**Football:** Select a player, compare Duties with Tracking and inspect a mission event. Branch from a checkpoint to change one policy. Keep the opponent, roster and physical window fixed. Read pressure, cover and lane readiness alongside passes and shots. These are simplified, explicitly defined tasks, not calibrated predictions about real clubs.

**Control:** In Control Ground inspect the sampled plant, anchors, wiring and graph. Keep these fixed to compare P, PID, LADRC and MPC; then change the graph in a separate comparison. Export the design and paired results. Compare effort and saturation with error. Treat application to match role tracking as a separate experiment.

**Multi-agent inference:** In Network Studio compare the known-network varying-target example with synchronized motion. Inspect rank, conditioning and chronological holdout performance against the baselines. In real-match data, distinguish observed input traces from fitted associations. Forty valid intervals permit fitting; they do not establish that edges are identifiable.

**Mission research:** In v1.5 Tactics Studio load the state-chain example. Inspect source, guard, priority, confirmation and execution prerequisites. Pause and single-step, comparing the candidate highlight with a committed event and its snapshot. Eight fixed outfield states are available; the goalkeeper has a separate policy. Graph reachability is not a nonblocking or whole-match stability proof.

## Preserve a reproducible comparison

1. Record application and exported engine versions.
2. Save the seed, roster, controller, communication graph, mission policy, initial checkpoint and physical time window.
3. Change one factor; use matched starts and several seeds before drawing broader empirical conclusions.
4. Keep design JSON, paired results, network evidence and mission HTML/JSON reports as applicable.
5. Report control errors, task fulfilment and football outcomes separately. Keep negative results and insufficient-data diagnoses.

Separate version domains have separate local browser storage. Export before switching domains. Supported old checkpoints can be imported into newer releases, but events that were never recorded cannot be reconstructed. In v1.5 node layout stays in the browser; executable rules travel in the tactic export. Mission reports retain up to 2,400 recent events and show omissions; export periodically during long experiments.

## Reproduce the included v1.5 evidence

Extract the complete v1.5 code ZIP. In its root, using Node.js 20 or later:

```sh
npm test
node maintenance/contact-priority-check.mjs
node maintenance/reproduce-network.mjs maintenance/v1.5-interaction-evidence.json
node maintenance/reproduce-mission.mjs maintenance/v1.5-mission-evidence.json
```

No dependency installation is needed for these scripts. To open the application locally, serve the extracted folder over HTTP; direct `file://` opening does not support its module workers. For example, with Python installed:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 in your own browser. Stop the server when finished.

The collection-stall example uses seed 361, balanced policies, and 60 seconds of physical time. Changing `contactPriority` from 0 to 0.85 changes the longest live, unowned-ball interval below 0.1 m/s from 36.4667 s to 0 s. This is a single deterministic fault regression, not general tactical superiority.

The supplied interaction sample is a useful negative result: the fitted model does not outperform its no-neighbor baseline. The reproduction script checks coefficients, scaling and held-out predictions rather than treating every computed fit as successful identification.

## Extending an experiment together

Football readers can propose a tactical situation; control researchers can provide a feedback law, disturbance or network condition; multi-agent researchers can propose a sensing constraint, protocol or task specification. A useful starting message includes the version, seed, expected outcome, observed outcome and an export that reproduces it.

Contact Zhishan Wang: ZWANG103@e.ntu.edu.sg. Explore the Robot Intelligence & Metacognition Laboratory: https://rimlab.tech/.

The interface accepts bounded FlowController expressions; it does not execute arbitrary uploaded programs, neural-network files or natural-language algorithms. The source packages are available for inspection and local experimentation. For redistribution or a joint research extension, get in touch about the intended use.
