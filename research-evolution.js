// Research history: update these records when new topics and projects are added.
const stages=[
      {id:'dmu',name:'Dalian Maritime',period:'2021–2023',note:'Foundations'},
      {id:'purdue-build',name:'Purdue',period:'2023–2025',note:'Digital & sensing systems'},
      {id:'purdue-control',name:'Purdue',period:'2025–2026',note:'Advanced control & teams'},
      {id:'ntu',name:'NTU',period:'Aug 2026–present',note:'Autonomy & intelligence'},
      {id:'frontiers',name:'Current branches',period:'October 2026–present',note:'Information, learning & missions'}
    ];
    // Extend these records and their connections as the research program develops.
const nodes=[
      {id:'foundations',stage:'dmu',title:'Control theory & automation',period:'2021–2023 · Dalian Maritime University',text:'My early interests centered on control theory and automation: how systems behave, how feedback changes that behavior, and how mathematical models support engineering decisions.'},
      {id:'digital',stage:'purdue-build',title:'Digital systems & FPGA',period:'2024 · Purdue University',text:'Digital circuit design and the ECE 270 Lunar Lander project connected abstract system logic with hardware execution, including SystemVerilog, state transitions, and sequential design.',past:'lander'},
      {id:'sensing',stage:'purdue-build',title:'Sensing & signal chains',period:'2025 · Purdue University',text:'The optical heart-rate sensor project developed my understanding of physical measurements, analog circuits, filtering, and the practical constraints of a sensing pipeline.',past:'sensor'},
      {id:'racing',stage:'purdue-control',title:'Autonomous racing & advanced control',period:'2025–2026 · Purdue University',text:'Autonomous racing brought vehicle modeling, feedback, robustness, and optimization together. The project extended from controller evaluation toward strategy-aware vehicle interaction.',past:'racing'},
      {id:'multiagent',stage:'purdue-control',title:'Multi-agent systems',period:'Spring 2026 · Purdue University',text:'Multi-agent autonomy introduced a new set of questions: how local information, communication, and relationships between agents can support coordinated behavior.'},
      {id:'football',stage:'purdue-control',title:'Football formations & tactics',period:'2026–present · Began at Purdue',text:'The soccer project applies control theory, network science, and multi-agent systems to formation structure, player relationships, and tactical coordination. It remains an active independent research direction.',topic:'football'},
      {id:'autonomy',stage:'ntu',title:'Multi-agent system autonomy',period:'2026–present · NTU',text:'My doctoral research studies how information exchange, task reasoning, and control execution can support autonomous group behavior and adaptation.',topic:'autonomy'},
      {id:'swarm',stage:'ntu',title:'Swarm intelligence',period:'2026–present · NTU',text:'I ask why a swarm can exhibit intelligence, how it can be built from individual agents, and what internal logic makes interaction generate group-level capabilities.',topic:'swarm'},
      {id:'economics',stage:'ntu',title:'Networked economy',period:'2026–present · Independent research',text:'Economic estimation extends these network ideas to agents with different observations and knowledge. The aim is to design interactions that improve both individual and collective understanding.',topic:'economics'}
    ];
nodes.push(
 {id:'mission',stage:'frontiers',title:'Mission planning & control',period:'October 2026 · Research at NTU',text:'From evidence-supported rules to joint rescue and active acquisition of missing facts: a coupled information–reasoning–execution loop.',topic:'mission-planning'},
 {id:'capability',stage:'frontiers',title:'Information capabilities & resilience',period:'October 2026 · OWN2 Plus',text:'What can heterogeneous agents actually form and deliver? Capability limits, same-episode fusion, erasures and finite-budget acquisition determine attainable information.',topic:'information-foundations'},
 {id:'history',stage:'frontiers',title:'Collective history identifiability',period:'October 2026 · OGT1',text:'Separate collectively available evidence from causally attainable local knowledge, then connect history recovery to decisions and observer-based control.',topic:'collective-identifiability'},
 {id:'behavior',stage:'frontiers',title:'Behavior-mediated coordination',period:'September–October 2026 · Submitted ISCS paper',text:'Relations among teammates’ actions can reveal hidden opportunities and change local missions. The submitted paper distinguishes information, decision and execution benefits.',topic:'behavior-inference'},
 {id:'outsider',stage:'frontiers',title:'The Lonely Observer',period:'October 2026 · OWN',text:'An outsider learns from externally observed behavior: control-relevant learning, hidden feedback distinguishability and strategic participation form three complementary levels.',topic:'lonely-observer'}
);
const edges=[['foundations','digital'],['foundations','sensing'],['foundations','racing'],['digital','racing'],['racing','multiagent'],['multiagent','football'],['multiagent','autonomy'],['multiagent','swarm'],['multiagent','economics'],['autonomy','swarm']];

edges.push(['autonomy','mission'],['economics','capability'],['swarm','history'],['football','behavior'],['autonomy','outsider'],['capability','history'],['behavior','outsider']);
window.ZW_EVOLUTION={stages,nodes,edges};
