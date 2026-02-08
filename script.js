function login() {
  // Temporary frontend login (no Cognito)
  window.location.href = "dashboard.html";
}

function selectOption(type) {
  document.getElementById("output").innerHTML =
    "You selected: " + type;
}
