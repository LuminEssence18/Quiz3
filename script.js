const questions = [
    { question: "Was it real?", answers: ["Yes", "No"] },
    { question: "Have you been here before? You look very comfortable.", answers: ["Yes", "No"] },
    { question: "What are you more afraid of?", answers: ["Being out of control", "Being in control"] },
    { question: "Is your glass bulletproof?", answers: ["Yes", "No"] },
    { question: "How high is that drop?", answers: ["I do not know", "What drop?"] },
    { question: "Behind you.", answers: ["Yes", "No"] },
    { question: "Is it cold where you are?", answers: ["Yes", "No"] },
    { question: "How many years ago were you?", answers: ["Happy", "Sad", "Discontent", "Grateful"] },
    { question: "Did you see that?", answers: ["Yes", "No"] }
];

let questionIndex = 0;

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function startQuiz() {
    questionIndex = 0; // Reset question index for new quiz
    shuffleQuestions(); // Shuffle the questions at the start
    displayQuestion();
}

function exitQuiz() {
    document.getElementById('question').innerText = "Maybe next time...";
    document.getElementById('answer1').style.display = "none";
    document.getElementById('answer2').style.display = "none";
}

function displayQuestion() {
    if (questionIndex < questions.length) {
        const currentQuestion = questions[questionIndex];
        document.getElementById('question').innerText = currentQuestion.question;
        document.getElementById('answer1').innerText = currentQuestion.answers[0];
        document.getElementById('answer1').onclick = nextQuestion;

        if (currentQuestion.answers[1]) {
            document.getElementById('answer2').style.display = "inline-block";
            document.getElementById('answer2').innerText = currentQuestion.answers[1];
            document.getElementById('answer2').onclick = nextQuestion;
        } else {
            document.getElementById('answer2').style.display = "none";
        }
    } else {
        document.getElementById('question').innerText = "Quiz complete. Result: [Your Fate Awaits]";
        document.getElementById('answer1').style.display = "none";
        document.getElementById('answer2').style.display = "none";
    }
}

function nextQuestion() {
    questionIndex++;
    displayQuestion();
}
