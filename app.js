const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const userScore = document.getElementById('user-score');
const quesText = document.getElementById('ques-text');
let currentQues = 0;
var score = 0;
let questions = [
    {
        question:"Are you ready for the quiz? ",
        answers:[
            {option:"yess!!!",answer:true},
            {option:"No, not at all.",answer:false}
        ]
    },
    {
        question:"Complete the phrase: All the glitters are not ______ ",
        answers:[
            {option:"Shiny",answer:false},
            {option:"Gold",answer:true}
        ]
    },
    {
        question:"Complete the phrase: You are ______ ",
        answers:[
            {option:"Bad",answer:false},
            {option:"Awesome",answer:true}
        ]
    }
]

restartBtn.addEventListener('click',restart);
prevBtn.addEventListener('click',prev);
nextBtn.addEventListener('click',next);
submitBtn.addEventListener('click',submit);

function beginQuiz(){
    currentQues = 0;
    quesText.innerHTML = questions[currentQues].question;
    trueBtn.innerHTML = questions[currentQues].answers[0].option;
    trueBtn.onclick = () => {
        let ano=0;
        if(questions[currentQues].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQues<2){
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQues].answers[1].option;
    falseBtn.onclick = () => {
        let ano=1;
        if(questions[currentQues].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQues<2){
            next();
        }
    }
    prevBtn.classList.add('hide');
}
beginQuiz();
function restart(){
    currentQues = 0;
    prevBtn.classList.remove('hide');
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    trueBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}
function next(){
    currentQues++;
    if(currentQues>=2){
        nextBtn.classList.add('hide');
        prevBtn.classList.remove('hide');
    }
    quesText.innerHTML = questions[currentQues].question;
    trueBtn.innerHTML = questions[currentQues].answers[0].option;
    trueBtn.onclick = ()=>{
        let ano=0;
        if(questions[currentQues].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQues<2){
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQues].answers[1].option;
    falseBtn.onclick = ()=>{
        let ano=1;
        if(questions[currentQues].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQues<2){
            next();
        }
    }
    prevBtn.classList.remove('hide');
}
function prev(){
    currentQues--;
    if(currentQues<=0){
        prevBtn.classList.add('hide');
        nextBtn.classList.remove('hide');
    }
    quesText.innerHTML = questions[currentQues].question;
    trueBtn.innerHTML = questions[currentQues].answers[0].option;
    trueBtn.onclick = ()=>{
        let ano=0;
        if(questions[currentQues].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQues<2){
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQues].answers[1].option;
    falseBtn.onclick = ()=>{
        let ano=1;
        if(questions[currentQues].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQues<2){
            next();
        }
    }
    nextBtn.classList.remove('hide');
}
function submit(){
    prevBtn.classList.add('hide');
    nextBtn.classList.add('hide');
    submitBtn.classList.add('hide');
    trueBtn.classList.add('hide');
    falseBtn.classList.add('hide');
    quesText.innerHTML="Congratulations on submitting the quiz!";
}