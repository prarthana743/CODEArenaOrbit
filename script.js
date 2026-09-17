// =========================
// CODEARENAORBIT
// MISSIONS SYSTEM
// =========================

// =========================
// COMMON ELEMENTS
// =========================

const xpCount =
    document.querySelector("#xp-count");

const htmlMissionCount =
    document.querySelector("#html-mission-count");

const htmlMissionPercent =
    document.querySelector("#html-mission-percent");

const htmlProgress =
    document.querySelector("#html-progress");


// =========================
// MISSION STATUS
// =========================

let mission1Completed =
    localStorage.getItem("mission1Completed") === "true";

let mission2Completed =
    localStorage.getItem("mission2Completed") === "true";

let mission3Completed =
    localStorage.getItem("mission3Completed") === "true";

let mission4Completed =
    localStorage.getItem("mission4Completed") === "true";

let mission5Completed =
    localStorage.getItem("mission5Completed") === "true";


// =========================
// XP
// =========================

let xp =
    Number(localStorage.getItem("missionXP")) || 0;


// =========================
// UPDATE MISSION PROGRESS
// =========================

function updateMissionProgress() {

    let completed = 0;

    if (mission1Completed) completed++;
    if (mission2Completed) completed++;
    if (mission3Completed) completed++;
    if (mission4Completed) completed++;
    if (mission5Completed) completed++;


    let percentage =
        (completed / 5) * 100;


    if (xpCount) {
        xpCount.textContent =
            xp + " XP";
    }

    if (htmlMissionCount) {
        htmlMissionCount.textContent =
            completed + "/5";
    }

    if (htmlMissionPercent) {
        htmlMissionPercent.textContent =
            percentage + "%";
    }

    if (htmlProgress) {
        htmlProgress.style.width =
            percentage + "%";
    }


    if (completed === 5) {
        unlockBossMission();
    }
}


// =========================
// ADD XP
// =========================

function addMissionXP(amount) {

    xp = xp + amount;

    localStorage.setItem(
        "missionXP",
        xp
    );


    // Sync XP with Arena

    let arenaXP =
        Number(localStorage.getItem("arenaXP")) || 500;


    arenaXP =
        arenaXP + amount;


    localStorage.setItem(
        "arenaXP",
        arenaXP
    );


    updateMissionProgress();
}


// =========================
// MISSION 1
// =========================

const mission1Options =
    document.querySelectorAll(
        ".mission1-option"
    );

mission1Options.forEach(function (option) {

    option.addEventListener(
        "click",
        function () {

            if (mission1Completed) {
                return;
            }


            if (
                option.dataset.answer === "h1"
            ) {

                mission1Completed = true;

                localStorage.setItem(
                    "mission1Completed",
                    "true"
                );


                option.classList.add(
                    "correct"
                );


                mission1Options.forEach(
                    function (button) {
                        button.disabled = true;
                    }
                );


                addMissionXP(100);

            } else {

                option.classList.add(
                    "wrong"
                );

                setTimeout(
                    function () {
                        option.classList.remove(
                            "wrong"
                        );
                    },
                    700
                );
            }
        }
    );
});


// =========================
// MISSION 2
// =========================

const mission2Options =
    document.querySelectorAll(
        ".mission2-option"
    );

mission2Options.forEach(function (option) {

    option.addEventListener(
        "click",
        function () {

            if (mission2Completed) {
                return;
            }


            if (
                option.dataset.answer === "a"
            ) {

                mission2Completed = true;

                localStorage.setItem(
                    "mission2Completed",
                    "true"
                );


                option.classList.add(
                    "correct"
                );


                mission2Options.forEach(
                    function (button) {
                        button.disabled = true;
                    }
                );


                addMissionXP(100);

            } else {

                option.classList.add(
                    "wrong"
                );

                setTimeout(
                    function () {
                        option.classList.remove(
                            "wrong"
                        );
                    },
                    700
                );
            }
        }
    );
});


// =========================
// MISSION 3
// =========================

