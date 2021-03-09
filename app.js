const quiz = [
  {
    question:"はじめまして！菅生修と申します。さて、私の名前の読み方は次のうちどれでしょう？?",
    answers: [
    "かん・せいしゅう",
    "すごう・おさむ",
    "すがいき・しゅう",
    "かんしょう・おさむ"],
    correct: "すごう・おさむ"
  },
  {
    question:"菅生は何歳でしょう？",
    answers: [
    "23歳",
    "33歳",
    "43歳",
    "53歳"],
    correct: "33歳"
  },
  {
    question:"菅生は次のうちどの業界に勤めているでしょう？",
    answers: [
    "金融・IT業界",
    "不動産業界",
    "飲食業界",
    "医療業界"],
    correct: "金融・IT業界"
  },
  {
    question:"菅生の社内のポジションはどれでしょう？",
    answers: [
    "これでも部長やってます！",
    "課長で満足しています！",
    "無難に係長です！",
    "指定席の万年ヒラです！"],
    correct: "これでも部長やってます！"
  },
  {
    question:"次のうち、菅生にとって最もファン歴が長いのは誰でしょう？",
    answers: [
    "中川翔子さん",
    "倉木麻衣さん",
    "坂井泉水さん",
    "鈴木愛理さん"],
    correct: "倉木麻衣さん"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
}
}

setupQuiz();

//たぶんここから

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！「" + quiz[quizIndex].correct + "」でした！");
  }

  quizIndex++;
//ここまで


  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！")
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
   });
  handlerIndex++;
}






