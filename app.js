const B='https://aulavirtual.uji.es/mod/';
const T={
en:{nav1:"About",nav2:"Modules",nav3:"Quiz",
h1:"Understand your <em>inner world</em>. Support others'.",
lead:"A digital learning platform that promotes mental health literacy, emotional well-being and resilience among children, adolescents, educators and families.",
b1:"Explore the 10 modules",b2:"How it works",
aboutH:"Mental health is a continuum",
aboutP:"Everyone moves between green, yellow and red zones over time. No emotional state is permanent, and recognising our own experiences and those of others is a shared responsibility of the whole school community.",
zg:"<b>Green</b>Feeling well, coping, connected.",zy:"<b>Yellow</b>Stressed or struggling — time to use coping tools and talk.",zr:"<b>Red</b>Significant distress — seek appropriate support.",
fmtH:"What each module includes",
f1:"<strong>Avatar video</strong>A short presentation of the module, tailored to each audience.",
f2:"<strong>Journal page</strong>Downloadable: brief theory, reflection/journaling and quiz questions.",
f3:"<strong>Teacher &amp; youth-worker kit</strong>Materials to run lessons and workshops on the topic.",
f4:"<strong>Interactive &amp; digital</strong>Focused on awareness, coping strategies and resilience-building.",
modH:"Learning modules",modP:"Each module has content for three audiences. Pick yours to highlight its videos and questionnaires.",
tAll:"All",tT:"Teachers",tA1:"Adolescents 12–14",tA2:"Adolescents 15–18",
finH:"✅ Check what you know",finP:"Finished the modules? Test what you've learned with the final quiz.",finB:"Open the quiz file",
foot:"InnerWorlds Mental Health Platform. Educational content, not a diagnostic or clinical tool. If you or someone you know needs help, talk to a trusted adult or a health professional.",
mod:"MODULE",key:"Key message:",video:"▶ Video",quiz:"📝 Quiz",soon:"Content coming soon.",
A:{t:"Teachers",a1:"Ages 12–14",a2:"Ages 15–18"}},
es:{nav1:"Acerca de",nav2:"Módulos",nav3:"Quiz",
h1:"Comprende tu <em>mundo interior</em>. Apoya el de los demás.",
lead:"Una plataforma de aprendizaje digital que promueve la alfabetización en salud mental, el bienestar emocional y la resiliencia en niños, adolescentes, docentes y familias.",
b1:"Explora los 10 módulos",b2:"Cómo funciona",
aboutH:"La salud mental es un continuo",
aboutP:"Todas las personas se mueven entre las zonas verde, amarilla y roja a lo largo del tiempo. Ningún estado emocional es permanente, y reconocer nuestras experiencias y las de los demás es una responsabilidad compartida de toda la comunidad escolar.",
zg:"<b>Verde</b>Me siento bien, afronto, estoy conectado/a.",zy:"<b>Amarilla</b>Estrés o dificultad: momento de usar estrategias de afrontamiento y hablar.",zr:"<b>Roja</b>Malestar significativo: busca apoyo adecuado.",
fmtH:"Qué incluye cada módulo",
f1:"<strong>Vídeo con avatar</strong>Una breve presentación del módulo, adaptada a cada público.",
f2:"<strong>Hoja de diario</strong>Descargable: teoría breve, reflexión/diario y preguntas de quiz.",
f3:"<strong>Kit para docentes y educadores</strong>Materiales para organizar clases y talleres sobre el tema.",
f4:"<strong>Interactivo y digital</strong>Centrado en concienciación, estrategias de afrontamiento y resiliencia.",
modH:"Módulos de aprendizaje",modP:"Cada módulo tiene contenido para tres públicos. Elige el tuyo para resaltar sus vídeos y cuestionarios.",
tAll:"Todos",tT:"Docentes",tA1:"Adolescentes 12–14",tA2:"Adolescentes 15–18",
finH:"✅ Comprueba lo que sabes",finP:"¿Has terminado los módulos? Pon a prueba lo aprendido con el quiz final.",finB:"Abrir el archivo del quiz",
foot:"Plataforma InnerWorlds de salud mental. Contenido educativo, no es una herramienta diagnóstica ni clínica. Si tú o alguien que conoces necesita ayuda, habla con una persona adulta de confianza o un profesional de la salud.",
mod:"MÓDULO",key:"Mensaje clave:",video:"▶ Vídeo",quiz:"📝 Quiz",soon:"Contenido próximamente.",
A:{t:"Docentes",a1:"12–14 años",a2:"15–18 años"}},
ca:{nav1:"Sobre el curs",nav2:"Mòduls",nav3:"Quiz",
h1:"Comprén el teu <em>món interior</em>. Dona suport al dels altres.",
lead:"Una plataforma d'aprenentatge digital que promou l'alfabetització en salut mental, el benestar emocional i la resiliència en xiquets, adolescents, docents i famílies.",
b1:"Explora els 10 mòduls",b2:"Com funciona",
aboutH:"La salut mental és un continu",
aboutP:"Totes les persones es mouen entre les zones verda, groga i roja al llarg del temps. Cap estat emocional és permanent, i reconéixer les nostres experiències i les dels altres és una responsabilitat compartida de tota la comunitat escolar.",
zg:"<b>Verda</b>Em senc bé, afronte, estic connectat/da.",zy:"<b>Groga</b>Estrés o dificultat: moment d'usar estratègies d'afrontament i parlar.",zr:"<b>Roja</b>Malestar significatiu: busca suport adequat.",
fmtH:"Què inclou cada mòdul",
f1:"<strong>Vídeo amb avatar</strong>Una breu presentació del mòdul, adaptada a cada públic.",
f2:"<strong>Full de diari</strong>Descarregable: teoria breu, reflexió/diari i preguntes de quiz.",
f3:"<strong>Kit per a docents i educadors</strong>Materials per a organitzar classes i tallers sobre el tema.",
f4:"<strong>Interactiu i digital</strong>Centrat en conscienciació, estratègies d'afrontament i resiliència.",
modH:"Mòduls d'aprenentatge",modP:"Cada mòdul té contingut per a tres públics. Tria el teu per a ressaltar els seus vídeos i qüestionaris.",
tAll:"Tots",tT:"Docents",tA1:"Adolescents 12–14",tA2:"Adolescents 15–18",
finH:"✅ Comprova el que saps",finP:"Has acabat els mòduls? Posa a prova el que has aprés amb el quiz final.",finB:"Obri l'arxiu del quiz",
foot:"Plataforma InnerWorlds de salut mental. Contingut educatiu, no és una eina diagnòstica ni clínica. Si tu o algú que coneixes necessita ajuda, parla amb una persona adulta de confiança o un professional de la salut.",
mod:"MÒDUL",key:"Missatge clau:",video:"▶ Vídeo",quiz:"📝 Quiz",soon:"Contingut pròximament.",
A:{t:"Docents",a1:"12–14 anys",a2:"15–18 anys"}}
};
// per module: ids + [title, subtitle, summary, key message] per language
const M=[
{id:{t:[5899407,5899413],a1:[5899408,5899415],a2:[5899410,5899416]},
en:["What is Mental Health?","The continuum model: green / yellow / red zones","A universal approach where everyone practises the same foundations: anonymous check-ins, grounding body scans, mindful observation and private self-reflection. Personal zone charts and coping menus build a shared language.","No emotional state is permanent; fluctuation is normal and noticing it in ourselves and others is a collective responsibility."],
es:["¿Qué es la salud mental?","El modelo del continuo: zonas verde / amarilla / roja","Un enfoque universal donde todas las personas practican las mismas bases: check-ins anónimos, escaneos corporales de anclaje, observación consciente y autorreflexión privada. Los gráficos personales de zonas y los menús de afrontamiento crean un lenguaje común.","Ningún estado emocional es permanente; fluctuar es normal y reconocerlo en nosotros y en los demás es una responsabilidad colectiva."],
ca:["Què és la salut mental?","El model del continu: zones verda / groga / roja","Un enfocament universal on totes les persones practiquen les mateixes bases: check-ins anònims, escàners corporals d'ancoratge, observació conscient i autoreflexió privada. Els gràfics personals de zones i els menús d'afrontament creen un llenguatge comú.","Cap estat emocional és permanent; fluctuar és normal i reconéixer-ho en nosaltres i en els altres és una responsabilitat col·lectiva."]},
{id:null,
en:["Distress vs disorder","Normal fluctuation; when to pay closer attention","Learn to tell everyday emotional ups and downs from signs that call for closer attention.",""],
es:["Malestar vs trastorno","Fluctuación normal; cuándo prestar más atención","Aprende a distinguir los altibajos emocionales cotidianos de las señales que requieren más atención.",""],
ca:["Malestar vs trastorn","Fluctuació normal; quan prestar més atenció","Aprén a distingir els alts i baixos emocionals quotidians dels senyals que requereixen més atenció.",""]},
{id:{t:[5982544,5982545],a1:[5982547,5982548],a2:[5982550,5982551]},
en:["Emotions & self-awareness","Emotional vocabulary, triggers, granularity","Move from broad emotional labels to precise words, linking feelings to triggers and body sensations with emotion wheels and check-ins.","The more precisely we name what we feel, the better we understand and regulate it."],
es:["Emociones y autoconciencia","Vocabulario emocional, desencadenantes, granularidad","Pasa de etiquetas emocionales generales a palabras precisas, vinculando sentimientos con desencadenantes y sensaciones corporales mediante ruedas de emociones y check-ins.","Cuanto más precisamente nombramos lo que sentimos, mejor lo comprendemos y lo regulamos."],
ca:["Emocions i autoconsciència","Vocabulari emocional, desencadenants, granularitat","Passa d'etiquetes emocionals generals a paraules precises, vinculant sentiments amb desencadenants i sensacions corporals mitjançant rodes d'emocions i check-ins.","Com més precisament nomenem el que sentim, millor ho comprenem i ho regulem."]},
{id:{t:[5983389,5983390],a1:[5983392,5983393],a2:[5983395,5983396]},
en:["Common challenges","Early signs of depression, anxiety, ADHD and eating disorders","How these difficulties can feel from the inside. Behaviour that looks like laziness, rudeness or fussiness may hide very different experiences. The aim is empathy, not diagnosis.","What we see outside doesn't always show what someone experiences inside. Listen without judgement and know when to seek support."],
es:["Desafíos frecuentes","Primeras señales de depresión, ansiedad, TDAH y trastornos alimentarios","Cómo se pueden vivir estas dificultades desde dentro. Conductas que parecen pereza, mala educación o manías pueden esconder experiencias muy distintas. El objetivo es la empatía, no diagnosticar.","Lo que vemos por fuera no siempre muestra lo que alguien vive por dentro. Escucha sin juzgar y sabe cuándo buscar apoyo."],
ca:["Reptes freqüents","Primers senyals de depressió, ansietat, TDAH i trastorns alimentaris","Com es poden viure aquestes dificultats des de dins. Conductes que semblen mandra, mala educació o manies poden amagar experiències molt diferents. L'objectiu és l'empatia, no diagnosticar.","Allò que veiem per fora no sempre mostra el que algú viu per dins. Escolta sense jutjar i sàpigues quan buscar suport."]},
{id:{t:[5983613,5983615],a1:[5983618,5983619],a2:[5983621,5983622]},
en:["Stigma & help-seeking","Why people stay silent; reframing strength","Why people stay silent: fear of judgement, privacy worries, the belief they must cope alone. Silence is often self-protection.","Asking for help is a strength and a learnable skill. Calm, curious responses open the door; rushed ones close it."],
es:["Estigma y búsqueda de ayuda","Por qué las personas callan; redefinir la fortaleza","Por qué se guarda silencio: miedo al juicio, preocupaciones de privacidad, la creencia de que hay que poder solo. El silencio suele ser autoprotección.","Pedir ayuda es una fortaleza y una habilidad que se aprende. Respuestas calmadas y curiosas abren la puerta; las apresuradas la cierran."],
ca:["Estigma i cerca d'ajuda","Per què les persones callen; redefinir la fortalesa","Per què es guarda silenci: por al judici, preocupacions de privacitat, la creença que cal poder sol. El silenci sol ser autoprotecció.","Demanar ajuda és una fortalesa i una habilitat que s'aprén. Respostes calmades i curioses obrin la porta; les precipitades la tanquen."]},
{id:{t:[5986842,5986843],a1:[5986845,5986846],a2:[5986848,5986849]},
en:["Resilience & coping","Bounce-back skills; problem-solving; positive youth development","Resilience as a skill: identify the problem, weigh options, try a solution, seek support and learn from the outcome.","Resilience doesn't mean never falling — it means learning to bounce back."],
es:["Resiliencia y afrontamiento","Recuperarse; resolución de problemas; desarrollo juvenil positivo","La resiliencia como habilidad: identificar el problema, valorar opciones, probar una solución, buscar apoyo y aprender del resultado.","Resiliencia no es no caer nunca, sino aprender a levantarse."],
ca:["Resiliència i afrontament","Recuperar-se; resolució de problemes; desenvolupament juvenil positiu","La resiliència com a habilitat: identificar el problema, valorar opcions, provar una solució, buscar suport i aprendre del resultat.","Resiliència no és no caure mai, sinó aprendre a alçar-se."]},
{id:{t:[5987017,5987018],a1:[5987020,5987021],a2:[5987023,5987024]},
en:["Healthy habits","Sleep, movement, nutrition, mindfulness, digital balance","Five connected daily habits that shape mood, concentration, energy and resilience. No perfect routines — just spotting what could improve.","Small, consistent changes make a meaningful difference over time."],
es:["Hábitos saludables","Sueño, movimiento, nutrición, mindfulness, equilibrio digital","Cinco hábitos diarios conectados que influyen en el ánimo, la concentración, la energía y la resiliencia. Sin rutinas perfectas: solo detectar qué se puede mejorar.","Los cambios pequeños y constantes marcan una diferencia importante con el tiempo."],
ca:["Hàbits saludables","Son, moviment, nutrició, mindfulness, equilibri digital","Cinc hàbits diaris connectats que influeixen en l'ànim, la concentració, l'energia i la resiliència. Sense rutines perfectes: només detectar què es pot millorar.","Els canvis xicotets i constants marquen una diferència important amb el temps."]},
{id:{t:[5987521,5987522],a1:[5987524,5987525],a2:[5987527,5987528]},
en:["Digital life & social media","Algorithmic triggers; screen time; digital literacy","How platforms hold attention through unpredictable rewards, endless scrolling and personalised feeds, and why self-regulation is harder in adolescence.","Not avoiding technology, but algorithmic self-awareness: what our feeds show us and how it makes us feel."],
es:["Vida digital y redes sociales","Desencadenantes algorítmicos; tiempo de pantalla; alfabetización digital","Cómo las plataformas retienen la atención con recompensas impredecibles, scroll infinito y feeds personalizados, y por qué la autorregulación es más difícil en la adolescencia.","No se trata de evitar la tecnología, sino de tener autoconciencia algorítmica: qué nos muestran los feeds y cómo nos hacen sentir."],
ca:["Vida digital i xarxes socials","Desencadenants algorítmics; temps de pantalla; alfabetització digital","Com les plataformes retenen l'atenció amb recompenses impredictibles, scroll infinit i feeds personalitzats, i per què l'autoregulació és més difícil en l'adolescència.","No es tracta d'evitar la tecnologia, sinó de tindre autoconsciència algorítmica: què ens mostren els feeds i com ens fan sentir."]},
{id:{t:[5988971,5988972],a1:[5988974,5988975],a2:[5988977,5988978]},
en:["Identity, culture & belonging","Multicultural stress; LGBTQ+; refugee experience; intersectionality","Identity is layered: culture, language, family, gender, beliefs, ability and migration all interact. Inclusion supports wellbeing; repeated exclusion harms it.","Belonging is built through small everyday actions: respect, inclusive language and no assumptions."],
es:["Identidad, cultura y pertenencia","Estrés multicultural; LGBTQ+; experiencia refugiada; interseccionalidad","La identidad tiene capas: cultura, lengua, familia, género, creencias, capacidades y migración interactúan. La inclusión favorece el bienestar; la exclusión repetida lo daña.","La pertenencia se construye con pequeñas acciones cotidianas: respeto, lenguaje inclusivo y sin suposiciones."],
ca:["Identitat, cultura i pertinença","Estrés multicultural; LGBTQ+; experiència refugiada; interseccionalitat","La identitat té capes: cultura, llengua, família, gènere, creences, capacitats i migració interactuen. La inclusió afavoreix el benestar; l'exclusió repetida el danya.","La pertinença es construïx amb xicotetes accions quotidianes: respecte, llenguatge inclusiu i sense suposicions."]},
{id:{t:[5988998,5988999],a1:[5989001,5989002],a2:[5989004,5989005]},
en:["Asking big questions","Meaning, values, uncertainty, philosophy as a coping tool","\"Who am I?\" and \"What matters to me?\" are natural questions of growing up. Exploring them openly helps us cope with uncertainty without one perfect answer.","Our values are a compass that turns uncertainty into purposeful action."],
es:["Hacerse grandes preguntas","Sentido, valores, incertidumbre, la filosofía como herramienta de afrontamiento","«¿Quién soy?» y «¿Qué me importa?» son preguntas naturales al crecer. Explorarlas abiertamente nos ayuda a afrontar la incertidumbre sin necesitar una respuesta perfecta.","Nuestros valores son una brújula que convierte la incertidumbre en acción con propósito."],
ca:["Fer-se grans preguntes","Sentit, valors, incertesa, la filosofia com a eina d'afrontament","«Qui sóc?» i «Què m'importa?» són preguntes naturals en créixer. Explorar-les obertament ens ajuda a afrontar la incertesa sense necessitar una resposta perfecta.","Els nostres valors són una brúixola que converteix la incertesa en acció amb propòsit."]}
];
const sv=(k,v)=>{try{return v===undefined?localStorage.getItem(k):localStorage.setItem(k,v)}catch(e){}};
let lang=sv('iw-lang')||(navigator.language||'en').slice(0,2);
if(!T[lang])lang='en';
let aud='all';
const el=document.getElementById('mods');
function render(){
  const t=T[lang];
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i]').forEach(e=>e.innerHTML=t[e.dataset.i]);
  document.querySelector('.lang').value=lang;
  el.innerHTML=M.map((m,i)=>{const c=m[lang];return `<article class="mod"><div class="num">${t.mod} ${i+1}</div><h3>${c[0]}</h3><p class="sub">${c[1]}</p><p>${c[2]}</p>${c[3]?`<div class="msg"><b>${t.key}</b> ${c[3]}</div>`:''}<div class="aud">${m.id?Object.keys(t.A).map(k=>`<div class="row" data-a="${k}"><span>${t.A[k]}</span><span><a href="${B}url/view.php?id=${m.id[k][0]}">${t.video}</a><a href="${B}quiz/view.php?id=${m.id[k][1]}">${t.quiz}</a></span></div>`).join(''):`<p class="soon">${t.soon}</p>`}</div></article>`}).join('');
  filter();
}
function filter(){
  document.querySelectorAll('.tabs button').forEach(x=>x.setAttribute('aria-pressed',x.dataset.a===aud));
  el.querySelectorAll('.row').forEach(r=>r.style.display=aud==='all'||r.dataset.a===aud?'':'none');
}
document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>{aud=b.dataset.a;filter()});
document.querySelector('.lang').onchange=e=>{lang=e.target.value;sv('iw-lang',lang);render()};
render();
