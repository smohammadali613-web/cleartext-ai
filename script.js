function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("loginMessage").innerText =
            "Invalid username or password";
    }
}
function commandGenerator() {
    document.getElementById("output").innerText =
        "Command Generator selected";
}

function websiteChecker() {
    document.getElementById("output").innerText =
        "Website Checker selected";
}

function digitalMessage() {
    document.getElementById("output").innerText =
        "Digital Message selected";
}
