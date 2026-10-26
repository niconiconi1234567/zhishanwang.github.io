const test=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs');
test('catalog utility is present',()=>assert.ok(fs.existsSync(__dirname+'/../catalog.js')));
test('filters combine status and case-insensitive title/author search',()=>{
 const {matchesPaper}=require('../catalog.js');
 assert.equal(matchesPaper({status:'submitted',text:'Hidden States Zhishan Wang'},'submitted','WANG'),true);
 assert.equal(matchesPaper({status:'accepted',text:'Hidden States'},'submitted','hidden'),false);
 assert.equal(matchesPaper({status:'submitted',text:'Hidden States'},'all','missing'),false);
 assert.equal(matchesPaper({status:'manuscript',text:'racing'},'all','  '),true);
});
test('invalid routes fall back safely and valid detail routes persist',()=>{
 const {resolveRoute}=require('../catalog.js');const r={home:[],research:['evolution','lonely-observer'],publications:['icarcv-2026','aamas-2027']};
 assert.deepEqual(resolveRoute('#/research/lonely-observer',r),{page:'research',item:'lonely-observer'});
 assert.deepEqual(resolveRoute('#/publications/aamas-2027',r),{page:'publications',item:'aamas-2027'});
 assert.deepEqual(resolveRoute('#/publications/__proto__',r),{page:'publications',item:''});
 assert.deepEqual(resolveRoute('#/missing',r),{page:'home',item:''});
 assert.deepEqual(resolveRoute('',r),{page:'home',item:''});
});
