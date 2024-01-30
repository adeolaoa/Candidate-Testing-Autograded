const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
 
//TODO: Variables for Part 2
//Questions to be asked
let question1 = "Who was the first American woman in space? ";
let question2 = "True or false: 5 kilometer == 5000 meters? ";
let question3 = "(5 + 3)/2 * 10 = ? ";
let question4 = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ";
let question5 = "What is the minimum crew size for the ISS? ";

let questions =[question1, question2, question3, question4, question5];
//["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ",
//"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];

// correct answers
let answer1 = "Sally Ride"
let answer2 = "true"
let answer3 = "40"
let answer4 = "Trajectory"
let answer5 = "3"

let correctAnswers = [answer1, answer2, answer3, answer4, answer5]
//correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];

let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name?: ");
  console.log("Candidate's Name " +  candidateName)
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (i = 0; i < questions.length; i++){
  let user = input.question(questions[i]);
  candidateAnswers.push(user);
}
}

function gradeQuiz(candidateAnswers) {
  let numberOfQuizQuestions = correctAnswers.length;
  let numberOfCorrectAnswers = 0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (let i = 0; i < candidateAnswers.length; i++ ){
    if (correctAnswers[i].toLowerCase() === candidateAnswers[i].toLowerCase()){
      console.log("Great!! your answer is correct");
      numberOfCorrectAnswers += 1;
    } else{
      console.log("Incorrect answer");
      }
  }
  let grade;  //TODO 3.2 use this variable to calculate the candidates score. 
  numberOfQuizQuestions = correctAnswers.length;
  grade = (numberOfCorrectAnswers/numberOfQuizQuestions) * 100
  if (grade >= 80){
    console.log(`Great!! ${candidateName}, you passed the quiz with an ${grade}%.`);
  } else{
    console.log(`Sorry!! ${candidateName}, youfailed the quiz with an ${grade}%.`);
    }
    return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello " + candidateName);
  askQuestion();
  gradeQuiz(candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};