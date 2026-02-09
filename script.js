const apiUrl = "https://<your-lambda-or-api-url>"; // Replace with your Lambda URL or API Gateway

document.getElementById("fetchDataBtn").addEventListener("click", async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById("apiResponse").innerText = JSON.stringify(data);
    } catch (error) {
        console.error("Error fetching API:", error);
        document.getElementById("apiResponse").innerText = "API call failed!";
    }
});

