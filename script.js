const quizData = [
    {
        question: "What is the total answer for 2+3 ?",
        a: "1",
        b: "3",
        c: "5",
        d: "6",
        correct: "c",
    },
    {
        question: "What is the total answer for 5-3 ?",
        a: "1",
        b: "2",
        c: "5",
        d: "6",
        correct: "b",
    },
    {
        question: "What is the total answer for 15%3 ?",
        a: "1",
        b: "3",
        c: "5",
        d: "9",
        correct: "c",
    },
    {
        question: "What is the total answer for 3x3 ?",
        a: "9",
        b: "10",
        c: "11",
        d: "12",
        correct: "a",
    },
	{
        question: "What is the square of 5 ?",
        a: "1",
        b: "4",
        c: "9",
        d: "25",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})