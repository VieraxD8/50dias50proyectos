const quizData = [
    {
        question: "¿Qué idioma se ejecuta en un navegador web?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "¿Qué significa CSS?",
        a: "Hojas de estilo centrales",
         b: "Hojas de estilo en cascada",
         c: "Hojas simples en cascada",
         d: "Coches SUV Veleros",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Lenguaje de marcado de hipertexto",
        b: "Lenguaje de rebajas de hipertexto",
        c: "Lenguaje de máquina Hyperloop",
        d: "Helicópteros Terminales Lanchas Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "Ninguna de las anteriores",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const C_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let CurrentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();


    const CurrentQuizData = quizData[CurrentQuiz];

    questionEl.innerHTML = CurrentQuizData.question;
    a_text.innerHTML = CurrentQuizData.a;
    b_text.innerHTML = CurrentQuizData.b;
    C_text.innerHTML = CurrentQuizData.c;
    d_text.innerHTML = CurrentQuizData.d;

}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false);
}

function getSelected() {

    let answer

    answerEls.forEach(answerEls => {
        if(answerEls.checked){
            answer = answerEls.id;
        }

    });

    return answer;
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();
    
    if(answer){
        if(answer === quizData[CurrentQuiz].correct){
            score++
        }

        CurrentQuiz++;


        if(CurrentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Respondiste correctamente a las preguntas de ${score}/${quizData.length} </h2>
    
                <button onclick="location.reload()">Recargar</button>
    
            
            `;
        }
    }
    
});