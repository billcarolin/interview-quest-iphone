
const bank = window.QUESTION_BANK || [];
const $ = (id) => document.getElementById(id);
const views = ['homeView','gameView','resultView','studyView'];
const STORAGE = 'interviewQuestStateV1';
let state = loadState();
let game = null;

function defaultState(){ return {name:'Player One',xp:0,bestStreak:0,mastered:{},history:{}}; }
function loadState(){ try{return {...defaultState(),...(JSON.parse(localStorage.getItem(STORAGE))||{})};}catch{return defaultState();} }
function saveState(){ localStorage.setItem(STORAGE, JSON.stringify(state)); }
function showView(id){ views.forEach(v=>$(v).classList.toggle('active', v===id)); window.scrollTo({top:0,behavior:'smooth'}); }
function shuffle(a){ return [...a].sort(()=>Math.random()-.5); }
function level(){ return Math.floor(state.xp/120)+1; }
function refreshHome(){ $('playerName').textContent=state.name||'Player One'; $('xpValue').textContent=state.xp; $('streakValue').textContent=state.bestStreak; $('masteredValue').textContent=Object.keys(state.mastered).length; $('levelValue').textContent=level(); }
function editName(){ const next=(prompt('What should we call you?', state.name||'Player One')||'').trim(); if(!next)return; state.name=next.slice(0,24); saveState(); refreshHome(); }
function selectQuestions(mode){
 let pool=bank, count=5, hearts=99;
 if(mode==='patterns'){pool=bank.filter(q=>['Algorithms','Java'].includes(q.category));count=8;}
 if(mode==='architecture'){pool=bank.filter(q=>['Architecture','Spring'].includes(q.category));count=8;}
 if(mode==='dxt'){pool=bank.filter(q=>q.track==='DXT');count=12;}
 if(mode==='boss'){pool=bank.filter(q=>q.difficulty!=='Warm-up');count=12;hearts=3;}
 return {items:shuffle(pool).slice(0,Math.min(count,pool.length)),hearts};
}
function startGame(mode){ const pick=selectQuestions(mode); game={mode,questions:pick.items,index:0,correct:0,streak:0,best:0,xp:0,hearts:pick.hearts,answered:false}; showView('gameView'); renderQuestion(); }
function renderQuestion(){
 const q=game.questions[game.index]; game.answered=false; $('feedbackCard').className='card feedback hidden'; $('choiceList').innerHTML=''; $('categoryPill').textContent=q.category; $('difficultyPill').textContent=q.difficulty; $('questionText').textContent=q.prompt;
 $('progressBar').style.width=`${(game.index/game.questions.length)*100}%`; $('hearts').textContent=game.hearts<10?'❤️'.repeat(Math.max(0,game.hearts)):'';
 q.choices.forEach((text,i)=>{ const b=document.createElement('button'); b.type='button'; b.className='choice'; b.textContent=text; b.addEventListener('click',()=>answer(i,b)); $('choiceList').appendChild(b); });
}
function answer(i){
 if(game.answered)return; game.answered=true; const q=game.questions[game.index]; const ok=i===q.answer; const buttons=[...document.querySelectorAll('.choice')]; buttons.forEach((b,idx)=>{b.disabled=true;if(idx===q.answer)b.classList.add('correct');if(idx===i&&!ok)b.classList.add('wrong');});
 if(ok){ game.correct++; game.streak++; game.best=Math.max(game.best,game.streak); game.xp += q.difficulty==='Boss'?25:15; state.history[q.id]=(state.history[q.id]||0)+1; if(state.history[q.id]>=2)state.mastered[q.id]=true; }
 else { game.streak=0; if(game.hearts<10)game.hearts--; }
 state.bestStreak=Math.max(state.bestStreak,game.best); state.xp += ok?(q.difficulty==='Boss'?25:15):2; saveState();
 $('feedbackCard').className=`card feedback ${ok?'good':'bad'}`; $('feedbackTitle').textContent=ok?'Correct — nice read.':'Not quite — lock in the pattern.'; $('feedbackText').textContent=q.explanation; $('patternText').textContent=q.pattern||'Review the tradeoff'; $('useText').textContent=q.use||'Senior engineering interviews'; const pre=$('codeBlock'); if(q.code){pre.classList.remove('hidden');pre.querySelector('code').textContent=q.code;}else pre.classList.add('hidden');
 $('nextBtn').textContent=(game.index===game.questions.length-1||game.hearts===0)?'See results':'Next question'; $('feedbackCard').scrollIntoView({behavior:'smooth',block:'start'});
}
function next(){ if(!game.answered)return; if(game.hearts===0||game.index===game.questions.length-1){finish();return;} game.index++; renderQuestion(); }
function finish(){ $('progressBar').style.width='100%'; const attempted=game.index+1; const pct=Math.round((game.correct/attempted)*100); $('resultIcon').textContent=pct>=80?'🏆':pct>=60?'⚔️':'🛡️'; $('resultTitle').textContent=pct>=80?'Excellent run!':pct>=60?'Solid progress':'Good practice round'; $('resultSummary').textContent=`You answered ${game.correct} of ${attempted} correctly. Review the misses, then come back for another run.`; $('resultCorrect').textContent=`${game.correct}/${attempted}`; $('resultXp').textContent=game.xp; $('resultBest').textContent=game.best; refreshHome(); showView('resultView'); }
function renderStudy(filter='All'){
 const categories=['All',...new Set(bank.map(q=>q.category))]; $('filterRow').innerHTML=''; categories.forEach(c=>{const b=document.createElement('button');b.type='button';b.className=`filter ${c===filter?'active':''}`;b.textContent=c;b.onclick=()=>renderStudy(c);$('filterRow').appendChild(b);});
 const items=filter==='All'?bank:bank.filter(q=>q.category===filter); $('studyList').innerHTML=''; items.forEach(q=>{const d=document.createElement('article');d.className=`card study-item ${state.mastered[q.id]?'mastered':''}`;d.innerHTML=`<h3>${q.prompt}</h3><p><b>${q.pattern}</b> · ${q.use||''}</p><details><summary>Reveal answer</summary><p><b>${q.choices[q.answer]}</b></p><p>${q.explanation}</p>${q.code?`<pre class="code"><code>${escapeHtml(q.code)}</code></pre>`:''}</details>`;$('studyList').appendChild(d);});
}
function escapeHtml(s){return s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));}
document.querySelectorAll('.mode').forEach(b=>b.addEventListener('click',()=>startGame(b.dataset.mode)));
$('playerName').addEventListener('click',editName);
$('nextBtn').addEventListener('click',next); $('quitBtn').addEventListener('click',()=>{refreshHome();showView('homeView')}); $('homeBtn').addEventListener('click',()=>{refreshHome();showView('homeView')}); $('studyBtn').addEventListener('click',()=>{renderStudy();showView('studyView')}); $('studyBackBtn').addEventListener('click',()=>{refreshHome();showView('homeView')}); $('resetBtn').addEventListener('click',()=>{if(confirm('Reset XP and mastered-question progress?')){state={...defaultState(),name:state.name};saveState();refreshHome();}});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));}
refreshHome();
