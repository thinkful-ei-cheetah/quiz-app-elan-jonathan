'use strict';

class Question {
    constructor(text, answers, correctAnswer, userAnswer) {
        text,
        answers,
        correctAnswer,
        userAnswer
    }

    submitAnswer(answer) {
        this.userAnswer = answer;
    } 
    answerStatus() {
        if (userAnswer === correctAnswer) {
            return 1;
        }
        if (userAnswer === '') {
            return -1;
        }
        else {
            return 0;
        }
    }
}

class Quiz {
    constructor(unasked, asked, activeQuestion, score, scoreHistory, active) {
        unasked,
        asked,
        activeQuestion,
        score,
        scoreHistory,
        active
    }
    start() {
        this.active = true;
        const startQuiz = new Quiz();
        const quizApi = new QuizApi();
        newQuiz.getItems()
            .then(results => results = )
    }

    nextQuestion() {
        this.activeQuestion = this.unasked.pop();
    }
   
    submitAnswer() {
        if (this.unasked.length > 0) {
            this.asked.push(this.activeQuestion);
        }
        let activeQuestion = new Question();
        let currentScore = activeQuestion.answerStatus();
        score += currentScore;
        this.scoreHistory.push(currentScore);
        }
}

class QuizApi {
    constructor() {
        this.BASE_URL = "https://opentdb.com/api.php?amount=10";
    }
    getItems() {
        return fetch(this.BASE_URL)
            .then(res => res.json())
            .then(data => data.results.map(item => ({question: item.question, correctAnswer: item.correct_answer, incorrectAnswers: item.incorrect_answers})))
    }
}

const newQuiz = new QuizApi;
console.log(newQuiz.getItems());