const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer;
candidateAnswer = "";

//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = []

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question("What is your name? ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  for (let i = 0; i < questions.length; i++){
    candidateAnswers[i] = input.question(questions[i]);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
let grade = 0; 
let score = 0;
 for (let i = 0; i < candidateAnswers.length; i++){
   //TODO 3.2 use this variable to calculate the candidates score.
   console.log(questions[i]);
   console.log(`You answered ${candidateAnswers[i]}\nThe correct answer is ${correctAnswers[i]}!`)
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
    score = score + 1;
  }
} 
grade = (score/5)*100;
console.log(`You got ${score} out of 5 questions correct for a score of ${grade}%.`)
if (grade >= 80) {
  console.log("You have passed!")
} else {
  console.log("Sorry, you have failed.")
}
return grade;


}
function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
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