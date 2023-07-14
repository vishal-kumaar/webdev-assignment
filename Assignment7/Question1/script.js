const questions = [
  {
    name: "What is the square root of 144?",
    options: ["10", "12", "14", "16"],
    answer: "12",
  },
  {
    name: "Which planet is the largest in our solar system?",
    options: ["Venus", "Jupiter", "Saturn", "Uranus"],
    answer: "Jupiter",
  },
  {
    name: "Solve the equation: 3x + 7 = 22.",
    options: ["3", "5", "7", "9"],
    answer: "7",
  },
  {
    name: "What is the chemical formula for Salt?",
    options: ["CO2", "H2O", "NaCl", "O2"],
    answer: "NaCl",
  },
  {
    name: "If a toy costs $15 before tax, and the sales tax rate is 8%, what is the total cost of the toy including tax?",
    options: ["$15.80", "$16.20", "$16.30", "$16.40"],
    answer: "$16.20",
  },
  {
    name: "Which country is famous for the Great Wall?",
    options: ["China", "Egypt", "India", "Italy"],
    answer: "China",
  },
  {
    name: "What is the sum of angles in a triangle?",
    options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
    answer: "180 degrees",
  },
  {
    name: "What is the chemical formula for water?",
    options: ["CO2", "H2O", "NaCl", "O2"],
    answer: "H2O",
  },
  {
    name: "What is the value of 9 squared?",
    options: ["9", "18", "27", "81"],
    answer: "81",
  },
  {
    name: "Who painted the famous artwork 'The Starry Night'?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    answer: "Vincent van Gogh",
  },
];

const main = document.getElementById("main");
const questionNumber = document.getElementById("question-number");
const questionArea = document.getElementById("question");
const answer = document.getElementById("answer");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const form = document.getElementsByTagName("form")[0];
const statusArea = document.getElementById("status-area");
const answerStatus = document.getElementById("status");
const leaderBoard = document.getElementById("leaderboard");
const rightQuestion = document.getElementById("right-question");
const wrongQuestion = document.getElementById("wrong-question");
const result = document.getElementById("result");

let currentQuestion = 1;
let correctAnswer = 0;

function updateInputArea() {
  const question = questions[currentQuestion - 1];
  questionArea.innerText = question.name;
  questionNumber.innerText = "Q." + currentQuestion;
  option1.innerText = question.options[0];
  option1.value = question.options[0];
  option2.innerText = question.options[1];
  option2.value = question.options[1];
  option3.innerText = question.options[2];
  option3.value = question.options[2];
  option4.innerText = question.options[3];
  option4.value = question.options[3];
  currentQuestion++;
}

function displayLeaderBoard() {
  form.style.display = "none";
  statusArea.style.display = "none";
  leaderBoard.style.display = "block";
  rightQuestion.innerText = correctAnswer;
  wrongQuestion.innerText = questions.length - correctAnswer;

  if (Math.floor(questions.length / 2) <= correctAnswer) {
    result.innerText = "Pass";
  } else {
    result.innerText = "Fail";
  }
}

updateInputArea();

submit.addEventListener("click", (event) => {
  event.preventDefault();
  statusArea.style.display = "block";
  if (answer.value === questions[currentQuestion - 2].answer) {
    answerStatus.innerText = "Correct Answer";
    statusArea.style.backgroundColor = "#006400";
    correctAnswer++;
} else {
    answerStatus.innerText = "Wrong Answer";
    statusArea.style.backgroundColor = "#ff0000";
  }
  if (currentQuestion > questions.length) {
    displayLeaderBoard();
  } else {
    updateInputArea();
  }
});
