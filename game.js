// Теми зі словами [німецьке, українське] (приклад 10 слів для тесту)
// Теми зі словами [німецьке, українське] по 50 слів
const themes = {
  hygiene: [
    ["Zähne putzen","чистка зубів"],["Hände waschen","миття рук"],["Duschen","душ"],["Anziehen","одягання"],["Nagelpflege","догляд за нігтями"],
    ["Haarpflege","гігієна волосся"],["Rasieren","гоління"],["Baden","ванна"],["Mundpflege","догляд за ротовою порожниною"],["Schlafen","сон"],
    ["Gesichtsreinigung","очищення обличчя"],["Hautpflege","догляд за шкірою"],["Bürsten","розчісування"],["Hände eincremen","зволоження рук"],["Fußpflege","догляд за ногами"],
    ["Zahnarztbesuch","візит до стоматолога"],["Haare föhnen","сушити волосся"],["Kämmen","розчісування волосся"],["Duschtuch benutzen","використовувати рушник"],["Zahnpasta verwenden","використовувати зубну пасту"],
    ["Seife benutzen","використовувати мило"],["Hände trocknen","сушити руки"],["Händedesinfektion","дезінфекція рук"],["Duschen am Morgen","душ вранці"],["Duschen am Abend","душ ввечері"],
    ["Baden im Wasser","купання у воді"],["Hände pflegen","догляд за руками"],["Haar schneiden","стригти волосся"],["Nagelschneiden","стригти нігті"],["Nagellack entfernen","знімати лак"],
    ["Zähne putzen morgens","чистка зубів вранці"],["Zähne putzen abends","чистка зубів ввечері"],["Hände waschen nach Toilette","миття рук після туалету"],["Duschen täglich","щоденний душ"],["Duschen abends","душ ввечері"],
    ["Zahnpflege","догляд за зубами"],["Haarwaschen","миття волосся"],["Nagelpflege täglich","щоденний догляд за нігтями"],["Seifenstück benutzen","використовувати шматок мила"],["Handtuch benutzen","використовувати рушник"],
    ["Haut reinigen","очищення шкіри"],["Gesicht eincremen","зволоження обличчя"],["Bürsten Haare","розчісування волосся"],["Fußbad","ванночка для ніг"],["Haarbürste benutzen","використовувати щітку для волосся"],
    ["Duschen nach Sport","душ після спорту"],["Baden am Wochenende","купання на вихідних"],["Hände desinfizieren","дезінфекція рук"],["Mundhygiene","гігієна рота"],["Händewaschen nach Essen","миття рук після їжі"]
  ],

  medicine: [
    ["Medikamente einnehmen","прийом ліків"],["Arzt rufen","виклик лікаря"],["Blutdruck messen","вимірювання тиску"],["Fieber messen","вимірювання температури"],["Impfung","щеплення"],
    ["Krankenhaus","лікарня"],["Verband anlegen","накладати пов’язку"],["Spritze geben","робити укол"],["Tablette schlucken","приймати таблетку"],["Therapie","терапія"],
    ["Notfall","надзвичайна ситуація"],["Erste Hilfe","перша допомога"],["Rezept","рецепт"],["Apotheke","аптека"],["Untersuchung","обстеження"],
    ["Zahnarzt","стоматолог"],["Augenarzt","офтальмолог"],["HNO-Arzt","ЛОР лікар"],["Physiotherapie","фізіотерапія"],["Massage","масаж"],
    ["Operation","операція"],["Krankenpflege","догляд за хворими"],["Impfstoff","вакцина"],["Spritze","укол"],["Bluttest","аналіз крові"],
    ["Röntgen","рентген"],["Fieberthermometer","термометр"],["Schmerzmittel","знеболювальне"],["Vitamin","вітамін"],["Gesundheitscheck","медичний огляд"],
    ["Erkältung","простуда"],["Grippe","грип"],["Husten","кашель"],["Schnupfen","нежить"],["Allergie","алергія"],
    ["Medizin nehmen","приймати ліки"],["Krankenhaus besuchen","відвідувати лікарню"],["Untersuchung machen","робити обстеження"],["Arzttermin","запис до лікаря"],["Notaufnahme","відділення швидкої допомоги"],
    ["Blutdruck kontrollieren","контроль тиску"],["Herz untersuchen","обстеження серця"],["Atemtest","тест дихання"],["Krankenakte","медична карта"],["Reha","реабілітація"],
    ["Pflegeplan","план догляду"],["Medikamentendosierung","дозування ліків"],["Impfen","щепитися"],["Symptome beobachten","спостереження симптомів"],["Gesund bleiben","залишатися здоровим"]
  ],

  exercise: [
    ["Spaziergang","прогулянка"],["Joggen","біг"],["leichte Gymnastik","легка зарядка"],["Yoga","йога"],["Dehnen","розтягування"],
    ["Schwimmen","плавання"],["Radfahren","велосипед"],["Atemübungen","дихальні вправи"],["Fitnessstudio","спортзал"],["Turnen","гімнастика"],
    ["Pilates","пілатес"],["Aerobic","аеробіка"],["Liegestütze","віджимання"],["Sit-ups","скручування"],["Springseil","стрибки на скакалці"],
    ["Laufen","бігати"],["Wandern","походи"],["Tanzen","танці"],["Stretching","розтяжка"],["Krafttraining","силові вправи"],
    ["Balanceübung","вправи на баланс"],["Hanteltraining","тренування з гантелями"],["Bergsteigen","скелелазіння"],["Trampolin","батут"],["Jogging am Morgen","ранковий біг"],
    ["Jogging am Abend","вечірній біг"],["Schwimmen im See","плавання у озері"],["Radfahren im Park","катання на велосипеді в парку"],["Step-Aerobic","степ-аеробіка"],["Boxen","бокс"],
    ["Tanzen zu Hause","танці вдома"],["Fitnessübungen","фітнес вправи"],["Zumba","зумба"],["Klettern","скелелазіння"],["Stretching morgens","ранкова розтяжка"],
    ["Stretching abends","вечірня розтяжка"],["Jogging mit Freunden","біг з друзями"],["Laufband","бігова доріжка"],["Trizepsübungen","вправи на трицепс"],["Brustübungen","вправи на груди"],
    ["Bauchmuskeltraining","вправи на прес"],["Beintraining","вправи на ноги"],["Schultertraining","вправи на плечі"],["Armtraining","вправи на руки"],["Rückenübungen","вправи на спину"],
    ["Cardio","кардіо"],["Ausdauertraining","вправи на витривалість"],["Gleichgewichtstraining","тренування рівноваги"],["Fitnessplan","план тренувань"],["Bewegung täglich","щоденна рухливість"]
  ],

  leisure: [
    ["Lesen","читання"],["Musik hören","слухати музику"],["Kartenspiel","гра в карти"],["Entspannung","відпочинок"],["Malen","малювання"],
    ["Tanzen","танці"],["Film sehen","перегляд фільму"],["Spiele spielen","грати в ігри"],["Stricken","в’язання"],["Basteln","підручне рукоділля"],
    ["Fotografieren","фотографування"],["Singen","спів"],["Kochen","готування"],["Backen","випікання"],["Gartenarbeit","робота в саду"],
    ["Puzzle","пазл"],["Musikinstrument spielen","грати на музичному інструменті"],["Schwimmen","плавання"],["Lesen im Park","читання в парку"],["Yoga","йога"],
    ["Meditation","медитація"],["Zeichnen","малювання"],["Filme schauen","дивитися фільми"],["Bücher lesen","читати книги"],["Wandern","походи"],
    ["Stricken und Häkeln","в’язання"],["Handwerk","ремесло"],["Brettspiele","настільні ігри"],["Musik machen","створювати музику"],["Fotobearbeitung","обробка фото"],
    ["Videospiele","відеоігри"],["Origami","орігамі"],["Schreiben","писати"],["Töpfern","гончарство"],["Kreativ sein","бути креативним"],
    ["Tanzen lernen","вчитися танцювати"],["Malworkshop","майстер-клас малювання"],["Spazieren gehen","прогулянки"],["Filmmarathon","кіно-марафон"],["DIY-Projekte","DIY-проекти"],
    ["Musik hören entspannend","розслаблююча музика"],["Bücherclub","книжковий клуб"],["Gedichte schreiben","писати вірші"],["Yogaübungen","вправи йоги"],["Fitnessstudio besuchen","відвідування спортзалу"],
    ["Freizeit genießen","насолоджуватися дозвіллям"],["Bastelideen","ідеї для рукоділля"],["Hobbys","хобі"],["Natur erleben","контакт з природою"],["Freunde treffen","зустріч з друзями"]
  ],

  travel: [
    ["Flughafen","аеропорт"],["Reiseplan","план подорожі"],["Koffer packen","пакувати валізу"],["Hotel buchen","бронювати готель"],["Stadtbesichtigung","огляд міста"],
    ["Zug fahren","їхати потягом"],["Flugzeug","літак"],["Reiseführer","путівник"],["Strand","пляж"],["Museum besuchen","відвідати музей"],
    ["Reise buchen","бронювати подорож"],["Reisetasche","дорожня сумка"],["Pass kontrollieren","перевірка паспорта"],["Reiseführer kaufen","купити путівник"],["Sightseeing","огляд пам'яток"],
    ["Stadtplan","карта міста"],["Karte kaufen","купити карту"],["Ticket kaufen","купити квиток"],["Flughafenfahrt","поїздка в аеропорт"],["Reiseversicherung","туристична страховка"],
    ["Hotelzimmer","номер у готелі"],["Zimmer buchen","забронювати номер"],["Reise beginnen","почати подорож"],["Reise beenden","закінчити подорож"],["Stadtrundfahrt","оглядова поїздка містом"],
    ["Fähre nehmen","їхати на поромі"],["Bus fahren","їхати автобусом"],["Taxi nehmen","взяти таксі"],["Reisen im Ausland","подорож за кордоном"],["Unterkunft suchen","шукати житло"],
    ["Flug buchen","забронювати рейс"],["Reisevorbereitung","підготовка до подорожі"],["Reiseerlebnis","досвід подорожі"],["Koffer schließen","закрити валізу"],["Koffer öffnen","відкрити валізу"],
    ["Reiseleiter","туристичний гід"],["Tour buchen","забронювати тур"],["Reiseinformationen","інформація про подорож"],["Koffer tragen","нести валізу"],["Check-in","реєстрація"],
    ["Reise planen","планувати подорож"],["Reisebericht","звіт про подорож"],["Rucksack packen","пакувати рюкзак"],["Sehenswürdigkeiten","пам'ятки"],["Unterwegs essen","їсти в дорозі"],
    ["Reiseziel wählen","обрати місце подорожі"],["Reise genießen","насолоджуватися подорожжю"],["Souvenirs kaufen","купувати сувеніри"],["Fahrkarte","квиток на транспорт"],["Stadtrundgang","екскурсія містом"]
  ],

  family: [
    ["Mutter","мати"],["Vater","батько"],["Bruder","брат"],["Schwester","сестра"],["Großeltern","бабуся і дідусь"],
    ["Kind","дитина"],["Familienfest","сімейне свято"],["Haustier","домашній улюбленець"],["Cousin","кузен"],["Onkel","дядько"],
    ["Tante","тітка"],["Neffe","племінник"],["Nichte","племінниця"],["Familienurlaub","сімейна подорож"],["Elternabend","батьківські збори"],
    ["Familienfoto","сімейне фото"],["Geburtstag feiern","святкувати день народження"],["Hochzeit","весілля"],["Familienmitglied","член сім'ї"],["Verwandte besuchen","відвідувати родичів"],
    ["Familienrituale","сімейні традиції"],["Familienessen","сімейна вечеря"],["Spielzeit mit Familie","час гри з родиною"],["Familienausflug","сімейна екскурсія"],["Hausaufgabenhilfe","допомога з уроками"],
    ["Familiengeschichten","сімейні історії"],["Familienleben","сімейне життя"],["Familienplanung","планування сім’ї"],["Familienrat","сімейна рада"],["Familienzimmer","сімейна кімната"],
    ["Familienunterhaltung","розваги сім’ї"],["Haushalt teilen","спільна робота по дому"],["Familienaktivitäten","сімейні активності"],["Elternzeit","декретна відпустка"],["Familienausflug planen","планування поїздки"],
    ["Familienbande","сімейні зв’язки"],["Familienporträt","сімейний портрет"],["Elternschaft","батьківство"],["Geschwisterliebe","любов між братами та сестрами"],["Verwandtschaft","родичі"],
    ["Familienurlaub planen","планувати сімейну подорож"],["Familienzusammenhalt","сімейна єдність"],["Familiengeschichte","сімейна історія"],["Familienfeier","сімейне свято"],["Familienaktivität","сімейна активність"],
    ["Familienleben genießen","насолоджуватися сімейним життям"],["Familienmitglieder zählen","рахувати членів сім’ї"],["Familienerinnerungen","сімейні спогади"],["Familienritual pflegen","дотримуватися традицій"],["Familienname","прізвище сім’ї"]
  ]
};



