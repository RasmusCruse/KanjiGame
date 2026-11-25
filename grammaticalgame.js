
const grammarQuestions = [
  // ===== JLPT N5 =====
  {
    level: "N5",
    question: "まいにち 7じに ___。",
    translation: "I wake up at seven every day.",
    answers: ["おきました", "おきます", "おきて", "おきませんでした"],
    correct: 1,
    hint: "Daily habits use the non-past polite form.",
  },
  {
    level: "N5",
    question: "きのう えいがを ___。",
    translation: "I watched a film yesterday.",
    answers: ["みます", "みて", "みません", "みました"],
    correct: 3,
    hint: "きのう means yesterday, so use past tense.",
  },
  {
    level: "N5",
    question: "この りんごは ___ です。",
    translation: "This apple is big.",
    answers: ["おおきな", "おおきい", "おおきく", "おおきかった"],
    correct: 1,
    hint: "An い-adjective keeps い before です.",
  },
  {
    level: "N5",
    question: "きのうは とても ___ です。",
    translation: "It was very cold yesterday.",
    answers: ["さむい", "さむく", "さむくない", "さむかった"],
    correct: 3,
    hint: "The past form of さむい is さむかった.",
  },
  {
    level: "N5",
    question: "この へやは ___ です。",
    translation: "This room is not quiet.",
    answers: ["しずか", "しずかじゃない", "しずかな", "しずかに"],
    correct: 1,
    hint: "Use じゃない to negate a な-adjective.",
  },
  {
    level: "N5",
    question: "ここで しゃしんを ___ ください。",
    translation: "Please take a photo here.",
    answers: ["とります", "とった", "とらない", "とって"],
    correct: 3,
    hint: "て-form + ください is a polite request.",
  },
  {
    level: "N5",
    question: "いま ほんを ___ います。",
    translation: "I am reading a book now.",
    answers: ["よみ", "よんで", "よむ", "よんだ"],
    correct: 1,
    hint: "て-form + います indicates an ongoing action.",
  },
  {
    level: "N5",
    question: "きょうは べんきょう ___。",
    translation: "I am not studying today.",
    answers: ["します", "しました", "して", "しません"],
    correct: 3,
    hint: "しません is the polite negative of します.",
  },
  {
    level: "N5",
    question: "あの ひとは ___ です。",
    translation: "That person is a teacher.",
    answers: ["せんせいな", "せんせい", "せんせいに", "せんせいで"],
    correct: 1,
    hint: "A noun can directly precede です.",
  },
  {
    level: "N5",
    question: "わたしは すしが ___。",
    translation: "I like sushi.",
    answers: ["すきます", "すきな", "すきに", "すきです"],
    correct: 3,
    hint: "すきです expresses liking something.",
  },
  {
    level: "N5",
    question: "この ほんは ___ ありません。",
    translation: "This book is not interesting.",
    answers: ["おもしろい", "おもしろく", "おもしろかった", "おもしろな"],
    correct: 1,
    hint: "い-adjectives use くありません for polite negation.",
  },
  {
    level: "N5",
    question: "あしたは ___ でしょう。",
    translation: "It will probably rain tomorrow.",
    answers: ["あめな", "あめに", "あめで", "あめ"],
    correct: 3,
    hint: "A noun goes directly before でしょう.",
  },
  {
    level: "N5",
    question: "ここに なまえを ___ ください。",
    translation: "Please write your name here.",
    answers: ["かく", "かいて", "かきます", "かいた"],
    correct: 1,
    hint: "The て-form of かく is かいて.",
  },
  {
    level: "N5",
    question: "まどを ___ ください。",
    translation: "Please close the window.",
    answers: ["しめます", "しめる", "しめた", "しめて"],
    correct: 3,
    hint: "The て-form of しめる is しめて.",
  },
  {
    level: "N5",
    question: "きのうは がっこうに ___。",
    translation: "I did not go to school yesterday.",
    answers: ["いきません", "いきませんでした", "いきます", "いって"],
    correct: 1,
    hint: "ませんでした marks polite negative past.",
  },
  {
    level: "N5",
    question: "この くるまは ___ です。",
    translation: "This car is new.",
    answers: ["あたらしく", "あたらしかった", "あたらしな", "あたらしい"],
    correct: 3,
    hint: "Use the plain い-adjective before です.",
  },
  {
    level: "N5",
    question: "日本語を ___ ことができます。",
    translation: "I can speak Japanese.",
    answers: ["はなして", "はなす", "はなした", "はなします"],
    correct: 1,
    hint: "Dictionary form + ことができます expresses ability.",
  },
  {
    level: "N5",
    question: "コーヒーを ___ たいです。",
    translation: "I want to drink coffee.",
    answers: ["のむ", "のんだ", "のんで", "のみ"],
    correct: 3,
    hint: "Attach たい to the ます-stem: のみたい.",
  },
  {
    level: "N5",
    question: "この まちは ___ です。",
    translation: "This town is lively.",
    answers: ["にぎやかな", "にぎやか", "にぎやかに", "にぎやかで"],
    correct: 1,
    hint: "A な-adjective does not take な before です.",
  },
  {
    level: "N5",
    question: "あの ひとは ___ ひとです。",
    translation: "That person is kind.",
    answers: ["しんせつ", "しんせつに", "しんせつで", "しんせつな"],
    correct: 3,
    hint: "な-adjectives need な before a noun.",
  },
  {
    level: "N5",
    question: "きのう たくさん ___。",
    translation: "I ate a lot yesterday.",
    answers: ["たべます", "たべました", "たべて", "たべません"],
    correct: 1,
    hint: "Polite past tense ends in ました.",
  },
  {
    level: "N5",
    question: "いっしょに えいがを ___ か。",
    translation: "Would you like to watch a film together?",
    answers: ["みました", "みて", "みない", "みません"],
    correct: 3,
    hint: "ませんか is a polite invitation.",
  },
  {
    level: "N5",
    question: "ちょっと ___ ください。",
    translation: "Please wait a moment.",
    answers: ["まちます", "まって", "まった", "まつ"],
    correct: 1,
    hint: "The て-form of まつ is まって.",
  },
  {
    level: "N5",
    question: "きょうは あまり ___ です。",
    translation: "It is not very hot today.",
    answers: ["あつい", "あつかった", "あつく", "あつくない"],
    correct: 3,
    hint: "あまり is commonly used with a negative form.",
  },
  {
    level: "N5",
    question: "もう ひるごはんを ___。",
    translation: "I already ate lunch.",
    answers: ["たべます", "たべました", "たべません", "たべたい"],
    correct: 1,
    hint: "もう plus past tense means already.",
  },
  {
    level: "N5",
    question: "この みせは ___ です。",
    translation: "This shop is not expensive.",
    answers: ["たかい", "たかかった", "たかく", "たかくない"],
    correct: 3,
    hint: "The negative form of たかい is たかくない.",
  },
  {
    level: "N5",
    question: "あした はやく ___。",
    translation: "I will go to bed early tomorrow.",
    answers: ["ねました", "ねます", "ねて", "ねないでした"],
    correct: 1,
    hint: "ます-form can express a future action.",
  },
  {
    level: "N5",
    question: "その かばんは ___ ですか。",
    translation: "Is that bag yours?",
    answers: ["あなたに", "あなたで", "あなたを", "あなたの"],
    correct: 3,
    hint: "の indicates possession.",
  },
  {
    level: "N5",
    question: "きょうは にちようび ___。",
    translation: "Today is Sunday.",
    answers: ["ます", "です", "でしたか", "ありません"],
    correct: 1,
    hint: "A noun can be followed by です.",
  },
  {
    level: "N5",
    question: "あした ともだちに ___。",
    translation: "I will meet my friend tomorrow.",
    answers: ["あいました", "あって", "あわないでした", "あいます"],
    correct: 3,
    hint: "The polite non-past form can express future events.",
  },

  // ===== JLPT N4 =====
  {
    level: "N4",
    question: "日本に ___ ことがあります。",
    translation: "I have been to Japan before.",
    answers: ["行った", "行く", "行って", "行きます"],
    correct: 0,
    hint: "Past plain form + ことがある describes experience.",
  },
  {
    level: "N4",
    question: "あした 雨が ___ かもしれません。",
    translation: "It might rain tomorrow.",
    answers: ["ふって", "ふった", "ふる", "ふります"],
    correct: 2,
    hint: "Plain form + かもしれません expresses possibility.",
  },
  {
    level: "N4",
    question: "日本語が ___ ようになりました。",
    translation: "I became able to speak Japanese.",
    answers: ["話せる", "話す", "話した", "話して"],
    correct: 0,
    hint: "Potential form + ようになる describes gaining an ability.",
  },
  {
    level: "N4",
    question: "しゅくだいを ___ なければなりません。",
    translation: "I must do my homework.",
    answers: ["する", "して", "し", "した"],
    correct: 2,
    hint: "する changes to しなければなりません.",
  },
  {
    level: "N4",
    question: "ここで たばこを ___ はいけません。",
    translation: "You must not smoke here.",
    answers: ["すって", "すう", "すった", "すいます"],
    correct: 0,
    hint: "て-form + はいけません expresses prohibition.",
  },
  {
    level: "N4",
    question: "ごはんを ___ あとで さんぽします。",
    translation: "I take a walk after eating.",
    answers: ["たべる", "たべて", "たべた", "たべます"],
    correct: 2,
    hint: "Past plain form + あとで means after doing something.",
  },
  {
    level: "N4",
    question: "ねる ___ はを みがきます。",
    translation: "I brush my teeth before sleeping.",
    answers: ["まえに", "あとで", "ながら", "から"],
    correct: 0,
    hint: "Dictionary form + まえに means before doing something.",
  },
  {
    level: "N4",
    question: "音楽を ___ ながら べんきょうします。",
    translation: "I study while listening to music.",
    answers: ["きく", "きいて", "きき", "きいた"],
    correct: 2,
    hint: "Verb ます-stem + ながら means while doing something.",
  },
  {
    level: "N4",
    question: "この ほんは ___ すぎます。",
    translation: "This book is too expensive.",
    answers: ["たか", "たかい", "たかく", "たかかった"],
    correct: 0,
    hint: "Remove the final い before すぎる.",
  },
  {
    level: "N4",
    question: "この りょうりは ___ そうです。",
    translation: "This dish looks delicious.",
    answers: ["おいしい", "おいしく", "おいし", "おいしかった"],
    correct: 2,
    hint: "For appearance, おいしい becomes おいしそう.",
  },
  {
    level: "N4",
    question: "あしたは ___ つもりです。",
    translation: "I intend to study tomorrow.",
    answers: ["べんきょうする", "べんきょうして", "べんきょうした", "べんきょうします"],
    correct: 0,
    hint: "Dictionary form + つもり expresses intention.",
  },
  {
    level: "N4",
    question: "日本語を ___ ために まいにち れんしゅうします。",
    translation: "I practice every day to learn Japanese.",
    answers: ["おぼえた", "おぼえて", "おぼえる", "おぼえます"],
    correct: 2,
    hint: "Dictionary form + ために expresses purpose.",
  },
  {
    level: "N4",
    question: "あしたは はやく ___ ほうがいいです。",
    translation: "You should get up early tomorrow.",
    answers: ["おきた", "おきる", "おきて", "おきます"],
    correct: 0,
    hint: "Past plain form + ほうがいい gives advice.",
  },
  {
    level: "N4",
    question: "この もんだいは ___ やすいです。",
    translation: "This problem is easy to understand.",
    answers: ["わかる", "わかって", "わかり", "わかった"],
    correct: 2,
    hint: "Verb ます-stem + やすい means easy to do.",
  },
  {
    level: "N4",
    question: "この かんじは ___ にくいです。",
    translation: "This kanji is hard to remember.",
    answers: ["おぼえ", "おぼえる", "おぼえた", "おぼえて"],
    correct: 0,
    hint: "Verb ます-stem + にくい means difficult to do.",
  },
  {
    level: "N4",
    question: "ともだちに ほんを ___ もらいました。",
    translation: "My friend did me the favor of lending me a book.",
    answers: ["かす", "かした", "かして", "かします"],
    correct: 2,
    hint: "て-form + もらう describes receiving a favor.",
  },
  {
    level: "N4",
    question: "せんせいが せつめいして ___。",
    translation: "The teacher explained it for me.",
    answers: ["くれました", "あげました", "もらいました", "しました"],
    correct: 0,
    hint: "てくれる describes someone doing a favor for me.",
  },
  {
    level: "N4",
    question: "わたしは いもうとに ほんを よんで ___。",
    translation: "I read a book for my younger sister.",
    answers: ["くれました", "もらいました", "あげました", "ありました"],
    correct: 2,
    hint: "てあげる describes doing something for another person.",
  },
  {
    level: "N4",
    question: "この へやは ___ ようです。",
    translation: "This room seems quiet.",
    answers: ["しずかな", "しずか", "しずかに", "しずかで"],
    correct: 0,
    hint: "な-adjectives take な before ようです.",
  },
  {
    level: "N4",
    question: "でんしゃが ___ そうです。",
    translation: "I heard that the train will be late.",
    answers: ["おくれ", "おくれて", "おくれる", "おくれたら"],
    correct: 2,
    hint: "Plain form + そうです reports something heard.",
  },
  {
    level: "N4",
    question: "じかんが ___、えいがを みます。",
    translation: "If I have time, I will watch a movie.",
    answers: ["あれば", "ある", "あって", "あった"],
    correct: 0,
    hint: "The ば conditional of ある is あれば.",
  },
  {
    level: "N4",
    question: "あめが ___、いきません。",
    translation: "If it rains, I will not go.",
    answers: ["ふると", "ふって", "ふったら", "ふりながら"],
    correct: 2,
    hint: "たら is used for a conditional situation.",
  },
  {
    level: "N4",
    question: "この ボタンを ___、ドアが あきます。",
    translation: "When you press this button, the door opens.",
    answers: ["おすと", "おしても", "おしながら", "おしたば"],
    correct: 0,
    hint: "と expresses an automatic consequence.",
  },
  {
    level: "N4",
    question: "つかれて ___、べんきょうします。",
    translation: "Even if I am tired, I will study.",
    answers: ["いるから", "いたら", "いても", "いながら"],
    correct: 2,
    hint: "ても expresses even if or although.",
  },
  {
    level: "N4",
    question: "この ほんを ___ ことにしました。",
    translation: "I decided to buy this book.",
    answers: ["かう", "かって", "かった", "かいます"],
    correct: 0,
    hint: "Dictionary form + ことにする expresses a decision.",
  },
  {
    level: "N4",
    question: "まいにち はしる ___ しています。",
    translation: "I make an effort to run every day.",
    answers: ["ために", "ことに", "ように", "そうに"],
    correct: 2,
    hint: "ようにする expresses making an effort to form a habit.",
  },
  {
    level: "N4",
    question: "この えいがは ___ ことができます。",
    translation: "This movie can be watched.",
    answers: ["みる", "みて", "みた", "みます"],
    correct: 0,
    hint: "Dictionary form + ことができます expresses possibility.",
  },
  {
    level: "N4",
    question: "まどを ___ あります。",
    translation: "The window has been opened and left open.",
    answers: ["あいて", "あける", "あけて", "あけた"],
    correct: 2,
    hint: "てある expresses a state resulting from an intentional action.",
  },
  {
    level: "N4",
    question: "いま でんしゃが ___ ところです。",
    translation: "The train is just about to depart.",
    answers: ["でる", "でた", "でている", "でます"],
    correct: 0,
    hint: "Dictionary form + ところです means about to do something.",
  },
  {
    level: "N4",
    question: "しゅくだいを ___ ばかりです。",
    translation: "I have just finished my homework.",
    answers: ["おえる", "おえて", "おえた", "おえます"],
    correct: 2,
    hint: "Past plain form + ばかり means just did something.",
  },
];

