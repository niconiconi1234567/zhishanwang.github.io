(() => {
  'use strict';
  const root = document.getElementById('zw-academic-site');
  const overview = root.querySelector('#zw-research-overview');
  const evolution = root.querySelector('#zw-evolution');
  const canvas = root.querySelector('#zw-evo-canvas');
  const stageHost = root.querySelector('#zw-evo-stages');
  const edgeSvg = root.querySelector('#zw-evo-edges');
  const { stages, nodes, edges } = window.ZW_EVOLUTION;
    const nodeButtons=new Map();
    const edgePaths=[];
    let selected='swarm';
    stages.forEach(stage=>{
      const group=document.createElement('div');group.className='zw-evo-stage';
      const heading=document.createElement('div');heading.className='zw-evo-heading';
      const name=document.createElement('strong');name.textContent=stage.name;
      const period=document.createElement('small');period.textContent=stage.period;
      const note=document.createElement('small');note.textContent=stage.note;
      heading.append(name,period,note);group.append(heading);
      nodes.filter(node=>node.stage===stage.id).forEach(node=>{
        const button=document.createElement('button');button.type='button';button.className='zw-evo-node';
        if(node.id==='foundations')button.classList.add('zw-node-offset');
        button.textContent=node.title;button.dataset.evoNode=node.id;button.setAttribute('aria-pressed',String(node.id===selected));
        button.setAttribute('aria-label',node.title+', '+node.period);
        group.append(button);nodeButtons.set(node.id,button);
      });
      stageHost.append(group);
    });
    edges.forEach(([from,to])=>{
      const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('fill','none');path.setAttribute('stroke-width','1.2');path.setAttribute('stroke','var(--zw-line)');edgeSvg.append(path);edgePaths.push({from,to,path});
    });
    function traceSelection(id){
      selected=id;
      const related=new Set([id]);
      function visit(current,reverse,seen){
        if(seen.has(current))return;seen.add(current);related.add(current);
        edges.filter(edge=>edge[reverse?1:0]===current).forEach(edge=>visit(edge[reverse?0:1],reverse,seen));
      }
      visit(id,true,new Set());visit(id,false,new Set());
      nodeButtons.forEach((button,key)=>{button.setAttribute('aria-pressed',String(key===id));button.classList.toggle('zw-connected',key!==id&&related.has(key))});
      edgePaths.forEach(({from,to,path})=>{const active=related.has(from)&&related.has(to);path.setAttribute('stroke',active?'var(--zw-accent)':'var(--zw-line)');path.setAttribute('stroke-width',active?'1.8':'1.1')});
      const node=nodes.find(item=>item.id===id);
      root.querySelector('#zw-evo-period').textContent=node.period;
      root.querySelector('#zw-evo-title').textContent=node.title;
      root.querySelector('#zw-evo-text').textContent=node.text;
      const action=root.querySelector('#zw-evo-action');
      delete action.dataset.project;delete action.dataset.past;
      action.hidden=!node.topic&&!node.past;
      if(node.topic){action.dataset.project=node.topic;action.textContent='Explore current research →'}
      if(node.past){action.dataset.past=node.past;action.textContent='Explore this past project →'}
    }
    function drawConnections(){
      if(evolution.hidden||overview.hidden||root.querySelector('#zw-page-research').hidden)return;
      const width=canvas.getBoundingClientRect().width;if(!width)return;
      const narrow=width<610;canvas.classList.toggle('zw-narrow',narrow);
      const rect=canvas.getBoundingClientRect();edgeSvg.setAttribute('viewBox','0 0 '+rect.width+' '+rect.height);
      edgePaths.forEach(({from,to,path})=>{
        const a=nodeButtons.get(from).getBoundingClientRect(),b=nodeButtons.get(to).getBoundingClientRect();
        const sameColumn=Math.abs((a.left+a.width/2)-(b.left+b.width/2))<20;
        const vertical=narrow||sameColumn;
        if(vertical){
          const x1=a.left+a.width/2-rect.left,y1=a.bottom-rect.top,x2=b.left+b.width/2-rect.left,y2=b.top-rect.top;
          if(y2>y1){const delta=Math.max(18,(y2-y1)/2);path.setAttribute('d',`M ${x1} ${y1} C ${x1} ${y1+delta}, ${x2} ${y2-delta}, ${x2} ${y2}`)}
          else{const x1b=a.right-rect.left,y1b=a.top+a.height/2-rect.top,x2b=b.left-rect.left,y2b=b.top+b.height/2-rect.top;path.setAttribute('d',`M ${x1b} ${y1b} C ${x1b+14} ${y1b}, ${x2b-14} ${y2b}, ${x2b} ${y2b}`)}
        }else{
          const x1=a.right-rect.left,y1=a.top+a.height/2-rect.top,x2=b.left-rect.left,y2=b.top+b.height/2-rect.top;
          const delta=Math.max(14,(x2-x1)/2);path.setAttribute('d',`M ${x1} ${y1} C ${x1+delta} ${y1}, ${x2-delta} ${y2}, ${x2} ${y2}`);
        }
      });
    }
  const pageTitles = {home:'Home',research:'Research',publications:'Papers & Reports',cv:'CV & Honors',past:'Past Projects',personal:'Personal',archive:'Archive'};
  const topicTitles = Object.fromEntries(Array.from(root.querySelectorAll('[data-topic-panel]'), p => [p.dataset.topicPanel, p.querySelector('h1').textContent]));
  const pastTitles = {racing:'Autonomous Racing Control',lander:'FPGA Lunar Lander',sensor:'Optical Heart Rate Sensor',energy:'Real-Time Feedback for Energy Systems'};
  const publicationTitles = Object.fromEntries(Array.from(root.querySelectorAll('[data-publication-panel]'), p => [p.dataset.publicationPanel, p.querySelector('h1').textContent]));
  const routes = Object.fromEntries(Object.keys(pageTitles).map(p => [p, p==='research' ? [...Object.keys(topicTitles),'evolution'] : p==='publications' ? Object.keys(publicationTitles) : p==='past' ? Object.keys(pastTitles) : []]));
  let currentRoute = '';
  function renderRoute() {
    const {page,item}=window.ZW_CATALOG.resolveRoute(location.hash,routes);
    root.querySelectorAll('[data-panel]').forEach(panel => { panel.hidden=panel.dataset.panel!==page; });
    root.querySelectorAll('[data-page]').forEach(link => {
      if(link.dataset.page===page) link.setAttribute('aria-current','page');
      else link.removeAttribute('aria-current');
    });
    const isTopic=page==='research' && Object.hasOwn(topicTitles,item);
    overview.hidden=isTopic;
    root.querySelector('#zw-research-detail').hidden=!isTopic;
    root.querySelectorAll('[data-topic-panel]').forEach(panel => {panel.hidden=!isTopic || panel.dataset.topicPanel!==item;});
    const isEvolution=page==='research' && item==='evolution';
    Array.from(overview.children).forEach(child => { child.hidden=isEvolution ? child!==evolution : child===evolution; });
    const isPast=page==='past' && Object.hasOwn(pastTitles,item);
    root.querySelector('#zw-past-overview').hidden=isPast;
    root.querySelector('#zw-past-detail').hidden=!isPast;
    root.querySelectorAll('[data-past-panel]').forEach(panel => { panel.hidden=!isPast || panel.dataset.pastPanel!==item; });
    const isPublication=page==='publications' && Object.hasOwn(publicationTitles,item);
    root.querySelector('#zw-publications-overview').hidden=isPublication;
    root.querySelector('#zw-publication-detail').hidden=!isPublication;
    root.querySelectorAll('[data-publication-panel]').forEach(panel => { panel.hidden=!isPublication || panel.dataset.publicationPanel!==item; });
    const title = isTopic ? topicTitles[item] : isPast ? pastTitles[item] : isPublication ? publicationTitles[item] : isEvolution ? 'Research evolution' : pageTitles[page];
    document.title=(page==='home'?'Zhishan Wang':title+' | Zhishan Wang')+' | NTU EEE';
    if(isEvolution) requestAnimationFrame(drawConnections);
    const nextRoute=page+'/'+item;
    if(currentRoute && nextRoute!==currentRoute){
      const main=root.querySelector('.zw-main');
      main.scrollIntoView({block:'start',behavior:'instant'});
      const heading=Array.from(main.querySelectorAll('h1')).find(h=>h.getClientRects().length);
      if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});}
    }
    currentRoute=nextRoute;
  }
  function navigate(route){
    const next='#/'+route;
    if(location.hash===next)renderRoute();
    else location.hash=next;
  }
  document.querySelector('.zw-skip-link').addEventListener('click', event => {
    event.preventDefault();
    const main = root.querySelector('.zw-main');
    main.focus({preventScroll:true});
    main.scrollIntoView({block:'start',behavior:'instant'});
  });
  root.addEventListener('click', event => {
    const target=event.target;
    const routeLink=target.closest('a[href^="#/"]');
    if(routeLink && (event.ctrlKey||event.metaKey||event.shiftKey||event.altKey))return;
    const nav=target.closest('[data-page],[data-go]');
    if(nav){
      if(nav.tagName==='A' && (event.ctrlKey||event.metaKey||event.shiftKey||event.altKey))return;
      event.preventDefault();navigate(nav.dataset.page||nav.dataset.go);return;
    }
    if(target.closest('[data-research-back],[data-evolution-close]')){navigate('research');return;}
    if(target.closest('[data-evolution-open]')){navigate('research/evolution');return;}
    if(target.closest('[data-past-back]')){navigate('past');return;}
    if(target.closest('[data-publication-back]')){navigate('publications');return;}
    const research=target.closest('[data-project]');
    if(research){navigate('research/'+research.dataset.project);return;}
    const past=target.closest('[data-past]');
    if(past){navigate('past/'+past.dataset.past);return;}
    const publication=target.closest('[data-publication]');
    if(publication){navigate('publications/'+publication.dataset.publication);return;}
    const node=target.closest('[data-evo-node]');
    if(node){traceSelection(node.dataset.evoNode);return;}
    const abstract=target.closest('[data-abstract]');
    if(abstract){
      const content=document.getElementById(abstract.dataset.abstract);
      if(content){content.hidden=!content.hidden;abstract.setAttribute('aria-expanded',String(!content.hidden));abstract.textContent=content.hidden?'Research summary +':'Research summary −';}
    }
  });
  // Keep the paper catalogue useful as the publication list grows.
  let paperStatus='all';
  const paperSearch=root.querySelector('#zw-paper-search');
  const paperCards=Array.from(root.querySelectorAll('[data-paper-id]'));
  function filterPapers(){
    let count=0;
    paperCards.forEach(card=>{
      const match=window.ZW_CATALOG.matchesPaper({status:card.dataset.paperStatus,text:card.textContent},paperStatus,paperSearch.value);
      card.hidden=!match;if(match)count++;
    });
    root.querySelectorAll('[data-paper-group]').forEach(group=>{group.hidden=!Array.from(group.querySelectorAll('[data-paper-id]')).some(card=>!card.hidden);});
    root.querySelector('#zw-paper-count').textContent=count+' matching featured '+(count===1?'paper':'papers');
    root.querySelector('#zw-paper-empty').hidden=count!==0;
  }
  paperSearch.addEventListener('input',filterPapers);
  root.querySelectorAll('[data-paper-filter]').forEach(button=>button.addEventListener('click',()=>{
    paperStatus=button.dataset.paperFilter;
    root.querySelectorAll('[data-paper-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    filterPapers();
  }));
  filterPapers();
  window.addEventListener('hashchange',renderRoute);
  if(window.ResizeObserver)new ResizeObserver(()=>requestAnimationFrame(drawConnections)).observe(canvas);
  else window.addEventListener('resize',drawConnections);
  traceSelection(selected);
  renderRoute();
})();
