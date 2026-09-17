/* =====================================================
   CODEArenaOrbit - LEARNING ZONE
   ===================================================== */


/* ================= COURSE DATA ================= */

const courses = {

    /* =================================================
       HTML
       ================================================= */

    html: {

        title: "HTML Fundamentals",

        level: "BEGINNER WORLD",

        description: "Learn the fundamentals of HTML and build the structure of web pages.",

        icon: "fa-code",

        lessons: [

            {
                title: "What is HTML?",

                description: "Understand the foundation of every web page.",

                theory: [
                    "HTML stands for HyperText Markup Language. It is the standard language used to create the structure of web pages.",

                    "HTML uses elements and tags to tell the browser what each part of a page represents.",

                    "Headings, paragraphs, links, images, buttons and forms are all created using HTML elements."
                ],

                concepts: [
                    "HTML = HyperText Markup Language",
                    "HTML creates page structure",
                    "Elements are written using tags",
                    "HTML works with web browsers"
                ],

                code:
`<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>

<body>

    <h1>Hello World</h1>
    <p>My first web page.</p>

</body>
</html>`
            },


            {
                title: "HTML Headings",

                description: "Learn how to create headings and organize content.",

                theory: [
                    "HTML provides six heading levels from h1 to h6.",

                    "The h1 element represents the most important heading, while h6 represents the least important heading.",

                    "Headings help users and search engines understand the structure of a page."
                ],

                concepts: [
                    "h1 is the main heading",
                    "h2 to h6 create subheadings",
                    "Headings improve page structure",
                    "Use headings in logical order"
                ],

                code:
`<h1>Main Heading</h1>

<h2>Section Heading</h2>

<h3>Sub Section</h3>

<h4>Smaller Heading</h4>`
            },


            {
                title: "Paragraphs & Text",

                description: "Learn how to display and organize text.",

                theory: [
                    "The p element is used to create paragraphs.",

                    "HTML also provides elements such as strong and em for emphasizing important text.",

                    "Using semantic text elements makes your content easier to understand."
                ],

                concepts: [
                    "p creates paragraphs",
                    "strong represents important text",
                    "em represents emphasized text",
                    "Text elements improve readability"
                ],

                code:
`<p>
    HTML is easy to learn.
</p>

<p>
    <strong>Important:</strong>
    Practice every day.
</p>

<p>
    Learn <em>step by step</em>.
</p>`
            },


            {
                title: "Links & Images",

                description: "Learn how to connect pages and display images.",

                theory: [
                    "The anchor element creates hyperlinks using the a tag.",

                    "The img element displays images on a web page.",

                    "The href attribute specifies the destination of a link, while src specifies the image source."
                ],

                concepts: [
                    "a creates links",
                    "href stores link destination",
                    "img displays images",
                    "src stores image location"
                ],

                code:
`<a href="https://example.com">
    Visit Website
</a>

<br><br>

<img
    src="image.jpg"
    alt="Example Image"
    width="300"
>`
            },


            {
                title: "HTML Forms",

                description: "Learn how websites collect information from users.",

                theory: [
                    "Forms allow users to enter and submit information.",

                    "Common form elements include input, label, textarea, select and button.",

                    "Forms are commonly used for login pages, registration pages and contact forms."
                ],

                concepts: [
                    "form creates a form",
                    "input collects user data",
                    "label describes an input",
                    "button submits information"
                ],

                code:
`<form>

    <label>Name:</label>

    <input
        type="text"
        placeholder="Enter your name"
    >

    <br><br>

    <button type="submit">
        Submit
    </button>

</form>`
            }

        ]
    },


    /* =================================================
       CSS
       ================================================= */

    css: {

        title: "CSS Styling",

        level: "INTERMEDIATE WORLD",

        description: "Transform simple HTML pages into beautiful and responsive designs.",

        icon: "fa-palette",

        lessons: [

            {
                title: "What is CSS?",

                description: "Understand how CSS styles HTML elements.",

                theory: [
                    "CSS stands for Cascading Style Sheets.",

                    "CSS controls the appearance of HTML elements including colors, spacing, fonts and layouts.",

                    "CSS separates the structure of a webpage from its visual presentation."
                ],

                concepts: [
                    "CSS = Cascading Style Sheets",
                    "CSS controls appearance",
                    "CSS works with HTML",
                    "Styles can be reused"
                ],

                code:
`h1 {
    color: cyan;
    font-size: 40px;
}

p {
    color: white;
}`
            },


            {
                title: "Selectors",

                description: "Learn how CSS selects HTML elements.",

                theory: [
                    "CSS selectors are used to target HTML elements that you want to style.",

                    "Common selectors include element selectors, class selectors and ID selectors.",

                    "Classes can be reused across multiple elements while an ID should normally identify one unique element."
                ],

                concepts: [
                    "Element selector",
                    "Class selector",
                    "ID selector",
                    "Universal selector"
                ],

                code:
`/* Element */
p {
    color: white;
}

/* Class */
.card {
    padding: 20px;
}

/* ID */
#title {
    font-size: 40px;
}`
            },


            {
                title: "Colors & Fonts",

                description: "Learn how to style text and colors.",

                theory: [
                    "CSS allows you to change text color, background color and typography.",

                    "The font-size property controls the size of text.",

                    "The font-family property specifies which font should be used."
                ],

                concepts: [
                    "color changes text color",
                    "background changes background",
                    "font-size changes text size",
                    "font-family changes font"
                ],

                code:
`body {
    background: #080a14;

    color: white;

    font-family: Arial, sans-serif;
}

h1 {
    color: #06b6d4;

    font-size: 42px;
}`
            },


            {
                title: "Box Model",

                description: "Understand margin, border, padding and content.",

                theory: [
                    "Every HTML element can be understood using the CSS box model.",

                    "The box model consists of content, padding, border and margin.",

                    "Understanding the box model is essential for creating accurate layouts."
                ],

                concepts: [
                    "Content",
                    "Padding",
                    "Border",
                    "Margin"
                ],

                code:
`.card {

    width: 300px;

    padding: 20px;

    border: 2px solid cyan;

    margin: 30px;
}`
            },


            {
                title: "Flexbox",

                description: "Learn how to create flexible layouts.",

                theory: [
                    "Flexbox is a CSS layout system designed to arrange elements in rows or columns.",

                    "The display: flex property activates flexbox.",

                    "Properties such as justify-content and align-items control alignment."
                ],

                concepts: [
                    "display: flex",
                    "justify-content",
                    "align-items",
                    "flex-direction"
                ],

                code:
`.container {

    display: flex;

    justify-content: center;

    align-items: center;

    gap: 20px;
}`
            }

        ]
    },


    /* =================================================
       JAVASCRIPT
       ================================================= */

    javascript: {

        title: "JavaScript Logic",

        level: "ADVANCED WORLD",

        description: "Add logic, interaction and intelligence to your web applications.",

        icon: "fa-js",

        lessons: [

            {
                title: "What is JavaScript?",

                description: "Understand the programming language of the web.",

                theory: [
                    "JavaScript is a programming language used to make web pages interactive and dynamic.",

                    "HTML provides structure, CSS provides appearance and JavaScript provides behavior.",

                    "JavaScript can respond to user actions, manipulate HTML and perform calculations."
                ],

                concepts: [
                    "JavaScript adds behavior",
                    "JavaScript runs in browsers",
                    "It can manipulate HTML",
                    "It responds to user actions"
                ],

                code:
`let name = "Shreya";

console.log("Hello " + name);`
            },


            {
                title: "Variables",

                description: "Learn how JavaScript stores information.",

                theory: [
                    "Variables are containers used to store data.",

                    "Modern JavaScript commonly uses let and const for declaring variables.",

                    "Use const when the variable should not be reassigned and let when its value may change."
                ],

                concepts: [
                    "let",
                    "const",
                    "Variable names",
                    "Stored values"
                ],

                code:
`let age = 18;

const college = "Engineering College";

console.log(age);

console.log(college);`
            },


            {
                title: "Conditions",

                description: "Learn how JavaScript makes decisions.",

                theory: [
                    "Conditional statements allow a program to make decisions.",

                    "The if statement executes code when a condition is true.",

                    "else can be used when the condition is false."
                ],

                concepts: [
                    "if",
                    "else",
                    "else if",
                    "Comparison operators"
                ],

                code:
`let marks = 75;

if (marks >= 60) {

    console.log("Good Score");

} else {

    console.log("Keep Practicing");

}`
            },


            {
                title: "Functions",

                description: "Learn how to create reusable blocks of code.",

                theory: [
                    "A function is a reusable block of code designed to perform a particular task.",

                    "Functions can accept parameters and return values.",

                    "Using functions helps organize large programs into smaller pieces."
                ],

                concepts: [
                    "Function declaration",
                    "Parameters",
                    "Arguments",
                    "Return value"
                ],

                code:
`function add(a, b) {

    return a + b;

}

let result = add(10, 20);

console.log(result);`
            },


            {
                title: "DOM Manipulation",

                description: "Learn how JavaScript changes HTML dynamically.",

                theory: [
                    "The DOM represents an HTML document as objects that JavaScript can access and modify.",

                    "JavaScript can change text, styles, attributes and even create new elements.",

                    "This is one of the main ways JavaScript makes websites interactive."
                ],

                concepts: [
                    "document",
                    "getElementById",
                    "textContent",
                    "DOM manipulation"
                ],

                code:
`const heading =
    document.getElementById("title");

heading.textContent =
    "Welcome to CODEArenaOrbit";`
            }

        ]
    }

};