const mission3Options =
    document.querySelectorAll(
        ".mission3-option"
    );

mission3Options.forEach(function (option) {

    option.addEventListener(
        "click",
        function () {

            if (mission3Completed) {
                return;
            }


            if (
                option.dataset.answer === "img"
            ) {

                mission3Completed = true;

                localStorage.setItem(
                    "mission3Completed",
                    "true"
                );


                option.classList.add(
                    "correct"
                );


                mission3Options.forEach(
                    function (button) {
                        button.disabled = true;
                    }
                );


                addMissionXP(100);

            } else {

                option.classList.add(
                    "wrong"
                );

                setTimeout(
                    function () {
                        option.classList.remove(
                            "wrong"
                        );
                    },
                    700
                );
            }
        }
    );
});


// =========================
// MISSION 4
// =========================

const mission4Options =
    document.querySelectorAll(
        ".mission4-option"
    );

mission4Options.forEach(function (option) {

    option.addEventListener(
        "click",
        function () {

            if (mission4Completed) {
                return;
            }


            if (
                option.dataset.answer === "ul"
            ) {

                mission4Completed = true;

                localStorage.setItem(
                    "mission4Completed",
                    "true"
                );


                option.classList.add(
                    "correct"
                );


                mission4Options.forEach(
                    function (button) {
                        button.disabled = true;
                    }
                );


                addMissionXP(100);

            } else {

                option.classList.add(
                    "wrong"
                );

                setTimeout(
                    function () {
                        option.classList.remove(
                            "wrong"
                        );
                    },
                    700
                );
            }
        }
    );
});


// =========================
// MISSION 5
// =========================

const mission5Options =
    document.querySelectorAll(
        ".mission5-option"
    );

mission5Options.forEach(function (option) {

    option.addEventListener(
        "click",
        function () {

            if (mission5Completed) {
                return;
            }


            if (
                option.dataset.answer === "form"
            ) {

                mission5Completed = true;

                localStorage.setItem(
                    "mission5Completed",
                    "true"
                );


                option.classList.add(
                    "correct"
                );


                mission5Options.forEach(
                    function (button) {
                        button.disabled = true;
                    }
                );


                addMissionXP(100);

                unlockBossMission();

            } else {

                option.classList.add(
                    "wrong"
                );

                setTimeout(
                    function () {
                        option.classList.remove(
                            "wrong"
                        );
                    },
                    700
                );
            }
        }
    );
});


// =========================
// BOSS MISSION
// =========================

function unlockBossMission() {

    const bossButton =
        document.querySelector(
            "#boss-button"
        );

    const bossDescription =
        document.querySelector(
            "#boss-description"
        );


    if (bossButton) {

        bossButton.textContent =
            "Enter Boss Battle →";

        bossButton.href =
            "arena.html";

        bossButton.classList.add(
            "boss-unlocked"
        );
    }


    if (bossDescription) {

        bossDescription.textContent =
            "All 5 HTML missions completed. The ultimate developer challenge is now unlocked!";
    }


    localStorage.setItem(
        "htmlWorldCompleted",
        "true"
    );
}


// =========================
// RESTORE BOSS STATE
// =========================

if (
    localStorage.getItem(
        "htmlWorldCompleted"
    ) === "true"
) {

    unlockBossMission();

}


// =========================
// RESTORE COMPLETED BUTTONS
// =========================

function restoreMissionButtons(
    selector,
    completed,
    answer
) {

    if (!completed) {
        return;
    }


    const options =
        document.querySelectorAll(
            selector
        );


    options.forEach(function (option) {

        option.disabled = true;


        if (
            option.dataset.answer === answer
        ) {

            option.classList.add(
                "correct"
            );
        }

    });
}


restoreMissionButtons(
    ".mission1-option",
    mission1Completed,
    "h1"
);

restoreMissionButtons(
    ".mission2-option",
    mission2Completed,
    "a"
);

restoreMissionButtons(
    ".mission3-option",
    mission3Completed,
    "img"
);

