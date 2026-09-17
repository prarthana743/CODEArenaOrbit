/* =========================================================
   CODEArenaOrbit
   DAILY MISSIONS SYSTEM
========================================================= */


/* =========================================================
   MISSION DATA
========================================================= */

const missions = [

    {
        title: "HTML Forms",
        difficulty: "Beginner",

        description:
            "Learn how HTML forms collect information from users and how different form elements work together.",

        study:
            "HTML forms are used to collect information from users. A form can contain input fields, labels, buttons and other controls. The form element provides the structure while input elements collect the actual data.",

        concepts: [
            "<form> creates the form structure.",
            "<input> collects different types of user input.",
            "<label> describes an input field.",
            "<button> can submit the form."
        ],

        code:
`<form>
    <label>Name</label>
    <input type="text">
    <button type="submit">Submit</button>
</form>`,

        questions: [

            {
                question:
                    "Which HTML element is used to create a form?",

                options: [
                    "<form>",
                    "<input>",
                    "<section>",
                    "<fieldset>"
                ],

                answer: 0,

                explanation:
                    "The <form> element defines an HTML form."
            },

            {
                question:
                    "Which input type is commonly used for entering a user's name?",

                options: [
                    "text",
                    "image",
                    "submit",
                    "hidden"
                ],

                answer: 0,

                explanation:
                    "The text input type is used for general single-line text."
            },

            {
                question:
                    "Which HTML element is used to describe an input field?",

                options: [
                    "<label>",
                    "<title>",
                    "<caption>",
                    "<description>"
                ],

                answer: 0,

                explanation:
                    "The <label> element provides a description for a form control."
            },

            {
                question:
                    "Which button type is normally used to submit a form?",

                options: [
                    "submit",
                    "text",
                    "input",
                    "form"
                ],

                answer: 0,

                explanation:
                    "A button with type=\"submit\" submits the form."
            },

            {
                question:
                    "Which element is used to collect user input in a form?",

                options: [
                    "<input>",
                    "<data>",
                    "<collect>",
                    "<user>"
                ],

                answer: 0,

                explanation:
                    "The <input> element creates different types of user input controls."
            }

        ]
    },


    /* =====================================================
       MISSION 2
    ===================================================== */

    {
        title: "CSS Flexbox",
        difficulty: "Intermediate",

        description:
            "Learn how CSS Flexbox helps you arrange elements efficiently in rows and columns.",

        study:
            "Flexbox is a CSS layout system designed for arranging elements inside a container. It makes alignment, spacing and responsive layouts easier to manage.",

        concepts: [
            "display: flex activates Flexbox.",
            "flex-direction controls the main direction.",
            "justify-content aligns items along the main axis.",
            "align-items aligns items along the cross axis."
        ],

        code:
`.container {
    display: flex;
    justify-content: center;
    align-items: center;
}`,

        questions: [

            {
                question:
                    "Which CSS property activates Flexbox on an element?",

                options: [
                    "display: flex",
                    "position: flex",
                    "layout: flex",
                    "flex: display"
                ],

                answer: 0,

                explanation:
                    "display: flex turns an element into a flex container."
            },

            {
                question:
                    "Which property controls the direction of flex items?",

                options: [
                    "flex-direction",
                    "item-direction",
                    "direction-flex",
                    "flex-flow-direction"
                ],

                answer: 0,

                explanation:
                    "flex-direction determines the main direction of flex items."
            },

            {
                question:
                    "Which property aligns flex items along the main axis?",

                options: [
                    "justify-content",
                    "align-items",
                    "text-align",
                    "place-content"
                ],

                answer: 0,

                explanation:
                    "justify-content controls alignment along the main axis."
            },

            {
                question:
                    "Which property aligns flex items along the cross axis?",

                options: [
                    "align-items",
                    "justify-items",
                    "cross-align",
                    "item-position"
                ],

                answer: 0,

                explanation:
                    "align-items controls alignment along the cross axis."
            },

            {
                question:
                    "Which value places flex items in a horizontal row by default?",

                options: [
                    "row",
                    "column",
                    "horizontal",
                    "inline"
                ],

                answer: 0,

                explanation:
                    "The default flex-direction value is row."
            }

        ]
    },


    /* =====================================================
       MISSION 3
    ===================================================== */

    {
        title: "JavaScript DOM",
        difficulty: "Intermediate",

        description:
            "Learn how JavaScript interacts with HTML elements using the Document Object Model.",

        study:
            "The DOM represents a webpage as objects that JavaScript can access and modify. JavaScript can select elements, change their content, modify styles and respond to user actions.",

        concepts: [
            "document represents the webpage.",
            "getElementById selects an element using its ID.",
            "querySelector selects an element using a CSS selector.",
            "textContent changes the text of an element."
        ],

        code:
`const heading = document.querySelector("h1");

heading.textContent = "Hello World";`,

        questions: [

            {
                question:
                    "Which object represents the current webpage in JavaScript?",

                options: [
                    "document",
                    "windowPage",
                    "html",
                    "page"
                ],

                answer: 0,

                explanation:
                    "The document object represents the loaded webpage."
            },

            {
                question:
                    "Which method selects an element using its ID?",

                options: [
                    "getElementById()",
                    "getElement()",
                    "selectById()",
                    "findId()"
                ],

                answer: 0,

                explanation:
                    "getElementById() selects an element by its id attribute."
            },

            {
                question:
                    "Which method can select an element using a CSS selector?",

                options: [
                    "querySelector()",
                    "findCSS()",
                    "selectCSS()",
                    "getCSS()"
                ],

                answer: 0,

                explanation:
                    "querySelector() accepts a CSS selector and returns the first matching element."
            },

            {
                question:
                    "Which property can change the text content of an element?",

                options: [
                    "textContent",
                    "innerStyle",
                    "textValue",
                    "contentTextStyle"
                ],

                answer: 0,

                explanation:
                    "textContent gets or sets the text inside an element."
            },

            {
                question:
                    "What does DOM stand for?",

                options: [
                    "Document Object Model",
                    "Data Object Method",
                    "Document Output Method",
                    "Dynamic Object Manager"
                ],

                answer: 0,

                explanation:
                    "DOM stands for Document Object Model."
            }

        ]
    },


    /* =====================================================
       MISSION 4
    ===================================================== */

    {
        title: "HTML Semantic Elements",
        difficulty: "Beginner",

        description:
            "Learn how semantic HTML elements make webpage structure clearer and more meaningful.",

        study:
            "Semantic HTML elements describe the purpose of their content. Examples include header, nav, main, section, article and footer.",

        concepts: [
            "<header> represents introductory content.",
            "<nav> contains navigation links.",
            "<main> represents the primary page content.",
            "<footer> represents footer information."
        ],

        code:
`<header>
    <h1>My Website</h1>
</header>

<main>
    <section>
        <h2>About</h2>
    </section>
</main>

<footer>
    Copyright 2026
</footer>`,

        questions: [

            {
                question:
                    "Which semantic element represents the main content of a webpage?",

                options: [
                    "<main>",
                    "<content>",
                    "<body-main>",
                    "<primary>"
                ],

                answer: 0,

                explanation:
                    "The <main> element represents the dominant content of the document."
            },

            {
                question:
                    "Which element is commonly used for navigation links?",

                options: [
                    "<nav>",
                    "<links>",
                    "<navigate>",
                    "<menu-links>"
                ],

                answer: 0,

                explanation:
                    "The <nav> element represents a section containing navigation links."
            },

            {
                question:
                    "Which element represents footer content?",

                options: [
                    "<footer>",
                    "<bottom>",
                    "<end>",
                    "<page-footer>"
                ],

                answer: 0,

                explanation:
                    "The <footer> element represents footer information."
            },

            {
                question:
                    "Which element can represent a standalone piece of content?",

                options: [
                    "<article>",
                    "<piece>",
                    "<content-box>",
                    "<standalone>"
                ],

                answer: 0,

                explanation:
                    "The <article> element represents self-contained content."
            },

            {
                question:
                    "Which element can group related content into a thematic section?",

                options: [
                    "<section>",
                    "<group>",
                    "<part>",
                    "<content-section>"
                ],

                answer: 0,

                explanation:
                    "The <section> element represents a thematic grouping of content."
            }

        ]
    },


    /* =====================================================
       MISSION 5
    ===================================================== */

    {
        title: "Responsive CSS",
        difficulty: "Intermediate",

        description:
            "Learn how responsive CSS allows websites to adapt to different screen sizes.",

        study:
            "Responsive web design allows a website to work across desktops, tablets and mobile devices. CSS media queries are one of the main tools used to apply different styles at different viewport sizes.",

        concepts: [
            "Media queries apply CSS based on conditions.",
            "max-width can target smaller screens.",
            "Flexible layouts help content adapt.",
            "Responsive design improves usability across devices."
        ],

        code:
`@media (max-width: 768px) {

    .container {
        grid-template-columns: 1fr;
    }

}`,

        questions: [

            {
                question:
                    "Which CSS feature is commonly used to create responsive breakpoints?",

                options: [
                    "@media",
                    "@responsive",
                    "@screen",
                    "@device"
                ],

                answer: 0,

                explanation:
                    "The @media rule allows CSS to apply based on media conditions."
            },

            {
                question:
                    "What does max-width specify in a media query?",

                options: [
                    "An upper width condition",
                    "A minimum height",
                    "A fixed page width",
                    "A font-size limit"
                ],

                answer: 0,

                explanation:
                    "max-width sets an upper limit for the condition."
            },

            {
                question:
                    "Responsive design mainly helps websites adapt to what?",

                options: [
                    "Different screen sizes",
                    "Different programming languages",
                    "Different databases",
                    "Different file formats"
                ],

                answer: 0,

                explanation:
                    "Responsive design adapts layouts to different viewport and screen sizes."
            },

            {
                question:
                    "Which unit is commonly useful for flexible relative sizing?",

              options: [
    "%",
    "px only",
    "fixed",
    "absolute"
],
                answer: 0,

                explanation:
                    "Percentage values allow dimensions to scale relative to a containing element."
            },

            {
                question:
                    "What is one major goal of responsive web design?",

                options: [
                    "Better usability across devices",
                    "Removing HTML",
                    "Replacing JavaScript",
                    "Preventing CSS"
                ],

                answer: 0,

                explanation:
                    "Responsive design aims to make websites usable across different devices and screen sizes."
            }

        ]
    }

];