// Shuffle questions
function shuffleGrammar() {
  for (let i = grammarQuestions.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    let temp = grammarQuestions[i];
    grammarQuestions[i] = grammarQuestions[j];
    grammarQuestions[j] = temp;
  }
}

// Find HTML elements
const grammarText = document.querySelector(".kanji");
const translationText = document.querySelector(".reading");
const buttons = document.querySelectorAll(".answers button");
const scoreText = document.querySelector("#score");
const livesText = document.querySelector("#lives");
const hintText = document.querySelector("#hint");

// Game variables
let score = 0;
let lives = 3;
let currentGrammar = 0;
let gameFinished = false;

// Show current grammar question
function showGrammar(number) {
  grammarText.textContent = grammarQuestions[number].question;
  translationText.textContent = grammarQuestions[number].translation;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = grammarQuestions[number].answers[i];
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
  currentGrammar = 0;
  gameFinished = false;

  shuffleGrammar();

  showGrammar(currentGrammar);
  updateGameInfo();
}

// Check answers
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (gameFinished) {
      return;
    }

    if (i === grammarQuestions[currentGrammar].correct) {
      // Correct answer
      score = score + 100;
      currentGrammar++;

      if (currentGrammar < grammarQuestions.length) {
        showGrammar(currentGrammar);
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
      hintText.textContent = grammarQuestions[currentGrammar].hint;

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
