const API_URL = "https://API_URL_HERE/prod/process";

function callService(action) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerText = "Processing...";

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      action: action,
      input: "test input from user"
    })
  })
    .then(response => response.json())
    .then(data => {
      outputDiv.innerText = data.output;
    })
    .catch(error => {
      outputDiv.innerText = "Error calling API";
      console.error(error);
    });
}
