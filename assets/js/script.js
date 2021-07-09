var introEl = document.querySelector('.intro');
var startBtnEl = document.querySelector('.start-button');

var startQuiz = function(){
    introEl.remove();
}

startBtnEl.addEventListener('click', startQuiz);
