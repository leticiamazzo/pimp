/* Objeto com as perguntas */
let questions = [
  {
    text: "Você mora em casa ou apartamento?",
    answer: true
  },
  {
    text: "Você procura reduzir o consumo de que tipo de recurso?",
    answer: false
  },
  {
    text: "Quanto você pode investir?",
    answer: true  
  }
]

/* Elementos necessarios para o quiz funcionar */
const questionsAll = document.getElementById("questions")
const closeButton = document.getElementById("close")
const startButton = document.querySelector("#container button")
const overlay = document.getElementById("overlay")
const container = document.getElementById("container")

/* Abrir e fechar o quiz */
let interval = undefined
startButton.addEventListener("click", openQuiz)
closeButton.addEventListener("click", closeQuiz)

/* Para a tela subir */
function openQuiz() {
  overlay.style.top = "0vh"
  interval = startTimer(timer)
}

/* Trazendo as questões para o lado */
function closeQuiz() {
  setTimeout(function () {
    questionsAll.style.left = "0vw"
  }, 500)
  overlay.style.top = "100vh"
  clearInterval(interval)
}

/* Crio o HTML das perguntas */
for (let i = 0; i < questions.length; i++) {
  //adiciona a div
  const questionDiv = document.createElement("div")
  questionDiv.classList.add("question")
  questionDiv.style.left = 100 * i + "vw"

  // roda o for e adiociona a primeira pergunta
  const questionP = document.createElement("p")
  questionP.textContent = questions[i].text

  // roda o for e adiociona a primeira resposta
  const answersDiv = document.createElement("div")
  answersDiv.classList.add("answers")

  // cria botões de verdadeiro ou falso
  const trueButton = document.createElement("button")
  trueButton.textContent = "VERDADEIRO"
  const falseButton = document.createElement("button")
  falseButton.textContent = "FALSO"

  // insere tudo na tela
  questionDiv.appendChild(questionP)
  answersDiv.appendChild(trueButton)
  answersDiv.appendChild(falseButton)
  questionDiv.appendChild(answersDiv)
  questionsAll.appendChild(questionDiv)

// independente do botao clicado vai para uma outra questão
  trueButton.addEventListener("click", function() {
    questions[i].userAnswer = true
    nextQuizStep(i)
  })

  falseButton.addEventListener("click", function() {
    questions[i].userAnswer = false
    nextQuizStep(i)
  })
}

// empurra a pergunta para o lado
function nextQuizStep(index) {
  if (index < questions.length - 1) {
    questionsAll.style.left = `calc(${questionsAll.offsetLeft}px - 100vw)`
  } else {
    let answeredQuestions = ''
    for (const question of questions) {
      answeredQuestions += `
        <li>
          ${question.text}<br />
          <span class="${question.userAnswer === question.answer ? "right" : "wrong"}">
            ${question.userAnswer === true ? "VERDADEIRO" : "FALSO"}
          </span>
        </li>
      `
    }

    container.innerHTML = `<ul>${answeredQuestions}</ul>`

    const tryAgainButton = document.createElement("button")
    tryAgainButton.textContent = "Tente novamente"
    tryAgainButton.addEventListener("click", openQuiz)
    container.appendChild(tryAgainButton)

    closeQuiz()
  }
}