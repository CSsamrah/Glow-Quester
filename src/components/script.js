const questions = [
    {
        question: "How does your skin feel after cleansing?",
        answers: [
            { text: "Dry and tight", type: "dry" },
            { text: "Smooth and balanced", type: "normal" },
            { text: "Oily and shiny", type: "oily" },
            { text: "Sensitive and irritated", type: "sensitive" },
        ]
    },
    {
        question: "What is your main skin concern?",
        answers: [
            { text: "Dryness", type: "dry" },
            { text: "Acne and breakouts", type: "oily" },
            { text: "Hyperpigmentation and dark spots", type: "oily" },
            { text: "Redness and irritation", type: "sensitive" },
        ]
    },
    {
        question: "How often do you experience breakouts?",
        answers: [
            { text: "Rarely", type: "normal" },
            { text: "Occasionally", type: "combination" },
            { text: "Frequently", type: "oily" },
            { text: "Almost always", type: "sensitive" },
        ]
    },
    {
        question: "How often do you use skincare products?",
        answers: [
            { text: "Only basic products", type: "basic" },
            { text: "Daily, a simple routine", type: "simple" },
            { text: "Twice a day, an extensive routine", type: "extensive" },
            { text: "Occasionally, when I remember", type: "inconsistent" },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const homeButton = document.getElementById("home-btn");

let currentQuestionIndex = 0;
let userAnswers = [];

function startQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    restartButton.style.display = "none";
    homeButton.style.display = "none"; // Hide home button initially
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(button, answer) {
    userAnswers[currentQuestionIndex] = answer;
    const buttons = answerButtons.getElementsByClassName("btn");
    for (let btn of buttons) {
        btn.classList.remove("selected");
    }
    button.classList.add("selected");
    nextButton.style.display = 'block';
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResults();
    }
});

restartButton.addEventListener("click", startQuiz);

function showResults() {
    resetState();
    questionElement.innerHTML = "Your Skincare Routine:";
    const firstThreeResults = determineSkincareRoutine();
    const pFirstThree = document.createElement("p");
    pFirstThree.innerHTML = firstThreeResults;
    pFirstThree.classList.add("result-text");
    questionElement.appendChild(pFirstThree);

    const lastQuestionResult = determineLastQuestionResult();
    const pLastQuestion = document.createElement("p");
    pLastQuestion.innerHTML = lastQuestionResult;
    pLastQuestion.classList.add("result-text");
    questionElement.appendChild(pLastQuestion);

    nextButton.style.display = 'none';
    restartButton.style.display = 'block';
    homeButton.style.display = 'block'; // Show home button
}

function determineSkincareRoutine() {
    const typeCount = {
        dry: 0,
        oily: 0,
        sensitive: 0,
        normal: 0,
        combination: 0,
        aging: 0,
        basic: 0,
        simple: 0,
        extensive: 0,
        inconsistent: 0
    };

    userAnswers.slice(0, 3).forEach(answer => {
        typeCount[answer.type]++;
    });

    let predominantType = Object.keys(typeCount).reduce((a, b) => typeCount[a] > typeCount[b] ? a : b);

    if (typeCount[predominantType] === 0) {
        predominantType = 'normal'; // Default to normal skin type
    }

    const routine = {
        dry: "For dry skin, consider the following:<br><br>Choose an oil cleanser or any hydrating cleanser.<br>Tone with an alcohol-free toner to restore skin pH.<br>Use a hydrating moisturizer containing an emollient base.",
        oily: "For oily skin, consider the following:<br><br>Choose a water/gel-based cleanser.<br>Use non-comedogenic moisturizers.<br>Look for ingredients like hyaluronic acid or glycerin which are good choices for oily skin.",
        sensitive: "For sensitive skin, consider the following:<br><br>Use a mild and non-scented cleanser.<br>Apply moisturizer often to help prevent dry skin.<br>Apply sunscreen for added protection.",
        normal: "For normal skin, consider the following:<br><br>Daily use of a gentle, effective cleanser.<br>Consider using a non-irritating AHA or BHA exfoliant.<br>Protect your skin from sun damage with an SPF of 40 or more.",
        combination: "For combination skin, consider the following:<br><br>Use a gel cleanser.<br>Use a balancing moisturizer.<br>Use sunscreen with SPF 30 suitable for combination skin.",
        aging: "Consider anti-aging serums and moisturizing products. Use sunscreen spf 50.",
        basic: "Stick to basic products like a gentle cleanser, moisturizer, and sunscreen.",
        simple: "Follow a simple routine with essential products like a cleanser, moisturizer, and sunscreen.",
        extensive: "Include serums and treatments in your routine along with cleanser, moisturizer, and sunscreen.",
        inconsistent: "Try to be more consistent with a basic routine of cleanser, moisturizer, and sunscreen."
    };

    return routine[predominantType];
}

function determineLastQuestionResult() {
    const lastAnswer = userAnswers[userAnswers.length - 1];

    if (lastAnswer) {
        switch (lastAnswer.type) {
            case 'basic':
                return "For basic skincare routine, stick to a gentle cleanser, moisturizer, and sunscreen.";
            case 'simple':
                return "For a simple skincare routine, follow essential products like a cleanser, moisturizer, and sunscreen.";
            case 'extensive':
                return "For an extensive skincare routine, include serums and treatments along with a cleanser, moisturizer, and sunscreen.";
            case 'inconsistent':
                return "To improve consistency, try to stick to a basic routine of cleanser, moisturizer, and sunscreen.";
            default:
                return "";
        }
    } else {
        return "";
    }
}

startQuiz();











