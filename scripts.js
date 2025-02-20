document.addEventListener("DOMContentLoaded", function () {
    updatePatchVisibility();
    loadGallery();
});

// -------------------- WELCOME SCREEN & LOGIN --------------------
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

// -------------------- PATCHES PROGRESSION SYSTEM --------------------
function updatePatchVisibility() {
    let progress = parseInt(localStorage.getItem("patchesProgress")) || 0;
    for (let i = 1; i <= progress; i++) {
        unlockMission(`mission${i}`);
    }
}

function unlockMission(missionId) {
    let btn = document.getElementById(missionId);
    if (btn) {
        btn.classList.remove("locked");
        btn.classList.add("unlocked-new");
        btn.disabled = false;
        let icon = btn.querySelector("i");
        if (icon) {
            icon.classList.remove("fa-lock");
            icon.classList.add("fa-check");
        }
    }
}

// -------------------- MISSION START & COMPLETION --------------------
function startMission(mission) {
    let earnedPatches = JSON.parse(localStorage.getItem("earnedPatches")) || [];
    let missionNumber = parseInt(mission);

    if (mission === "tutorial" || earnedPatches.includes(mission) || earnedPatches.includes((missionNumber - 1).toString())) {
        window.location.href = `mission${mission}.html`;
    } else {
        alert("You need to complete previous missions first!");
    }
}

function completeMission(mission) {
    let earnedPatches = JSON.parse(localStorage.getItem("earnedPatches")) || [];
    if (!earnedPatches.includes(mission)) {
        earnedPatches.push(mission);
        localStorage.setItem("earnedPatches", JSON.stringify(earnedPatches));
    }
    window.location.href = `reward.html?mission=${mission}`;
}

// -------------------- REWARD PAGE HANDLING --------------------
function handleRewardPage() {
    const params = new URLSearchParams(window.location.search);
    const mission = params.get('mission');

    if (!mission) return;

    let title = document.getElementById("title");
    let message = document.getElementById("message");
    let patchImage = document.getElementById("patch-image");

    switch (mission) {
        case "tutorial":
            title.textContent = "Tutorial Completed!";
            message.textContent = "Congratulations! You unlocked Mission 1.";
            patchImage.src = "Opa.png";
            break;
        case "1":
            title.textContent = "Mission 1 Accomplished!";
            message.textContent = "You earned a new patch!";
            patchImage.src = "images/mission1_patch.png";
            break;
        case "2":
            title.textContent = "Mission 2 Accomplished!";
            message.textContent = "You're on your way to the next patch!";
            patchImage.src = "images/mission2_patch.png";
            break;
        case "3":
            title.textContent = "Mission 3 Accomplished!";
            message.textContent = "You earned a new patch!";
            patchImage.src = "images/mission3_patch.png";
            break;
    }

    let earnedPatches = JSON.parse(localStorage.getItem("earnedPatches")) || [];
    if (!earnedPatches.includes(mission)) {
        earnedPatches.push(mission);
        localStorage.setItem("earnedPatches", JSON.stringify(earnedPatches));
    }

    setTimeout(() => {
        window.location.href = "patches.html";
    }, 3000);
}

// -------------------- PATCH GALLERY --------------------
function loadGallery() {
    let patches = JSON.parse(localStorage.getItem("earnedPatches")) || [];
    let gallery = document.getElementById("gallery");
    if (gallery) {
        gallery.innerHTML = "";
        patches.forEach(patch => {
            let patchDiv = document.createElement("div");
            patchDiv.className = "patch unlocked";
            patchDiv.innerHTML = `✅ Patch ${patch}`;
            gallery.appendChild(patchDiv);
        });
    }
}

function goToGallery() {
    window.location.href = "gallery.html";
}