restoreMissionButtons(
    ".mission4-option",
    mission4Completed,
    "ul"
);

restoreMissionButtons(
    ".mission5-option",
    mission5Completed,
    "form"
);


// =========================
// INITIALIZE
// =========================

updateMissionProgress();
// =========================
// SUBMIT BUTTONS
// =========================

const missionData = [
    {
        button: ".submit-answer",
        answerName: "answer",
        correctAnswer: "h1",
        result: ".result-message",
        number: 1
    },
    {
        button: ".submit-answer2",
        answerName: "answer2",
        correctAnswer: "a",
        result: ".result-message2",
        number: 2
    },
    {
        button: ".submit-answer3",
        answerName: "answer3",
        correctAnswer: "img",
        result: ".result-message3",
        number: 3
    },
    {
        button: ".submit-answer4",
        answerName: "answer4",
        correctAnswer: "ul",
        result: ".result-message4",
        number: 4
    },
    {
        button: ".submit-answer5",
        answerName: "answer5",
        correctAnswer: "form",
        result: ".result-message5",
        number: 5
    }
];


missionData.forEach(function (mission) {

    const button =
        document.querySelector(mission.button);

    if (!button) {
        return;
    }

    button.addEventListener("click", function () {

        const selected =
            document.querySelector(
                `input[name="${mission.answerName}"]:checked`
            );

        const result =
            document.querySelector(mission.result);


        // No option selected
        if (!selected) {

            result.textContent =
                "Please select an answer first.";

            result.className =
                "result-message wrong";

            return;
        }


        // Correct answer
        if (selected.value === mission.correctAnswer) {

            result.textContent =
                "Correct! +100 XP";

            result.className =
                "result-message correct";


            const parent =
                selected.closest(".answer-option");

            if (parent) {
                parent.classList.add("correct");
            }


            selected
                .closest(".answer-options")
                .querySelectorAll("input")
                .forEach(function (input) {
                    input.disabled = true;
                });


            button.disabled = true;


            // Save completion
            localStorage.setItem(
                "mission" + mission.number + "Completed",
                "true"
            );


            // Update completion variables
            if (mission.number === 1) {
                mission1Completed = true;
            }

            if (mission.number === 2) {
                mission2Completed = true;
            }

            if (mission.number === 3) {
                mission3Completed = true;
            }

            if (mission.number === 4) {
                mission4Completed = true;
            }

            if (mission.number === 5) {
                mission5Completed = true;
            }


            addMissionXP(100);


            if (mission.number === 5) {
                unlockBossMission();
            }


        } else {

            result.textContent =
                "Wrong answer. Try again.";

            result.className =
                "result-message wrong";


            const parent =
                selected.closest(".answer-option");

            if (parent) {

                parent.classList.add("wrong");

                setTimeout(function () {

                    parent.classList.remove("wrong");

                }, 700);
            }
        }

    });

});
// =========================
// AI CHATBOT INTEGRATION
// =========================

async function sendMessageToAI(userMessage) {
  try {
    // Ye Netlify serverless function ko call karega
    const response = await fetch('/.netlify/functions/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();
    return data.reply; // AI ka reply return karega

  } catch (error) {
    console.error("AI Error:", error);
    return "Sorry, AI server respond nahi kar raha hai.";
  }
}

// Example: Aapke Send Button ka click listener
const sendBtn = document.querySelector("#ai-send-btn");
const userInput = document.querySelector("#ai-user-input");
const chatBox = document.querySelector("#chat-box");

if (sendBtn) {
  sendBtn.addEventListener("click", async function() {
    const text = userInput.value.trim();
    if (!text) return;

    // 1. User ka message UI par dikhao
    chatBox.innerHTML += `<div class="user-msg">${text}</div>`;
    userInput.value = "";

    // 2. AI ka response lo
    const aiReply = await sendMessageToAI(text);

    // 3. AI ka reply UI par dikhao
    chatBox.innerHTML += `<div class="ai-msg">${aiReply}</div>`;
  });
}