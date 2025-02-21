function welcomeToLogin() {
    var welcomeText = document.querySelector(".welcome-text");
    var loginForm = document.querySelector(".login-form");
    welcomeText.style.animation = "slideDown 1s forwards";
    loginForm.style.display = "flex";
}

function login() {
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    if (username === "guest" && password === "guest") {
        window.location.href = "menu.html";
    } else {
        alert("Invalid username or password");
    }
}

function loginWithEnter(event) {
    if (event.key === "Enter") {
        login();
    }
}

function welcomeToMain() {
    var welcomeText = document.querySelector(".welcome-text");
    var bear = document.querySelector("#bearPatchDiv")
    welcomeText.style.animation = "slideDown 1s forwards";
    bear.style.animation = "phaseIn 1s forwards";
}
