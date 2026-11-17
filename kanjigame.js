const kanjis = [
  // ===== JLPT N5 =====
  {
    kanji: "山",
    reading: "やま",
    meaning: "Mountain",
    hint: "A very tall natural landform.",
    answers: ["River", "Mountain", "Forest", "Sea"],
  },
  {
    kanji: "水",
    reading: "みず",
    meaning: "Water",
    hint: "You drink this every day.",
    answers: ["Fire", "Wind", "Water", "Earth"],
  },
  {
    kanji: "火",
    reading: "ひ",
    meaning: "Fire",
    hint: "It produces heat and flames.",
    answers: ["Fire", "Moon", "Sun", "Rain"],
  },
  {
    kanji: "木",
    reading: "き",
    meaning: "Tree",
    hint: "It has roots, branches and leaves.",
    answers: ["Flower", "Grass", "Forest", "Tree"],
  },
  {
    kanji: "川",
    reading: "かわ",
    meaning: "River",
    hint: "Flowing water through the land.",
    answers: ["Ocean", "River", "Lake", "Mountain"],
  },
  {
    kanji: "日",
    reading: "ひ",
    meaning: "Sun",
    hint: "It gives the Earth daylight.",
    answers: ["Moon", "Star", "Sun", "Cloud"],
  },
  {
    kanji: "月",
    reading: "つき",
    meaning: "Moon",
    hint: "You often see it at night.",
    answers: ["Moon", "Sun", "Sky", "Star"],
  },
  {
    kanji: "人",
    reading: "ひと",
    meaning: "Person",
    hint: "A human being.",
    answers: ["Animal", "Child", "Friend", "Person"],
  },
  {
    kanji: "女",
    reading: "おんな",
    meaning: "Woman",
    hint: "An adult female person.",
    answers: ["Man", "Woman", "Child", "Mother"],
  },
  {
    kanji: "男",
    reading: "おとこ",
    meaning: "Man",
    hint: "An adult male person.",
    answers: ["Woman", "Boy", "Man", "Father"],
  },
  {
    kanji: "子",
    reading: "こ",
    meaning: "Child",
    hint: "A young person.",
    answers: ["Child", "Parent", "Teacher", "Friend"],
  },
  {
    kanji: "大",
    reading: "おおきい",
    meaning: "Big",
    hint: "The opposite of small.",
    answers: ["Small", "Short", "Thin", "Big"],
  },
  {
    kanji: "小",
    reading: "ちいさい",
    meaning: "Small",
    hint: "The opposite of big.",
    answers: ["Large", "Small", "Long", "Tall"],
  },
  {
    kanji: "中",
    reading: "なか",
    meaning: "Inside",
    hint: "The opposite of outside.",
    answers: ["Above", "Below", "Inside", "Behind"],
  },
  {
    kanji: "上",
    reading: "うえ",
    meaning: "Above",
    hint: "The opposite of below.",
    answers: ["Above", "Inside", "Below", "Left"],
  },
  {
    kanji: "下",
    reading: "した",
    meaning: "Below",
    hint: "The opposite of above.",
    answers: ["Above", "Right", "Outside", "Below"],
  },
  {
    kanji: "左",
    reading: "ひだり",
    meaning: "Left",
    hint: "The opposite direction of right.",
    answers: ["Right", "Left", "Up", "Down"],
  },
  {
    kanji: "右",
    reading: "みぎ",
    meaning: "Right",
    hint: "The opposite direction of left.",
    answers: ["Left", "Back", "Right", "Front"],
  },
  {
    kanji: "本",
    reading: "ほん",
    meaning: "Book",
    hint: "You read this.",
    answers: ["Book", "Paper", "Pen", "Letter"],
  },
  {
    kanji: "学",
    reading: "がく",
    meaning: "Study",
    hint: "Learning something new.",
    answers: ["Work", "Play", "Travel", "Study"],
  },
  {
    kanji: "生",
    reading: "せい",
    meaning: "Life",
    hint: "The state of being alive.",
    answers: ["Death", "Life", "Time", "Birthplace"],
  },
  {
    kanji: "先",
    reading: "さき",
    meaning: "Ahead",
    hint: "Something further forward.",
    answers: ["Behind", "Below", "Ahead", "Inside"],
  },
  {
    kanji: "年",
    reading: "とし",
    meaning: "Year",
    hint: "Twelve months.",
    answers: ["Year", "Week", "Day", "Hour"],
  },
  {
    kanji: "時",
    reading: "とき",
    meaning: "Time",
    hint: "What a clock measures.",
    answers: ["Place", "Distance", "Money", "Time"],
  },
  {
    kanji: "今",
    reading: "いま",
    meaning: "Now",
    hint: "This very moment.",
    answers: ["Yesterday", "Now", "Tomorrow", "Later"],
  },
  {
    kanji: "食",
    reading: "たべる",
    meaning: "Eat",
    hint: "What you do with food.",
    answers: ["Drink", "Cook", "Eat", "Sleep"],
  },
  {
    kanji: "飲",
    reading: "のむ",
    meaning: "Drink",
    hint: "What you do with water.",
    answers: ["Drink", "Eat", "Wash", "Buy"],
  },
  {
    kanji: "見",
    reading: "みる",
    meaning: "See",
    hint: "You use your eyes to do this.",
    answers: ["Hear", "Speak", "Touch", "See"],
  },
  {
    kanji: "行",
    reading: "いく",
    meaning: "Go",
    hint: "To move toward a destination.",
    answers: ["Come", "Go", "Stop", "Return"],
  },
  {
    kanji: "来",
    reading: "くる",
    meaning: "Come",
    hint: "To move toward the speaker.",
    answers: ["Leave", "Return", "Come", "Wait"],
  },

  // ===== JLPT N4 =====
  {
    kanji: "会",
    reading: "あう",
    meaning: "Meet",
    hint: "To encounter another person.",
    answers: ["Meet", "Forget", "Leave", "Sleep"],
  },
  {
    kanji: "社",
    reading: "しゃ",
    meaning: "Company",
    hint: "A business organization.",
    answers: ["School", "Hospital", "Station", "Company"],
  },
  {
    kanji: "員",
    reading: "いん",
    meaning: "Member",
    hint: "Someone belonging to a group.",
    answers: ["Visitor", "Member", "Leader", "Stranger"],
  },
  {
    kanji: "仕",
    reading: "し",
    meaning: "Serve",
    hint: "To work for or serve someone.",
    answers: ["Rest", "Travel", "Serve", "Play"],
  },
  {
    kanji: "事",
    reading: "こと",
    meaning: "Matter",
    hint: "An event, thing or situation.",
    answers: ["Matter", "Person", "Building", "Animal"],
  },
  {
    kanji: "教",
    reading: "おしえる",
    meaning: "Teach",
    hint: "To help someone learn.",
    answers: ["Forget", "Listen", "Sleep", "Teach"],
  },
  {
    kanji: "室",
    reading: "しつ",
    meaning: "Room",
    hint: "An enclosed space in a building.",
    answers: ["Garden", "Room", "Street", "Roof"],
  },
  {
    kanji: "勉",
    reading: "べん",
    meaning: "Effort",
    hint: "Trying hard to achieve something.",
    answers: ["Holiday", "Money", "Effort", "Weather"],
  },
  {
    kanji: "強",
    reading: "つよい",
    meaning: "Strong",
    hint: "The opposite of weak.",
    answers: ["Strong", "Weak", "Slow", "Quiet"],
  },
  {
    kanji: "思",
    reading: "おもう",
    meaning: "Think",
    hint: "To use your mind.",
    answers: ["Run", "Sleep", "Eat", "Think"],
  },
  {
    kanji: "知",
    reading: "しる",
    meaning: "Know",
    hint: "To have information about something.",
    answers: ["Forget", "Know", "Guess", "Ask"],
  },
  {
    kanji: "考",
    reading: "かんがえる",
    meaning: "Consider",
    hint: "To think carefully about something.",
    answers: ["Forget", "Ignore", "Consider", "Run"],
  },
  {
    kanji: "作",
    reading: "つくる",
    meaning: "Make",
    hint: "To create something.",
    answers: ["Make", "Destroy", "Lose", "Find"],
  },
  {
    kanji: "使",
    reading: "つかう",
    meaning: "Use",
    hint: "To do something with a tool.",
    answers: ["Buy", "Sell", "Break", "Use"],
  },
  {
    kanji: "持",
    reading: "もつ",
    meaning: "Hold",
    hint: "To carry something in your hand.",
    answers: ["Throw", "Hold", "Drop", "Lose"],
  },
  {
    kanji: "待",
    reading: "まつ",
    meaning: "Wait",
    hint: "To stay until something happens.",
    answers: ["Run", "Leave", "Wait", "Arrive"],
  },
  {
    kanji: "歩",
    reading: "あるく",
    meaning: "Walk",
    hint: "To move using your feet.",
    answers: ["Walk", "Swim", "Fly", "Drive"],
  },
  {
    kanji: "走",
    reading: "はしる",
    meaning: "Run",
    hint: "To move faster than walking.",
    answers: ["Sleep", "Sit", "Stand", "Run"],
  },
  {
    kanji: "止",
    reading: "とまる",
    meaning: "Stop",
    hint: "To no longer move.",
    answers: ["Start", "Stop", "Jump", "Continue"],
  },
  {
    kanji: "帰",
    reading: "かえる",
    meaning: "Return",
    hint: "To go back home.",
    answers: ["Leave", "Stay", "Return", "Arrive"],
  },
  {
    kanji: "旅",
    reading: "たび",
    meaning: "Journey",
    hint: "A trip to another place.",
    answers: ["Journey", "Meeting", "Lesson", "Meal"],
  },
  {
    kanji: "道",
    reading: "みち",
    meaning: "Road",
    hint: "A path used for travelling.",
    answers: ["River", "Mountain", "Building", "Road"],
  },
  {
    kanji: "駅",
    reading: "えき",
    meaning: "Station",
    hint: "Where you catch a train.",
    answers: ["Airport", "Station", "School", "Hospital"],
  },
  {
    kanji: "電",
    reading: "でん",
    meaning: "Electricity",
    hint: "The energy that powers electronics.",
    answers: ["Water", "Gas", "Electricity", "Wind"],
  },
  {
    kanji: "車",
    reading: "くるま",
    meaning: "Car",
    hint: "A vehicle with four wheels.",
    answers: ["Car", "Train", "Bicycle", "Boat"],
  },
  {
    kanji: "店",
    reading: "みせ",
    meaning: "Shop",
    hint: "A place where you buy things.",
    answers: ["School", "House", "Office", "Shop"],
  },
  {
    kanji: "買",
    reading: "かう",
    meaning: "Buy",
    hint: "To pay money for something.",
    answers: ["Sell", "Buy", "Borrow", "Give"],
  },
  {
    kanji: "売",
    reading: "うる",
    meaning: "Sell",
    hint: "To exchange something for money.",
    answers: ["Buy", "Borrow", "Sell", "Keep"],
  },
  {
    kanji: "安",
    reading: "やすい",
    meaning: "Cheap",
    hint: "Something that costs little money.",
    answers: ["Cheap", "Expensive", "Heavy", "Large"],
  },
  {
    kanji: "高",
    reading: "たかい",
    meaning: "Expensive",
    hint: "Something that costs a lot of money.",
    answers: ["Cheap", "Small", "Light", "Expensive"],
  },
];