/* ================= GET COURSE ================= */

const urlParams = new URLSearchParams(window.location.search);

let courseName = urlParams.get("course");


/*
   If URL doesn't contain a course,
   HTML will be opened by default.
*/

if (!courseName || !courses[courseName]) {
    courseName = "html";
}


const currentCourse = courses[courseName];


/* ================= CURRENT LESSON ================= */

let currentLesson = 0;


/* ================= DOM ELEMENTS ================= */

const courseIcon = document.getElementById("courseIcon");

const courseLevel = document.getElementById("courseLevel");

const courseTitle = document.getElementById("courseTitle");

const courseDescription =
    document.getElementById("courseDescription");

const lessonList =
    document.getElementById("lessonList");

const lessonNumber =
    document.getElementById("lessonNumber");

const lessonTitle =
    document.getElementById("lessonTitle");

const lessonDescription =
    document.getElementById("lessonDescription");

const theoryContent =
    document.getElementById("theoryContent");

const concepts =
    document.getElementById("concepts");

const codeExample =
    document.getElementById("codeExample");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

const copyBtn =
    document.getElementById("copyBtn");


/* ================= COURSE INFORMATION ================= */

function loadCourseInfo() {

    courseLevel.textContent =
        currentCourse.level;

    courseTitle.textContent =
        currentCourse.title;

    courseDescription.textContent =
        currentCourse.description;

    courseIcon.innerHTML =
        `<i class="fa-solid ${currentCourse.icon}"></i>`;
}