// =================== Глобальні змінні ===================
let gamePairs = [], currentIndex = 0, score = 0, timer = null;
let audioCtx = null, voices = [];

// =================== Web Audio для звуків ===================
function initAudioIfNeeded() {
  if(!audioCtx){audioCtx=new (window.AudioContext||window.webkitAudioContext)();}
  if(audioCtx.state==='suspended'){audioCtx.resume();}
}

function playCorrectSound(){
  if(!audioCtx) return;
  const now=audioCtx.currentTime,o=audioCtx.createOscillator(),g=audioCtx.createGain();
  o.type='sine'; o.frequency.setValueAtTime(880,now);
  g.gain.setValueAtTime(0.0001,now); g.gain.linearRampToValueAtTime(0.18,now+0.01);
  o.connect(g); g.connect(audioCtx.destination); o.start(now);
  g.gain.exponentialRampToValueAtTime(0.0001,now+0.6); o.stop(now+0.62);
}

function playWrongSound(){
  if(!audioCtx) return;
  const now=audioCtx.currentTime,o=audioCtx.createOscillator(),g=audioCtx.createGain();
  o.type='sine'; o.frequency.setValueAtTime(300,now);
  o.frequency.exponentialRampToValueAtTime(120,now+0.12);
  g.gain.setValueAtTime(0.0001,now); g.gain.linearRampToValueAtTime(0.18,now+0.01);
  o.connect(g); g.connect(audioCtx.destination); o.start(now);
  g.gain.exponentialRampToValueAtTime(0.0001,now+0.45); o.stop(now+0.46);
}