function shuffleKanjis() {
  for (let i = kanjis.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    let temp = kanjis[i];
    kanjis[i] = kanjis[j];
    kanjis[j] = temp;
  }
}

// Find HTML elements
const kanjiText = document.querySelector(".kanji");
const readingText = document.querySelector(".reading");
const buttons = document.querySelectorAll(".answers button");
const scoreText = document.querySelector("#score");
const livesText = document.querySelector("#lives");
const hintText = document.querySelector("#hint");

// Game variables
let score = 0;
let lives = 3;
let currentKanji = 0;
let gameFinished = false;

// Show current Kanji
function showKanji(number) {
  kanjiText.textContent = kanjis[number].kanji;
  readingText.textContent = kanjis[number].reading;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = kanjis[number].answers[i];
  }

  hintText.textContent = "";
}

// Update score and lives
function updateGameInfo() {
  scoreText.textContent = "Score: " + score;
  livesText.textContent = "Lives: " + "❤️".repeat(lives);
}

// Restart game
function restartGame() {
  score = 0;
  lives = 3;
  currentKanji = 0;
  gameFinished = false;

  shuffleKanjis();

  showKanji(currentKanji);
  updateGameInfo();
}

// Check answers
for (let button of buttons) {
  button.addEventListener("click", function () {
    if (gameFinished) {
      return;
    }

    if (button.textContent == kanjis[currentKanji].meaning) {
      // Correct answer
      score = score + 100;
      currentKanji++;

      if (currentKanji < kanjis.length) {
        showKanji(currentKanji);
      } else {
        gameFinished = true;
        updateGameInfo();

        alert("Congratulations! Your score: " + score);
        restartGame();
        return;
      }
    } else {
      // Wrong answer
      lives--;

      // Show hint
      hintText.textContent = kanjis[currentKanji].hint;

      if (lives <= 0) {
        gameFinished = true;
        updateGameInfo();

        alert("Game Over! Your score: " + score);
        restartGame();
        return;
      }
    }

    updateGameInfo();
  });
}

// Start game
restartGame();
