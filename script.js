console.log("Frontend loaded");

/* ===== Cognito Configuration ===== */
const cognitoConfig = {
  domain: "ap-south-1mwd0fdgvv.auth.ap-south-1.amazoncognito.com",
  clientId: "25go7uI0prdtu9johhriei22fr",
  redirectSignIn: "https://main.d1kqze7yks7kh5.amplifyapp.com/dashboard.html",
  redirectSignOut: "https://main.d1kqze7yks7kh5.amplifyapp.com",
  responseType: "code"
};

/* ===== Login Function ===== */
function login() {
  const loginUrl =
    "https://" + cognitoConfig.domain +
    "/login" +
    "?client_id=" + cognitoConfig.clientId +
    "&response_type=" + cognitoConfig.responseType +
    "&scope=email+openid+profile" +
    "&redirect_uri=" + encodeURIComponent(cognitoConfig.redirectSignIn);

  window.location.href = loginUrl;
}

/* ===== Logout Function (optional) ===== */
function logout() {
  const logoutUrl =
    "https://" + cognitoConfig.domain +
    "/logout" +
    "?client_id=" + cognitoConfig.clientId +
    "&logout_uri=" + encodeURIComponent(cognitoConfig.redirectSignOut);

  window.location.href = logoutUrl;
}
