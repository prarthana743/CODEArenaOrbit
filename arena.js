// ============================================================
// CODEArenaOrbit - COMPLETE ARENA SYSTEM
// ============================================================


// ============================================================
// 1. XP SYSTEM
// ============================================================

let arenaXP = Number(localStorage.getItem("arenaXP")) || 500;

function saveArenaXP() {
    localStorage.setItem("arenaXP", arenaXP);
}


// ============================================================
// 2. QUESTION BANK
// ============================================================

const questionBank = {

    html: [

        {
            question: "Which HTML element is used to create a hyperlink?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which tag is used to insert an image in HTML?",
            options: ["<image>", "<img>", "<src>", "<picture>"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which HTML tag is used for the largest heading?",
            options: ["<h6>", "<head>", "<h1>", "<heading>"],
            answer: 2,
            xp: 20
        },

        {
            question: "Which tag creates an unordered list?",
            options: ["<ol>", "<list>", "<ul>", "<li>"],
            answer: 2,
            xp: 20
        },

        {
            question: "Which attribute specifies the destination of a link?",
            options: ["src", "href", "link", "target"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which HTML element is used to create a paragraph?",
            options: ["<text>", "<paragraph>", "<p>", "<para>"],
            answer: 2,
            xp: 20
        },

        {
            question: "Which tag is used to create a table row?",
            options: ["<td>", "<tr>", "<th>", "<row>"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which tag represents a table header cell?",
            options: ["<thead>", "<th>", "<header>", "<td>"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which HTML tag is used to create a form?",
            options: ["<input>", "<form>", "<fieldset>", "<data>"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which input type is used for an email address?",
            options: ["text", "mail", "email", "address"],
            answer: 2,
            xp: 20
        },

        {
            question: "Which tag creates a line break?",
            options: ["<break>", "<lb>", "<br>", "<line>"],
            answer: 2,
            xp: 20
        },

        {
            question: "Which HTML element contains metadata about a webpage?",
            options: ["<body>", "<meta>", "<head>", "<info>"],
            answer: 2,
            xp: 20
        },

        {
            question: "Which tag represents important text?",
            options: ["<important>", "<strong>", "<bold>", "<bolder>"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which HTML element is used for navigation links?",
            options: ["<navigate>", "<navigation>", "<nav>", "<links>"],
            answer: 2,
            xp: 20
        },

        {
            question: "Which attribute provides alternative text for an image?",
            options: ["title", "alt", "text", "description"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which HTML element is used to create a button?",
            options: ["<button>", "<btn>", "<click>", "<inputbutton>"],
            answer: 0,
            xp: 20
        },

        {
            question: "Which tag is used to create an ordered list?",
            options: ["<ul>", "<ol>", "<list>", "<order>"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which tag defines a list item?",
            options: ["<item>", "<li>", "<list>", "<ul>"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which attribute is used to open a link in a new tab?",
            options: ["new", "tab", "target", "open"],
            answer: 2,
            xp: 20
        },

        {
            question: "Which HTML tag is used to define the title of a webpage?",
            options: ["<title>", "<head>", "<name>", "<caption>"],
            answer: 0,
            xp: 20
        },

        {
            question: "Which tag is used to embed JavaScript in HTML?",
            options: ["<javascript>", "<js>", "<script>", "<code>"],
            answer: 2,
            xp: 20
        },

        {
            question: "Which HTML tag is used to create a division or section?",
            options: ["<section>", "<div>", "<group>", "<box>"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which HTML tag is used for a horizontal line?",
            options: ["<line>", "<hr>", "<horizontal>", "<br>"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which semantic HTML element represents the main content?",
            options: ["<content>", "<main>", "<body>", "<primary>"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which semantic HTML element represents the footer?",
            options: ["<bottom>", "<footer>", "<end>", "<foot>"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which tag is used to define a section of content?",
            options: ["<section>", "<part>", "<content>", "<area>"],
            answer: 0,
            xp: 20
        },

        {
            question: "Which attribute gives a unique identifier to an element?",
            options: ["class", "id", "name", "key"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which attribute is commonly used to assign multiple elements to a group?",
            options: ["id", "class", "group", "style"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which HTML element is used to display emphasized text?",
            options: ["<em>", "<italic>", "<i-text>", "<emphasis>"],
            answer: 0,
            xp: 20
        },

        {
            question: "Which tag is used to create a text input field?",
            options: ["<textbox>", "<input>", "<text>", "<field>"],
            answer: 1,
            xp: 20
        }

    ],


    // ========================================================
    // CSS QUESTIONS
    // ========================================================

    css: [

        {
            question: "Which CSS property changes the text color?",
            options: ["font-color", "text-color", "color", "foreground"],
            answer: 2,
            xp: 20
        },

        {
            question: "Which CSS property changes the background color?",
            options: ["background-color", "bg-color", "color", "background-style"],
            answer: 0,
            xp: 20
        },

        {
            question: "Which property controls the space inside an element?",
            options: ["margin", "padding", "spacing", "border"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which property controls the space outside an element?",
            options: ["padding", "margin", "spacing", "outside"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which property makes text bold?",
            options: ["font-style", "font-weight", "text-bold", "font-bold"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which property changes the size of text?",
            options: ["text-size", "font-size", "size", "font-height"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which CSS layout system is commonly used for one-dimensional layouts?",
            options: ["Grid", "Flexbox", "Float", "Position"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which CSS layout system is designed for two-dimensional layouts?",
            options: ["Flexbox", "Grid", "Float", "Inline"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which property rounds the corners of an element?",
            options: ["corner-radius", "border-radius", "radius", "round-border"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which property controls the transparency of an element?",
            options: ["visibility", "opacity", "transparent", "alpha"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which CSS property is used to create animations?",
            options: ["animation", "motion", "animate", "transition-effect"],
            answer: 0,
            xp: 20
        },

        {
            question: "Which property controls the stacking order of elements?",
            options: ["stack", "layer", "z-index", "order"],
            answer: 2,
            xp: 20
        },

        {
            question: "Which property changes the font family?",
            options: ["font-family", "text-family", "font-type", "typeface"],
            answer: 0,
            xp: 20
        },

        {
            question: "Which CSS unit is relative to the root font size?",
            options: ["em", "px", "rem", "%"],
            answer: 2,
            xp: 20
        },

        {
            question: "Which property aligns items along the cross axis in Flexbox?",
            options: ["justify-content", "align-items", "text-align", "align-content"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which property aligns Flexbox items along the main axis?",
            options: ["align-items", "justify-content", "text-align", "place-items"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which CSS property changes the width of an element?",
            options: ["size", "element-width", "width", "box-width"],
            answer: 2,
            xp: 20
        },

        {
            question: "Which CSS property changes the height of an element?",
            options: ["height", "size-y", "element-height", "box-height"],
            answer: 0,
            xp: 20
        },

        {
            question: "Which property controls the thickness of a border?",
            options: ["border-width", "border-size", "border-thickness", "width-border"],
            answer: 0,
            xp: 20
        },

        {
            question: "Which property changes the style of a border?",
            options: ["border-style", "border-type", "style-border", "border-design"],
            answer: 0,
            xp: 20
        },

        {
            question: "Which CSS property controls the space between grid items?",
            options: ["space", "gap", "grid-space", "margin"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which selector targets an element with a specific ID?",
            options: [".", "#", "@", "*"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which selector targets elements with a specific class?",
            options: ["#", ".", "@", "&"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which selector targets every element?",
            options: [".", "#", "*", "all"],
            answer: 2,
            xp: 20
        },

        {
            question: "Which property controls the position of an element?",
            options: ["position", "place", "location", "layout"],
            answer: 0,
            xp: 20
        },

        {
            question: "Which CSS value removes an element from the layout?",
            options: ["hidden", "none", "remove", "invisible"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which property controls the shape of the cursor?",
            options: ["mouse", "cursor", "pointer", "mouse-style"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which property creates a shadow around an element?",
            options: ["shadow", "box-shadow", "element-shadow", "border-shadow"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which property creates a shadow around text?",
            options: ["text-shadow", "font-shadow", "shadow-text", "letter-shadow"],
            answer: 0,
            xp: 20
        },

        {
            question: "Which CSS property controls the order of Flexbox items?",
            options: ["position", "order", "flex-order", "sequence"],
            answer: 1,
            xp: 20
        }

    ],


    // ========================================================
    // JAVASCRIPT QUESTIONS
    // ========================================================

    javascript: [

        {
            question: "Which keyword declares a block-scoped variable?",
            options: ["var", "let", "define", "variable"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which keyword declares a constant?",
            options: ["var", "let", "const", "static"],
            answer: 2,
            xp: 20
        },

        {
            question: "Which method adds an element to the end of an array?",
            options: ["pop()", "shift()", "push()", "add()"],
            answer: 2,
            xp: 20
        },

        {
            question: "Which method removes the last element of an array?",
            options: ["remove()", "pop()", "delete()", "shift()"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which method removes the first element of an array?",
            options: ["shift()", "pop()", "removeFirst()", "delete()"],
            answer: 0,
            xp: 20
        },

        {
            question: "Which method converts JSON text into a JavaScript object?",
            options: ["JSON.parse()", "JSON.convert()", "JSON.object()", "JSON.decode()"],
            answer: 0,
            xp: 20
        },

        {
            question: "Which method converts a JavaScript object into JSON text?",
            options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.text()"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which symbol is used for strict equality?",
            options: ["==", "=", "===", "!="],
            answer: 2,
            xp: 20
        },

        {
            question: "Which function selects an HTML element by its ID?",
            options: ["getElementById()", "queryElement()", "selectId()", "getByIdElement()"],
            answer: 0,
            xp: 20
        },

        {
            question: "Which method creates a new array by transforming each element?",
            options: ["filter()", "map()", "reduce()", "forEach()"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which method creates a new array containing matching elements?",
            options: ["map()", "filter()", "findAll()", "select()"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which method executes a function for every array element?",
            options: ["forEach()", "loop()", "each()", "iterate()"],
            answer: 0,
            xp: 20
        },

        {
            question: "Which keyword is used to define a function?",
            options: ["func", "function", "define", "method"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which event occurs when a user clicks an element?",
            options: ["hover", "submit", "click", "press"],
            answer: 2,
            xp: 20
        },

        {
            question: "Which browser storage method stores data as key-value pairs?",
            options: ["sessionData", "localStorage", "browserDB", "webMemory"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which operator is used for logical AND?",
            options: ["||", "&&", "!", "&"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which operator is used for logical OR?",
            options: ["&&", "||", "!", "|"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which method converts a string to an integer?",
            options: ["Integer()", "parseInt()", "toInteger()", "convertInt()"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which method converts a string to a floating-point number?",
            options: ["parseFloat()", "float()", "toFloat()", "numberFloat()"],
            answer: 0,
            xp: 20
        },

        {
            question: "Which keyword stops a loop immediately?",
            options: ["stop", "exit", "break", "end"],
            answer: 2,
            xp: 20
        },

        {
            question: "Which keyword skips the current iteration of a loop?",
            options: ["skip", "continue", "next", "pass"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which method returns the length of a string?",
            options: ["size()", "length", "count()", "stringLength()"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which method converts text to uppercase?",
            options: ["upper()", "toUpperCase()", "uppercase()", "makeUpper()"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which method converts text to lowercase?",
            options: ["lower()", "toLowerCase()", "lowercase()", "makeLower()"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which method adds an event listener to an element?",
            options: ["addEventListener()", "listenEvent()", "event()", "onEvent()"],
            answer: 0,
            xp: 20
        },

        {
            question: "Which keyword refers to the current object in a method?",
            options: ["self", "this", "current", "object"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which value represents an intentional absence of a value?",
            options: ["undefined", "null", "empty", "void"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which method finds the first element that satisfies a condition?",
            options: ["search()", "find()", "first()", "filterFirst()"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which method combines all array elements into a single value?",
            options: ["combine()", "reduce()", "merge()", "joinAll()"],
            answer: 1,
            xp: 20
        },

        {
            question: "Which statement is used to handle errors?",
            options: ["try...catch", "error...handle", "check...error", "handle...catch"],
            answer: 0,
            xp: 20
        }

    ]

};


// ============================================================
// 3. QUESTION TRACKING
// ============================================================

function getUsedQuestions(topic) {

    return JSON.parse(
        localStorage.getItem("used_" + topic)
    ) || [];

}


function saveUsedQuestions(topic, used) {

    localStorage.setItem(
        "used_" + topic,
        JSON.stringify(used)
    );

}


function getRandomQuestion(topic) {

    const questions = questionBank[topic];

    let used = getUsedQuestions(topic);

    let available = questions.filter(
        function (question, index) {
            return !used.includes(index);
        }
    );


    // Start a new cycle after all questions are solved
    if (available.length === 0) {

        used = [];

        saveUsedQuestions(topic, used);

        available = questions;

    }


    const randomPosition =
        Math.floor(
            Math.random() * available.length
        );


    const question =
        available[randomPosition];


    return {

        question: question,

        index: questions.indexOf(question)

    };

}


// ============================================================
// 4. DAILY CHALLENGE
// ============================================================

const topicButtons =
    document.querySelectorAll(".topic-btn");
topicButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                topicButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );

                button.classList.add(
                    "active"
                );

                const topic =
                    button.dataset.topic;

                loadQuestion(topic);

            }
        );

    }
);
const questionTopicLabel =
    document.querySelector("#question-topic-label");

const dailyQuestion =
    document.querySelector("#daily-question");

const dailyOptions =
    document.querySelector("#daily-options");

const challengeResult =
    document.querySelector("#challenge-result");

const dailyChallengeButton =
    document.querySelector("#daily-challenge-btn");

const dailyChallengeBox =
    document.querySelector("#daily-challenge-box");


let currentTopic = "html";

let currentQuestion = null;

let currentQuestionIndex = null;

let questionAnswered = false;


// ============================================================
// NEXT QUESTION BUTTON
// ============================================================

let nextQuestionButton =
    document.querySelector("#next-question-btn");


if (!nextQuestionButton && dailyChallengeBox) {

    nextQuestionButton =
        document.createElement("button");

    nextQuestionButton.id =
        "next-question-btn";

    nextQuestionButton.className =
        "arena-btn";

    nextQuestionButton.textContent =
        "Next Question →";

    nextQuestionButton.style.display =
        "none";

    dailyChallengeBox.appendChild(
        nextQuestionButton
    );

}


// ============================================================
// LOAD QUESTION
// ============================================================

function loadQuestion(topic) {

    currentTopic = topic;

    const selected =
        getRandomQuestion(topic);


    currentQuestion =
        selected.question;


    currentQuestionIndex =
        selected.index;


    questionAnswered = false;


    if (questionTopicLabel) {

        questionTopicLabel.textContent =
            topic.toUpperCase() +
            " CHALLENGE";

    }


    if (dailyQuestion) {

        dailyQuestion.textContent =
            currentQuestion.question;

    }


    if (dailyOptions) {

        dailyOptions.innerHTML = "";


        currentQuestion.options.forEach(
            function (option, index) {

                const button =
                    document.createElement("button");


                button.className =
                    "challenge-option";


                button.dataset.answer =
                    index;


                button.textContent =
                    String.fromCharCode(65 + index) +
                    ". " +
                    option;


                dailyOptions.appendChild(
                    button
                );

            }
        );

    }


    if (challengeResult) {

        challengeResult.textContent = "";

    }


    if (nextQuestionButton) {

        nextQuestionButton.style.display =
            "none";

    }

}


// ============================================================
// TOPIC BUTTONS
// ============================================================

topicButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                topicButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                const topic =
                    button.dataset.topic;


                loadQuestion(topic);

            }
        );

    }
);


// ============================================================
// START DAILY CHALLENGE
// ============================================================

if (dailyChallengeButton) {

    dailyChallengeButton.addEventListener(
        "click",
        function () {

            if (dailyChallengeBox) {

                dailyChallengeBox.style.display =
                    "block";

            }


            loadQuestion(currentTopic);

        }
    );

}


// ============================================================
// ANSWER QUESTION
// ============================================================

if (dailyChallengeBox) {

    dailyChallengeBox.addEventListener(
        "click",
        function (event) {

            if (
                !event.target.classList.contains(
                    "challenge-option"
                )
            ) {

                return;

            }


            if (questionAnswered) {

                return;

            }


            const selectedAnswer =
                Number(
                    event.target.dataset.answer
                );


            // CORRECT
            if (
                selectedAnswer ===
                currentQuestion.answer
            ) {

                questionAnswered = true;


                event.target.classList.add(
                    "correct"
                );


                // Mark question as completed
                let used =
                    getUsedQuestions(
                        currentTopic
                    );


                if (
                    !used.includes(
                        currentQuestionIndex
                    )
                ) {

                    used.push(
                        currentQuestionIndex
                    );


                    saveUsedQuestions(
                        currentTopic,
                        used
                    );

                }


                addArenaXP(
                    currentQuestion.xp
                );


                if (challengeResult) {

                    challengeResult.textContent =
                        "✓ Correct! +" +
                        currentQuestion.xp +
                        " XP";

                }


                // Disable current options
                const options =
                    dailyOptions.querySelectorAll(
                        ".challenge-option"
                    );


                options.forEach(
                    function (option) {

                        option.disabled = true;

                    }
                );


                // Show Next Question
                if (nextQuestionButton) {

                    nextQuestionButton.style.display =
                        "inline-flex";

                }


            }

            // WRONG
            else {

                event.target.classList.add(
                    "wrong"
                );


                if (challengeResult) {

                    challengeResult.textContent =
                        "✗ Incorrect. Try again!";

                }

            }

        }
    );

}


// ============================================================
// NEXT QUESTION
// ============================================================

if (nextQuestionButton) {

    nextQuestionButton.addEventListener(
        "click",
        function () {

            loadQuestion(
                currentTopic
            );

        }
    );

}


// ============================================================
// 5. XP DISPLAY
// ============================================================

const arenaXPDisplay =
    document.querySelector("#arena-xp");

const totalXPDisplay =
    document.querySelector("#total-xp");
const liveArenaXPDisplay =
    document.querySelector("#live-arena-xp");

function updateXPDisplay() {

    if (arenaXPDisplay) {

        arenaXPDisplay.textContent =
            arenaXP + " XP";

    }


    if (totalXPDisplay) {

        totalXPDisplay.textContent =
            arenaXP + " XP";

    }


    if (liveArenaXPDisplay) {

        liveArenaXPDisplay.textContent =
            arenaXP + " XP";

    }

}


// ============================================================
// 6. LEVEL SYSTEM
// ============================================================

function getLevelTitle(level) {

    if (level >= 10) {

        return "Elite Developer";

    }

    if (level >= 7) {

        return "Advanced Developer";

    }

    if (level >= 4) {

        return "Skilled Developer";

    }

    if (level >= 2) {

        return "Junior Developer";

    }

    return "Beginner Developer";

}


function updateArenaLevel() {

    let level =
        Math.floor(
            arenaXP / 500
        );


    if (level < 1) {

        level = 1;

    }


    let currentLevelXP =
        arenaXP % 500;


    let progress =
        (currentLevelXP / 500) * 100;


    const levelText =
        "LEVEL " +
        String(level).padStart(2, "0");


    const arenaLevel =
        document.querySelector(
            "#arena-level"
        );


    const currentLevel =
        document.querySelector(
            "#current-level"
        );


    const progressLevel =
        document.querySelector(
            "#progress-level"
        );


    const levelTitle =
        document.querySelector(
            "#level-title"
        );


    const progressFill =
        document.querySelector(
            "#progress-fill"
        );


    const progressText =
        document.querySelector(
            "#progress-text"
        );


    const leaderboardLevel =
        document.querySelector(
            "#leaderboard-level"
        );


    if (arenaLevel) {

        arenaLevel.textContent =
            levelText;

    }


    if (currentLevel) {

        currentLevel.textContent =
            levelText;

    }


    if (progressLevel) {

        progressLevel.textContent =
            levelText;

    }


    if (leaderboardLevel) {

        leaderboardLevel.textContent =
            "Level " +
            String(level).padStart(2, "0");

    }


    if (levelTitle) {

        levelTitle.textContent =
            getLevelTitle(level);

    }


    if (progressFill) {

        progressFill.style.width =
            progress + "%";

    }


    if (progressText) {

        progressText.textContent =
            Math.floor(progress) +
            "% TO NEXT LEVEL";

    }

}


// ============================================================
// 7. COMPLETED CHALLENGES
// ============================================================

function getCompletedQuestions() {

    let total = 0;


    [
        "html",
        "css",
        "javascript"
    ].forEach(
        function (topic) {

            total +=
                getUsedQuestions(topic).length;

        }
    );


    return total;

}


function updateChallengeDisplay() {

    const completed =
        getCompletedQuestions();


    const arenaChallengesDisplay =
        document.querySelector(
            "#arena-challenges"
        );


    const completedChallengesDisplay =
        document.querySelector(
            "#completed-challenges"
        );


    if (arenaChallengesDisplay) {

        arenaChallengesDisplay.textContent =
            String(completed).padStart(2, "0");

    }


    if (completedChallengesDisplay) {

        completedChallengesDisplay.textContent =
            completed + " SOLVED";

    }

}


// ============================================================
// 8. ADD XP
// ============================================================

function addArenaXP(amount) {

    arenaXP += amount;

    saveArenaXP();

    updateArenaUI();

}


// ============================================================
// 9. BOSS BATTLE
// ============================================================

const bossButton =
    document.querySelector(
        ".boss-arena-btn"
    );


const bossBattleBox =
    document.querySelector(
        "#boss-battle-box"
    );


const closeBossButton =
    document.querySelector(
        "#close-boss"
    );


const bossOptions =
    document.querySelectorAll(
        ".boss-option"
    );


const bossResult =
    document.querySelector(
        "#boss-result"
    );


let bossCompleted =
    localStorage.getItem(
        "bossBattleCompleted"
    ) === "true";


// OPEN BOSS
if (bossButton) {

    bossButton.addEventListener(
        "click",
        function () {

            if (bossBattleBox) {

                bossBattleBox.style.display =
                    "flex";

            }

        }
    );

}


// CLOSE BOSS
if (closeBossButton) {

    closeBossButton.addEventListener(
        "click",
        function () {

            if (bossBattleBox) {

                bossBattleBox.style.display =
                    "none";

            }

        }
    );

}


// BOSS ANSWER
bossOptions.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                if (bossCompleted) {

                    if (bossResult) {

                        bossResult.textContent =
                            "✓ Boss already defeated!";

                    }

                    return;

                }


                const selectedAnswer =
                    button.dataset.answer;


                if (
                    selectedAnswer ===
                    "const"
                ) {

                    bossCompleted = true;


                    localStorage.setItem(
                        "bossBattleCompleted",
                        "true"
                    );


                    button.classList.add(
                        "correct"
                    );


                    addArenaXP(500);


                    if (bossResult) {

                        bossResult.textContent =
                            "⚡ BOSS DEFEATED! +500 XP";

                    }


                    bossOptions.forEach(
                        function (option) {

                            option.disabled = true;

                        }
                    );

                }

                else {

                    button.classList.add(
                        "wrong"
                    );


                    if (bossResult) {

                        bossResult.textContent =
                            "✗ Wrong answer. Try again!";

                    }

                }

            }
        );

    }
);

// ============================================================
// 10. DYNAMIC PUZZLES
// ============================================================

const puzzleCards = document.querySelectorAll(".puzzle-card");

const puzzleTopics = [
    "html",
    "css",
    "javascript"
];


// ------------------------------------------------------------
// LOAD / SHOW PUZZLE
// ------------------------------------------------------------

function loadPuzzle(card, topic) {

    const selected = getRandomQuestion(topic);

    const question = selected.question;
    const questionIndex = selected.index;

    const questionText =
        card.querySelector("p");

    const optionsContainer =
        card.querySelector(".puzzle-options");

    const result =
        card.querySelector(".puzzle-result");


    // Store current question on card
    card.dataset.questionIndex = questionIndex;


    // Show question
    if (questionText) {
        questionText.textContent =
            question.question;
    }


    // Clear old options
    if (optionsContainer) {

        optionsContainer.innerHTML = "";

        question.options.forEach(
            function (option, optionIndex) {

                const button =
                    document.createElement("button");

                button.className =
                    "puzzle-option";

                button.dataset.answer =
                    optionIndex;

                button.textContent =
                    option;

                optionsContainer.appendChild(button);
            }
        );
    }


    // Clear result
    if (result) {
        result.textContent = "";
    }


    // Prevent multiple answers for same question
    card.dataset.answered = "false";


    // Save current question data
    card._currentQuestion = question;
    card._currentQuestionIndex = questionIndex;
}


// ------------------------------------------------------------
// INITIAL LOAD
// ------------------------------------------------------------

puzzleCards.forEach(
    function (card, index) {

        const topic =
            puzzleTopics[index];

        loadPuzzle(card, topic);


        const optionsContainer =
            card.querySelector(".puzzle-options");

        const result =
            card.querySelector(".puzzle-result");


        if (!optionsContainer) {
            return;
        }


        // ----------------------------------------------------
        // ANSWER PUZZLE
        // ----------------------------------------------------

        optionsContainer.addEventListener(
            "click",
            function (event) {

                if (
                    !event.target.classList.contains(
                        "puzzle-option"
                    )
                ) {
                    return;
                }


                // Don't allow multiple answers
                if (
                    card.dataset.answered ===
                    "true"
                ) {
                    return;
                }


                const selectedAnswer =
                    Number(
                        event.target.dataset.answer
                    );


                const question =
                    card._currentQuestion;


                const questionIndex =
                    card._currentQuestionIndex;


                const topic =
                    puzzleTopics[index];


                // ------------------------------------------------
                // CORRECT ANSWER
                // ------------------------------------------------

                if (
                    selectedAnswer ===
                    question.answer
                ) {

                    card.dataset.answered =
                        "true";


                    event.target.classList.add(
                        "correct"
                    );


                    // Save question as completed
                    let used =
                        getUsedQuestions(topic);


                    if (
                        !used.includes(
                            questionIndex
                        )
                    ) {

                        used.push(
                            questionIndex
                        );

                        saveUsedQuestions(
                            topic,
                            used
                        );
                    }


                    // Add XP
                    addArenaXP(
                        question.xp
                    );


                    if (result) {

                        result.textContent =
                            "✓ Correct! +" +
                            question.xp +
                            " XP";

                    }


                    // Disable current options
                    const options =
                        optionsContainer.querySelectorAll(
                            ".puzzle-option"
                        );


                    options.forEach(
                        function (option) {
                            option.disabled = true;
                        }
                    );


                    // --------------------------------------------
                    // AUTOMATICALLY LOAD NEXT QUESTION
                    // --------------------------------------------

                    setTimeout(
                        function () {

                            loadPuzzle(
                                card,
                                topic
                            );

                        },
                        900
                    );

                }


                // ------------------------------------------------
                // WRONG ANSWER
                // ------------------------------------------------

                else {

                    event.target.classList.add(
                        "wrong"
                    );


                    if (result) {

                        result.textContent =
                            "✗ Incorrect. Try again!";

                    }


                    // Remove wrong effect after a moment
                    setTimeout(
                        function () {

                            event.target.classList.remove(
                                "wrong"
                            );

                        },
                        700
                    );
                }

            }
        );

    }
);
// ============================================================
// 11. RESET PROGRESS
// ============================================================

const resetButton =
    document.querySelector(
        "#reset-progress-btn"
    );


if (resetButton) {

    resetButton.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "arenaXP"
            );


            localStorage.removeItem(
                "used_html"
            );


            localStorage.removeItem(
                "used_css"
            );


            localStorage.removeItem(
                "used_javascript"
            );


            localStorage.removeItem(
                "bossBattleCompleted"
            );


            arenaXP = 500;

            bossCompleted = false;


            updateArenaUI();


            if (dailyChallengeBox) {

                dailyChallengeBox.style.display =
                    "none";

            }


            alert(
                "Arena progress has been reset!"
            );

        }
    );

}


// ============================================================
// 12. UPDATE EVERYTHING
// ============================================================

function updateArenaUI() {

    updateXPDisplay();

    updateArenaLevel();

    updateChallengeDisplay();

}


updateArenaUI();