/* =========================================================
   STATE
========================================================= */

let currentMission = null;

let currentQuestionIndex = 0;

let correctAnswers = 0;

let answered = false;

let earnedMissionXP = 0;


/* =========================================================
   STORAGE
========================================================= */

const savedXP =
    Number(localStorage.getItem("codeArenaXP")) || 0;

const savedStreak =
    Number(localStorage.getItem("codeArenaStreak")) || 0;

const lastMissionDate =
    localStorage.getItem("codeArenaLastMissionDate");


/* =========================================================
   DOM ELEMENTS
========================================================= */

const missionTitle =
    document.getElementById("missionTitle");

const missionDifficulty =
    document.getElementById("missionDifficulty");

const missionDescription =
    document.getElementById("missionDescription");

const studyContent =
    document.getElementById("studyContent");

const codeExample =
    document.getElementById("codeExample");

const conceptList =
    document.getElementById("conceptList");

const startMissionBtn =
    document.getElementById("startMissionBtn");

const quizSection =
    document.getElementById("quizSection");

const questionNumber =
    document.getElementById("questionNumber");

const questionText =
    document.getElementById("questionText");

const quizOptions =
    document.getElementById("quizOptions");

const quizFeedback =
    document.getElementById("quizFeedback");

const nextQuestionBtn =
    document.getElementById("nextQuestionBtn");

