// Quiz Data
const quizData = [
  {
    question: 'Qual sua idade?',
    answers: ['21 a 24', '25 a 34', '35 a 44']
  },
  {
    question: 'Você se considera mais tímida ou extrovertida?',
    answers: ['Tímida', 'Extrovertida', 'Depende do dia']
  },
  {
    question: 'Com que frequência usa Tinder, Badoo ou Match?',
    answers: ['Nunca usei', 'Raramente', 'Frequentemente']
  },
  {
    question: 'Os homens geralmente perdem o interesse rápido?',
    answers: ['Sim', 'Não', 'Às vezes']
  },
  {
    question: 'Qual seu maior desafio nos relacionamentos?',
    answers: ['Falta de confiança', 'Comunicação', 'Encontrar alguém compatível', 'Manter o interesse']
  }
];

let currentQuestion = 0;
const answers = [];
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const progressEl = document.getElementById('progress');
const quizFinalEl = document.getElementById('quiz-final');
const videoSection = document.getElementById('video-section');
const finalBtn = document.getElementById('final-btn');
const VIDEO_MIN_TIME = 120; // 2 minutos em segundos
const CHECKOUT_LINK = 'https://pay.kirvano.com/2dfd121d-30ed-45c9-8c82-5a9f029dcfbd';

function showQuestion(idx) {
  const q = quizData[idx];
  questionEl.textContent = q.question;
  answersEl.innerHTML = '';
  q.answers.forEach((ans, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = ans;
    btn.onclick = () => selectAnswer(i);
    answersEl.appendChild(btn);
  });
  progressEl.style.width = ((idx) / quizData.length * 100) + '%';
}

function selectAnswer(ansIdx) {
  answers[currentQuestion] = ansIdx;
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion(currentQuestion);
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  quiz.style.display = 'none';
  quizFinalEl.style.display = 'block';
  setTimeout(() => {
    videoSection.classList.add('visible');
  }, 1200);
  // Inicia o timer do vídeo
  startVideoTimer();
}

function startVideoTimer() {
  let seconds = 0;
  const interval = setInterval(() => {
    seconds++;
    if (seconds >= VIDEO_MIN_TIME) {
      finalBtn.classList.add('visible');
      clearInterval(interval);
    }
  }, 1000);
}

finalBtn.onclick = () => {
  window.location.href = CHECKOUT_LINK;
};

// Inicia o quiz
showQuestion(currentQuestion); 