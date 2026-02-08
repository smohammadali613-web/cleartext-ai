// ===== Cognito Config =====
const COGNITO_DOMAIN = "https://www.mohinuddin.online
    CLIENT_ID = "25go7u10prdtuj9ohhriie22fr";
const REDIRECT_URI = "https://main.d1kqze7yks7kh5.amplifyapp.com/dashboard.html";
const LOGOUT_URI = "https://main.d1kqze7yks7kh5.amplifyapp.com";

// ===== Login Function =====
function login() {
    const loginUrl =
        `${COGNITO_DOMAIN}/login` +
        `?client_id=${CLIENT_ID}` +
        `&response_type=code` +
        `&scope=openid+email+profile` +
        `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

    window.location.href = loginUrl;
}

// ===== Logout Function =====
function logout() {
    const logoutUrl =
        `${COGNITO_DOMAIN}/logout` +
        `?client_id=${CLIENT_ID}` +
        `&logout_uri=${encodeURIComponent(LOGOUT_URI)}`;

    window.location.href = logoutUrl;
}

console.log("Frontend loaded successfully");
