/* =====================================================
   CODEArenaOrbit
   DEBUG ARENA
===================================================== */


/* ================= DEBUG QUESTION BANK ================= */

const debugQuestions = [

    {
        language: "HTML",
        title: "Find the HTML Bug",
        file: "broken-code.html",
        code:
`<!DOCTYPE html>
<html>

<head>
    <title>My Page</title>
</head>

<body>

    <h1>Welcome to CODEArenaOrbit</h2>

</body>

</html>`,

        question: "What is wrong with this code?",

        options: [
            "The closing heading tag is incorrect",
            "The title tag is missing",
            "The body tag is incorrect",
            "There is no error"
        ],

        answer: 0
    },


    {
        language: "HTML",
        title: "Find the Image Bug",
        file: "image.html",
        code:
`<img
    src="profile.jpg"
    alt="Profile"
    width="200"
>`,

        question: "What is missing for better image accessibility?",

        options: [
            "A meaningful alt text",
            "A closing img tag",
            "A body tag",
            "A href attribute"
        ],

        answer: 0
    },


    {
        language: "CSS",
        title: "Find the CSS Bug",
        file: "style.css",
        code:
`.card {
    background: black;
    color: white;
    padding: 20px
    border-radius: 12px;
}`,

        question: "Why may the border-radius rule not work correctly?",

        options: [
            "A semicolon is missing after padding",
            "The color is incorrect",
            "Padding cannot be used",
            "border-radius is not valid CSS"
        ],

        answer: 0
    },


    {
        language: "CSS",
        title: "Find the Layout Bug",
        file: "layout.css",
        code:
`.container {
    display: flex;
    justify-content: center;
    align-items: middle;
}`,

        question: "Which property value is incorrect?",

        options: [
            "align-items: middle",
            "display: flex",
            "justify-content: center",
            "Nothing is wrong"
        ],

        answer: 0
    },


    {
        language: "JavaScript",
        title: "Find the JavaScript Bug",
        file: "script.js",
        code:
`let score = 100;

if (score = 100) {
    console.log("Perfect!");
}`,

        question: "What is wrong with the if condition?",

        options: [
            "It uses assignment instead of comparison",
            "score cannot contain numbers",
            "console.log is invalid",
            "There is no error"
        ],

        answer: 0
    },


    {
        language: "JavaScript",
        title: "Find the Array Bug",
        file: "array.js",
        code:
`const skills = ["HTML", "CSS", "JavaScript"];

skills.push = "React";

console.log(skills);`,

        question: "What is wrong with the push statement?",

        options: [
            "push should be called as a function",
            "Arrays cannot contain strings",
            "const arrays cannot be changed",
            "console.log cannot print arrays"
        ],

        answer: 0
    },


    {
        language: "HTML",
        title: "Find the Link Bug",
        file: "links.html",
        code:
`<a src="https://example.com">
    Visit Website
</a>`,

        question: "Which attribute should be used instead of src?",

        options: [
            "href",
            "link",
            "url",
            "target"
        ],

        answer: 0
    },


    {
        language: "CSS",
        title: "Find the Selector Bug",
        file: "selector.css",
        code:
`.hero-title {
    color: purple;
}

hero-title {
    font-size: 40px;
}`,

        question: "Why is the second selector not targeting the class?",

        options: [
            "The dot before the class name is missing",
            "font-size is invalid",
            "color cannot be purple",
            "Classes cannot be styled"
        ],

        answer: 0
    },


    {
        language: "JavaScript",
        title: "Find the Variable Bug",
        file: "variable.js",
        code:
`const username = "Prarthana";

username = "Developer";

console.log(username);`,

        question: "Why does this code produce an error?",

        options: [
            "A const variable cannot be reassigned",
            "Strings cannot be reassigned",
            "console.log is incorrect",
            "username cannot contain text"
        ],

        answer: 0
    },


    {
        language: "JavaScript",
        title: "Find the Function Bug",
        file: "function.js",
        code:
`function greet() {
    console.log("Hello");
}

greet;`,

        question: "What is needed to execute the function?",

        options: [
            "Parentheses after greet",
            "A semicolon before function",
            "A return statement",
            "Nothing"
        ],

        answer: 0
    }

];


