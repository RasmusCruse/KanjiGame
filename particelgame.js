const questions = [
  // ===== JLPT N5: FILL IN THE PARTICLE =====

  {
    type: "fill",
    japanese: "わたし ___ がくせいです。",
    english: "I am a student.",
    meaning: "は",
    answers: ["は", "を", "に", "で"],
    hint: "This particle marks the topic.",
    explanation:
      "は (wa) marks the topic. わたし is the topic of this sentence.",
  },
  {
    type: "fill",
    japanese: "パン ___ たべます。",
    english: "I eat bread.",
    meaning: "を",
    answers: ["が", "に", "を", "で"],
    hint: "This particle marks the direct object.",
    explanation: "を (o) marks パン as the direct object of たべます (eat).",
  },
  {
    type: "fill",
    japanese: "がっこう ___ いきます。",
    english: "I go to school.",
    meaning: "に",
    answers: ["を", "で", "は", "に"],
    hint: "This particle indicates a destination.",
    explanation: "に (ni) marks the destination of movement.",
  },
  {
    type: "fill",
    japanese: "としょかん ___ べんきょうします。",
    english: "I study at the library.",
    meaning: "で",
    answers: ["で", "を", "が", "と"],
    hint: "This particle indicates where an action happens.",
    explanation: "で (de) marks the location where studying takes place.",
  },
  {
    type: "fill",
    japanese: "ねこ ___ います。",
    english: "There is a cat.",
    meaning: "が",
    answers: ["を", "が", "で", "へ"],
    hint: "This particle marks what exists.",
    explanation: "が (ga) marks the subject of the existence verb います.",
  },
  {
    type: "fill",
    japanese: "ともだち ___ えいがをみます。",
    english: "I watch a movie with a friend.",
    meaning: "と",
    answers: ["に", "へ", "と", "を"],
    hint: "This particle means 'with' in this sentence.",
    explanation: "と (to) indicates the person accompanying you.",
  },
  {
    type: "fill",
    japanese: "これは わたし ___ ほんです。",
    english: "This is my book.",
    meaning: "の",
    answers: ["は", "が", "を", "の"],
    hint: "This particle indicates possession.",
    explanation:
      "の (no) connects わたし (I) to ほん (book), meaning 'my book'.",
  },
  {
    type: "fill",
    japanese: "とうきょう ___ いきます。",
    english: "I go toward Tokyo.",
    meaning: "へ",
    answers: ["へ", "を", "が", "で"],
    hint: "This particle indicates direction.",
    explanation: "へ (e) indicates the direction of movement.",
  },
  {
    type: "fill",
    japanese: "わたし ___ すしがすきです。",
    english: "I like sushi.",
    meaning: "は",
    answers: ["を", "は", "で", "と"],
    hint: "This particle marks the person being discussed.",
    explanation: "は (wa) marks わたし as the topic. が marks what is liked.",
  },
  {
    type: "fill",
    japanese: "みず ___ のみます。",
    english: "I drink water.",
    meaning: "を",
    answers: ["に", "で", "を", "の"],
    hint: "What marks the thing being drunk?",
    explanation: "を (o) marks みず as the direct object of のみます.",
  },
  {
    type: "fill",
    japanese: "７じ ___ おきます。",
    english: "I wake up at seven o'clock.",
    meaning: "に",
    answers: ["は", "を", "で", "に"],
    hint: "This particle indicates a specific time.",
    explanation: "に (ni) marks a specific point in time.",
  },
  {
    type: "fill",
    japanese: "バス ___ がっこうへいきます。",
    english: "I go to school by bus.",
    meaning: "で",
    answers: ["で", "に", "を", "が"],
    hint: "This particle indicates a means of transport.",
    explanation: "で (de) indicates the method of transportation.",
  },
  {
    type: "fill",
    japanese: "いぬ ___ ねこがいます。",
    english: "There are dogs and cats.",
    meaning: "と",
    answers: ["を", "と", "で", "に"],
    hint: "This particle joins nouns with 'and'.",
    explanation: "と (to) connects nouns in a complete list.",
  },
  {
    type: "fill",
    japanese: "これは だれ ___ かばんですか。",
    english: "Whose bag is this?",
    meaning: "の",
    answers: ["を", "で", "の", "が"],
    hint: "This particle connects the owner to the object.",
    explanation:
    "の (no) indicates possession. だれのかばん means 'whose bag'.",
  },
  {
    type: "fill",
    japanese: "つくえのうえ ___ ほんがあります。",
    english: "There is a book on the desk.",
    meaning: "に",
    answers: ["を", "で", "と", "に"],
    hint: "This particle marks where something exists.",
    explanation: "に (ni) marks the location of existence.",
  },

  // ===== JLPT N5: PARTICLE FUNCTIONS =====

  {
    type: "meaning",
    japanese: "は",
    english: "What is the function of は?",
    meaning: "Marks the topic",
    answers: [
      "Marks the topic",
      "Marks the object",
      "Indicates direction",
      "Indicates possession",
    ],
    hint: "It tells us what the sentence is about.",
    explanation: "は (wa) marks the topic of a sentence.",
  },
  {
    type: "meaning",
    japanese: "が",
    english: "What is a common function of が?",
    meaning: "Marks the subject",
    answers: [
      "Indicates possession",
      "Marks the subject",
      "Indicates transport",
      "Marks the destination",
    ],
    hint: "It identifies the subject.",
    explanation: "が (ga) commonly marks the grammatical subject.",
  },
  {
    type: "meaning",
    japanese: "を",
    english: "What is the main function of を?",
    meaning: "Marks the direct object",
    answers: [
      "Marks the topic",
      "Indicates time",
      "Marks the direct object",
      "Indicates possession",
    ],
    hint: "It marks what an action affects.",
    explanation: "を (o) commonly marks the direct object of a verb.",
  },
  {
    type: "meaning",
    japanese: "の",
    english: "What does の indicate in わたしのほん?",
    meaning: "Possession",
    answers: ["Direction", "Location", "Time", "Possession"],
    hint: "Think of the English word 'my'.",
    explanation: "の (no) connects nouns and can express possession.",
  },
  {
    type: "meaning",
    japanese: "に",
    english: "What does に indicate in ７じにおきます?",
    meaning: "Specific time",
    answers: ["Specific time", "Direct object", "Topic", "Means of transport"],
    hint: "It marks when something happens.",
    explanation: "に (ni) marks a specific time, such as 7 o'clock.",
  },
  {
    type: "meaning",
    japanese: "で",
    english: "What does で indicate in がっこうでべんきょうします?",
    meaning: "Location of an action",
    answers: ["Possession", "Location of an action", "Direction", "Subject"],
    hint: "Where does the studying happen?",
    explanation: "で (de) marks where an action takes place.",
  },
  {
    type: "meaning",
    japanese: "へ",
    english: "What does へ indicate in にほんへいきます?",
    meaning: "Direction",
    answers: ["Possession", "Direct object", "Direction", "Topic"],
    hint: "It shows where someone is heading.",
    explanation: "へ (e) indicates the direction of movement.",
  },
  {
    type: "meaning",
    japanese: "と",
    english: "What does と mean in ともだちといきます?",
    meaning: "With",
    answers: ["From", "Until", "Because", "With"],
    hint: "Someone accompanies you.",
    explanation: "と (to) means 'with' when indicating companionship.",
  },
  {
    type: "meaning",
    japanese: "か",
    english: "What does か do at the end of a question?",
    meaning: "Marks a question",
    answers: [
      "Marks a question",
      "Marks possession",
      "Indicates movement",
      "Marks an object",
    ],
    hint: "It changes a statement into a question.",
    explanation: "か (ka) is a question particle.",
  },
  {
    type: "meaning",
    japanese: "も",
    english: "What does も mean in わたしも?",
    meaning: "Also",
    answers: ["Only", "Also", "Never", "Before"],
    hint: "Think of 'me too'.",
    explanation: "も (mo) means 'also' or 'too'.",
  },
  {
    type: "meaning",
    japanese: "から",
    english: "What does から mean in ９じから?",
    meaning: "From",
    answers: ["Until", "Before", "From", "After"],
    hint: "It marks a starting point.",
    explanation: "から (kara) marks the starting point of time or place.",
  },
  {
    type: "meaning",
    japanese: "まで",
    english: "What does まで mean in ５じまで?",
    meaning: "Until",
    answers: ["From", "Before", "During", "Until"],
    hint: "It marks an ending point.",
    explanation: "まで (made) marks the endpoint of time or distance.",
  },
  {
    type: "meaning",
    japanese: "ね",
    english: "What does ね often express?",
    meaning: "Seeking agreement",
    answers: ["Seeking agreement", "Direct object", "Possession", "Movement"],
    hint: "Similar to 'isn't it?'",
    explanation: "ね (ne) often seeks agreement or confirmation.",
  },
  {
    type: "meaning",
    japanese: "よ",
    english: "What does よ often express?",
    meaning: "Emphasis or new information",
    answers: [
      "Possession",
      "Emphasis or new information",
      "Direction",
      "Location",
    ],
    hint: "It emphasizes information given to someone.",
    explanation: "よ (yo) emphasizes a statement or presents information.",
  },
  {
    type: "meaning",
    japanese: "や",
    english: "What does や do when connecting nouns?",
    meaning: "Lists examples",
    answers: [
      "Marks a subject",
      "Indicates time",
      "Lists examples",
      "Marks a destination",
    ],
    hint: "It lists some items, but not necessarily all.",
    explanation: "や (ya) connects nouns in a non-exhaustive list.",
  },

  // ===== JLPT N4: FILL IN THE PARTICLE =====

  {
    type: "fill",
    japanese: "あした ___ しけんがあります。",
    english: "There is an exam tomorrow.",
    meaning: "は",
    answers: ["は", "を", "で", "と"],
    hint: "This particle introduces tomorrow as the topic.",
    explanation:
      "は (wa) marks あした as the topic. No particle is also possible in ordinary speech.",
  },
  {
    type: "fill",
    japanese: "にほんご ___ はなせます。",
    english: "I can speak Japanese.",
    meaning: "が",
    answers: ["で", "が", "と", "へ"],
    hint: "This particle can mark the subject of potential expressions.",
    explanation:
      "が (ga) commonly marks what someone is able to do in potential expressions.",
  },
  {
    type: "fill",
    japanese: "ともだち ___ プレゼントをあげました。",
    english: "I gave a present to my friend.",
    meaning: "に",
    answers: ["を", "で", "に", "が"],
    hint: "This particle marks the recipient.",
    explanation: "に (ni) marks the person receiving the present.",
  },
  {
    type: "fill",
    japanese: "はし ___ ごはんをたべます。",
    english: "I eat rice with chopsticks.",
    meaning: "で",
    answers: ["に", "を", "が", "で"],
    hint: "This particle indicates a tool.",
    explanation: "で (de) marks the instrument used for an action.",
  },
  {
    type: "fill",
    japanese: "あめ ___ ふっています。",
    english: "It is raining.",
    meaning: "が",
    answers: ["が", "を", "に", "と"],
    hint: "This particle marks the subject.",
    explanation: "が (ga) marks あめ (rain) as the subject.",
  },
  {
    type: "fill",
    japanese: "せんせい ___ しつもんしました。",
    english: "I asked the teacher a question.",
    meaning: "に",
    answers: ["で", "に", "を", "が"],
    hint: "This particle marks the person being asked.",
    explanation: "に (ni) marks the person to whom the question is directed.",
  },
  {
    type: "fill",
    japanese: "このほんは あのほん ___ やすいです。",
    english: "This book is cheaper than that book.",
    meaning: "より",
    answers: ["まで", "から", "より", "だけ"],
    hint: "This particle is used in comparisons.",
    explanation:
      "より (yori) marks the standard of comparison, meaning 'than'.",
  },
  {
    type: "fill",
    japanese: "わたしは すし ___ たべません。",
    english: "I only eat sushi (and nothing else).",
    meaning: "しか",
    answers: ["だけ", "も", "まで", "しか"],
    hint: "This particle combines with a negative verb.",
    explanation:
      "しか (shika) with a negative verb expresses 'nothing except' or 'only'.",
  },
  {
    type: "fill",
    japanese: "このへやには ひとり ___ いません。",
    english: "There is not even one person in this room.",
    meaning: "も",
    answers: ["も", "だけ", "から", "より"],
    hint: "Used with a negative expression to emphasize zero.",
    explanation:
      "も (mo) with ひとり and a negative verb emphasizes 'not even one'.",
  },
  {
    type: "fill",
    japanese: "しごとが おわって ___ かえります。",
    english: "I will go home after finishing work.",
    meaning: "から",
    answers: ["まで", "から", "より", "しか"],
    hint: "It means 'after' when following the te-form.",
    explanation: "てから means 'after doing something'.",
  },
  {
    type: "fill",
    japanese: "にほんに いったこと ___ あります。",
    english: "I have been to Japan before.",
    meaning: "が",
    answers: ["を", "で", "が", "へ"],
    hint: "This particle is part of the experience expression.",
    explanation: "たことがある expresses having experienced something.",
  },
  {
    type: "fill",
    japanese: "このみちは あのみち ___ ひろいです。",
    english: "This road is wider than that road.",
    meaning: "より",
    answers: ["しか", "まで", "だけ", "より"],
    hint: "This particle marks what something is compared with.",
    explanation: "より (yori) means 'than' in comparisons.",
  },
  {
    type: "fill",
    japanese: "にほんご ___ べんきょうするためにきました。",
    english: "I came in order to study Japanese.",
    meaning: "を",
    answers: ["を", "に", "が", "で"],
    hint: "This particle marks the object of studying.",
    explanation:
      "を (o) marks にほんご as the direct object of べんきょうする.",
  },
  {
    type: "fill",
    japanese: "えき ___ あるいていきます。",
    english: "I walk to the station.",
    meaning: "まで",
    answers: ["から", "まで", "しか", "だけ"],
    hint: "This particle marks the endpoint.",
    explanation: "まで (made) indicates the endpoint of the walk.",
  },
  {
    type: "fill",
    japanese: "わたしは コーヒー ___ のみます。",
    english: "I drink only coffee.",
    meaning: "だけ",
    answers: ["しか", "より", "だけ", "まで"],
    hint: "This particle means 'only' with an affirmative verb.",
    explanation:
      "だけ (dake) means 'only'. Unlike しか, it does not require a negative verb.",
  },

  // ===== JLPT N4: PARTICLE FUNCTIONS =====

  {
    type: "meaning",
    japanese: "より",
    english: "What does より mean in comparisons?",
    meaning: "Than",
    answers: ["Than", "Until", "Because", "Only"],
    hint: "It is used to compare two things.",
    explanation: "より (yori) marks the standard of comparison.",
  },
  {
    type: "meaning",
    japanese: "だけ",
    english: "What does だけ usually mean?",
    meaning: "Only",
    answers: ["Also", "Only", "Before", "Because"],
    hint: "It limits something to a particular amount or item.",
    explanation: "だけ (dake) means 'only' or 'just'.",
  },
  {
    type: "meaning",
    japanese: "しか",
    english: "What does しか mean with a negative verb?",
    meaning: "Nothing except",
    answers: ["More than", "Because of", "Nothing except", "Together with"],
    hint: "It expresses a strong limitation.",
    explanation:
      "しか (shika) requires a negative predicate and means 'nothing except'.",
  },
  {
    type: "meaning",
    japanese: "ほど",
    english: "What does ほど express in comparisons?",
    meaning: "Degree or extent",
    answers: ["Possession", "Direction", "Direct object", "Degree or extent"],
    hint: "It indicates how much or to what extent.",
    explanation: "ほど (hodo) expresses degree or extent.",
  },
  {
    type: "meaning",
    japanese: "ばかり",
    english: "What does ばかり mean in おかしばかりたべる?",
    meaning: "Nothing but",
    answers: ["Nothing but", "Before", "From", "Together"],
    hint: "It emphasizes doing or having mostly one thing.",
    explanation: "ばかり (bakari) can mean 'nothing but' or 'only'.",
  },
  {
    type: "meaning",
    japanese: "でも",
    english: "What does でも mean in おちゃでものみませんか?",
    meaning: "Something like",
    answers: ["Exactly", "Something like", "Never", "Before"],
    hint: "It suggests an example without insisting on it.",
    explanation:
      "でも (demo) can suggest something as an example, such as 'some tea or something'.",
  },
  {
    type: "meaning",
    japanese: "について",
    english: "What does について mean?",
    meaning: "About",
    answers: ["Until", "From", "About", "Without"],
    hint: "Used when discussing a subject.",
    explanation: "について (ni tsuite) means 'about' or 'concerning'.",
  },
  {
    type: "meaning",
    japanese: "によって",
    english: "What can によって indicate?",
    meaning: "Depending on",
    answers: ["Only", "Before", "Inside", "Depending on"],
    hint: "The result may change based on a condition.",
    explanation:
      "によって (ni yotte) can mean 'depending on', among other uses.",
  },
  {
    type: "meaning",
    japanese: "のに",
    english: "What does のに express between clauses?",
    meaning: "Although",
    answers: ["Although", "Because", "Until", "Only"],
    hint: "It introduces an unexpected contrast.",
    explanation: "のに (noni) expresses 'although' or 'even though'.",
  },
  {
    type: "meaning",
    japanese: "ので",
    english: "What does ので usually express?",
    meaning: "Reason or cause",
    answers: ["Direction", "Reason or cause", "Possession", "Comparison"],
    hint: "It explains why something happens.",
    explanation: "ので (node) introduces a reason or cause.",
  },
  {
    type: "meaning",
    japanese: "とか",
    english: "What does とか do when listing examples?",
    meaning: "Lists examples",
    answers: [
      "Marks time",
      "Marks an object",
      "Lists examples",
      "Marks possession",
    ],
    hint: "It gives examples without listing everything.",
    explanation: "とか (toka) gives non-exhaustive examples.",
  },
  {
    type: "meaning",
    japanese: "くらい",
    english: "What does くらい mean in １じかんくらい?",
    meaning: "Approximately",
    answers: ["Exactly", "Never", "Only", "Approximately"],
    hint: "It indicates an approximate amount.",
    explanation: "くらい (kurai) means 'approximately' or 'about'.",
  },
  {
    type: "meaning",
    japanese: "ずつ",
    english: "What does ずつ mean in ひとつずつ?",
    meaning: "Each",
    answers: ["Each", "Together", "Never", "Before"],
    hint: "It indicates distribution in equal amounts.",
    explanation: "ずつ (zutsu) means 'each' or 'at a time'.",
  },
  {
    type: "meaning",
    japanese: "さえ",
    english: "What does さえ often express?",
    meaning: "Even",
    answers: ["Only", "Even", "Until", "Before"],
    hint: "It emphasizes an unexpected or extreme example.",
    explanation: "さえ (sae) can mean 'even'.",
  },
  {
    type: "meaning",
    japanese: "かどうか",
    english: "What does かどうか express?",
    meaning: "Whether or not",
    answers: ["Because", "As soon as", "Whether or not", "Instead of"],
    hint: "It introduces an indirect yes-or-no question.",
    explanation: "かどうか (ka dou ka) means 'whether or not'.",
  },
];