// =================== Функція озвучки ===================
function speakGerman(word) {
  if (!voices.length) voices = window.speechSynthesis.getVoices();
  if (!voices.length) {
    window.speechSynthesis.onvoiceschanged = () => {
      voices = window.speechSynthesis.getVoices();
      speakGerman(word);
    };
    return;
  }

  const msg = new SpeechSynthesisUtterance(word);
  msg.lang = 'de-DE';
  let voice = voices.find(v => v.lang.includes('de') && v.name.toLowerCase().includes('female'));
  if (!voice) voice = voices.find(v => v.lang.includes('de'));
  msg.voice = voice || null;

  msg.rate = 0.85;
  msg.pitch = 1.1;
  msg.volume = 1.0;

  try {
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
  } catch(e) {
    console.error("Помилка озвучки:", e);
  }
}

// =================== Функції гри ===================
function startGame() {
  const themeSelect = document.getElementById('themeSelect');
  if(!themeSelect.value){alert("Оберіть тему!"); return;}

  initAudioIfNeeded();
  gamePairs = shuffle([...themes[themeSelect.value]]);
  currentIndex = 0;
  score = 0;
  document.getElementById("score").innerText = "Рахунок: 0";
  document.getElementById("message").innerText = "";
  showNextWord();
}

function endGame() {
  clearInterval(timer);
  document.getElementById("germanWord").innerText = "Гру завершено";
  document.getElementById("options").innerHTML = "";
  document.getElementById("timer").innerText = "Час: --";
  showMessage("Гру зупинено ❌","end");
  try{speechSynthesis.cancel();}catch(e){}
}