/* ================= STATE ================= */

let currentQuestion = 0;

let selectedAnswer = null;

let solved = 0;

let sessionXP = 0;

let streak = 0;


/* ================= ELEMENTS ================= */

const debugLanguage =
    document.querySelector("#debug-language");

const debugTitle =
    document.querySelector("#debug-title");

const debugCode =
    document.querySelector("#debug-code");

const debugQuestion =
    document.querySelector("#debug-question");

const debugOptions =
    document.querySelector("#debug-options");

const debugResult =
    document.querySelector("#debug-result");

const checkButton =
    document.querySelector("#debug-check-btn");

const nextButton =
    document.querySelector("#debug-next-btn");

const debugNumber =
    document.querySelector("#debug-number");

const debugReward =
    document.querySelector("#debug-reward");

const debugXP =
    document.querySelector("#debug-xp");

const solvedCount =
    document.querySelector("#solved-count");

const sessionXPDisplay =
    document.querySelector("#session-xp");

const debugStreak =
    document.querySelector("#debug-streak");


/* ================= LOAD QUESTION ================= */

function loadDebugQuestion() {

    const question =
        debugQuestions[currentQuestion];

    selectedAnswer = null;

    debugLanguage.textContent =
        question.language;

    debugTitle.textContent =
        question.title;

    debugCode.textContent =
        question.code;

    debugQuestion.textContent =
        question.question;

    debugNumber.textContent =
        String(currentQuestion + 1).padStart(2, "0");

    debugReward.textContent =
        "+50 XP";

    debugResult.textContent = "";

    checkButton.style.display =
        "inline-flex";

    nextButton.style.display =
        "none";

    debugOptions.innerHTML = "";


    question.options.forEach(
        function(option, index) {

            const button =
                document.createElement("button");

            button.className =
                "debug-option";

            button.textContent =
                option;

            button.addEventListener(
                "click",
                function() {

                    document
                        .querySelectorAll(".debug-option")
                        .forEach(function(btn) {

                            btn.classList.remove(
                                "selected"
                            );

                        });

                    button.classList.add(
                        "selected"
                    );

                    selectedAnswer =
                        index;

                }
            );

            debugOptions.appendChild(button);

        }
    );

}


/* ================= CHECK ANSWER ================= */

checkButton.addEventListener(
    "click",
    function() {

        if (selectedAnswer === null) {

            debugResult.textContent =
                "Please select an answer first.";

            debugResult.className =
                "debug-result warning";

            return;

        }


        const question =
            debugQuestions[currentQuestion];


        if (selectedAnswer === question.answer) {

            solved++;

            sessionXP += 50;

            streak++;


            debugResult.textContent =
                "✓ Correct! Bug fixed. +50 XP";

            debugResult.className =
                "debug-result correct";


            debugXP.textContent =
                sessionXP + " XP";

            solvedCount.textContent =
                solved;

            sessionXPDisplay.textContent =
                sessionXP;

            debugStreak.textContent =
                streak;


            document
                .querySelectorAll(".debug-option")
                .forEach(function(button) {

                    button.disabled = true;

                });


            checkButton.style.display =
                "none";

            nextButton.style.display =
                "inline-flex";


            addXP(50);

        } else {

            debugResult.textContent =
                "✗ Not quite. Find the bug again.";

            debugResult.className =
                "debug-result wrong";

            streak = 0;

            debugStreak.textContent =
                streak;

        }

    }
);


/* ================= NEXT QUESTION ================= */

nextButton.addEventListener(
    "click",
    function() {

        currentQuestion++;

        if (
            currentQuestion >=
            debugQuestions.length
        ) {

            currentQuestion = 0;

        }

        loadDebugQuestion();

    }
);


/* ================= ADD XP ================= */

function addXP(amount) {

    let arenaXP =
        Number(
            localStorage.getItem("arenaXP")
        ) || 500;

    arenaXP += amount;

    localStorage.setItem(
        "arenaXP",
        arenaXP
    );

}


/* ================= INITIAL LOAD ================= */

loadDebugQuestion();