function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    let temp = questions[i];
    questions[i] = questions[j];
    questions[j] = temp;
  }
}

// Find HTML elements
const kanjiText = document.querySelector(".kanji");
const readingText = document.querySelector(".reading");
const questionText = document.querySelector("#question");
const buttons = document.querySelectorAll(".answers button");
const scoreText = document.querySelector("#score");
const livesText = document.querySelector("#lives");
const hintText = document.querySelector("#hint");
const explanationText = document.querySelector("#explanation");

// Game variables
let score = 0;
let lives = 3;
let currentQuestion = 0;
let gameFinished = false;
let waitingForNext = false;

// Show current question
function showQuestion(number) {
  kanjiText.textContent = questions[number].japanese;
  readingText.textContent = questions[number].english;

  if (questions[number].type === "fill") {
    questionText.textContent = "Which particle is missing?";
  } else {
    questionText.textContent = "What does this particle do?";
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = questions[number].answers[i];
    buttons[i].disabled = false;
  }

  hintText.textContent = "";
  explanationText.textContent = "";
  waitingForNext = false;
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
  currentQuestion = 0;
  gameFinished = false;
  waitingForNext = false;

  shuffleQuestions();

  showQuestion(currentQuestion);
  updateGameInfo();
}

// Move to next question
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    gameFinished = true;
    updateGameInfo();

    alert("Congratulations! Your score: " + score);
    restartGame();
  }
}

// Check answers
for (let button of buttons) {
  button.addEventListener("click", function () {
    if (gameFinished || waitingForNext) {
      return;
    }

    if (button.textContent == questions[currentQuestion].meaning) {
      // Correct answer
      score = score + 100;
      waitingForNext = true;

      hintText.textContent = "";

      // Show explanation
      explanationText.textContent =
        questions[currentQuestion].explanation ||
        questions[currentQuestion].hint;

      for (let answerButton of buttons) {
        answerButton.disabled = true;
      }

      nextButton.hidden = false;
    } else {
      // Wrong answer
      lives--;

      hintText.textContent = questions[currentQuestion].hint;

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

// Next question button
const nextButton = document.querySelector("#nextButton");

nextButton.addEventListener("click", function () {
  nextButton.hidden = true;
  nextQuestion();
});

// Start game
nextButton.hidden = true;
restartGame();
