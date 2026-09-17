/* =========================================================
   CODEARENAORBIT — ORBIT AI
   FRONTEND-ONLY AI ASSISTANT
   ========================================================= */


/* =========================================================
   ELEMENTS
   ========================================================= */

const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");
const sendMessageBtn = document.getElementById("sendMessage");
const clearChatBtn = document.getElementById("clearChat");
const typingIndicator = document.getElementById("typingIndicator");
const startChatBtn = document.getElementById("startChatBtn");

const quickButtons = document.querySelectorAll(".quick-btn");


/* =========================================================
   SEND MESSAGE
   ========================================================= */

function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    // Add user message
    addUserMessage(message);

    // Clear input
    userInput.value = "";

    // Reset textarea height
    userInput.style.height = "auto";

    // Show typing animation
    showTyping();

    // Generate AI response
    setTimeout(function () {

        hideTyping();

        const response = generateResponse(message);

        addAIMessage(response);

    }, 900);

}


/* =========================================================
   ADD USER MESSAGE
   ========================================================= */

function addUserMessage(message) {

    const messageHTML = `
        <div class="message user-message">

            <div class="message-avatar">
                <i class="fa-solid fa-user"></i>
            </div>

            <div class="message-content">

                <div class="message-name">
                    You
                </div>

                <div class="message-bubble">
                    ${escapeHTML(message)}
                </div>

            </div>

        </div>
    `;

    chatMessages.insertAdjacentHTML(
        "beforeend",
        messageHTML
    );

    scrollToBottom();

}


/* =========================================================
   ADD AI MESSAGE
   ========================================================= */

function addAIMessage(message) {

    const messageHTML = `
        <div class="message ai-message">

            <div class="message-avatar">
                <i class="fa-solid fa-robot"></i>
            </div>

            <div class="message-content">

                <div class="message-name">
                    Orbit AI
                </div>

                <div class="message-bubble">
                    ${message}
                </div>

            </div>

        </div>
    `;

    chatMessages.insertAdjacentHTML(
        "beforeend",
        messageHTML
    );

    scrollToBottom();

}


/* =========================================================
   AI RESPONSE SYSTEM
   ========================================================= */

