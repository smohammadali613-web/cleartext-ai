document.getElementById("loginBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Minimal local validation (later connect to Lambda/Cognito)
    if(username === "admin" && password === "admin123") {
        window.location.href = "dashboard.html"; // Go to dashboard
    } else {
        document.getElementById("loginMessage").innerText = "Invalid username or password!";
    }
});
