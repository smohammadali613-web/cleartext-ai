async function callBedrock() {
  document.getElementById("output").innerText = "Calling backend...";

  try {
    const response = await fetch("PASTE_LAMBDA_FUNCTION_URL_HERE");

    const data = await response.json();

    document.getElementById("output").innerText = data.message;

  } catch (error) {
    document.getElementById("output").innerText = "Backend error";
    console.error(error);
  }
}
