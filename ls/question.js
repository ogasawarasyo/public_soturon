const quiz = [
  {
  question: '<span>Q1. <ruby>十和田湖<rp>(</rp><rt>とわだこ</rt><rp>)</rp></ruby>の<ruby>陥没<rp>(</rp><rt>かんぼつ</rt><rp>)</rp></ruby>はなにが原因でできたものか？</span>',
  choices: [
  '隕石',
  '地震',
  '火山活動',
  '工事'
  ],
  correct: '火山活動'
  },
  {
  question: '<span>Q2. <ruby>青森県観光物産館アスパム<rp>(</rp><rt>あおもりけんかんこうぶっさんかん</rt><rp>)</rp></ruby>の2階では、何を見ることができるか？</span>',
  choices: [
  'マグロ',
  'ねぶた祭の映像',
  'りんご',
  'お土産'
  ],
  correct: 'ねぶた祭の映像'
  },
  {
  question: '<span>Q3. 青森ねぶた祭はなに<ruby>文化財<rp>(</rp><rt>ぶんかざい</rt><rp>)</rp></ruby>に指定されているか？',
  choices: [
  '<span><ruby>有形文化財<rp>(</rp><rt>ゆうけいぶんかざい</rt><rp>)</rp></ruby></span>',
  '<span><ruby>埋蔵文化財<rp>(</rp><rt>まいぞうぶんかざい</rt><rp>)</rp></ruby></span>',
  '<span><ruby>無形文化財<rp>(</rp><rt>むけいぶんかざい</rt><rp>)</rp></ruby></span>',
  '<span><ruby>無形民俗文化財<rp>(</rp><rt>むけいみんぞくぶんかざい</rt><rp>)</rp></ruby></span>'
  ],
  correct: '<span><ruby>無形民俗文化財<rp>(</rp><rt>むけいみんぞくぶんかざい</rt><rp>)</rp></ruby></span>'
  },
  {
  question: 'Q4. ねぶたの家ワ・ラッセでは、何を見ることができる場所か？',
  choices: [
  'ねぶた',
  '今朝釣られたマグロ',
  '<span><ruby>伝統工芸品<rp>(</rp><rt>でんとうこうげいひん</rt><rp>)</rp></ruby></span>',
  '土器'
  ],
  correct: 'ねぶた'
  },
  {
  question: '<span>Q5. <ruby>三内丸山遺跡<rp>(</rp><rt>さんないまるやまいせき</rt><rp>)</rp></ruby>は何時代から中期までの集落か？</span>',
  choices: [
  '<span><ruby>弥生時代<rp>(</rp><rt>やよいじだい</rt><rp>)</rp></ruby></span>',
  '<span><ruby>縄文時代<rp>(</rp><rt>じょうもんじだい</rt><rp>)</rp></ruby></span>',
  '<span><ruby>江戸時代<rp>(</rp><rt>えどじだい</rt><rp>)</rp></ruby></span>',
  '<span><ruby>安土桃山時代<rp>(</rp><rt>あづちももやまじだい</rt><rp>)</rp></ruby></span>'
  ],
  correct: '<span><ruby>縄文時代<rp>(</rp><rt>じょうもんじだい</rt><rp>)</rp></ruby></span>'
  },
  {
  question: 'Q6. 青森りんごは誰が日本に持ってきたか？',
  choices: [
  'ジョン・イング',
  'ジョン・ウィック',
  'ジョン・万次郎',
  'ジョン・レノン'
  ],
  correct: 'ジョン・イング'
  },
 ]

 const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const button = document.getElementsByTagName('button');
const buttonLength = button.length;

const setupQuiz = () => {
document.getElementById('question').innerHTML = quiz[quizIndex].question;
let buttonIndex = 0;
while(buttonIndex < buttonLength) {
  button[buttonIndex].innerHTML = quiz[quizIndex].choices[buttonIndex];
  buttonIndex++;
}
}

setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }
  
  quizIndex++;
  if (quizIndex < quizLength) {
      setupQuiz();
   } else {
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
   }
 }
  
 let handlerIndex = 0;
 while(handlerIndex < buttonLength) {
  button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
 }