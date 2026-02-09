async function commandGenerator() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = "Loading...";

    try {
        const response = await fetch("https://b6j2gj5ta4k4ffiezheiszgtyu0nlpji.lambda-url.ap-south-1.on.aws/");
        const data = await response.json();

        outputDiv.innerText =
            "Service: " + data.service + "\n\n" +
            data.message + "\n\n" +
            "Commands:\n- " + data.example_commands.join("\n- ");
    } catch (error) {
        outputDiv.innerText = "Error connecting to backend!";
        console.error(error);
    }
}
