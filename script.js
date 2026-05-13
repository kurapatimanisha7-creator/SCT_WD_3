const quizData = [

    {
        question:"Which language is used for web styling?",
        options:["HTML","Python","CSS","Java"],
        answer:"CSS"
    },

    {
        question:"Which is used for web structure?",
        options:["HTML","C++","Java","Python"],
        answer:"HTML"
    },

    {
        question:"Which keyword is used for variables in JavaScript?",
        options:["var","int","string","float"],
        answer:"var"
    },

    {
        question:"Which company developed JavaScript?",
        options:["Google","Microsoft","Netscape","Apple"],
        answer:"Netscape"
    }

];

let currentQuestion = 0;
let score = 0;

const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const nextBtn =
    document.getElementById("nextBtn");

function loadQuestion(){

    resetOptions();

    let currentQuiz =
        quizData[currentQuestion];

    questionElement.innerText =
        currentQuiz.question;

    currentQuiz.options.forEach(option => {

        let button =
            document.createElement("button");

        button.innerText = option;

        button.classList.add("option");

        button.addEventListener(
            "click",
            () => selectAnswer(button,currentQuiz.answer)
        );

        optionsElement.appendChild(button);

    });

}

function resetOptions(){
    nextBtn.style.display = "none";
    optionsElement.innerHTML = "";
}

function selectAnswer(button,correctAnswer){

    let buttons =
        document.querySelectorAll(".option");

    buttons.forEach(btn => {

        btn.disabled = true;

        if(btn.innerText === correctAnswer){
            btn.classList.add("correct");
        }

    });

    if(button.innerText === correctAnswer){
        score++;
    }
    else{
        button.classList.add("wrong");
    }

    nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click",() => {

    currentQuestion++;

    if(currentQuestion < quizData.length){
        loadQuestion();
    }
    else{
        showResult();
    }

});

function showResult(){

    document.getElementById("question-box")
        .classList.add("hide");

    document.getElementById("result-box")
        .classList.remove("hide");

    document.getElementById("score")
        .innerText =
        `${score} / ${quizData.length}`;

}

function restartQuiz(){

    currentQuestion = 0;
    score = 0;

    document.getElementById("question-box")
        .classList.remove("hide");

    document.getElementById("result-box")
        .classList.add("hide");

    loadQuestion();
}

loadQuestion();