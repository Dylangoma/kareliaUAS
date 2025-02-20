function welcomeToLogin() {
    var welcomeText = document.querySelector(".welcome-text");
    var loginForm = document.querySelector(".login-form");
    welcomeText.style.animation = "slideDown 1s forwards";
    setTimeout(() => {
        welcomeText.style.display = "none";
    }, 1000);
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
    welcomeText.style.display = "none";
}
