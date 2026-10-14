// Quizzes per module, per audience (t = teachers, a1 = 12–14, a2 = 15–18).
// Question: [text, [option, option, option], indexOfCorrect, explanation]
const QZ={};
QZ.en=[
// 1 — What is Mental Health?
{t:[
["A student who is usually cheerful has been withdrawn for a week. According to the continuum model, what is the most helpful reading?",["They have moved permanently into the red zone","Their zone may be shifting, so check in privately and calmly","Moods are personal; it is best not to intervene"],1,"Zones fluctuate over time. A calm, private check-in respects the student and keeps the door open."],
["Why offer universal practices (anonymous check-ins, zone charts, coping menus) to the whole class?",["To identify which students have a disorder","To replace professional support","To build a shared language and normalise fluctuation for everyone"],2,"Universal practices make emotional awareness part of school culture without singling anyone out."],
["Which statement best matches the continuum model?",["Zones are fixed personality traits","Everyone moves between zones over time","The yellow zone means a person has a disorder"],1,"Every person's well-being fluctuates; no zone is permanent."]],
a1:[
["What does the green zone mean?",["You must never feel sad","You are generally feeling well and coping","You are in trouble"],1,"Green means feeling okay and coping. You can still have sad moments in green."],
["You notice you are in the yellow zone before a test. What could help?",["Take slow breaths or talk to someone you trust","Pretend nothing is happening","Stay in your room all day"],0,"Coping tools and talking to someone can help you move back toward green."],
["\"If I'm in the red zone today, I'll be there forever.\" What is true?",["Zones and feelings change over time","It is permanent for some people","Nothing can change it"],0,"No emotional state is permanent. Help and time make a difference."]],
a2:[
["How does the continuum approach differ from a simple \"healthy / ill\" split?",["It says mental health shifts along a spectrum for everyone","It says only some people have mental health","It says zones never change"],0,"Mental health is dynamic. Everyone moves along the continuum depending on context and support."],
["A friend has been in the yellow zone for weeks, with changes in sleep and appetite. What is a good response?",["Tell them to toughen up","Wait until things get worse","Invite them to talk, listen, and encourage them to seek support"],2,"Listening without judgement and encouraging support helps before things escalate."],
["Why are check-ins often anonymous?",["They lower the fear of being judged and encourage honest reflection","To hide results from everyone forever","They are not meant to be taken seriously"],0,"Anonymity reduces stigma and makes honest self-reflection easier."]]},
// 2 — Distress vs disorder
{t:[
["Which situation suggests a student may need closer attention?",["A bad mood after losing a match","Nervousness before a presentation","Low mood and loss of interest lasting weeks that affect school and friendships"],2,"Duration, intensity and impact on daily life separate normal distress from something that needs more attention."],
["What is the teacher's role when noticing such signs?",["Diagnose and let the class know","Notice, talk with care and connect the student with counselling or family","Wait until the end of the term"],1,"Teachers do not diagnose. They notice, listen and connect students with appropriate support."],
["Which statement about distress is accurate?",["It is a normal response to challenges and usually eases","It is always a disorder","It never needs support"],0,"Distress is common and often temporary, but support can still help."]],
a1:[
["Feeling really nervous before an exam is most likely...",["Normal stress","Always a serious problem","Something to hide"],0,"Stress before challenges is normal. Breathing and planning can help."],
["Which is a sign you should tell a trusted adult?",["Being annoyed after losing a game","Feeling very sad most days for weeks and not enjoying anything","Being tired after sports"],1,"Feelings that last for weeks and get in the way of daily life are worth sharing."],
["A friend is sad for a day after an argument. What helps most?",["Laugh at them","Tell everyone they have a disorder","Be kind and listen"],2,"Kindness and listening are always helpful, and sadness after an argument is normal."]],
a2:[
["Which factors help tell distress from a disorder?",["Duration, intensity and impact on daily functioning","Only how the person looks","Only how often they post online"],0,"Looking at how long, how strong and how much it interferes with life gives a better picture."],
["A classmate is stressed during exams but still sleeps, eats and sees friends. Most likely this is...",["A disorder that needs treatment","A normal stress response, although coping tools can still help","Nothing at all, so no support is ever needed"],1,"Stress is common. Daily functioning is largely intact, but coping strategies still help."],
["Why avoid casually saying \"you're so depressed\" to a friend?",["Only professionals diagnose, and casual labels trivialise and stigmatise","Because friends are never sad","Because words never matter"],0,"Casual labels can hurt and discourage people from seeking real help."]]},
// 3 — Emotions & self-awareness
{t:[
["Why teach emotional granularity?",["Precise words help students understand and regulate what they feel","It makes students feel less","It replaces the need for conversation"],0,"The more precisely we name an emotion, the better we can understand and manage it."],
["A student says \"I feel bad.\" Which follow-up is most helpful?",["\"Don't be silly.\"","\"Is it closer to nervous, disappointed or lonely?\"","\"Everyone feels bad sometimes.\""],1,"Offering options helps refine a broad label into something more precise."],
["How should an emotion wheel be used?",["To diagnose students","To rank emotions as good or bad","To refine broad feelings into more precise words"],2,"Emotion wheels are vocabulary tools, not diagnostic ones."]],
a1:[
["Instead of \"bad,\" which word may be more precise?",["Disappointed","Whatever","Nothing"],0,"Precise words like disappointed, nervous or lonely help you understand yourself."],
["Why notice body sensations?",["They are always random","A racing heart or tight stomach can be clues about what you feel","They never matter"],1,"Your body often shows feelings before you can name them."],
["What is a trigger?",["A secret","Something that sets off a feeling","A type of food"],1,"Triggers are events or situations that spark a feeling."]],
a2:[
["Why does it help to tell \"frustrated\" from \"overwhelmed\"?",["They need different responses","They are exactly the same","Only teachers need to know"],0,"Frustration may call for a new approach; overwhelm may call for slowing down or support."],
["Emotional granularity is associated with...",["Feeling less","Better emotion regulation and communication","Avoiding feelings"],1,"People who name emotions precisely tend to regulate and communicate them better."],
["What does a feeling-and-trigger check-in include?",["The feeling, what happened just before and any body signal","Only the feeling's colour","Only a grade"],0,"Linking feeling, trigger and body signal builds self-awareness."]]},
// 4 — Common challenges
{t:[
["A student seems \"lazy\": missed homework, tired, lost interest. What is an empathic first step?",["Give a punishment","Consider possible internal causes and talk privately without judging","Tell the class"],1,"Behaviour can reflect depression, anxiety or other difficulties. Curiosity comes before judgement."],
["ADHD-related distractibility is best understood as...",["Rudeness","A difference in regulating attention, not a lack of effort","Lack of intelligence"],1,"It is about attention regulation and not willpower or manners."],
["What is appropriate if you notice possible signs of an eating disorder?",["Comment on the student's weight","Avoid weight and food comments and connect the student with support","Ignore it"],1,"Do not diagnose or comment on weight. Connect the student with appropriate support."]],
a1:[
["Someone seems fussy about food and skips meals. What is a kind response?",["Make fun of them","Don't judge, be kind and tell a trusted adult if you are worried","Force them to eat"],1,"Kindness plus involving a trusted adult is safer than pressure or jokes."],
["Anxiety can feel like...",["A racing heart and worries that are hard to switch off","Being lazy","Having no feelings"],0,"Anxiety often has body signs and worry that keeps going."],
["Can you tell from the outside whether someone has depression?",["Yes, always","No, many signs are on the inside","Only by their grades"],1,"What we see does not always show what someone feels inside."]],
a2:[
["Which pattern may suggest depression rather than laziness?",["Feeling tired once after a late night","Persistent exhaustion, loss of interest and hopelessness lasting weeks","Taking a break from studying"],1,"Persistent changes in energy, interest and mood over weeks deserve attention and support."],
["A friend confides in you about struggling. What is the best response?",["Listen without judgement, thank them and encourage professional support","Say \"just cheer up\"","Share it with the whole class"],0,"Listening, respecting privacy and encouraging help are the key steps."],
["Why avoid trying to diagnose friends?",["Because only qualified professionals can; our aim is awareness and empathy","Because mental health is not real","Because friends are never affected"],0,"We build understanding and support; diagnosis belongs to professionals."]]},
// 5 — Stigma & help-seeking
{t:[
["Which response makes it easier for a student to open up?",["\"You're overreacting.\"","\"Quick, tell me what's wrong.\"","Calm and curious: \"I'm here, take your time.\""],2,"A calm, unhurried tone signals safety."],
["Silence about problems is best understood as...",["Stubbornness","Self-protection when asking for help feels unsafe","Lack of interest"],1,"People may stay silent due to fear of judgement, privacy concerns or feeling they must cope alone."],
["A student tells you something worrying. What should you do?",["Promise to keep it totally secret","Listen, don't promise secrecy you can't keep, and connect them with support following your protocol","Change the subject"],1,"Be honest about what you must share and follow school safeguarding steps."]],
a1:[
["Asking for help is...",["A weakness","A strength and a skill you can learn","Only for adults"],1,"Reaching out is brave and gets easier with practice."],
["A friend tells you something worrying. What is a good first step?",["Listen, say you care and encourage them to tell a trusted adult","Laugh it off","Tell everyone"],0,"Support your friend and bring in a trusted adult."],
["Which reaction closes the door on someone opening up?",["\"Stop being dramatic.\"","\"Thank you for telling me.\"","\"I'm here to listen.\""],0,"Dismissive replies make people less likely to ask again."]],
a2:[
["Which belief is a common barrier to seeking help?",["\"I should handle everything alone.\"","\"Support is available.\"","\"Others understand.\""],0,"Many people stay silent because they believe they must cope alone."],
["How can we reframe strength?",["Never needing anyone","Recognising limits and seeking support is a skill","Hiding feelings"],1,"Knowing when to ask for help is a sign of maturity."],
["How can you support someone without pressuring them?",["Give them time, ask open questions and respect their pace","Demand details immediately","Tell others for them"],0,"Patience and open questions keep the conversation safe."]]},
// 6 — Resilience & coping
{t:[
["Resilience is best described as...",["A fixed trait some people lack","A skill that can be learned and strengthened","Never showing emotion"],1,"Resilience grows through coping skills, support and problem-solving."],
["Which sequence best fits the problem-solving steps?",["Ignore, wait, forget","Identify the problem, consider options, try one, seek support, reflect","Blame, avoid, repeat"],1,"Structured problem-solving builds confidence."],
["A student fails a test. Which response builds resilience?",["Tell them it doesn't matter","Normalise the setback and help them plan the next step","Compare them to others"],1,"Normalising setbacks and planning a next step shows that recovery is possible."]],
a1:[
["Resilience means...",["Never falling","Learning how to bounce back","Being perfect"],1,"Everyone falls sometimes; resilience is learning to get back up."],
["What is a good first step when solving a problem?",["Decide exactly what the problem is","Run away","Wait for it to vanish"],0,"Naming the problem clearly is the first step."],
["Which is a healthy coping strategy?",["Talking to someone, taking a walk or breathing slowly","Avoiding everything forever","Staying angry"],0,"Healthy coping strategies calm the body and open options."]],
a2:[
["After a setback, which approach shows problem-solving?",["List options, try one, then evaluate what happened","Give up at once","Blame others"],0,"Try, evaluate and adjust is the core loop."],
["What role does support play in resilience?",["It is a sign of weakness","It is central: resilience grows with connection","It is unnecessary"],1,"Support is a protective factor, not a weakness."],
["Positive youth development focuses on...",["Fixing flaws only","Strengths, connection and contribution","Avoiding challenge"],1,"It builds on strengths and positive relationships."]]},
// 7 — Healthy habits
{t:[
["Which five habits does the module focus on?",["Sleep, movement, nutrition, mindfulness, digital balance","Homework, sports, music, art, reading","Diet, gaming, social media, shopping, TV"],0,"These five areas influence mood, concentration, energy and resilience."],
["What is the best classroom approach to habits?",["Demand perfect routines","Small, realistic changes","Ignore them"],1,"Small consistent changes are easier to keep."],
["How much sleep do most adolescents need?",["5–6 hours","8–10 hours","12–14 hours"],1,"Most adolescents need roughly 8–10 hours."]],
a1:[
["How many hours of sleep do most people your age need?",["8–10","3–4","14–16"],0,"Around 8–10 hours supports mood and concentration."],
["What is a mindful pause?",["Stopping for a minute to notice your breath","Scrolling in silence","Sleeping in class"],0,"A short pause to notice breathing can calm the body."],
["What can screens before bed do?",["Make it harder to fall asleep","Always help sleep","Nothing at all"],0,"Try a device-free wind-down before bed."]],
a2:[
["Which is a realistic habit change?",["Set one small goal, like a 10-minute walk","Overhaul your whole life tomorrow","Never use a phone"],0,"Small realistic goals are easier to keep."],
["How can poor sleep affect you?",["It can affect mood and concentration","It has no effect","It improves memory"],0,"Sleep, mood and focus are closely linked."],
["Digital balance means...",["Intentional use rather than total avoidance","Deleting every app","Using phones all the time"],0,"Aim for purposeful use."]]},
// 8 — Digital life & social media
{t:[
["Why do many apps use endless scrolling?",["It is designed to hold attention","It saves battery","It teaches patience"],0,"Unpredictable rewards and endless feeds keep us engaged."],
["Which classroom activity builds algorithmic self-awareness?",["Banning phones","Asking students to notice what their feed shows and how it makes them feel","Counting followers"],1,"Noticing feeds and feelings is the heart of algorithmic self-awareness."],
["What is the most useful message about technology?",["Avoid it completely","Build intentional use","Use it more"],1,"The goal is a healthy, intentional relationship, not avoidance."]],
a1:[
["Why does an app keep showing similar videos?",["The algorithm learns what keeps you watching","It is random","Your phone is broken"],0,"Algorithms personalise feeds to keep you watching."],
["After scrolling you feel drained. What helps?",["Take a break and choose an energising activity","Keep scrolling","Delete your friends"],0,"Notice how you feel and switch to something that gives energy."],
["Why do likes and notifications make us check more?",["Unpredictable rewards are hard to resist","They are boring","They are always bad"],0,"Unpredictable rewards pull our attention."]],
a2:[
["Who may be more affected by harmful content?",["People already vulnerable to it","No one","Only adults"],0,"Vulnerable people can be affected more strongly."],
["Which question builds digital literacy?",["Who made this and why is it shown to me?","How many likes?","Is it popular?"],0,"Asking about source and purpose is a core skill."],
["Which is intentional use?",["Deciding the purpose and time before opening an app","Opening apps by habit","Scrolling until you are tired"],0,"Intentional use starts with a purpose."]]},
// 9 — Identity, culture & belonging
{t:[
["Which is an inclusive practice?",["Making assumptions about students' families","Using the names and terms people tell you they use","Asking only some students to share"],1,"Respecting how people describe themselves builds safety."],
["What does intersectionality mean?",["Aspects of identity interact and shape experience","Only culture matters","Identity never changes"],0,"Culture, gender, ability and migration together shape experience."],
["A newly arrived student joins your class. Which action helps belonging?",["Make them wait","Check in, include their culture and make them welcome","Treat them exactly the same without asking"],1,"Small, consistent actions build belonging."]],
a1:[
["Identity is made of...",["Many parts, like culture, language, family and beliefs","One single label","Only your hobbies"],0,"Identity is layered."],
["A classmate speaks another language at home. What is inclusive?",["Invite them in and learn a word","Ignore them","Laugh"],0,"Curiosity and respect help belonging."],
["What builds belonging?",["Small everyday actions","Only big events","Never talking"],0,"Belonging is built through everyday actions."]],
a2:[
["What is multicultural stress?",["Pressure from navigating between cultures","A holiday","A school subject"],0,"People can feel pulled between cultures."],
["Which approach reflects inclusive language?",["Use the terms people use for themselves and avoid assumptions","Guess labels","Avoid asking"],0,"Ask and listen."],
["What can repeated exclusion do?",["It can harm mental health","It improves resilience","Nothing"],0,"Feeling invisible or excluded repeatedly can hurt well-being."]]},
// 10 — Asking big questions
{t:[
["How can values act like a compass?",["They guide choices when we feel uncertain or stressed","They remove all doubt","They are only for philosophers"],0,"Values help turn uncertainty into purposeful action."],
["How do you facilitate a respectful discussion on big questions?",["Insist on one right answer","Welcome different views without judgement","Avoid opinions"],1,"Respectful dialogue lets different perspectives sit side by side."],
["A student says \"what's the point of anything?\" What is best?",["Dismiss it","Listen; if hopelessness or self-harm thoughts persist, connect them with support","Debate them"],1,"Listen seriously and involve support if the hopelessness persists."]],
a1:[
["\"Who am I?\" is...",["A normal question while growing up","Silly","Only for adults"],0,"Big questions are a natural part of growing up."],
["Values are...",["Things that matter most to you","Rules from others only","Your phone settings"],0,"Values are what matters to you."],
["In a discussion, someone has a different opinion. What is respectful?",["Listen and respect","Mock them","Leave"],0,"Respectful dialogue explores different ideas."]],
a2:[
["How can clarifying values help with uncertainty?",["They turn uncertainty into purposeful action","They remove all choices","They make decisions for you"],0,"Knowing what matters makes it easier to act."],
["How can philosophy be a coping tool?",["By helping us examine questions and gain perspective","By avoiding emotions","By guaranteeing answers"],0,"It supports reflection without needing one perfect answer."],
["Facing a hard decision, which question helps?",["Which option fits my values?","Which is easiest?","What do others think?"],0,"Values act as a compass."]]}
];