/* ================= LESSON SIDEBAR ================= */

function createLessonList() {

    lessonList.innerHTML = "";

    currentCourse.lessons.forEach(
        (lesson, index) => {

            const item =
                document.createElement("div");

            item.className = "lesson-item";

            item.innerHTML =
                `${String(index + 1).padStart(2, "0")}. ${lesson.title}`;

            item.addEventListener(
                "click",
                () => {

                    currentLesson = index;

                    showLesson();
                }
            );

            lessonList.appendChild(item);
        }
    );
}


/* ================= SHOW LESSON ================= */

function showLesson() {

    const lesson =
        currentCourse.lessons[currentLesson];


    /* Lesson number */

    lessonNumber.textContent =
        `LESSON ${String(currentLesson + 1).padStart(2, "0")}`;


    /* Lesson title */

    lessonTitle.textContent =
        lesson.title;


    /* Lesson description */

    lessonDescription.textContent =
        lesson.description;


    /* ================= THEORY ================= */

    theoryContent.innerHTML = "";

    lesson.theory.forEach(text => {

        const paragraph =
            document.createElement("p");

        paragraph.textContent = text;

        theoryContent.appendChild(paragraph);
    });


    /* ================= CONCEPTS ================= */

    concepts.innerHTML = "";

    lesson.concepts.forEach(text => {

        const concept =
            document.createElement("div");

        concept.className = "concept";

        concept.innerHTML =
            `<i class="fa-solid fa-check"></i>${text}`;

        concepts.appendChild(concept);
    });


    /* ================= CODE ================= */

    codeExample.textContent =
        lesson.code;


    /* ================= SIDEBAR ACTIVE ================= */

    const items =
        document.querySelectorAll(".lesson-item");

    items.forEach((item, index) => {

        item.classList.toggle(
            "active",
            index === currentLesson
        );

    });


    /* ================= BUTTON STATES ================= */

    previousBtn.disabled =
        currentLesson === 0;

    nextBtn.disabled =
        currentLesson === currentCourse.lessons.length - 1;


    /* Scroll lesson into view */

    document.querySelector(".lesson-content")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
}


/* ================= NEXT LESSON ================= */

function nextLesson() {

    if (
        currentLesson <
        currentCourse.lessons.length - 1
    ) {

        currentLesson++;

        showLesson();
    }
}


/* ================= PREVIOUS LESSON ================= */

function previousLesson() {

    if (currentLesson > 0) {

        currentLesson--;

        showLesson();
    }
}


/* ================= COPY CODE ================= */

function copyCode() {

    const code =
        codeExample.textContent;


    navigator.clipboard.writeText(code)
        .then(() => {

            const original =
                copyBtn.innerHTML;

            copyBtn.innerHTML =
                `<i class="fa-solid fa-check"></i> Copied`;

            setTimeout(() => {

                copyBtn.innerHTML =
                    original;

            }, 1500);

        })
        .catch(() => {

            alert("Could not copy the code.");

        });
}


/* ================= BUTTON EVENTS ================= */

previousBtn.addEventListener(
    "click",
    previousLesson
);

nextBtn.addEventListener(
    "click",
    nextLesson
);

copyBtn.addEventListener(
    "click",
    copyCode
);


/* ================= INITIALIZE ================= */

loadCourseInfo();

createLessonList();

showLesson();