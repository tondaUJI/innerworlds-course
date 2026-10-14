// Quizzes + Supabase accounts. Loaded after app.js/extra.js/quizzes.*.js; shares their globals.
Object.assign(T.en,{google:"Continue with Google",signIn:"Sign in",signUp:"Create account",signOut:"Sign out",email:"Email",pass:"Password (min. 8 characters)",who:"I am…",noAcc:"No account? Create one",haveAcc:"Already have an account? Sign in",checkMail:"Check your email to confirm your account.",err:"Something went wrong",close:"Close",check:"Check answers",answerAll:"Answer every question first.",score:"Score",retry:"Try again",saved:"Result saved to your account.",loginToSave:"Sign in to save your results."});
Object.assign(T.es,{google:"Continuar con Google",signIn:"Iniciar sesión",signUp:"Crear cuenta",signOut:"Cerrar sesión",email:"Correo electrónico",pass:"Contraseña (mín. 8 caracteres)",who:"Soy…",noAcc:"¿No tienes cuenta? Crea una",haveAcc:"¿Ya tienes cuenta? Inicia sesión",checkMail:"Revisa tu correo para confirmar la cuenta.",err:"Algo ha ido mal",close:"Cerrar",check:"Comprobar respuestas",answerAll:"Responde primero a todas las preguntas.",score:"Puntuación",retry:"Intentarlo de nuevo",saved:"Resultado guardado en tu cuenta.",loginToSave:"Inicia sesión para guardar tus resultados."});
Object.assign(T.ca,{google:"Continua amb Google",signIn:"Inicia la sessió",signUp:"Crea un compte",signOut:"Tanca la sessió",email:"Correu electrònic",pass:"Contrasenya (mín. 8 caràcters)",who:"Sóc…",noAcc:"No tens compte? Crea'n un",haveAcc:"Ja tens compte? Inicia la sessió",checkMail:"Revisa el correu per a confirmar el compte.",err:"Alguna cosa ha anat malament",close:"Tanca",check:"Comprova les respostes",answerAll:"Respon primer a totes les preguntes.",score:"Puntuació",retry:"Torna-ho a provar",saved:"Resultat guardat al teu compte.",loginToSave:"Inicia la sessió per a guardar els resultats."});
Object.assign(T.el,{google:"Συνέχεια με Google",signIn:"Σύνδεση",signUp:"Δημιουργία λογαριασμού",signOut:"Αποσύνδεση",email:"Email",pass:"Κωδικός (τουλ. 8 χαρακτήρες)",who:"Είμαι…",noAcc:"Δεν έχεις λογαριασμό; Δημιούργησε έναν",haveAcc:"Έχεις ήδη λογαριασμό; Σύνδεση",checkMail:"Έλεγξε το email σου για να επιβεβαιώσεις τον λογαριασμό.",err:"Κάτι πήγε στραβά",close:"Κλείσιμο",check:"Έλεγχος απαντήσεων",answerAll:"Απάντησε πρώτα σε όλες τις ερωτήσεις.",score:"Βαθμολογία",retry:"Δοκίμασε ξανά",saved:"Το αποτέλεσμα αποθηκεύτηκε στον λογαριασμό σου.",loginToSave:"Συνδέσου για να αποθηκεύσεις τα αποτελέσματά σου."});
Object.assign(T.ro,{google:"Continuă cu Google",signIn:"Autentificare",signUp:"Creează cont",signOut:"Deconectare",email:"E-mail",pass:"Parolă (min. 8 caractere)",who:"Sunt…",noAcc:"Nu ai cont? Creează unul",haveAcc:"Ai deja cont? Autentifică-te",checkMail:"Verifică e-mailul pentru a confirma contul.",err:"Ceva nu a mers bine",close:"Închide",check:"Verifică răspunsurile",answerAll:"Răspunde mai întâi la toate întrebările.",score:"Scor",retry:"Încearcă din nou",saved:"Rezultatul a fost salvat în contul tău.",loginToSave:"Autentifică-te pentru a salva rezultatele."});
Object.assign(T.de,{google:"Weiter mit Google",signIn:"Anmelden",signUp:"Konto erstellen",signOut:"Abmelden",email:"E-Mail",pass:"Passwort (mind. 8 Zeichen)",who:"Ich bin…",noAcc:"Noch kein Konto? Jetzt erstellen",haveAcc:"Schon ein Konto? Anmelden",checkMail:"Bestätige dein Konto über die E-Mail, die wir dir geschickt haben.",err:"Etwas ist schiefgelaufen",close:"Schließen",check:"Antworten prüfen",answerAll:"Beantworte zuerst alle Fragen.",score:"Ergebnis",retry:"Nochmal versuchen",saved:"Ergebnis in deinem Konto gespeichert.",loginToSave:"Melde dich an, um deine Ergebnisse zu speichern."});

