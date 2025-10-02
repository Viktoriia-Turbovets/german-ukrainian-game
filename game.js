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


// ====== Змінні гри ======
let currentWord = {};
let score = 0;
let combo = 0;
let timer;
let timeLeft = 15;
let currentCategory = 'hygiene';
let usedWords = [];
let translationDirection = 'de-to-ua'; // німецьке -> українське

// ====== Озвучування ======
function speakWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'de-DE';
  utterance.rate = 0.9;
  utterance.pitch = 1.05;
  utterance.volume = 1;

  function setVoice() {
    const voices = speechSynthesis.getVoices();
    // шукаємо жіночий німецький голос
    let deVoice = voices.find(v => v.lang.includes('de') && /female|frau/i.test(v.name));
    if (!deVoice) deVoice = voices.find(v => v.lang.includes('de')); // будь-який німецький
    if (!deVoice) deVoice = voices[0]; // fallback
    utterance.voice = deVoice;

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  }

  if (speechSynthesis.getVoices().length === 0) {
    speechSynthesis.onvoiceschanged = setVoice;
  } else {
    setVoice();
  }
}

// ====== Вибір наступного слова ======
function nextWord() {
  clearInterval(timer);
  timeLeft = 15;
  updateTimer();
  document.getElementById('options').innerHTML = '';
  document.getElementById('message').textContent = '';

  const categoryWords = themes[currentCategory].filter(w => !usedWords.includes(w[0]));
  if (categoryWords.length === 0) {
    endGame();
    return;
  }

  const randomIndex = Math.floor(Math.random() * categoryWords.length);
  currentWord = categoryWords[randomIndex];
  usedWords.push(currentWord[0]);

  const wordToShow = translationDirection === 'de-to-ua' ? currentWord[0] : currentWord[1];
  document.getElementById('germanWord').textContent = wordToShow;

  speakWord(wordToShow);
  createOptions();
  startTimer();
}

// ====== Варіанти відповіді ======
function createOptions() {
  const optionsContainer = document.getElementById('options');
  let optionsCount = 4;

  const allWords = [].concat(...Object.values(themes));
  const answersSet = new Set();
  const correctAnswer = translationDirection === 'de-to-ua' ? currentWord[1] : currentWord[0];
  answersSet.add(correctAnswer);

  while (answersSet.size < optionsCount) {
    const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
    const answer = translationDirection === 'de-to-ua' ? randomWord[1] : randomWord[0];
    answersSet.add(answer);
  }

  const shuffled = Array.from(answersSet).sort(() => Math.random() - 0.5);
  shuffled.forEach(answer => {
    const btn = document.createElement('button');
    btn.textContent = answer;
    btn.classList.add('option-btn');
    btn.onclick = () => selectAnswer(btn, correctAnswer);
    optionsContainer.appendChild(btn);
  });
}

// ====== Вибір відповіді ======
function selectAnswer(btn, correctAnswer) {
  document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);

  if (btn.textContent === correctAnswer) {
    btn.classList.add('correct');
    document.getElementById('message').textContent = "Правильно!";
    document.getElementById('message').style.color = "green";
    score++;
    combo++;
  } else {
    btn.classList.add('wrong');
    document.getElementById('message').textContent = `Неправильно. Правильна відповідь: ${correctAnswer}`;
    document.getElementById('message').style.color = "red";
    combo = 0;
  }

  document.getElementById('score').textContent = `Рахунок: ${score}`;
  setTimeout(() => nextWord(), 1000);
}

// ====== Таймер ======
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = `Час: ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      combo = 0;
      const correctAnswer = translationDirection === 'de-to-ua' ? currentWord[1] : currentWord[0];
      document.getElementById('message').textContent = `Час вийшов! Правильна відповідь: ${correctAnswer}`;
      document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
      setTimeout(() => nextWord(), 1000);
    }
  }, 1000);
}

function updateTimer() {
  document.getElementById('timer').textContent = `Час: ${timeLeft}`;
}

// ====== Кінець гри ======
function endGame() {
  clearInterval(timer);
  document.getElementById('message').textContent = `Гра завершена! Ваш рахунок: ${score}`;
  document.getElementById('germanWord').textContent = '';
  document.getElementById('options').innerHTML = '';
}

// ====== Події ======
document.getElementById('startBtn').onclick = () => {
  score = 0;
  combo = 0;
  usedWords = [];
  document.getElementById('score').textContent = `Рахунок: ${score}`;
  nextWord();
};

document.getElementById('endBtn').onclick = endGame;

document.getElementById('themeSelect').onchange = (e) => {
  currentCategory = e.target.value;
  usedWords = [];
};