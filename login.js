// ========================================
// CODEARENAORBIT
// MULTI USER LOGIN SYSTEM
// ========================================


// ========================================
// GET USERS
// ========================================

function getUsers() {

    return JSON.parse(
        localStorage.getItem("codeArenaUsers")
    ) || [];

}


// ========================================
// SAVE USERS
// ========================================

function saveUsers(users) {

    localStorage.setItem(
        "codeArenaUsers",
        JSON.stringify(users)
    );

}


// ========================================
// ELEMENTS
// ========================================

const loginBox =
    document.getElementById("login-box");

const signupBox =
    document.getElementById("signup-box");


const loginForm =
    document.getElementById("login-form");

const signupForm =
    document.getElementById("signup-form");


const emailInput =
    document.getElementById("email");

const passwordInput =
    document.getElementById("password");


const togglePassword =
    document.getElementById("toggle-password");


const loginMessage =
    document.getElementById("login-message");

const signupMessage =
    document.getElementById("signup-message");


const showSignup =
    document.getElementById("show-signup");

const showLogin =
    document.getElementById("show-login");


// ========================================
// SHOW SIGNUP
// ========================================

if (showSignup) {

    showSignup.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            loginBox.style.display = "none";

            signupBox.style.display = "block";

            loginMessage.textContent = "";

        }
    );

}


// ========================================
// SHOW LOGIN
// ========================================

if (showLogin) {

    showLogin.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            signupBox.style.display = "none";

            loginBox.style.display = "block";

            signupMessage.textContent = "";

        }
    );

}


// ========================================
// SHOW / HIDE PASSWORD
// ========================================

if (togglePassword) {

    togglePassword.addEventListener(
        "click",
        function () {

            if (passwordInput.type === "password") {

                passwordInput.type = "text";

                togglePassword.textContent = "🙈";

            }

            else {

                passwordInput.type = "password";

                togglePassword.textContent = "👁";

            }

        }
    );

}


// ========================================
// CREATE ACCOUNT
// ========================================

if (signupForm) {

    signupForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // --------------------------------
            // GET VALUES
            // --------------------------------

            const name =
                document
                    .getElementById("signup-name")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("signup-email")
                    .value
                    .trim()
                    .toLowerCase();


            const password =
                document
                    .getElementById("signup-password")
                    .value;


            const confirmPassword =
                document
                    .getElementById("signup-confirm-password")
                    .value;


            // --------------------------------
            // PASSWORD VALIDATION
            // --------------------------------

            if (password.length < 6) {

                signupMessage.textContent =
                    "⚠ Password must contain at least 6 characters.";

                signupMessage.style.color =
                    "#ef4444";

                return;

            }


            // --------------------------------
            // CONFIRM PASSWORD
            // --------------------------------

            if (password !== confirmPassword) {

                signupMessage.textContent =
                    "⚠ Passwords do not match.";

                signupMessage.style.color =
                    "#ef4444";

                return;

            }


            // --------------------------------
            // GET EXISTING USERS
            // --------------------------------

            const users = getUsers();


            // --------------------------------
            // CHECK EMAIL
            // --------------------------------

            const existingUser =
                users.find(
                    function (user) {

                        return user.email === email;

                    }
                );


            if (existingUser) {

                signupMessage.textContent =
                    "⚠ This email is already registered.";

                signupMessage.style.color =
                    "#ef4444";

                return;

            }


            // --------------------------------
            // CREATE USER
            // --------------------------------

            const newUser = {

                id: Date.now(),

                name: name,

                email: email,

                password: password,

                xp: 0,

                level: 1,

                challenges: 0,

                streak: 0,

                badges: [],

                completedMissions: []

            };


            // --------------------------------
            // ADD USER
            // --------------------------------

            users.push(newUser);


            saveUsers(users);


            // --------------------------------
            // SUCCESS
            // --------------------------------

            signupMessage.textContent =
                "🎉 Account created successfully!";

            signupMessage.style.color =
                "#22c55e";


            // --------------------------------
            // CLEAR FORM
            // --------------------------------

            signupForm.reset();


            // --------------------------------
            // GO TO LOGIN
            // --------------------------------

            setTimeout(
                function () {

                    signupBox.style.display =
                        "none";

                    loginBox.style.display =
                        "block";

                    signupMessage.textContent =
                        "";

                    emailInput.value =
                        email;

                },
                1200
            );

        }
    );

}


// ========================================
// LOGIN
// ========================================

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // --------------------------------
            // GET VALUES
            // --------------------------------

            const email =
                emailInput.value
                    .trim()
                    .toLowerCase();


            const password =
                passwordInput.value;


            // --------------------------------
            // GET USERS
            // --------------------------------

            const users = getUsers();


            // --------------------------------
            // FIND USER
            // --------------------------------

            const user =
                users.find(
                    function (user) {

                        return (
                            user.email === email &&
                            user.password === password
                        );

                    }
                );


            // --------------------------------
            // USER NOT FOUND
            // --------------------------------

            if (!user) {

                loginMessage.textContent =
                    "⚠ Invalid email or password.";

                loginMessage.style.color =
                    "#ef4444";

                return;

            }


            // --------------------------------
            // SAVE CURRENT USER
            // --------------------------------

            localStorage.setItem(
                "currentUser",
                JSON.stringify(user)
            );


            // Keep compatibility with
            // your old login system

            localStorage.setItem(
                "userEmail",
                user.email
            );


            localStorage.setItem(
                "userLoggedIn",
                "true"
            );


            // --------------------------------
            // SUCCESS
            // --------------------------------

            loginMessage.textContent =
                "🎉 Login successful! Welcome " +
                user.name + "!";

            loginMessage.style.color =
                "#22c55e";


            // --------------------------------
            // REDIRECT
            // --------------------------------

            setTimeout(
                function () {

                    window.location.href =
                        "index.html";

                },
                1000
            );

        }
    );

}