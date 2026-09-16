function copyRepo(){
  const t=document.getElementById('repoUrl').innerText;
  navigator.clipboard.writeText(t).then(()=>alert('Repo URL copied! Now: git clone '+t));
}

// --- Lab 1: terminal simulator ---
const out=document.getElementById('termOut');
const inp=document.getElementById('termIn');
let state={cloned:false,branch:null,staged:false,committed:false,pushed:false,pr:false};
function print(t){const d=document.createElement('div');d.innerHTML=t;out.appendChild(d);out.scrollTop=out.scrollHeight;}
inp&&inp.addEventListener('keydown',e=>{
  if(e.key!=='Enter')return;
  const raw=inp.value.trim();inp.value='';
  print('<span style="color:#9fb0d8">$ '+raw+'</span>');
  const [cmd,...rest]=raw.split(' ');
  const arg=rest.join(' ');
  if(cmd==='help')print("commands: clone | branch &lt;name&gt; | add | commit \"msg\" | push | pr | log | status | clear");
  else if(cmd==='clone'){state.cloned=true;print('Cloning into <b>studying_github_collab</b>... done ✓');}
  else if(!state.cloned)print('❌ Clone first: type <b>clone</b>');
  else if(cmd==='branch'){state.branch=arg||'you/my-feature';print('Switched to new branch <b>'+state.branch+'</b> ⑂');}
  else if(cmd==='add'){state.staged=true;print('Staged changes ✓ (git status shows green)');}
  else if(cmd==='commit'){if(!state.staged)print('❌ Nothing staged. Run <b>add</b> first.');else{state.committed=true;print('Committed: "'+(arg||'my change')+'" ✓');}}
  else if(cmd==='push'){if(!state.committed)print('❌ Nothing to push. commit first.');else if(!state.branch)print('❌ Create a branch first.');else{state.pushed=true;print('Pushed <b>'+state.branch+'</b> to origin ✓ — open a PR with <b>pr</b>');}}
  else if(cmd==='pr'){if(!state.pushed)print('❌ Push first.');else{state.pr=true;document.getElementById('mergeDot').style.background='#3ddc84';print('🎉 PR opened! Review → Approve → Merge. You did the full flow!');}}
  else if(cmd==='log')print('a1b2c3 Add readme (main)<br>d4e5f6 '+(state.committed?'Your commit ('+state.branch+')':'...') );
  else if(cmd==='status')print(JSON.stringify(state));
  else if(cmd==='clear')out.innerHTML='';
  else print('unknown: '+cmd+' (try help)');
});

// --- Lab 2: visualizer ---
const vizInfo={1:'main is at commit 1. Create a branch to start work.',2:'Still on main. Branch off now — never commit features to main.',3:'⑂ You branched! Commits 3 live only on your branch.',4:'Second commit on your branch. main untouched — safe collaboration.',5:'⑃ Merged via PR. main now includes your work. Delete branch, pull, repeat.'};
document.querySelectorAll('.viz button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.viz button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
  document.getElementById('vizOut').innerText=vizInfo[b.dataset.c];
});

// --- Lab 3: PR simulator ---
let pr=0;
function prStep(n){
  const msgs=['','Status: ✅ branch pushed to origin.','Status: ✅ PR #'+Math.floor(Math.random()*90+10)+' opened — teammates notified.','Status: ✅ review requested. Tip: link issue with “Closes #n”.','Status: 🎉 approved & merged into main! Delete branch, git pull, celebrate.'];
  if(n!==pr+1){document.getElementById('prOut').innerText='Do steps in order! Next: step '+(pr+1);return;}
  pr=n;document.querySelectorAll('#prSteps li')[n-1].classList.add('done');
  document.getElementById('prOut').innerText=msgs[n];
}

// --- Lab 4: conflict ---
function resolve(which){
  const m={main:'Our study group meets on <b>Monday</b>.',you:'Our study group meets on <b>Friday</b>.',both:'Our study group meets on <b>Monday and Friday</b>.'};
  document.getElementById('confOut').innerHTML='✅ Resolved! File now says: '+m[which]+'<br>Next: <code>git add . && git commit && git push</code> — markers removed, PR can merge.';
}