const $=id=>document.getElementById(id);
const cfg=window.IW_CONFIG||{};
const sb=cfg.url&&cfg.key&&window.supabase?supabase.createClient(cfg.url,cfg.key):null;
let user=null,res={},mode='in';

const render0=render;
render=function(){render0();paintAcc();paintBadges()};

function paintBadges(){
  document.querySelectorAll('.bdg').forEach(b=>{const r=res[b.dataset.m+b.dataset.k];b.textContent=r?` ✓ ${r.score}/${r.total}`:''});
}
function paintAcc(){
  const b=$('accBtn'),t=T[lang];
  b.hidden=!sb;
  b.textContent=user?`${t.signOut} (${user.email})`:t.signIn;
}
$('accBtn').onclick=()=>user?sb.auth.signOut():openAuth('in');

function openAuth(m){
  mode=m;const t=T[lang];
  $('at').textContent=m==='up'?t.signUp:t.signIn;
  $('as').textContent=m==='up'?t.signUp:t.signIn;
  $('asw').textContent=m==='up'?t.haveAcc:t.noAcc;
  $('aw').hidden=m!=='up';
  $('ap').autocomplete=m==='up'?'new-password':'current-password';
  $('am').textContent='';
  $('ad').showModal();
}
$('asw').onclick=e=>{e.preventDefault();openAuth(mode==='up'?'in':'up')};
$('ag').onclick=()=>sb.auth.signInWithOAuth({provider:'google',options:{redirectTo:location.origin+location.pathname}});
$('ax').onclick=()=>$('ad').close();
$('af').onsubmit=async e=>{
  e.preventDefault();
  const email=$('ae').value,password=$('ap').value;
  const {error}=mode==='up'
    ?await sb.auth.signUp({email,password,options:{data:{audience:$('aa').value}}})
    :await sb.auth.signInWithPassword({email,password});
  $('am').textContent=error?`${T[lang].err}: ${error.message}`:mode==='up'?T[lang].checkMail:'';
  if(!error&&mode==='in')$('ad').close();
};
async function loadResults(){
  const {data}=await sb.from('quiz_results').select('module,audience,score,total');
  res={};(data||[]).forEach(r=>res[r.module+r.audience]=r);
  render();
}
if(sb)sb.auth.onAuthStateChange((_,s)=>{
  user=s?.user||null;res={};
  const a=user?.user_metadata?.audience;if(a)aud=a;
  render();
  if(user)setTimeout(loadResults,0); // don't await supabase calls inside this callback
});

// ---- quiz dialog ----
el.addEventListener('click',e=>{const b=e.target.closest('.qbtn');if(b)openQuiz(+b.dataset.m,b.dataset.k)});
function openQuiz(m,k){
  const t=T[lang],qs=(QZ[lang]||QZ.en)[m][k];
  $('qb').innerHTML=`<h3>${M[m][lang][0]} — ${t.A[k]}</h3>`
    +qs.map((q,n)=>`<div class="q"><p>${n+1}. ${q[0]}</p>${q[1].map((o,i)=>`<label><input type="radio" name="q${n}" value="${i}"> ${o}</label>`).join('')}</div>`).join('')
    +`<p id="qr" role="status"></p><div class="act"><button class="btn" type="button" id="qc">${t.check}</button><button class="btn alt" type="submit">${t.close}</button></div>`;
  $('qc').onclick=()=>gradeQuiz(m,k,qs);
  $('qd').showModal();
}
async function gradeQuiz(m,k,qs){
  const t=T[lang],box=$('qb');
  const picks=qs.map((_,n)=>box.querySelector(`input[name=q${n}]:checked`));
  if(picks.some(p=>!p)){$('qr').textContent=t.answerAll;return}
  let score=0;
  qs.forEach((q,n)=>{
    const ok=+picks[n].value===q[2];score+=ok;
    const inputs=box.querySelectorAll(`input[name=q${n}]`);
    inputs.forEach((inp,i)=>{inp.disabled=true;if(i===q[2])inp.parentNode.classList.add('ok');else if(inp===picks[n])inp.parentNode.classList.add('no')});
    inputs[0].closest('.q').insertAdjacentHTML('beforeend',`<p class="why">${q[3]}</p>`);
  });
  let msg=`${t.score}: ${score}/${qs.length}. `;
  $('qc').textContent=t.retry;$('qc').onclick=()=>openQuiz(m,k);
  if(user){
    const {error}=await sb.from('quiz_results').upsert({user_id:user.id,module:m,audience:k,score,total:qs.length,updated_at:new Date().toISOString()});
    if(error)msg+=`${t.err}: ${error.message}`;else{msg+=t.saved;res[m+k]={score,total:qs.length};paintBadges()}
  }else if(sb)msg+=t.loginToSave;
  $('qr').textContent=msg;
}
render();
