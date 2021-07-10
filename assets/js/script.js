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

var quizEl = document.querySelector('.quiz');
var quizWrapperEl = document.querySelector('.quiz-wrapper');

var initialsFormEl = document.querySelector('.initials-form');

var questionId = 0;
var startScore = 90;
var wrongAnswer = false;

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
    //remove the introduction text
    introEl.remove();
    timerEl.textContent = startScore;

    //timer counting down - set interval 1s update <span>
    var countingDown = setInterval(function () {
        if (startScore >= 1) {
            startScore--;
            timerEl.textContent = startScore;
        } else {
            clearInterval(countingDown);
            showResult();
            answerEl.remove();
        }
    }, 1000)

    //show the first question
    showQuestion();
}


var showQuestion = function () {

    // show question - add q text, <li>
    questionEl.textContent = quizArr[questionId].question;

    //append option A - D
    var optionAEl = document.createElement('li');
    optionAEl.className = "option A btn btn-primary";
    optionAEl.setAttribute('id', questionId)
    optionAEl.textContent = quizArr[questionId].answerA;
    optionsEl.appendChild(optionAEl);

    var optionBEl = document.createElement('li');
    optionBEl.className = "option B btn btn-primary";
    optionBEl.setAttribute('id', questionId)
    optionBEl.textContent = quizArr[questionId].answerB;
    optionsEl.appendChild(optionBEl);

    var optionCEl = document.createElement('li');
    optionCEl.className = "option C btn btn-primary";
    optionCEl.setAttribute('id', questionId)
    optionCEl.textContent = quizArr[questionId].answerC;
    optionsEl.appendChild(optionCEl);

    var optionDEl = document.createElement('li');
    optionDEl.className = "option D btn btn-primary";
    optionDEl.setAttribute('id', questionId)
    optionDEl.textContent = quizArr[questionId].answerD;
    optionsEl.appendChild(optionDEl);

    questionId++
}

var checkOptionHandler = function (event) {

    var selectedId = JSON.parse(event.target.getAttribute('id'));
    var selectedAnswer = event.target.textContent;

    if (selectedAnswer === quizArr[selectedId].rightAnswer) {
        console.log('answer is correct');

        //show answer
        answerEl.className = 'answer-border';
        answerEl.textContent = "Correct!";
        //change question
        updateQuestion(selectedId);
    } else {
        console.log('answer is wrong');
        wrongAnswer = true;
        //show answer
        answerEl.className = 'answer-border';
        answerEl.textContent = "Wrong!"
        // deduct time/score
        console.log(timerEl.textContent);
        startScore = timerEl.textContent - 10;
        //change question
        updateQuestion(selectedId);
    }
}

var updateQuestion = function (selectedId) {
    console.log(selectedId);
    console.log(quizArr.length - 1);

    //when it's the last question in an array, show result
    if (selectedId === quizArr.length - 1) {
        console.log('comethrough');
        startScore = 0;
        return false;
    }

    //update question
    questionEl.textContent = quizArr[questionId].question;
    //update option A - D
    var optionAEl = document.querySelector('li.A')
    optionAEl.setAttribute('id', questionId)
    optionAEl.textContent = quizArr[questionId].answerA;
    var optionBEl = document.querySelector('li.B')
    optionBEl.setAttribute('id', questionId)
    optionBEl.textContent = quizArr[questionId].answerB;
    var optionCEl = document.querySelector('li.C')
    optionCEl.setAttribute('id', questionId)
    optionCEl.textContent = quizArr[questionId].answerC;
    var optionDEl = document.querySelector('li.D')
    optionDEl.setAttribute('id', questionId)
    optionDEl.textContent = quizArr[questionId].answerD;

    questionId++
}


var showResult = function () {

    //remove the introduction text
    quizWrapperEl.remove();

    var resultEl = document.createElement('div');
    resultEl.className = "result";

    var resultHeadingEl = document.createElement('h2');
    resultHeadingEl.textContent = 'All done!'
    resultEl.appendChild(resultHeadingEl);

    // check if all answers are correct
    var resultTextEl = document.createElement('p');
    if (!wrongAnswer) {
        resultTextEl.innerHTML = 'Your final score is <span class="finalScore">'+ timerEl.textContent +'</span>.';
    } else {
        resultTextEl.innerHTML = 'Your final score is <span class="finalScore"> 0 </span>.';
    }
    resultEl.appendChild(resultTextEl);

    quizEl.prepend(resultEl);

    // var initialsFormEl = document.createElement('form')
    var initialLabelEl = document.createElement('label')
    initialLabelEl.textContent = 'Enter initials:'
    initialsFormEl.appendChild(initialLabelEl);

    var initialInputEl = document.createElement('input');
    initialsFormEl.appendChild(initialInputEl);

    var initiualSubmitEL = document.createElement('button');
    initiualSubmitEL.className = "btn btn-primary btn-lg";
    initiualSubmitEL.type = 'submit'
    initiualSubmitEL.textContent = 'Submit';
    initialsFormEl.appendChild(initiualSubmitEL);

}


var saveScore = function (event) {
    event.preventDefault();
    console.log(event);
    var playerInitials = document.querySelector('input').value;
    var score = document.querySelector('.finalScore').textContent;
 
    localStorage.setItem('initials',playerInitials);
    localStorage.setItem('score',score);

    viewScores();

}

var viewScores = function (){

    quizEl.remove();
    


}

startBtnEl.addEventListener('click', startQuiz);

optionsEl.addEventListener('click', checkOptionHandler);

initialsFormEl.addEventListener('submit', saveScore)