// --- Quiz ---
const QUIZ=[
 ['What is the difference between Git and GitHub?',['They are the same','Git is local version control, GitHub hosts repos online','GitHub works without Git','Git is a website'],1],
 ['Golden rule of collaboration?',['Always commit to main','Never commit directly to main, use branches','Push without pulling','Share passwords'],1],
 ['How do you start contributing to the demo repo?',['git clone <url>','Delete main','Email the code','Fork the website'],0],
 ['Good branch name?',['final2','asdf','ana/add-bio','main-copy'],2],
 ['Correct order?',['push→commit→add','edit→add→commit→push','commit→push→edit','merge→branch→clone'],1],
 ['What is a Pull Request?',['A request to delete the repo','A proposal to merge one branch into another, with review','An issue comment','A GitHub payment'],1],
 ['You see <<<<<<< HEAD. What is it?',['A merge conflict marker','A virus','A Python error','A secret key'],0],
 ['After a PR is merged, you should…?',['Keep working on the same branch forever','Delete the branch, switch to main, pull','Force-push main','Rename the repo'],1],
 ['“Closes #3” in a PR body does what?',['Nothing','Auto-closes issue #3 on merge','Deletes branch #3','Tags 3 people'],1],
 ['Fork is best when…?',['You are on the core team','You are an outside contributor without write access','You want to delete history','Never'],1],
];
const qb=document.getElementById('quizBox');
QUIZ.forEach((q,i)=>{
  const d=document.createElement('div');d.className='q';d.innerHTML='<b>'+(i+1)+'. '+q[0]+'</b>';
  q[1].forEach((o,j)=>{const l=document.createElement('label');l.innerHTML='<input type="radio" name="q'+i+'" value="'+j+'"> '+o;d.appendChild(l);});
  qb.appendChild(d);
});
function gradeQuiz(){
  let s=0;QUIZ.forEach((q,i)=>{
    const sel=document.querySelector('input[name=q'+i+']:checked');
    const labels=document.querySelectorAll('.q')[i].querySelectorAll('label');
    labels.forEach(l=>l.classList.remove('correct','wrong'));
    labels[q[2]].classList.add('correct');
    if(sel&&+sel.value===q[2])s++;else if(sel)labels[+sel.value].classList.add('wrong');
  });
  document.getElementById('quizScore').innerText='Score: '+s+' / '+QUIZ.length+(s===10?' 🏆 GitHub ready!':s>=7?' 💪 almost there!':' 📖 review modules 3–7');
}

// --- Checklist ---
const ITEMS=['Installed Git + configured name/email','Cloned studying_github_collab','Created my branch (name/task)','Edited practice/team-roster.json + committed','Pushed branch to GitHub','Opened a Pull Request','Got a review / approved someone else','Resolved a merge conflict','Linked an Issue with “Closes #n”','Merged, deleted branch, pulled main'];
const ul=document.getElementById('checks');
let done=JSON.parse(localStorage.getItem('collabDone')||'[]');
ITEMS.forEach((t,i)=>{
  const li=document.createElement('li');li.innerHTML='<input type="checkbox" '+(done.includes(i)?'checked':'')+'> <span>'+t+'</span>';
  if(done.includes(i))li.classList.add('done');
  li.onclick=e=>{if(e.target.tagName==='INPUT')return;const c=li.querySelector('input');c.checked=!c.checked;li.classList.toggle('done',c.checked);
    done=c.checked?[...new Set([...done,i])]:done.filter(x=>x!==i);localStorage.setItem('collabDone',JSON.stringify(done));};
  li.querySelector('input').onchange=e=>{li.classList.toggle('done',e.target.checked);
    done=e.target.checked?[...new Set([...done,i])]:done.filter(x=>x!==i);localStorage.setItem('collabDone',JSON.stringify(done));};
  ul.appendChild(li);
});