const missionResult =
    document.getElementById("missionResult");

const resultText =
    document.getElementById("resultText");

const progressText =
    document.getElementById("progressText");

const missionProgress =
    document.getElementById("missionProgress");

const totalXP =
    document.getElementById("totalXP");

const coderLevel =
    document.getElementById("coderLevel");

const dailyStreak =
    document.getElementById("dailyStreak");

const bossButton =
    document.getElementById("bossButton");

const bossDescription =
    document.getElementById("bossDescription");


/* =========================================================
   DAILY MISSION SELECTION
========================================================= */

function getTodayMission() {

    const today =
        new Date().getDate();

    const missionIndex =
        today % missions.length;

    return missions[missionIndex];

}


/* =========================================================
   LOAD MISSION
========================================================= */

function loadMission() {

    currentMission =
        getTodayMission();

    missionTitle.textContent =
        currentMission.title;

    missionDifficulty.textContent =
        currentMission.difficulty;

    missionDescription.textContent =
        currentMission.description;

    studyContent.textContent =
        currentMission.study;

    codeExample.textContent =
        currentMission.code;


    conceptList.innerHTML = "";


    currentMission.concepts.forEach(function (concept) {

        const item =
            document.createElement("div");

        item.className =
            "concept-item";

        item.innerHTML = `
            <i class="fa-solid fa-check"></i>
            <span>${concept}</span>
        `;

        conceptList.appendChild(item);

    });


    updatePlayerStats();

}

