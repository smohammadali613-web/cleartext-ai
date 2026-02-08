const API_URL = "https://abcd1234.lambda-url.ap-south-1.on.aws/";

function callService(action) {
  const output = document.getElementById("output");
  output.innerText = "Processing...";

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      action: action,
      input: "test from website"
    })
  })
    .then(res => res.json())
    .then(data => {
      output.innerText = data.output;
    })
    .catch(err => {
      output.innerText = "Backend error";
      console.error(err);
    });
}