function showNextWord() {
  if(currentIndex >= gamePairs.length){
    clearInterval(timer);
    document.getElementById("germanWord").innerText = "Гра завершена";
    document.getElementById("options").innerHTML = "";
    showMessage(`🎉 Гру завершено! Ваш рахунок: ${score} з ${gamePairs.length}`, "end");
    return;
  }

  const currentWord = gamePairs[currentIndex];
  document.getElementById("germanWord").innerText = currentWord[0];
  document.getElementById("message").innerText = "";

  // Озвучка
  speakGerman(currentWord[0]);

  // Генеруємо варіанти відповіді
  let options = [currentWord[1]];
  while(options.length < 4){
    const randomWord = themes[document.getElementById('themeSelect').value][Math.floor(Math.random() * themes[document.getElementById('themeSelect').value].length)][1];
    if(!options.includes(randomWord)) options.push(randomWord);
  }
  options = shuffle(options);

  // Відображення кнопок
  const buttonsContainer = document.getElementById("options");
  buttonsContainer.innerHTML = "";
  options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(btn, currentWord[1]);
    buttonsContainer.appendChild(btn);
  });

  startTimer();
}

function checkAnswer(button, correct){
  clearInterval(timer);
  const buttons = document.querySelectorAll("#options button");
  buttons.forEach(btn => btn.disabled = true);

  if(button.innerText.toLowerCase() === correct.toLowerCase()){
    button.classList.add('correct');
    score++; 
    playCorrectSound(); 
    showMessage("✅ Правильно!", "success");
  } else {
    button.classList.add('wrong'); 
    playWrongSound(); 
    showMessage(`❌ Неправильно! Правильна відповідь: ${correct}`, "error");
    buttons.forEach(btn => { 
      if(btn.innerText.toLowerCase() === correct.toLowerCase()) btn.classList.add('correct'); 
    });
  }

  document.getElementById("score").innerText = `Рахунок: ${score}`;
  currentIndex++; 

  setTimeout(showNextWord, 1200);
}

function startTimer(){
  clearInterval(timer);
  let timeLeft=10;
  const timerDisplay=document.getElementById("timer");
  timerDisplay.innerText=`Час: ${timeLeft}s`;
  timer=setInterval(()=>{
    timeLeft--; 
    timerDisplay.innerText=`Час: ${timeLeft}s`;
    if(timeLeft<=0){
      clearInterval(timer); 
      playWrongSound();
      showMessage(`⏰ Час вичерпано! Правильна відповідь: ${gamePairs[currentIndex][1]}`,"error");
      currentIndex++; 
      setTimeout(showNextWord,1200);
    }
  },1000);
}

function showMessage(text,type){
  const message=document.getElementById("message"); 
  message.innerText=text; 
  message.className=type;
}

// =================== Утиліти ===================
function shuffle(array){
  for(let i=array.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [array[i],array[j]]=[array[j],array[i]];
  }
  return array;
}

// =================== Обробники кнопок ===================
document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('endBtn').addEventListener('click', endGame);
document.getElementById('repeatBtn').addEventListener('click', () => {
  if(currentIndex < gamePairs.length) speakGerman(gamePairs[currentIndex][0]);
});