/* =========================================================
   START MISSION
========================================================= */

function startMission() {

    console.log("Start Mission clicked!");

    // Make sure quiz section exists
    if (!quizSection) {
        console.error("quizSection not found!");
        return;
    }

    // Make sure today's mission is loaded
    if (!currentMission) {
        console.error("currentMission not loaded!");

        loadMission();
    }

    // Reset mission
    currentQuestionIndex = 0;

    correctAnswers = 0;

    earnedMissionXP = 0;

    answered = false;


    // Show quiz
    quizSection.classList.add("active");


    // Load first question
    loadQuestion();


    // Scroll to quiz
    setTimeout(function () {

        quizSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}
window.startMission = startMission;

/* Button click */

if (startMissionBtn) {

    startMissionBtn.addEventListener("click", startMission);

} else {

    console.error(
        "Start Mission button not found!"
    );

}
/* =========================================================
   LOAD QUESTION
========================================================= */

function loadQuestion() {

    answered = false;

    const question =
        currentMission.questions[currentQuestionIndex];


    questionNumber.textContent =
        `QUESTION ${currentQuestionIndex + 1} / ${currentMission.questions.length}`;


    questionText.textContent =
        question.question;


    quizOptions.innerHTML = "";

    quizFeedback.textContent = "";

    nextQuestionBtn.classList.remove("show");

    missionResult.classList.remove("show");


    question.options.forEach(function (option, index) {

        const button =
            document.createElement("button");

        button.className =
            "quiz-option";

        button.textContent =
            option;

        button.addEventListener("click", function () {

            checkAnswer(index, button);

        });

        quizOptions.appendChild(button);

    });


    updateMissionProgress();

}


/* =========================================================
   CHECK ANSWER
========================================================= */

function checkAnswer(selectedIndex, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;


    const question =
        currentMission.questions[currentQuestionIndex];


    const allButtons =
        document.querySelectorAll(".quiz-option");


    allButtons.forEach(function (button) {

        button.disabled = true;

    });


    if (selectedIndex === question.answer) {

        selectedButton.classList.add("correct");

        quizFeedback.textContent =
            `Correct! ${question.explanation}`;

        quizFeedback.style.color =
            "#22c55e";


        correctAnswers++;

        earnedMissionXP += 50;

        addXP(50);


    } else {

        selectedButton.classList.add("wrong");

        allButtons[question.answer]
            .classList.add("correct");

        quizFeedback.textContent =
            `Not quite. ${question.explanation}`;

        quizFeedback.style.color =
            "#ef4444";

    }


    nextQuestionBtn.classList.add("show");

    updateMissionProgress();

}


/* =========================================================
   NEXT QUESTION
========================================================= */

nextQuestionBtn.addEventListener("click", function () {

    currentQuestionIndex++;


    if (
        currentQuestionIndex >=
        currentMission.questions.length
    ) {

        finishMission();

        return;

    }


    loadQuestion();

});


/* =========================================================
   FINISH MISSION
========================================================= */

function finishMission() {

    const totalQuestions =
        currentMission.questions.length;


    const percentage =
        Math.round(
            (correctAnswers / totalQuestions) * 100
        );


    let bonusXP = 0;


    /* COMPLETION BONUS */

    bonusXP += 100;

    addXP(100);


    /* PERFECT SCORE BONUS */

    if (correctAnswers === totalQuestions) {

        bonusXP += 100;

        addXP(100);

    }


    earnedMissionXP += bonusXP;


    const totalXPValue =
        Number(localStorage.getItem("codeArenaXP")) || 0;


    resultText.innerHTML = `
        You scored <strong>${correctAnswers}/${totalQuestions}</strong>
        (${percentage}%).
        <br><br>
        XP earned today:
        <strong>+${earnedMissionXP} XP</strong>
        <br><br>
        ${correctAnswers === totalQuestions
            ? "Perfect score! You earned an extra bonus."
            : "Complete the mission again tomorrow to keep progressing."
        }
    `;


    missionResult.classList.add("show");

    nextQuestionBtn.classList.remove("show");

    quizFeedback.textContent = "";

    updateMissionProgress();

    updateStreak();

    unlockBoss();

    updatePlayerStats();


    missionResult.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================================
   XP SYSTEM
========================================================= */

function addXP(amount) {

    let xp =
        Number(localStorage.getItem("codeArenaXP")) || 0;


    xp += amount;


    localStorage.setItem(
        "codeArenaXP",
        xp
    );


    updatePlayerStats();

}


/* =========================================================
   LEVEL SYSTEM
========================================================= */

function calculateLevel(xp) {

    return Math.floor(xp / 500) + 1;

}


/* =========================================================
   PLAYER STATS
========================================================= */

function updatePlayerStats() {

    const xp =
        Number(localStorage.getItem("codeArenaXP")) || 0;

    const streak =
        Number(localStorage.getItem("codeArenaStreak")) || 0;

    const level =
        calculateLevel(xp);


    totalXP.textContent =
        `${xp} XP`;


    coderLevel.textContent =
        `LEVEL ${String(level).padStart(2, "0")}`;


    dailyStreak.textContent =
        `${streak} ${streak === 1 ? "DAY" : "DAYS"}`;


    updateMissionProgress();

}


/* =========================================================
   MISSION PROGRESS
========================================================= */

function updateMissionProgress() {

    if (!currentMission) {
        return;
    }


    const total =
        currentMission.questions.length;


    let completed =
        currentQuestionIndex;


    if (answered) {
        completed++;
    }


    if (completed > total) {
        completed = total;
    }


    const percentage =
        (completed / total) * 100;


    progressText.textContent =
        `${completed} / ${total} Questions`;


    missionProgress.style.width =
        `${percentage}%`;

}


/* =========================================================
   STREAK SYSTEM
========================================================= */

function updateStreak() {

    const today =
        new Date().toISOString().split("T")[0];


    const previousDate =
        localStorage.getItem("codeArenaLastMissionDate");


    let streak =
        Number(localStorage.getItem("codeArenaStreak")) || 0;


    if (previousDate === today) {

        return;

    }


    if (previousDate) {

        const previous =
            new Date(previousDate);

        const current =
            new Date(today);


        const difference =
            Math.floor(
                (current - previous) /
                (1000 * 60 * 60 * 24)
            );


        if (difference === 1) {

            streak++;

        } else {

            streak = 1;

        }

    } else {

        streak = 1;

    }


    localStorage.setItem(
        "codeArenaStreak",
        streak
    );


    localStorage.setItem(
        "codeArenaLastMissionDate",
        today
    );


    updatePlayerStats();

}


/* =========================================================
   BOSS UNLOCK
========================================================= */

function unlockBoss() {

    bossButton.classList.remove("locked");

    bossButton.innerHTML = `
        <i class="fa-solid fa-crown"></i>
        Enter Boss Mission
    `;


    bossDescription.textContent =
        "Today's mission is complete. The Boss Mission is now unlocked.";

}


/* =========================================================
   NAV ACTIVE STATE
========================================================= */

const currentPage =
    window.location.pathname.split("/").pop() ||
    "index.html";


document.querySelectorAll(".nav-links a")
    .forEach(function (link) {

        const href =
            link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });


/* =========================================================
   INITIALIZE
========================================================= */

loadMission();
updatePlayerStats();

/* =========================================================
   BOSS ARENA - TEMPORARILY UNLOCKED
========================================================= */

if (bossButton) {

    bossButton.classList.remove("locked");

    bossButton.innerHTML = `
        <i class="fa-solid fa-crown"></i>
        Enter Arena
    `;

    bossDescription.textContent =
        "Enter the Arena and take on the Boss Mission!";
}