function generateResponse(message) {

    const text = message.toLowerCase();


    /* -------------------------
       GREETINGS
    ------------------------- */

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return `
            <p>Hey, coder! 👋</p>

            <p>
                I'm <strong>Orbit AI</strong>, your coding
                companion.
            </p>

            <p>
                You can ask me about HTML, CSS, JavaScript,
                debugging, programming concepts or coding
                challenges.
            </p>
        `;

    }


    /* -------------------------
       HTML
    ------------------------- */

    if (
        text.includes("html") ||
        text.includes("html learn") ||
        text.includes("learn html")
    ) {

        return `
            <p>
                <strong>HTML</strong> stands for
                HyperText Markup Language.
            </p>

            <p>
                It is used to create the structure
                of a web page.
            </p>

            <p>For example:</p>

            <pre><code>&lt;h1&gt;Hello World&lt;/h1&gt;
&lt;p&gt;Welcome to my website&lt;/p&gt;
&lt;button&gt;Click Me&lt;/button&gt;</code></pre>

            <p>
                Start with these topics:
            </p>

            <p>
                1. HTML structure<br>
                2. Headings & paragraphs<br>
                3. Links & images<br>
                4. Forms<br>
                5. Semantic HTML
            </p>
        `;

    }


    /* -------------------------
       CSS
    ------------------------- */

    if (
        text.includes("css") ||
        text.includes("learn css")
    ) {

        return `
            <p>
                <strong>CSS</strong> controls the appearance
                and layout of HTML elements.
            </p>

            <p>
                For example:
            </p>

            <pre><code>button {
    background: purple;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
}</code></pre>

            <p>
                Important CSS topics include:
            </p>

            <p>
                • Selectors<br>
                • Box Model<br>
                • Flexbox<br>
                • Grid<br>
                • Position<br>
                • Responsive Design
            </p>
        `;

    }


    /* -------------------------
       JAVASCRIPT
    ------------------------- */

    if (
        text.includes("javascript") ||
        text.includes("java script") ||
        text === "js" ||
        text.includes("learn js")
    ) {

        return `
            <p>
                <strong>JavaScript</strong> adds logic and
                interactivity to websites.
            </p>

            <p>Example:</p>

            <pre><code>const button = document.querySelector("button");

button.addEventListener("click", function () {
    alert("Hello Coder!");
});</code></pre>

            <p>
                A good learning path is:
            </p>

            <p>
                Variables → Functions → Arrays → Objects
                → DOM → Events → Async JavaScript
            </p>
        `;

    }


    /* -------------------------
       DEBUG
    ------------------------- */

    if (
        text.includes("debug") ||
        text.includes("bug") ||
        text.includes("error") ||
        text.includes("not working")
    ) {

        return `
            <p>
                🐛 <strong>Debug Mode activated!</strong>
            </p>

            <p>
                Paste your code here and I'll help you
                understand the problem.
            </p>

            <p>
                When debugging, check:
            </p>

            <p>
                1. Console errors<br>
                2. Missing brackets<br>
                3. Incorrect variable names<br>
                4. Wrong selectors<br>
                5. Missing semicolons<br>
                6. Incorrect file paths
            </p>

            <p>
                Send me the code that's causing the problem.
            </p>
        `;

    }


    /* -------------------------
       FLEXBOX
    ------------------------- */

    if (
        text.includes("flexbox") ||
        text.includes("flex box")
    ) {

        return `
            <p>
                <strong>Flexbox</strong> is a CSS layout
                system used to arrange elements in rows
                or columns.
            </p>

            <pre><code>.container {
    display: flex;
    justify-content: center;
    align-items: center;
}</code></pre>

            <p>
                Remember:
                <strong>justify-content</strong> controls
                the main axis, while
                <strong>align-items</strong> controls
                the cross axis.
            </p>
        `;

    }


    /* -------------------------
       GRID
    ------------------------- */

    if (
        text.includes("css grid") ||
        text.includes("grid")
    ) {

        return `
            <p>
                <strong>CSS Grid</strong> is useful when
                designing two-dimensional layouts.
            </p>

            <pre><code>.container {
    display: grid;
    grid-template-columns:
        repeat(3, 1fr);
    gap: 20px;
}</code></pre>

            <p>
                Grid is especially useful for cards,
                dashboards and website sections.
            </p>
        `;

    }


    /* -------------------------
       VARIABLE
    ------------------------- */

    if (
        text.includes("variable") ||
        text.includes("const") ||
        text.includes("let")
    ) {

        return `
            <p>
                In JavaScript, variables store values.
            </p>

            <pre><code>let name = "Alex";

const age = 20;</code></pre>

            <p>
                <strong>let</strong> can be reassigned,
                while <strong>const</strong> cannot be
                reassigned.
            </p>
        `;

    }


    /* -------------------------
       FUNCTION
    ------------------------- */

    if (
        text.includes("function")
    ) {

        return `
            <p>
                A <strong>function</strong> is a reusable
                block of code designed to perform a task.
            </p>

            <pre><code>function greet(name) {
    return "Hello " + name;
}

console.log(greet("Coder"));</code></pre>

            <p>
                Functions help make programs organized,
                reusable and easier to maintain.
            </p>
        `;

    }


    /* -------------------------
       DOM
    ------------------------- */

    if (
        text.includes("dom") ||
        text.includes("document object model")
    ) {

        return `
            <p>
                <strong>DOM</strong> stands for
                Document Object Model.
            </p>

            <p>
                It allows JavaScript to interact with
                HTML elements.
            </p>

            <pre><code>const heading =
    document.querySelector("h1");

heading.textContent = "Hello Coder!";</code></pre>

            <p>
                This is one of the most important concepts
                for creating interactive websites.
            </p>
        `;

    }


    /* -------------------------
       CODING CHALLENGE
    ------------------------- */

    if (
        text.includes("challenge") ||
        text.includes("coding challenge") ||
        text.includes("practice")
    ) {

        return `
            <p>
                ⚔️ <strong>Coding Challenge Unlocked!</strong>
            </p>

            <p>
                <strong>Level: Beginner</strong>
            </p>

            <p>
                Create a JavaScript function called
                <strong>isEven()</strong>.
            </p>

            <p>
                It should accept a number and return
                <strong>true</strong> if the number is even
                and <strong>false</strong> if it is odd.
            </p>

            <pre><code>isEven(4)
→ true

isEven(7)
→ false</code></pre>

            <p>
                Try solving it without looking up the answer. 🚀
            </p>
        `;

    }


    /* -------------------------
       PROJECT HELP
    ------------------------- */

    if (
        text.includes("project") ||
        text.includes("website")
    ) {

        return `
            <p>
                🚀 I can help you plan your project.
            </p>

            <p>
                A good web project usually follows:
            </p>

            <p>
                <strong>1.</strong> Define the problem<br>
                <strong>2.</strong> Design the UI<br>
                <strong>3.</strong> Build the HTML structure<br>
                <strong>4.</strong> Style with CSS<br>
                <strong>5.</strong> Add JavaScript<br>
                <strong>6.</strong> Test and debug<br>
                <strong>7.</strong> Deploy
            </p>

            <p>
                Tell me what you're building and
                I'll help you break it into smaller tasks.
            </p>
        `;

    }


    /* -------------------------
       EXPLAIN
    ------------------------- */

    if (
        text.includes("explain")
    ) {

        return `
            <p>
                Of course! 🧠
            </p>

            <p>
                Send me the specific concept or code
                you want explained.
            </p>

            <p>
                I'll break it down into:
            </p>

            <p>
                <strong>Concept → Example → How it works
                → Common mistakes → Practice question</strong>
            </p>
        `;

    }


    /* -------------------------
       HELP
    ------------------------- */

    if (
        text.includes("help") ||
        text.includes("what can you do")
    ) {

        return `
            <p>
                🤖 <strong>Here's what Orbit AI can help with:</strong>
            </p>

            <p>
                💡 Explain programming concepts<br>
                🐛 Debug code<br>
                🌐 Learn HTML<br>
                🎨 Learn CSS<br>
                ⚡ Learn JavaScript<br>
                🧩 Understand errors<br>
                ⚔️ Generate coding challenges<br>
                🚀 Plan projects
            </p>

            <p>
                Try asking:
                <strong>"Explain JavaScript functions"</strong>
            </p>
        `;

    }


    /* =====================================================
       DEFAULT RESPONSE
       ===================================================== */

    return `
        <p>
            🤖 I understand you're asking about:
        </p>

        <p>
            <strong>"${escapeHTML(message)}"</strong>
        </p>

        <p>
            I'm currently running in
            <strong>frontend demo mode</strong>, so my
            knowledge is based on the built-in coding
            responses.
        </p>

        <p>
            Try asking me about:
        </p>

        <p>
            HTML • CSS • JavaScript • Debugging • DOM
            • Flexbox • Grid • Functions • Coding Challenges
        </p>
    `;

}


