var examTimer = document.getElementById("examTime");

(function () {
    var timeInSeconds = 10;
    var width = 0;
    var id = setInterval(setWidth, 1000);
    function setWidth() {
        if (width >= 100) {
            clearInterval(id);
            calcResult();
        } else {
            width = width + (100 / timeInSeconds);
            width = Math.min(width, 100);
            examTimer.style.width = width + '%';
        }
    }
}())

// -------------------------------------------------------------------

function shuffle(array) {

    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

// -------------------------------------------------------------------

function Question(text, questionId, rightAnswer) {

    this.text = text;
    this.questionId = questionId;
    this.rightAnswer = rightAnswer;
    this.answers = [];
    this.addAnswers = function (text, id) {
        var answer = {
            text,
            id,
        };
        this.answers.push(answer);
        return this.answers.length;
    }
}

// -------------------------------------------------------------------

var questions = [];

var question1 = new Question(`They ______ my brothers.`, 1, "are");
questions.push(question1)

var question2 = new Question(`Is Susan ______ home?`, 2, "at");
questions.push(question2)

var question3 = new Question(`Do the children go to school every day? ______ .`, 3, "Yes,they do");
questions.push(question3)

var question4 = new Question(`They always go to school ______ bicycle.`, 4, "by");
questions.push(question4)

var question5 = new Question(`What ______ now?`, 5, "is the time");
questions.push(question5)

// -------------------------------------------------------------------

var answers1 = ["is", "am", "are", "be"]
for (let y = 0; y < answers1.length; y++) {
    question1.addAnswers(answers1[y], y + 1);
}
var answers2 = ["under", "at", "on", "in"];
for (let y = 0; y < answers2.length; y++) {
    question2.addAnswers(answers2[y], y + 1);
}
var answers3 = ["Yes,they do", "Yes,they go", "No,they don't go", "They go"]
for (let y = 0; y < answers3.length; y++) {
    question3.addAnswers(answers3[y], y + 1);
}
var answers4 = ["in", "by", "on", "with"]
for (let y = 0; y < answers4.length; y++) {
    question4.addAnswers(answers4[y], y + 1);
}
var answers5 = ["does the time", "is time", "is it", "is the time"]
for (let y = 0; y < answers5.length; y++) {
    question5.addAnswers(answers5[y], y + 1);
}

// -------------------------------------------------------------------

shuffle(question1.answers);
shuffle(question2.answers);
shuffle(question3.answers);
shuffle(question4.answers);
shuffle(question5.answers);
shuffle(questions);

// -------------------------------------------------------------------

var quesContainer = document.getElementById("quesContainer");


for (let m = 0; m < questions.length; m++) {

    var div = document.createElement("div");
    div.setAttribute("id", `q${m + 1}`);
    div.classList.add("quesContent");

    var p = document.createElement("p");
    p.classList.add("question");
    p.setAttribute("id", `${questions[m].questionId}`);

    p.innerHTML = `${m + 1}- ${questions[m].text}`;

    var ul = document.createElement("ul");
    ul.classList.add("answerContainer");

    quesContainer.appendChild(div);
    div.appendChild(p);
    div.appendChild(ul);

    addAnswer(ul, m)
}

var firstQuesContent = document.getElementById("q1");
firstQuesContent.classList.add("active");

// -------------------------------------------------------------------

function addAnswer(ul, m) {

    for (let i = 0; i < questions[m].answers.length; i++) {

        var li = document.createElement("li");
        li.classList.add("answerContent");

        var label = document.createElement("label");
        label.classList.add("answerTxt");
        label.setAttribute("for", `answer${questions[m].questionId}-${questions[m].answers[i].id}`);
        label.innerHTML = questions[m].answers[i].text;

        var input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("value", questions[m].answers[i].text);
        input.setAttribute("name", `ques${questions[m].questionId}`);
        input.setAttribute("id", `answer${questions[m].questionId}-${questions[m].answers[i].id}`);

        ul.appendChild(li);
        li.appendChild(label);
        li.appendChild(input);
    }
}

// -------------------------------------------------------------------

var numBtn = document.getElementById("numBtn");
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");

var currentQuestionIndex = 1;

function showNext() {
    ++currentQuestionIndex;
    showQuestion();
}

function showPrev() {
    --currentQuestionIndex;
    showQuestion();
}

// -------------------------------------------------------------------

var markBtn = document.getElementsByClassName("markBtn")[0];

function showQuestion() {

    var activeOne = document.getElementsByClassName("active")[0];
    activeOne.classList.remove("active");

    document.getElementById(`q${currentQuestionIndex}`).classList.add("active");
    numBtn.innerText = currentQuestionIndex;

    if (currentQuestionIndex == questions.length) {
        nextBtn.style.visibility = "hidden";
    }
    else {
        nextBtn.style.visibility = "visible";
    }

    if (currentQuestionIndex == 1) {
        prevBtn.style.visibility = "hidden";
    }
    else {
        prevBtn.style.visibility = "visible";
    }

    var markedQuestionBtn = document.getElementById(`ques${currentQuestionIndex}Index`);

    if (markedQuestionBtn !== null) {
        markBtn.classList.add("markedQues");
    } else {
        markBtn.classList.remove("markedQues");
    }
}

// -------------------------------------------------------------------

var markContainer = document.getElementById("markContainer");

function markQuestion() {

    var questionIndex = numBtn.innerText;
    var markedQuestionBtn = document.getElementById(`ques${questionIndex}Index`);

    if (markedQuestionBtn !== null) {
        markBtn.classList.remove("markedQues");
        markedQuestionBtn.remove();
    } else {
        markBtn.classList.add("markedQues");

        var markButton = document.createElement("button");
        markButton.innerText = `Question ${questionIndex}`;
        markButton.classList.add("quesBtn");

        markButton.setAttribute("id", `ques${questionIndex}Index`);
        markContainer.appendChild(markButton);

        markButton.onclick = function () {
            currentQuestionIndex = questionIndex;
            showQuestion();
        }
    }
}

// -------------------------------------------------------------------

function calcResult() {
    var res = 0;

    for (let ans = 0; ans < questions.length; ans++) {

        var questionId = questions[ans].questionId;

        var rightAnswer = questions[ans].rightAnswer;

        var choosenAnswer = document.querySelector(`input[name="ques${questionId}"]:checked`);

        if (choosenAnswer != null) {
            var selectedAnswer = choosenAnswer.value;
        }

        if (rightAnswer == selectedAnswer) {
            res += 20;
        }
    }
    console.log(res)
    setCookie("result", res);
    window.location.replace("../pages/result.html")
}
