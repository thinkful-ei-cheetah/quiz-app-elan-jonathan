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
        fetch(this.BASE_URL)
            .then(res => res.json())
            .then(data => console.log(data.results))
    }
}

const newQuiz = new QuizApi;
newQuiz.getItems();