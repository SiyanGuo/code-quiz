var introEl = document.querySelector('.intro');
var startBtnEl = document.querySelector('.start-button');
//question title
var questionEl = document.querySelector('.question');
//question options
var optionsEl = document.querySelector('.options')
//time/score 
var timerEl = document.querySelector('.timer');
//show answer
var answerEl = document.querySelector('.answer');
//main content
var pageContentEl = document.querySelector('.page-content');

var questionId = 0;

var quizArr = [
    {
        question: "Commonly used data types DO NOT include:",
        answerA: "1. strings",
        answerB: "2. booleans",
        answerC: "3. alerts",
        answerD: "4. numbers",
        rightAnswer: "3. alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with _______.",
        answerA: "1. quotes",
        answerB: "2. curly brackets",
        answerC: "3. parenthesis",
        answerD: "4. square brackets",
        rightAnswer: "3. parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        answerA: "1. numbers and strings",
        answerB: "2. other arrays",
        answerC: "3. booleans",
        answerD: "4. all of the above",
        rightAnswer: "4. all of the above"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answerA: "1. commas",
        answerB: "2. curly brackets",
        answerC: "3. quotes",
        answerD: "4. parenthesis",
        rightAnswer: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for priting content to the debugger is:",
        answerA: "1. JavaScript",
        answerB: "2. terminal/bash",
        answerC: "3. for loops",
        answerD: "4. console.log",
        rightAnswer: "3. for loops"
    }
];

var startQuiz = function () {
    introEl.remove();

    showQuestion();

    //timer counting down - set interval 1s update <span>
    var startScore = 90;
    var countingDown = setInterval(function () {
        if (startScore >= 0) {
            timerEl.textContent = startScore;
            startScore--;
        } else {
            clearInterval(countingDown);
            //call result function
        }
    }, 1000)
}


var showQuestion = function () {

    // show question - add q text, <li>
    questionEl.textContent = quizArr[questionId].question;

    //append option A - D
    var optionAEl = document.createElement('li');
    optionAEl.className = "optionA btn btn-primary";
    optionAEl.setAttribute('id', questionId)
    optionAEl.textContent = quizArr[questionId].answerA;
    optionsEl.appendChild(optionAEl);

    var optionBEl = document.createElement('li');
    optionBEl.className = "optionB btn btn-primary";
    optionBEl.setAttribute('id', questionId)
    optionBEl.textContent = quizArr[questionId].answerB;
    optionsEl.appendChild(optionBEl);

    var optionCEl = document.createElement('li');
    optionCEl.className = "optionC btn btn-primary";
    optionCEl.setAttribute('id', questionId)
    optionCEl.textContent = quizArr[questionId].answerC;
    optionsEl.appendChild(optionCEl);

    var optionDEl = document.createElement('li');
    optionDEl.className = "optionD btn btn-primary";
    optionDEl.setAttribute('id', questionId)
    optionDEl.textContent = quizArr[questionId].answerD;
    optionsEl.appendChild(optionDEl);

    questionId++
}

var checkOptionHandler = function (event) {

    var selectedId = event.target.getAttribute('id');
    var selectedAnswer = event.target.textContent;

    if (selectedAnswer === quizArr[selectedId].rightAnswer) {
        console.log('answer is correct');
        //change question
        updateQuestion();
        //show answer
        answerEl.className = 'answer-border';
        answerEl.textContent = "Correct!"
    } else {
        console.log('answer is wrong');
        //change question
        updateQuestion();
        //show answer
        answerEl.className = 'answer-border';
        answerEl.textContent = "Wrong!"
        // deduct time/score
        timerEl.textContent = startScore - 10;
    }
}

var updateQuestion = function () {
    //update question
    questionEl.textContent = quizArr[questionId].question;
    //update option A - D
    var optionAEl = document.querySelector('li.optionA')
    optionAEl.setAttribute('id', questionId)
    optionAEl.textContent = quizArr[questionId].answerA;
    var optionBEl = document.querySelector('li.optionB')
    optionBEl.setAttribute('id', questionId)
    optionBEl.textContent = quizArr[questionId].answerB;
    var optionCEl = document.querySelector('li.optionC')
    optionCEl.setAttribute('id', questionId)
    optionCEl.textContent = quizArr[questionId].answerC;
    var optionDEl = document.querySelector('li.optionD')
    optionDEl.setAttribute('id', questionId)
    optionDEl.textContent = quizArr[questionId].answerD;

    questionId++
}


startBtnEl.addEventListener('click', startQuiz);

optionsEl.addEventListener('click', checkOptionHandler);