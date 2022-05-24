const quizData = [
  {
    question: "What is Katia's favourite color?",
    a: "blue",
    b: "green",
    c: "pink",
    d: "yellow",
    correct: "c",
  },
  {
    question: "What is Sebi's favourite ice cream?",
    a: "chocolate",
    b: "strawbery",
    c: "vanilla",
    d: "cherry",
    correct: "b",
  },
  {
    question: "How old is Sergiu?",
    a: "24",
    b: "19",
    c: "40",
    d: "34",
    correct: "d",
  },
  {
    question: "Where do we go in vacation?",
    a: "Greece",
    b: "Maldives",
    c: "Bulgaria",
    d: "Turkey",
    correct: "a",
  },
  {
    question: "How many dogs do we have?",
    a: "3",
    b: "7",
    c: "2",
    d: "1",
    correct: "c",
  },
];

const questionEl = document.querySelector(".question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const button = document.querySelector(".btn");
const answerEls = document.querySelectorAll(".answer");
const quizContainer = document.querySelector(".quiz-container");
let currentQuiz = 0;
let score = 0;
let answer;

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

loadQuiz();

function getSelected() {
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      return (answer = answerEl.id);
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
button.addEventListener("click", function () {
  const answer = getSelected();
  deselectAnswers();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quizContainer.innerHTML = `<h2>You answered ${score} / ${quizData.length} questions</h2> <button class = "btn" onclick="location.reload()"> Refresh</button>`;
    }
  }
});