/* =========================================================
   QUICK ACTION BUTTONS
   ========================================================= */

quickButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const prompt =
            button.getAttribute("data-prompt");

        userInput.value = prompt;

        userInput.focus();

        sendMessage();

    });

});


/* =========================================================
   ENTER KEY
   ========================================================= */

userInput.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            sendMessage();

        }

    }
);


/* =========================================================
   SEND BUTTON
   ========================================================= */

sendMessageBtn.addEventListener(
    "click",
    sendMessage
);


/* =========================================================
   CLEAR CHAT
   ========================================================= */

clearChatBtn.addEventListener(
    "click",
    function () {

        chatMessages.innerHTML = `
            <div class="message ai-message">

                <div class="message-avatar">
                    <i class="fa-solid fa-robot"></i>
                </div>

                <div class="message-content">

                    <div class="message-name">
                        Orbit AI
                    </div>

                    <div class="message-bubble">

                        <p>
                            Chat cleared! ✨
                        </p>

                        <p>
                            Ready for a fresh coding session?
                        </p>

                    </div>

                </div>

            </div>
        `;

    }
);


/* =========================================================
   START CHAT BUTTON
   ========================================================= */

if (startChatBtn) {

    startChatBtn.addEventListener(
        "click",
        function () {

            userInput.focus();

            document
                .querySelector(".assistant-section")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

}


/* =========================================================
   TYPING INDICATOR
   ========================================================= */

function showTyping() {

    typingIndicator.style.display = "flex";

    scrollToBottom();

}


function hideTyping() {

    typingIndicator.style.display = "none";

}


/* =========================================================
   SCROLL CHAT
   ========================================================= */

function scrollToBottom() {

    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}


/* =========================================================
   ESCAPE HTML
   Prevents user input from becoming HTML
   ========================================================= */

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* =========================================================
   AUTO RESIZE TEXTAREA
   ========================================================= */

userInput.addEventListener(
    "input",
    function () {

        this.style.height = "auto";

        this.style.height =
            Math.min(
                this.scrollHeight,
                130
            ) + "px";

    }
);


/* =========================================================
   INITIAL FOCUS
   ========================================================= */

window.addEventListener(
    "load",
    function () {

        userInput.focus();

    }
);